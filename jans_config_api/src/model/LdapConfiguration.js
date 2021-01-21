/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LdapConfiguration model module.
 * @module model/LdapConfiguration
 * @version 1.0.0
 */
class LdapConfiguration {
    /**
     * Constructs a new <code>LdapConfiguration</code>.
     * @alias module:model/LdapConfiguration
     * @param configId {String} Unique identifier - Name
     * @param bindDN {String} This contains the username to connect to the backend server. You need to use full DN here. As for example, cn=jans,dc=company,dc=org.
     * @param bindPassword {String} Ldap password for binding.
     * @param servers {Array.<String>} List of LDAP authentication servers.
     * @param useSSL {Boolean} Enable SSL communication between Jans Server and LDAP server.
     * @param baseDNs {Array.<String>} List contains the location of the Active Directory/LDAP tree from where the Gluu Server shall read the user information.
     * @param primaryKey {String} Used to search and bind operations in configured LDAP server.
     */
    constructor(configId, bindDN, bindPassword, servers, useSSL, baseDNs, primaryKey) { 
        
        LdapConfiguration.initialize(this, configId, bindDN, bindPassword, servers, useSSL, baseDNs, primaryKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, configId, bindDN, bindPassword, servers, useSSL, baseDNs, primaryKey) { 
        obj['configId'] = configId;
        obj['bindDN'] = bindDN;
        obj['bindPassword'] = bindPassword;
        obj['servers'] = servers;
        obj['useSSL'] = useSSL;
        obj['baseDNs'] = baseDNs;
        obj['primaryKey'] = primaryKey;
    }

    /**
     * Constructs a <code>LdapConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LdapConfiguration} obj Optional instance to populate.
     * @return {module:model/LdapConfiguration} The populated <code>LdapConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LdapConfiguration();

            if (data.hasOwnProperty('configId')) {
                obj['configId'] = ApiClient.convertToType(data['configId'], 'String');
            }
            if (data.hasOwnProperty('bindDN')) {
                obj['bindDN'] = ApiClient.convertToType(data['bindDN'], 'String');
            }
            if (data.hasOwnProperty('bindPassword')) {
                obj['bindPassword'] = ApiClient.convertToType(data['bindPassword'], 'String');
            }
            if (data.hasOwnProperty('servers')) {
                obj['servers'] = ApiClient.convertToType(data['servers'], ['String']);
            }
            if (data.hasOwnProperty('maxConnections')) {
                obj['maxConnections'] = ApiClient.convertToType(data['maxConnections'], 'Number');
            }
            if (data.hasOwnProperty('useSSL')) {
                obj['useSSL'] = ApiClient.convertToType(data['useSSL'], 'Boolean');
            }
            if (data.hasOwnProperty('baseDNs')) {
                obj['baseDNs'] = ApiClient.convertToType(data['baseDNs'], ['String']);
            }
            if (data.hasOwnProperty('primaryKey')) {
                obj['primaryKey'] = ApiClient.convertToType(data['primaryKey'], 'String');
            }
            if (data.hasOwnProperty('localPrimaryKey')) {
                obj['localPrimaryKey'] = ApiClient.convertToType(data['localPrimaryKey'], 'String');
            }
            if (data.hasOwnProperty('useAnonymousBind')) {
                obj['useAnonymousBind'] = ApiClient.convertToType(data['useAnonymousBind'], 'Boolean');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique identifier - Name
 * @member {String} configId
 */
LdapConfiguration.prototype['configId'] = undefined;

/**
 * This contains the username to connect to the backend server. You need to use full DN here. As for example, cn=jans,dc=company,dc=org.
 * @member {String} bindDN
 */
LdapConfiguration.prototype['bindDN'] = undefined;

/**
 * Ldap password for binding.
 * @member {String} bindPassword
 */
LdapConfiguration.prototype['bindPassword'] = undefined;

/**
 * List of LDAP authentication servers.
 * @member {Array.<String>} servers
 */
LdapConfiguration.prototype['servers'] = undefined;

/**
 * This value defines the maximum number of connections that are allowed to read the backend Active Directory/LDAP server.
 * @member {Number} maxConnections
 * @default 2
 */
LdapConfiguration.prototype['maxConnections'] = 2;

/**
 * Enable SSL communication between Jans Server and LDAP server.
 * @member {Boolean} useSSL
 */
LdapConfiguration.prototype['useSSL'] = undefined;

/**
 * List contains the location of the Active Directory/LDAP tree from where the Gluu Server shall read the user information.
 * @member {Array.<String>} baseDNs
 */
LdapConfiguration.prototype['baseDNs'] = undefined;

/**
 * Used to search and bind operations in configured LDAP server.
 * @member {String} primaryKey
 */
LdapConfiguration.prototype['primaryKey'] = undefined;

/**
 * Used to search local user entry in Gluu Server’s internal LDAP directory.
 * @member {String} localPrimaryKey
 */
LdapConfiguration.prototype['localPrimaryKey'] = undefined;

/**
 * Boolean value used to indicate if the LDAP Server will allow anonymous bind request.
 * @member {Boolean} useAnonymousBind
 * @default false
 */
LdapConfiguration.prototype['useAnonymousBind'] = false;

/**
 * Boolean value used to indicate if the LDAP Server is enabled. Do not use this unless the server administrator has entered all the required values.
 * @member {Boolean} enabled
 * @default false
 */
LdapConfiguration.prototype['enabled'] = false;

/**
 * LDAP server version.
 * @member {Number} version
 */
LdapConfiguration.prototype['version'] = undefined;

/**
 * A string that indicates the level.
 * @member {Number} level
 */
LdapConfiguration.prototype['level'] = undefined;






export default LdapConfiguration;

