
# Ubuntu Flex Installation

Before you install, check the [VM system requirements](vm-requirements.md).

## Supported Versions
- Ubuntu 22.04
- Ubuntu 20.04

## Install the Package

### Ubuntu 22.04

- Download the release package from the Github Gluu Flex [Releases](https://github.com/GluuFederation/flex/releases)

```
wget https://github.com/GluuFederation/flex/releases/download/vreplace-flex-version/flex_replace-flex-version.ubuntu22.04_amd64.deb -P /tmp
```

- Install the package

```
apt install -y /tmp/flex_replace-flex-version.ubuntu22.04_amd64.deb
```

### Ubuntu 20.04

- Download the release package from the Github Gluu Flex [Releases](https://github.com/GluuFederation/flex/releases)

```
wget https://github.com/GluuFederation/flex/releases/download/vreplace-flex-version/flex_replace-flex-version.ubuntu20.04_amd64.deb -P /tmp
```

- Install the package

```
apt install -y /tmp/flex_replace-flex-version.ubuntu20.04_amd64.deb
```

## Run the setup script

- Before initiating the setup please obtain an [SSA](../../install/software-statements/ssa.md) to trial Flex, after which you are issued a JWT in base64 format that you can use during installation specified by the `-admin-ui-ssa` argument.

- Run the setup script:

```
python3 /opt/jans/jans-setup/flex/flex-linux-setup/flex_setup.py -admin-ui-ssa [filename]
```

## Log in to Text User Interface (TUI)

Begin configuration by accessing the TUI with the following command:

```
/opt/jans/jans-cli/jans_cli_tui.py
```

Full TUI documentation can be found [here](https://docs.jans.io/stable/admin/config-guide/jans-tui/)

## Uninstallation

Removing Flex is a two step process:

1. Delete files installed by Gluu Flex
1. Remove and purge the `jans` package

Use the command below to uninstall the Gluu Flex server

```
python3 /opt/jans/jans-setup/flex/flex-linux-setup/flex_setup.py --remove-flex
```

<!-- I need to add the output when command is run. -->


The command below removes and uninstall the `jans` package

```
python3 /opt/jans/jans-setup/install.py -uninstall

```

<!-- I need to add the output when command is run. -->
