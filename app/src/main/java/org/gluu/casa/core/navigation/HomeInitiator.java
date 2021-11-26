package org.gluu.casa.core.navigation;

import com.nimbusds.oauth2.sdk.GeneralException;

import java.util.Map;
import java.util.Optional;

import org.gluu.casa.core.AuthFlowContext;
import org.gluu.casa.core.ConfigurationHandler;
import org.gluu.casa.core.OIDCFlowService;
import org.gluu.casa.core.SessionContext;
import org.gluu.casa.core.UserService;
import org.gluu.casa.core.pojo.User;
import org.gluu.casa.misc.Utils;
import org.gluu.casa.misc.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.zkoss.util.Pair;
import org.zkoss.zk.ui.Page;
import org.zkoss.zk.ui.util.Initiator;

import static org.gluu.casa.core.AuthFlowContext.RedirectStage.*;

/**
 * This is a ZK Page Initiator (the doInit method is called before any rendering of UI components). It's the initiator
 * associated to the /index.zul URL (home URL) so here's where the authentication flow is handled.
 */
public class HomeInitiator extends CommonInitiator implements Initiator {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private AuthFlowContext flowContext;
    private OIDCFlowService oidcFlowService;

    public void doInit(Page page, Map<String, Object> map) throws Exception {

        super.doInit(page, map);
        if (page.getAttribute("error") != null)
            return;

        flowContext = Utils.managedBean(AuthFlowContext.class);
        oidcFlowService = Utils.managedBean(OIDCFlowService.class);
        try {
            switch (flowContext.getStage()) {
                case NONE:
                    goForAuthorization();
                    break;
                case INITIAL:
                    //If OP response contains error query parameter we cannot proceed
                    String code = oidcFlowService.validateAuthnResponse(WebUtils.getFullRequestURL(),
                            flowContext.getState());
                    flowContext.setState(null);
                    
                    //TODO: check what happens when user did not ever entered his username at IDP, and tries accessing the app again
                    Pair<String, String> tokenResult = oidcFlowService.getTokens(code);
                    
                    String accessToken = tokenResult.getX();
                    String idToken = tokenResult.getY();

                    Map<String, Object> claims = oidcFlowService.getUserClaims(accessToken);                    
                    User user = Utils.managedBean(UserService.class).getUserFromClaims(claims);
                    
                    //Store in session
                    logger.debug("Adding user to session");
                    Utils.managedBean(SessionContext.class).setUser(user);
                    flowContext.setIdToken(idToken);
                    flowContext.setStage(BYPASS);
                    flowContext.setHasSessionAtOP(true);
                    //This flow continues at index.zul

                    break;
                case BYPASS:
                    //go straight without the need for showing UI
                    logger.debug("Taking user to homepage...");
                    WebUtils.execRedirect(WebUtils.USER_PAGE_URL);
                    break;
            }
        } catch (GeneralException e) {
            String msg = e.getMessage();
            logger.error(msg, e);
            
            String descr = Optional.ofNullable(e.getErrorObject().getCode())
                    .map(c -> String.format("(%s) ", c)).orElse("");
            descr += e.getErrorObject().getDescription();
            setPageErrors(page, msg, descr);
            flowContext.setStage(NONE);
        }

    }

    //Redirects to an authorization URL
    private void goForAuthorization() throws Exception {
        flowContext.setStage(INITIAL);
        logger.debug("Starting authorization flow");
        //do Authz Redirect
        Pair<String, String> pair = oidcFlowService.getAuthnRequestUrl(ConfigurationHandler.DEFAULT_ACR);
        //TODO: process null response
        flowContext.setState(pair.getY());
        WebUtils.execRedirect(pair.getX());
    }
    
}
