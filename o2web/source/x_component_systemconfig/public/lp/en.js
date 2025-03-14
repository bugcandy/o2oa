o2.xApplication.systemconfig.LP = {
    "title": "System Config",
    "searchKey": "Search setting item",
    "default": "default",
    "permissionDenied": "The current user has insufficient permissions, you must use an administrator account to access the system configuration",

    "yes": "Yes",
    "no": "No",
    "uploadInfo": "Drag files here, or click upload",

    "baseConfig": "Base Config",
    "systemInfo": "System Info",
    "uiConfig": "UIConfig",
    "componentDeploy": "Component",
    "resourceDeploy": "Deployment",
    "serviceDeploy": "Service Deployment",

    "securityConfig": "Security Config",
    "passwordConfig": "Password",
    "loginConfig": "Login",
    "ssoConfig": "SSO",
    "ternaryManagement": "Ternary",

    "serverConfig": "Service Config",
    "serversConfig": "Servers",
    "centerServer": "Center Service",
    "appServer": "App Service",
    "webServer": "Web Service",
    "databaseServer": "Database",
    "storageServer": "Storage",
    "cacheConfig": "Cache",
    "clusterConfig": "Cluster",
    "orgConfig": "Organization Configuration",
    "processConfig": "Process",
    "cloudConfig": "Cloud Service",
    "dumpConfig": "Backup Configuration",
    "worktimeConfig": "Worktime",

    "messageConfig": "Message",
    "msgTypeConfig": "Type Configuration",
    "pushConfig": "Message",
    "mailConfig": "Mail Configuration",
    "smsConfig": "SMS Configuration",
    "mqConfig": "Message Queue",

    "queryIndexConfig": "Query Index",

    "mobileConfig": "Mobile Config",
    "connectConfig": "Connect",
    "appConfig": "APP",
    "moduleConfig": "Modules",
    "iconConfig": "Icon",
    "ddConfig": "Dingding",
    "wechatConfig": "Wechat",
    "welinkConfig": "welink",
    "appTools": "Tools",
    "integrationConfig": "Integration",

    "select": "Select",

    "_systemInfo": {
        "title": "Configure the basic information of the system.",
        "systemName": "System Name",
        "systemNameInfo": "Your system name, It will be displayed on your login page and browser title bar.",
        "systemSubTitle": "System Subtitle",
        "systemSubTitleInfo": "Your system subtitle, It will be displayed under your login page.",
        "systemVersion": "Current System Version",
        "systemVersionInfo": "Current System Version",
        "baseInfo": "Basic Information",
        "systemStatus": "System Status",
        "moduleStatus": "Module Running Status",
        "language": "Locales",
        "languageInfo": "Set the server locale.",
        "languageValues": {
            "zh-CN": "简体中文",
            "en": "English",
			"es": "Spanish"
        },

        "running": "Running",
        "stop": "Terminated",
        "enable": "Activated",

        "server": "Server",
        "node": "Node",
        "serverInfo": "Server Info",
        "webServer": "WEB Server",
        "appServer": "Application Server",
        "centerServer": "Center Server",
        "dataServer": "Data Server",
        "storageServer": "Storage Server",
        "dataNode": "Database",
        "databaseUrl": "Database Connectivity",

        "byModule": "By App Node",
        "byServer": "By Service Node",

        "storageNode": "Storage Node",

        "serverData": {
            // "exposeJest": "接口文档(exposeJest)",
            "httpProtocol": "Http Protocol(httpProtocol)",
            "host": "Host(host)",
            "port": "Port(port)",
            "proxyHost": "Proxy Host(proxyHost)",
            "proxyPort": "Proxy Port(proxyPort)",
            "requestLogEnable": "Enable Http Log",
            "requestLogBodyEnable": "Logging Body Content",
            "requestLogRetainDays": "Log Retention Days",
            "sslEnable": "SSL Enable(sslEnable)",
            // "statEnable": "启用Druid",

            "cacheSize": "Cache Size(cacheSize)",
            "includes": "Includes Class(includes)",
            "excludes": "Exclusion Class(excludes)",
            "jmxEnable": "jmx Enable(jmxEnable)",
            "lockTimeout": "Lock Timeout(lockTimeout)",
            "logLevel": "Log Level(logLevel)",
            "maxIdle": "Max Idle(maxIdle)",
            "maxTotal": "Max Total(maxTotal)",
            "slowSqlMillis": "Slow Sql Millis(slowSqlMillis)",
            "statFilter": "Druid Enable(statFilter)",
            "tcpPort": "TCP Port(tcpPort)",
            "webPort": "WEB Port(webPort)"
        },
        "storageData": {
            "port": "ftp Port(port)",
            "sslEnable": "SSL Enable(sslEnable)",
            "name": "Name(name)",
            "passivePorts": "Passive Ports(passivePorts)",
            "prefix": "Path Prefix(prefix)",
            "deepPath": "Deep Path(deepPath)"
        },
        "storageAccounts": {
            "protocol": "Protocol",
            "username": "Module",
            "weight": "Weights",
            "name": "Name",
            "prefix": "Path Prefix",
            "deepPath": "Deep Path",
            "host": "Host",
            "port": "Port",

        },
        "moduleData": {
            "node": "Node",
            "contextPath": "The Context",
            "port": "Service Port",
            "sslEnable": "SSL Enable",
            "proxyHost": "Proxy Host",
            "proxyPort": "Proxy Port",
            "reportDate": "Last Report Time",
            "moduleName": "Module Name",
            "className": "Class Name"

        }
    },
    "operation": {
        "edit": "Edit ",
        "ok": "OK",
        "cancel": "Cancel",
        "enable": "Enable",
        "disable": "Disable"
    },
    "_component": {
        "open": "Open",
        "edit": "Edit",
        "uninstall": "Del",

        "deploy": "Deploy",

        "removeComponentTitle": "Uninstall Component Confirmation",
        "removeComponent": "Are you sure you want to uninstall component {name}?",
        "removeComponentOk": "Component Uninstalled",

        "deploySuccess": "Component Deployed Successfully",

        "selectIcon": "Select Icon",
        "clearIcon": "Clear Icon",

        "name": "Name",
        "title": "Title",
        "path": "Path",
        "urlPathInfo": "You can add the path as a webpage URL via '@url:', such as '@url:http://www.bing.com'.",
        "visible": "Visible",
        "allowList": "Accessible",
        "denyList": "Deny Access List",
        "icon": "Icon",

        "upload": "Upload Resources",
        "uploadWarn": "Upload the component zip package, the original component will be overwritten, please operate with caution!",

        "componentDataError": "Component Name, Component Path and Component Title cannot be empty."
    },
    "_resource": {
        "webResource": "Deploy Web Resources",
        "webResourceInfo": "You can deploy web resources here, upload static resource files or zip packages, and it will be deployed to the system's web server and can be accessed through the Http protocol.",
        "serviceResource": "Deploy Custom Services",
        "serviceResourceInfo": "You can deploy the custom project you developed here, and upload the compiled jar package or war package. The server needs to be restarted after deployment.",

        "componentResource": "Deploy Components",
        "componentResourceInfo": "The O2OA components that you custom develop, or obtain components from the official, can be deployed here. O2OA components are folders or zip files named 'x_component_{component name}'. For more detailed information, please refer to: <a href='https://www.o2oa.net/develop.html' target='_blank'>O2OA official community.</a>",

        "upload": "Upload",
        "webUploadWarn": "Upload the static resource file to be deployed, and the zip package will be automatically decompressed.",
        "serviceUploadWarn": "Upload the jar package or war package to be deployed.",

        "overwrite": "Deployment Method",
        "overwriteFalse": "Upload after deletion: delete files and folders with the same name and upload them.",
        "overwriteTrue": "Overwrite: Directly overwrite files and folders with the same name.",

        "deployPath": "Deploy Path",
        "deployPathInfo": "If deploying a zip package, the path can be empty; for single file deployment, the deployment path must be specified. Such as: /myWebResource/subPath .",

        "noDeployFile": "Please select the resource file to deploy first.",
        "deploySuccess": "Resources deployed successfully",

        "notWebResource": "<span style='color: red'>The current server does not allow front-end deployment of web resources, you can enable this function in the server task of the server configuration.</span>",
        "notServiceResource": "<span style='color: red'>The current server does not allow front-end deployment of custom services, you can enable this function in the server task of the server configuration.</span>"
    },
    "_uiConfig": {
        "baseConfig": "Base Config",
        "menuConfig": "Main Menu Config",
        "lnkConfig": "Sidebar Config",
        "userConfig": "User Interface Config",

        "openStatus": "Enter System",
        "openStatusInfo": "Every time you enter the O2OA system, the application that was opened when you exited the system last time will be opened by default. You can change this behavior here.",
        "openStatusCurrent": "Position both open and current apps to their last exit state（Default）",
        "openStatusApp": "Open the application from the last time you logged out of the system, and make the homepage the current application",
        "openStatusIndex": "Only open homepage app",

        "skin": "System Skin",
        "skinConfig": "Allow modification of system skin",
        "skinConfigInfo": "Do you allow users to personalize and modify the system skin?",
        "skinDefault": "System Default Skin",
        "skinDefaultInfo": "Set the system default skin tone",
        "scaleConfig": "Is scaling allowed?",
        "scaleConfigInfo": "Do you allow users to personalize the zoom ratio displayed by the system?",

        "defaultMenuInfo": "After saving the default menu settings, users who have not made personalized menu settings will display the menu according to this setting.",
        "forceMenuInfo": "After saving the mandatory menu setting, all users will display the menu according to this setting, and the personalized setting will be invalid.",
        "userMenuInfo": "All user personalized menu settings will be cleared and the menu will be displayed by default.",

        "clearDefaultMenuDataTitle": "Clear default menu settings",
        "clearDefaultMenuData": "Are you sure to clear the default menu settings?",
        "clearDefaultMenuDataSuccess": "Default menu settings cleared.",
        "clearForceMenuDataTitle": "Clear force menu settings.",
        "clearForceMenuData": "Are you sure to clear the force menu settings?",
        "clearForceMenuDataSuccess": "Force menu settings cleared.",

        "clearUserMenuData": "Clear User Personalized Menu Settings",
        "clearUserMenuDataSuccess": "User personalized menu settings cleared",
        "clearUserMenuDataConfirm": "Are you sure you want to clear personalized menu settings for all users?",

        "saveDefaultMenuDataSuccess": "Default menu settings saved successfully",
        "saveForceMenuDataSuccess": "Force menu settings saved successfully",

        "defaultMenu": "Default Menu Config",
        "forceMenu": "Force Menu Config",
        "userMenu": "User Personalized Menu Config",

        "saveMenu": "Save Config",
        "clearMenu": "Clear Config",
        "loadMenu": "Load Config",
        "clearUserMenu": "Clear Config",

        "menu": {
            "application": "App",
            "process": "Process",
            "cms": "Info",
            "query": "Data",

            "defaultMenu": "Restore default menu state"
        },
        "deleteLink": "Delete frequently used app shortcuts"
    },
    "_passwordConfig": {
        "personPassword": "User Password Config",
        "adminPassword": "Administrator Password",
        "saveSuccess": "Configuration Saved Successfully",
        "passwordScript": "Password Configuration Script",

        "newPersonPassword": "Initial password for new user",
        "newPersonPasswordInfo": "When creating a new user, the user's initial password will be generated according to the following settings, and the user can modify it after logging in to the system.",
        "initialPassword": "User Initial Password",
        "initialPasswordText": "Enter Initial Password",
        "initialPasswordTypeOptions": {
            "mobile": "The last six digits of the mobile phone number",
            "unique": "The last six digits of the unique code",
            "employee": "User ID",
            "pinyin": "Full spelling of user name",
            "text": "fixed password",
            'script': "Customize the initial password through script"
        },
        "initialPasswordType": {
            "mobileScript": "return person.getMobile().slice(-6)",
            "uniqueScript": "return person.getunique().slice(-6)",
            "employeeScript": "return person.getEmployee()",
            "pinyinScript": "return person.getPinyin()",
            "textInfo": "The password entered in the input box below will be used as the initial password of the newly created user.",
            'scriptInfo': "Enter the script in the editor below to return a string value as the initial password for the newly created user. You can use the person object to get information about a person. If you use the full spelling of the person's name as the initial password, you can use the script: return person.getPinyin()"
        },

        "passwordPeriod": "Password Expiration Days",
        "passwordPeriodInfo": "Users who have not changed their passwords for more than this set number of days will be forced to change their passwords after logging in, otherwise they will not be able to enter the system. A setting of 0 means the password never expires.",

        "passwordRegex": "Password Complexity",
        "passwordRegexInfo": "Set User Password Complexity Requirements",

        "passwordRegexMin": "Minimum Length",
        "passwordRegexMax": "Maximum Length",
        "passwordRegexLength": "Password Length",
        "passwordRule": "Password Rules",
        "passwordRuleValue": {
            "useLowercase": "Must contain lowercase letters.",
            "useNumber": "Must contain numbers.",
            "useUppercase": "Must contain capital letters.",
            "useSpecial": "Must contain special characters. Such as: (#?!@$%^&*-)"
        },
        "passwordRuleRegex": {
            "useLowercase": "(?=.*[a-z])",
            "useNumber": "(?=.*\\d)",
            "useUppercase": "(?=.*[A-Z])",
            "useSpecial": "(?=.*?[#?!@$%^&*-])"
        },
        "savePasswordRule": "Save password policy settings",
        "passwordLengthText": "Length: {n}, {text}",

        "passwordRsa": "Password Encrypted Transmission",
        "passwordRsaInfo": "The system uses clear text transmission by default, you can enable this option to enable encrypted transmission of passwords. (The server needs to be restarted after modification)",


        "adminPasswordInfo": "You can change the password of the super administrator 'xadmin' here. (The server needs to be restarted after modification)",
        "modifyAdminPassword": "Modify super administrator password",

        "oldPassword": "Old",
        "newPassword": "New",
        "confirmPassword": "Again",

        "ternaryPassword": "Three-person Administrator Password",
        "ternaryPasswordInfo": "If you have enabled three-person management, the system administrator can modify the passwords of the system administrator (systemManager), security administrator (securityManager) and security auditor (auditManager) here.",
        "modifySystemManagerPassword": "Change system administrator (systemManager) password",
        "modifySecurityManagerPassword": "Change security administrator (securityManager) password",
        "modifyAuditManagerPassword": "Change security auditor (auditManager) password",

        "passwordDisaccord": "The new password you entered does not match the confirmation password",
        "passwordEmpty": "Please enter the original password, new password and confirmation password",

        "tokenEncryptType": "Password Encryption",
        "tokenEncryptTypeInfo": "O2OA supports the following password and Token encryption methods, which can be selected according to needs. For more information, please see: <a href='https://www.o2oa.net/search.html?q=%E5%9B%BD%E5%AF%86' target='_blank'>National Secret</a>.",
        "tokenEncryptTypeLabel": "Encryption",
        "encryptTypeOptions": {
            "default": "Default",
            "sm4": "National Commercial Cipher Algorithm"
        },
        "tokenEncryptTypeInfo3": "<div style='color: red'>Note: After clicking 'OK to modify the password encryption method', this setting will take effect immediately.<ul style='line-height: 30px'><li>This will result in: 1. The login status of all users will be invalid; 2. Due to the change of encryption method, all existing users will not be able to log in to the system.</li>" +
            "<li>You must perform the following steps to use the system normally: log in to the system again with the 'xadmin' account, and reset all user passwords by any means.</li></ul></div>",
        "tokenEncryptTypeButton": "OK to modify the password encryption method",
        "changeTokenEncryptTypeInfo": "Are you sure you want to modify the password encryption method code?"

    },
    "_loginConfig": {
        "baseConfig": "Basic Config",
        "moreConfig": "More Config",
        "ldapConfig": "Ldap Config",
        "captchaLogin": "Enable picture captcha login",
        "codeLogin": "Enable SMS verification code login",
        "bindLogin": "Enable scan QR code login",
        "faceLogin": "Enable facial recognition login",
        "captchaLoginInfo": "After enabling it, the picture verification code must be entered correctly when logging in.",
        "codeLoginInfo": "After enabling, allow login via SMS verification code.",
        "bindLoginInfo": "After enabling, it allows to scan the QR code to log in.",
        "faceLoginInfo": "After enabling it, face recognition login is allowed, and users can set face features in personal settings. After enabling it you have to create an SSO configuration with name face and key xplatform.（This is an experimental feature, you must enable https.）",

        "loginError": "Login Error Handling",
        "loginErrorInfo": "When the user logs in, if the wrong password is entered several times in a row, the account will be locked. Here you can set the upper limit of consecutive login errors and the duration of account lockout.",

        "loginErrorCount": "Login Error Limit",
        "lockTime": "Lock Time (Minute)",

        "tokenExpired": "Valid Login Time",
        "tokenExpiredInfo": "After the user logs in to the system, if there is no interaction with the server for a long time, the system will log out the login. You can set the valid login time here, in minutes.",

        "tokenName": "Token Name",
        "tokenNameInfo": "The default token name of the system is x-token, and you can modify the token name here to prevent cookie conflicts under the same Domain, which is especially useful when deploying multiple sets of O2OA under the same Domain.(The server needs to be restarted after modification.)",

        "tokenCookieHttpOnly": "Enable httponly",
        "tokenCookieHttpOnlyInfo": "Whether the cookie that saves the token is enabled for httponly",

        "tokenCookieSecure": "Enable Cookie Secure",
        "tokenCookieSecureInfo": "Whether secure is enabled for the cookie that saves the token, indicating that this cookie will only be transmitted under the https protocol",

        "enableSafeLogout": "Enable Secure Logout",
        "enableSafeLogoutInfo": "After the secure logout is enabled, if you perform a logout operation on any terminal, the login status of all terminals will be logged out at the same time.",

        "register": "Enable self-registration",
        "registerInfo": "Configure here whether to allow self-registration to become a system user, and the self-registration method.",
        "registerValues": {
            "disable": "Disable",
            "captcha": "Register Via Captcha",
            "code": "Register Via SMS"
        },

        "loginPage": "Login using the portal page",
        "loginPageInfo": "The system supports using a customized portal page as the login page. We provide a login page application template in the application market, which you can obtain for free.",
        "loginPagePortal": "Login Portal",

        "selectPortal": "Please select a portal",

        "indexPage": "Use the portal page as the system home page.",
        "indexPageInfo": "You can use a customized portal page as the system home page, and open this page after logging in.",
        "indexPagePortal": "Home Portal",

        "ldapAuthEnable": "Enable Ldap Authentication",
        "ldapAuthEnableInfo": "After it is enabled, the user login authentication uses Ldap authentication, and no longer uses the password of this system to log in. Please configure the following Ldap parameters correctly.",
        "ldapAuthUrl": "Ldap address",
        "ldapAuthUrlInfo": "Ldap service address, ldap://domain name or IP:port",
        "baseDn": "LDAP BaseDN (BaseDN)",
        "baseDnInfo": "LDAP BaseDN, Such as: dc=zone,DC=COM",
        "userDn": "DN of the authenticated user (UserDN)",
        "userDnInfo": "DN of the authenticated user (UserDN), Such as: uid=*,ou=users,dc=zone,DC=COM, The '*' in 'uid=*' represents the unique code of the user, which corresponds to the unique code of the O2 user.",

        "superPermission": "Enable super admin password",
        "superPermissionInfo": "Enabling this option allows you to log in to other user accounts with the password of the super administrator (xadmin), so that administrators can perform data maintenance and troubleshooting as ordinary users.",

        "bindDnUser": "Bind administrative users",
        "bindDnUserInfo": "Bind a user with administrative rights as an administrator for query authentication. Such as: cn=root",
        "bindDnPwd": "Manage User Passwords",
        "bindDnPwdInfo": "Bind administrator's password",
        "ldapEnabledError": "Please configure all LDAP parameters completely before enabling LDAP authentication."
    },
    "_ssoConfig": {
        "ssoConfig": "Authentication Key Config",
        "ssoConfigInfo": "You can create authentication for multiple systems for SSO login and service invocation.",
        "ssoConfigInfo2": "Each authentication needs to provide the authentication name and key, which is the encryption and decryption public key used to generate the access ticket.",
        "addSSOConfig": "Add authentication configuration",
        "editSSOConfig": "Edit authentication configuration",
        "isEnable": "Enable",
        "ssoConfigName": "Name",
        "ssoConfigKey": "Key",

        "ssoConfigKeyInfo": "The key length is a multiple of 8",
        "ssoKeyLengthError": "Please keep the key length in multiples of 8",

        "removeSSOConfigTitle": "Confirmation of deleting the authentication configuration",
        "removeSSOConfig": "Are you sure you want to delete the authentication configuration: '{name}'?",

        "ssoDataError": "Authentication name and authentication key cannot be empty.",
        "ssoSameNameError": "The authentication name '{name}' already exists, please use another name.",

        "useSSOConfig": "How to use the authentication key",
        "useSSOConfigInfo": "Authentication keys are required in two scenarios:",
        "useSSOConfigInfo1": "1. The external system needs to realize single sign-on with O2OA;",
        "useSSOConfigInfo2": "2. The external system needs to call the interface service of the O2OA platform;",
        "useSSOConfigInfo3": "It is necessary to inform the external system of the authentication name and key, and the external system uses the 3DES algorithm to encrypt the <span style='color: blue'>\"person#timestamp\"</span> text with the key, and obtains a temporary ticket (token) for accessing O2OA.<br/>" +
            "<span style='color: blue'>person</span>：Indicates the username, unique code, or employee number of the specified user. (The specific field to use depends on the field associated with the O2OA user in the external system.)<br/>" +
            "<span style='color: blue'>timestamp</span>：Expressed as the number of milliseconds from 00:00 on January 1, 1970 to the current time. (In order to ensure the timeliness of the token, the valid time is 1 minutes.)<br/><br>" +
            "After the token is generated, the external system can directly access the following address to achieve single-point authentication with O2OA:<br/>" +
            "http://servername/x_desktop/sso.html?client={<span style='color: blue'>client</span>}&xtoken={<span style='color: blue'>token</span>}&redirect={<span style='color: blue'>redirect</span>}<br/>" +
            "<span style='color: blue'>client</span>：Indicates the authentication name used;<br/>" +
            "<span style='color: blue'>token</span>：Indicates the generated temporary bill token;<br/>" +
            "<span style='color: blue'>redirect</span>：Indicates the address to be redirected to after successful authentication;<br/>",

        "useSSOConfigInfo4": "For more instructions on authentication configuration, <a target='_blank' href='https://www.o2oa.net/search.html?q=%E9%89%B4%E6%9D%83'>please click here to view</a>。",

        "ssoTokenTools": "Related Tools",
        "ssoTokenCode": "View encryption sample code",
        "ssoTokenCheck": "Verify token validity",

        "oauthConfig": "OAuth Config",
        "oauthClientConfig": "OAuth client configuration",
        "oauthServerConfig": "OAuth server configuration",

        "oauthClientConfigInfo": "If the O2OA platform is used as the OAuth2 authentication server, you can configure multiple OAuth clients here to implement login authorization for other systems.",
        "oauthServerConfigInfo": "If you already have an OAuth2 authentication server, you can configure multiple OAuth servers here to implement login authorization for this system.",

        "addOauthClientConfig": "Add OAuth client configuration",
        "addOauthServerConfig": "Add OAuth server configuration",
        "editOauthClientConfig": "Edit OAuth client configuration",
        "editOauthServerConfig": "Edit OAuth server configuration",

        "removeOauthConfigTitle": "Confirmation to remove OAuth configuration",
        "removeOauthConfig": "Are you sure you want to delete the OAuth configuration: '{name}'?",

        "oauthClientDataError": "Client Id and Client Secret cannot be empty.",
        "oauthClientSameNameError": "Client Id '{name}' already exists, please use another client ID.",

        "oauth_clientId": "Id",
        "oauth_clientSecret": "Secret",
        "oauth_mapping": "Return Map",
        "oauth_name": "Name",
        "oauth_displayName": "Display Name",
        "oauth_icon": "Icon URL",
        "oauth_authAddress": "Request Key Address",
        "oauth_authParameter": "Request Key Parameter",
        "oauth_authMethod": "Request Key Method",

        "oauth_tokenAddress": "Request Token Address",
        "oauth_tokenParameter": "Request Token Parameters",
        "oauth_tokenMethod": "Request Token Method",
        "oauth_tokenType": "Token Format",

        "oauth_infoAddress": "Request Information Address",
        "oauth_infoParameter": "Information Parameter",
        "oauth_infoMethod": "Request Information Method",
        "oauth_infoType": "Information Format",

        "oauth_infoCredentialField": "Personal Information Field",
        "oauth_bindingField": "Bind Person Field",

        "oauth_infoScriptText": "message processing script",

        "infoScriptTextInfo": "When the information format is not JSON or FORM, you can use a script to format the information into a JSON object so that the system can process it correctly. Write a script in the script editor below to return a JSON object, and you can use <span style='color: blue'>'this.text'</span> to get the original text of the response message. "

    },
    "_ternaryManagement": {
        "enable": "Enable three-person management",
        "enableInfo": "The system supports system security management in the way of system administrator, security administrator, and security auditor sharing responsibilities and powers. After starting the three-person management, the xadmin user and permissions will be released and the audit log record of the system will be enabled at the same time (the server needs to be restarted after modification)<br>" +
            "The roles of the three administrators are as follows: " +
            "<ul><li>System administrator (systemManager): Responsible for system users, organization management and system operation and maintenance; </li>" +
            "<li>Security administrator (securityManager): responsible for permission setting, responsible for review and analysis of system audit logs, user and system administrator operation behavior;</li>" +
            "<li>Security auditor (auditManager): Responsible for auditing and tracking the operation behavior of system administrators and security administrators.</li></ul>" +
            "The application regularly analyzes the operation logs of the previous day at 1:00 a.m. every day for three administrators to audit and query.<br>" +
            "To fully use the three-person management function, you also need to install the 'Three-person Management' application from the app store. "+
            "For more information about three-person management, please view the following documents and videos:<a href='https://www.o2oa.net/search.html?q=%E4%B8%89%E5%91%98%E7%AE%A1%E7%90%86' target='_blank'>Three-person Management</a>",
        "logRetainDays": "Log retention days",
        "logRetainDaysInfo": "Set the maximum number of days to keep logs",

        "logBodyEnable": "Record Body Content",
        "logBodyEnableInfo": "Recording the body content will get more detailed log information, but it will also greatly increase disk space usage and server overhead."
    },
    "_databaseServer": {
        "databaseSource": "Data source configuration",
        "entity": "Entity class configuration",
        "tools": "Backup Tool",
        "infoInner": "You are using the built-in database of O2OA. The built-in database of O2OA is an embedded memory database, which is suitable for development environment and function demonstration environment, but not suitable for formal environment." +
            "If it is used as a formal environment, it is recommended that you use a commercial-level database with higher performance and more stability.",
        "infoExternal": "You have used the extended database, and the O2OA built-in database has been disabled.",

        "info": "<span style='color: red'>Modifying the database configuration will affect the existing data of the system in most cases, please modify the configuration here carefully!</span>",
        "info2": "Before modifying the database configuration, it is recommended that you first use the backup function of O2OA (ctl -dd) to back up the system data, restart the server after modifying the database configuration, and then restore the backup data to the database (ctl -rd). All database-related configuration changes require a server restart.",

        "innerDataSources": "built-in database",
        "externalDataSources": "extended database",
        "innerDataSourcesInfo": "O2OA's built-in database is an embedded memory database, which is suitable for development environment and function demonstration environment.",
        "externalDataSourcesInfo": "O2OA supports external database expansion, and it is recommended to use a commercial-level database in the production environment to ensure data security and performance.",

        "addDatabaseConfig": "Add database configuration",

        "databaseUrl": "Database connection address",
        "enable": "Whether to enable",
        "username": "Username",
        "password": "Password",

        "tcpPort": "connection port",
        "tcpPortInfo": "Database jdbc connection port, login user name: sa, password is xadmin password. The database is created at: /o2server/local/repository/data/X.mv.db, Once the database file is created, then the password for that database is created.",
        "webPort": "WEB Port",
        "webPortInfo": "H2 provides a web-side client, this port is the access port of the web-side client, the user name is sa, and the password is the password initially created by the xadmin database.",
        "jmxEnable": "Enable jmx",
        "jmxEnableInfo": "If enabled, it can be accessed through a local jmx client, and remote jmx clients are not supported.",
        "cacheSize": "Cache Size",
        "cacheSizeInfo": "H2 database cache size, set the memory size used by H2 as a cache, in M as the unit, the default is 512M.",
        "logLevel": "log Level",
        "maxTotal": "Maximum number of connections",
        "maxIdle": "Maximum number of idle connections",
        "statEnable": "Enable Statistics",
        "statFilter": "Statistical Methods",
        "slowSqlMillis": "slow sql milliseconds",
        "slowSqlMillisInfo": "The number of milliseconds of slow SQL execution, the default is 2000 milliseconds, slow SQL execution will be recorded separately.",
        "lockTimeout": "Lock Timeout (milliseconds)",

        "inputDatabaseUrl": "Please fill in the database connection.",

        "entityConfig": "Entity Class Storage Allocation",
        "entityConfigInfo": "If you have enabled multiple databases, you can allocate the databases of the entity class store in the system here to improve performance.<span style='color: red'>You must ensure that all entity classes are assigned a corresponding storage database.</span>",

        "oneDatabase": "To allocate storage databases for entity classes in the system, you must enable two or more databases, and you have only one database enabled now.",
        "oneDatabaseInfo": "To allocate storage databases for entity classes in the system, you must enable two or more databases.",


        "includeEntity": "Allowed Entity Classes",
        "includeEntityInfo": "Entity classes that are allowed to be stored in this database. Empty means all, and multiples are separated by commas or newlines.",
        "excludeEntity": "Excluded Entity Classes",
        "excludeEntityInfo": "Classes that are prohibited from being stored in this database. Empty means no classes are prohibited, and multiples are separated by commas or newlines.",


        "editDatabase": "Edit database configuration",


        "saveDatabaseConfig": "Save All Database Configuration",
        "saveDatabaseConfigInfo": "The configuration on this page will not be saved immediately after modification, you must click this button before the configuration you modify will be saved.",
        "saveDatabaseConfirm": "You are about to save the database configuration, <br><span style='color:red'>which may affect the existing data of the system (including business data and design data)</span><br><br>, are you sure you want to save the database configuration?",

        "reloadDatabaseConfig": "restore all database configuration",
        "reloadDatabaseConfigInfo": "If you want to discard unsaved changes on this page, you can click this button to reload the configuration.",
        "reloadDatabaseConfirm": "This operation will reload the database configuration. Unsaved changes will be lost. Are you sure to restore the database configuration?",

        "saveEntityConfig": "Save Entity Class Configuration",
        "saveEntityConfirm": "You are about to save the entity class configuration, <br><span style='color:red'>which may affect the existing data of the system (including business data and design data)</span><br><br>, are you sure you want to save the entity class configuration?",
        "reloadEntityConfig": "Restoring Entity Class Configuration",
        "reloadEntityConfirm": "This operation will reload the entity class configuration. Unsaved modifications will be lost. Are you sure to restore the entity class configuration?",

        "entityList": "Optional List",
        "selectedEntityList": "Selected List",
        "findClass": "find class name",

        "removeDatabaseConfigTitle": "Confirmation of deleting the database configuration",
        "removeDatabaseConfig": "<span style='color: red'>Note: You are about to delete the database configuration: '{name}', please make sure to back up the system data before deleting the database.</span><br><br>Are you sure you want to do this?",

        "saveDatabaseConfigSuccess": "The database configuration is saved successfully, please restart the server.",
        "saveEntityConfigSuccess": "The entity class configuration is saved successfully, please restart the server.",

        "dumpRestoreTools": "Database backup and recovery tools",
        "toolsInfo": "O2OA provides data backup and recovery tools,<span style='color: red'>Modifying the database configuration will affect the existing data of the system in most cases</span>," +
            "Therefore, before modifying the database configuration, it is recommended that you first use the backup function of O2OA to back up the system data, restart the server after modifying the database configuration, and then restore the backup data to the database.<br>" +
            "<span class='mainColor_color'>Please do not leave this page while you are backing up or restoring data. You can do other things in another browser window.</span>",

        "dumpTools": "Backup Data",
        "dumpToolsInfo": "Click this button for data backup,<span style='color: red'>Do not perform it when the system frequently reads and writes data.</span>",
        "dumpWaitLog": "Data backup not performed",
        "dumpErrorLog": "data backup error",

        "dumpBegin": "Confirmation to start backup",
        "dumpBeginInfo": "Data backup may affect server performance, are you sure you want to start data backup?",

        "dumpCheckButton": "Check backup status",
        "dumpCheck": "Checking backup status ...",
        "dumpStop": "Data backup not performed",
        "dumpRunning": "数data backup in progress ...",
        "dumpEnd": "Data backup completed",

        "restoreTools": "Data Recovery",
        "restoreToolsInfo": "Click this button for data recovery,<span style='color: red'>Do not perform it when the system frequently reads and writes data.</span>",
        "restoreToolsInfo2": "If your system contains custom data tables, after data recovery is complete, please enter the data center to compile all data tables, perform data recovery again, and then restart the server.",
        "restoreWaitLog": "Data recovery not performed",
        "restoreErrorLog": "data recovery error",

        "restoreBegin": "Confirmation to start recovery",
        "restoreBeginInfo": "Data recovery may affect server performance, are you sure you want to start data recovery?",

        "restoreCheckButton": "Check Recovery Status",
        "restoreCheck": "Checking recovery status ...",
        "restoreStop": "Data recovery not performed",
        "restoreRunning": "Data recovery in progress ...",
        "restoreEnd": "Data recovery completed"


    },
    "_cloudConfig": {
        "info": "O2 cloud service provides many value-added servers such as application market, mobile office positioning, SMS service, document conversion, etc. You only need to log in to O2 cloud server to use it.",
        "recheck": "recheck connection",

        "notValidatedInfo": "Log in to O2 Cloud, you can access the application market, connect to the mobile office APP, as well as SMS service, document conversion and many other functions!",
        "disconnectInfo": "Your server cannot connect to O2 Cloud, please check your server network environment.",
        "validatedInfo": "<span style='color: #ff0000'>Hello: {name}</span>, you have logged into O2 Cloud and can use all O2 platform functions including mobile office!",

        "connected": "You are ready to connect to O2 Cloud!",
        "disconnect": "Your server cannot connect to O2 Cloud!",
        "notValidated": "You have not logged into O2 Cloud yet!",
        "validated": "You have logged into O2 Cloud!",

        "loginInfo": "If you already have an O2 cloud account, please click here to log in:",
        "loginButtonText": "Login to O2 Cloud",
        "registerInfo": "If you do not have an O2 cloud account, please click here to register:",
        "registerButtonText": "Register O2 cloud account",
        "forgotPasswordInfo": "If you forget the password of O2 cloud account, please click here to reset:",
        "forgotPasswordButtonText": "Reset O2 cloud password",

        "collectUsername": "O2 cloud account",
        "collectPassword": "O2 cloud password",
        "collectMobile": "phone number",
        "collectMail": "email address",
        "collectCode": "verification code",
        "collectConfirm": "Confirm Password",
        "getCode": "get verification code",
        "regetCode": "Reacquire",

        "inputCollectUsername": "Please enter O2 cloud account number.",
        "inputCollectPassword": "Please enter the O2 cloud account password.",
        "inputCollectMobile": "Please enter the phone number.",
        "inputCollectMail": "Please input the email address.",
        "inputCollectCode": "Please enter SMS verification code.",
        "inputCollectConfirm": "Please enter the confirmation password.",
        "collectUsernameExist": "O2 cloud account name already exists.",
        "collectUsernameNotExist": "O2 cloud account name does not exist.",
        "passwordDisagree": "Password confirmation does not match.",
        "mobileError": "Mobile phone number input is incorrect.",
        "mailError": "Email address entered incorrectly.",

        "registerCollect": "Register O2 cloud account",
        "forgotPassword": "forget the password",
        "loginError": "Login to O2 cloud failed, please check the account name and password.",
        "registerError": "Error registering O2 cloud account, please contact technical support.",
        "deleteError": "There was an error deleting the O2 cloud account, please contact technical support.",
        "resetPasswordError": "There is an error in modifying the O2 cloud account password, please contact technical support.",

        "deleteCollectUnit": "Delete O2 cloud account",
        "deleteCollectUnitInfo": "The O2 cloud account is about to be deleted: {name}, please enter the mobile phone number and get a verification code for confirmation.",

        "resetPasswordCollect": "Modify O2 cloud account password",

        "modifyCollect": "modify account",
        "logoutCollect": "Disconnect",
        "modifyCollectPassword": "change Password",
        "deleteCollect": "delete account",
        "reloginCollect": "re-register"
    },
    "_serversConfig": {
        "serverInfo": "Server Info",
        "baseConfig": "Basic Config",
        "environmentConfig": "Environment variable configuration",
        "sameConfig": "use the same server configuration",
        "sameConfigInfo": "O2OA has three logical servers: central service, application service and WEB service. By default, they use the same port and the same set of configurations. You can also configure different ports, hosts and other information for the three services separately.",

        "serverConfig": "Server Config",
        "serverConfigInfo": "Configure server-related parameters here. (The server needs to be restarted after modification)",

        "serverPort": "Server Port",
        "serverPortInfo": "Server Listening Port",

        "serverProxyHost": "Access Hostname",
        "serverProxyPort": "Access Host Port",
        "sslEnable": "Enable",
        "httpProtocol": "WEB access protocol",
        "sslKeyStorePassword": "SSL Password",
        "sslKeyManagerPassword": "SSL Manager Password",
        "sslInfo": "<span>To enable SSL, you need to copy the applied certificate file to the config directory of the O2OA server, and rename it to `keystore`. The cluster environment needs to store the certificate file on each server. (The server needs to be restarted after modification)</span>",

        "saveServerConfig": "Save Server Configuration",
        "saveServerConfigSuccess": "The server configuration is saved successfully.",
        "saveServerConfigPortError": "The ports of the central server, application server and WEB server must be all the same or all different.",

        "saveServerSSLConfig": "Save the SSL configuration",
        "saveServerSSLConfigSuccess": "The SSL configuration is saved successfully.",

        "sslConfig": "Whether to enable SSL",

        "serverTaskConfig": "Server Tasks",

        "proxyCenterEnable": "Agent Center Service",
        "proxyApplicationEnable": "Proxy Application Service",
        "proxyTimeOut": "Proxy Timeout (Seconds)",

        "includes": "Enabled application modules",
        "includesInfo": "You can select the application modules that the server is allowed to run here, and only the application modules configured here will be started, which can make the server performance more flexible in the cluster environment." +
            "But please modify this configuration carefully, if not configured properly, it may lead to abnormal service. (The server needs to be restarted after modification)",
        "includesInfo2": "<b style='color: #666666'>Choose which built-in apps to enable: </b>If you don't select any modules, all modules will be enabled.",
        "includesInfo3": "<b style='color: #666666'>Custom apps to enable: </b>Enter custom app names in the input box below, separated by commas.",

        "saveIncludes": "Save the enable application module configuration",
        "saveExcludes": "Save disabled application module configuration",

        "excludes": "Disabled application modules",
        "excludesInfo": "Here you can select the application modules that the server is prohibited from running, and the application modules configured here will not be started, which can make the server performance more flexible in the cluster environment." +
            "But please modify this configuration carefully, if not configured properly, it may lead to abnormal service. (The server needs to be restarted after modification)",
        "excludesInfo2": "<b style='color: #666666'>Select the built-in apps to disable: </b>If you don't select any modules, it means all do not disable any modules.",
        "excludesInfo3": "<b style='color: #666666'>Custom apps to disable: </b>Enter custom app names in the input box below, separated by commas.",

        "includesAll": "Enable all modules",
        "includesSelect": "Select the modules to enable",
        "includesModules": "Module enabled",
        "selectModules": "Optional modules",

        "excludesNone": "Do not disable any modules",
        "excludesSelect": "Select modules to disable",

        "saveServerIncludesSuccess": "Save and enable the application module successfully.",
        "saveServerExcludesSuccess": "Saving the disabled application module succeeded.",

        "requestLogEnable": "Enable HTTP logging",
        "requestLogBodyEnable": "Record Body content",
        "requestLogRetainDays": "Log retention days",
        "requestLogInfo": "Configure the server HTTP log related content here (the server needs to be restarted after modification):" +
            "<ul><li>After the HTTP log is enabled, the log files are saved in the logs directory of the server. (HTTP logging is always enabled when three-person management is enabled.)</li>" +
            "<li>Recording the body content will get more detailed log information, but it will also greatly increase disk space usage and server overhead.</li>" +
            "<li>Set the maximum number of days to keep logs, and log files exceeding this number of days will be deleted.</li></ul>",

        "webSocketEnable": "Whether to enable WebSocket",
        "webSocketEnableInfo": "WebSocket is used for the server to send messages and chat to WEB users. If WebSocket is enabled, please configure nginx, WAF and other network systems correctly to ensure that WebSocket protocol communication is allowed. (The server needs to be restarted after modification)",

        "deployWarEnable": "Whether to allow front-end deployment of custom applications",
        "deployWarEnableInfo": "This configuration controls whether the custom application is allowed to be uploaded and deployed on the WEB side. (The server needs to be restarted after modification)",

        "deployResourceEnable": "Whether to allow front-end deployment of web resources",
        "deployResourceEnableInfo": "This configuration controls front-end components and static resources, and whether to allow uploading and deploying on the WEB side. (The server needs to be restarted after modification)",

        "statEnable": "Enable Druid statistics",
        "statExclusions": "Statistics ignore path",
        "statEnableInfo": "Whether to enable Druid statistics database connection, SQL execution, http request and other related information. You can access the statistical results page through the URL: <a href='{url}' target='_blank'>Druid Monitor</a>.",

        "exposeJest": "Whether to output the Restful API documentation page",
        "exposeJestInfo": "The output Restful API documentation can be accessed through the URL: <a href='{url}' target='_blank'>Restful API.</a>.",

        "scriptingBlockedClasses": "Java classes disabled by server-side scripting",
        "scriptingBlockedClassesInfo": "Set Java classes that are not allowed to be used in server-side scripts here, and multiple Java classes are separated by commas.",

        "httpWhiteList": "External http interface service address white list",
        "httpWhiteListInfo": "White list of external http interface service addresses, * means unlimited, separated by commas.",

        "refererHeadCheckRegular": "Request Referer verification",
        "refererHeadCheckRegularInfo": "Here you can configure the server's verification rules for the Referer header of the request, configure a regular expression, and only requests that verify the Referer value through the regular expression are allowed. " +
            "Properly configuring this item can effectively prevent CSRF attacks. For example, if you configure (.+?)o2oa.net(.+?) , it means that only requests that referer contains 'o2oa.net' are allowed.",

        "accessControlAllowOrigin": "Cross-Origin Origin License",
        "accessControlAllowOriginInfo": "Cross-origin resource sharing license, set the Access-Control-Allow-Origin flag returned by http, which can be used for CORS attack protection, such as: https://www.o2oa.net.",

        "contentSecurityPolicy": "Content-Security-Policy Header",
        "contentSecurityPolicyInfo": "The HTTP Content-Security-Policy response header allows website administrators to control resources the user agent is allowed to load for a given page. With a few exceptions, policies mostly involve specifying server origins and script endpoints. This helps guard against cross-site scripting attacks (Cross-site_scripting).",
        "contentSecurityPolicyInfo2": "See：<a target='_blank' href='https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy'>https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy</a>",

        "personUnitOrderByAsc": "Person Organization Ascending",
        "personUnitOrderByAscInfo": "Whether to use ascending order when displaying and obtaining personnel organization data. The default is true, otherwise it is sorted in descending order.",

        "attachmentConfig": "Attachment Upload Config",
        "attachmentConfigInfo": "Here you can configure the size and type of attachments allowed in the system.",

        "fileSize": "Attachment size limit",
        "fileSizeInfo": "The unit is M, the maximum is 2048M.",
        "fileTypeIncludes": "Attachment types allowed to be uploaded",
        "fileTypeIncludesInfo": "Set the types of attachments that are allowed to be uploaded, and set the extensions, separated by commas.",
        "fileTypeExcludes": "Attachment types that are prohibited from uploading",
        "fileTypeExcludesInfo": "Set the types of attachments that are prohibited from uploading, and set the extensions, separated by commas.",

        "dumpData": "Automatically backup data",
        "dumpDataInfo": "O2OA supports scheduled automatic data backup, please configure it here.",
        "dumpEnable": "Enable",
        "dumpCron": "Cron",
        "dumpSize": "Maximum",
        "dumpPath": "Path",
        "saveDump": "Save automatic backup configuration",
        "saveDumpSuccess": "The automatic backup configuration is saved successfully.",


        "restoreData": "Automatic data recovery",
        "restoreDataInfo": "O2OA supports automatic data recovery at regular intervals, please configure it here.",
        "restoreEnable": "Enable",
        "restoreCron": "Cron",
        "restorePath": "Path",
        "saveRestore": "Save AutoRecovery Configuration",
        "saveRestoreSuccess": "Saving the auto-recovery configuration succeeded.",

        "reloadServerConfig": "reload server configuration"
    },
    "_worktimeConfig": {
        "amWorktime": "Morning working hours",
        "pmWorktime": "Afternoon working hours",
        "holidays": "Holidays",
        "workdays": "Working Day",
        "weekends": "Weekend",

        "amWorktimeInfo": "Set the morning working time range for weekdays here.",
        "pmWorktimeInfo": "Set the afternoon working time range for weekdays here.",
        "holidaysInfo": "Set holidays, add the dates that were originally weekdays here as holidays.",
        "workdaysInfo": "Set working days, dates that would otherwise be non-working days are added here as working days.",
        "weekendsInfo": "Set the weekend, select the day of the week below as the weekend non-working day.",

        "timeRangeTo": "To",
        "startTime": "Start Time",
        "endTime": "End Time",

        "weekData": {
            "Monday": 2,
            "Tuesday": 3,
            "Wednesday": 4,
            "Thursday": 5,
            "Friday": 6,
            "Saturday": 7,
            "Sunday": 1
        }
    },
    "_cacheConfig": {
        "type": "Cache Type",
        "typeInfo": "The O2OA system supports both guava and redis caches, and guava is used by default.",

        "guava_maximumSize": "Cache Capacity",
        "guava_maximumSizeInfo": "The maximum capacity of the cache, the number of objects, the default value: 3000.",
        "guava_expireMinutes": "Expiration",
        "guava_expireMinutesInfo": "Expiration time, in minutes, default value: 30.",

        "redis": "redis service config",
        "redisInfo": "Configure the redis service here.",
        "redis_host": "Server Address",
        "redis_port": "Server Port",
        "redis_user": "Authenticated User",
        "redis_password": "Authentication Password",
        "redis_connectionTimeout": "connection wait timed out",
        "redis_socketTimeout": "return wait timeout",
        "redis_sslEnable": "SSL Enabled",
        "redis_index": "Database Number",

        "saveRedis": "Save redis configuration",
        "saveRedisSuccess": "Save the redis configuration successfully.",
    },
    "_processConfig": {
        "baseConfig": "Basic Config",
        "timerConfig": "Timer Config",

        "maintenanceIdentity": "Process maintainer identity",
        "selectMaintenanceIdentity": "Select process maintainer identity",
        "maintenanceIdentityInfo": "When an unexpected error occurs in the process work and the corresponding processor cannot be found, the system will first try to assign the work to the identity of the creator. If the creation identity is not available, then it will be assigned to the identity set here.",

        "formVersionCount": "The number of historical versions of the form to keep",
        "formVersionCountInfo": "Every time a form is saved, the system can keep a copy as a historical version, so that the previous design can be retrieved in some special cases. Here configure the maximum number of reserved historical versions of the form. If this number is exceeded, the earliest historical version will be deleted.",

        "processVersionCount": "The number of historical versions of the process to keep",
        "processVersionCountInfo": "Every time the process is saved, the system can keep a copy as a historical version, so that the previous design can be retrieved in some special cases. Here configure the maximum number of retained historical versions of the process. If this number is exceeded, the earliest historical version will be deleted.",

        "scriptVersionCount": "The number of reserved script history versions",
        "scriptVersionCountInfo": "Every time a script is saved, the system can keep a copy as a historical version, so that the previous design can be retrieved in some special cases. Here configure the maximum number of historical versions of scripts to keep. If the number exceeds this number, the earliest historical version will be deleted.",

        "docToWordType": "The document editor component converts the WORD method",
        "docToWordTypeInfo": "When the document editor component is configured to convert WORD to 'Service', the backend service will perform WORD conversion." +
            "The O2OA system supports local service conversion or cloud service conversion. Using cloud service conversion can be better compatible with WORD format, but you must first connect to O2 Cloud. Please connect to O2 Cloud in 'Cloud Service Configuration'.",
        "docWordTypeSelect": {
            "local": "Local Service",
            "cloud": "Cloud Service"
        },

        "press": "Work reminder configuration",
        "pressInfo": "The manual activity node in the process configuration can be set to allow reminders, so that the person who has processed a certain job can initiate a reminder for the current to-do person of the job. Here you can set a limit on the number of times this action can be performed within a time period.",
        "pressInfo1": "Within",
        "pressInfo2": "minutes, up to",
        "pressInfo3": "times",

        "executorCount": "The number of flow actuators",
        "executorCountInfo": "The number of executors that handle the process flow. The default value is 32, and it is generally not recommended to modify it.",

        "executorQueueBusyThreshold": "Executor Queue Busy Threshold",
        "executorQueueBusyThresholdInfo": "The busy threshold of the executor queue that handles process transfers. The default value is 5, and it is generally not recommended to modify it.",

        "timerInfo": "The O2OA process platform needs some timers to process process tasks, and you can configure these timers here. All changes to the timer require a restart of the server to take effect.",

        "archiveHadoop": "Archiving to Hadoop",
        "archiveHadoopInfo": "Archiving to Hadoop",

        "enable": "Enable",
        "cron": "Cron",
        "urge": "Reminder Timer",
        "urgeInfo": "If a timeout is set for the activity, this timer will check the to-do that is about to reach the specified time, and send reminder information to its handler.",

        "expire": "Timeout Timer",
        "expireInfo": "If the activity has a timeout, this timer checks whether the to-dos have exceeded the specified time and marks them as timed out.",

        "touchDelay": "Timed event trigger timer",
        "touchDelayInfo": "This timer is used to trigger timed activities in the process.",

        "deleteDraft": "Clear Draft Timer",
        "deleteDraftInfo": "In the process, you can use the draft mode to create a process instance. This mode does not officially start the process before saving. This timer can clear the draft files that have not been transferred for a long time.",

        "thresholdMinutes": "Threshold",
        "thresholdMinutesInfo": "Set the threshold, in minutes, if it exceeds this time, it is considered as a draft that can be deleted, and the default is 10 days.",

        "passExpired": "Automatic Flow Timer",
        "passExpiredInfo": "If the process activity has timeout processing enabled, this timer will flow those todos that have timed out.",

        "touchDetained": "Stuck Pending Check Timer",
        "touchDetainedInfo": "This timer will find long-stay jobs and try to drive this job to flow, which can automatically handle job delays caused by personnel changes, etc.",
        "thresholdMinutesInfo_touchDetained": "The timer will handle jobs whose retention time exceeds this threshold, which is 1440 minutes by default. (1 day)",

        "updateTable": "Sync to custom data table timer",
        "updateTableInfo": "If the process is set to map process data to a custom data table, this timer is used to process the mapping data queue.",

        "archiveHadoop": "Archiving to Hadoop",
        "archiveHadoopInfo": "O2OA supports archiving completed work data to Hadoop, where you can set Hadoop-related configurations.",
        "fsDefaultFS": "Address",
        "username": "Username",
        "path": "Path Prefix",
        "saveHadoop": "Save the Hadoop config",
        "saveHadooping": "Saving ... ",
        "saveHadoopSuccess": "Saved Successfully",

        "merge": "Archive Timer",
        "mergeInfo": "",
    },

    "_queryConfig": {
        "queryIndexConfig": "Index Configuration",
        "workConfig": "Working document",
        "workCompletedConfig": "Completed document",
        "documentConfig": "CMS Document",
        "indexTools": "Index Tools",

        "work": "work",
        "workCompleted": "Work Completed",
        "document": "CMS Document",

        "touchWorkIndex": "Execute the full index of documents in circulation",
        "touchWorkIndexInfo": "If you enable indexing for the first time, or upgrade from an older version, you can trigger full indexing of documents in circulation as soon as the system is idle.",
        "touchWorkIndexAction": "Immediately execute the full index of documents in circulation",

        "touchWorkCompletedIndex": "Execute full index of completed documents",
        "touchWorkCompletedIndexInfo": "If you are enabling indexing for the first time, or upgrading from an older version, you can trigger full indexing of completed documents as soon as the system is idle.",
        "touchWorkCompletedIndexAction": "Immediately perform full indexing of completed documents",

        "touchDocumentIndex": "Execute full indexing of content management documents",
        "touchDocumentIndexInfo": "If you are enabling indexing for the first time, or upgrading from an older version, you can trigger full indexing of content management documents as soon as the system is idle.",
        "touchDocumentIndexAction": "Immediately perform full indexing of content management documents",

        "optimizeIndex": "Perform index optimization",
        "optimizeIndexInfo": "Optimizing the index can compress the index storage space and optimize the index structure to improve the retrieval performance. It takes a long time to perform index optimization, and the index optimization can be triggered immediately when the system is idle.",
        "optimizeIndexAction": "Perform index optimization immediately",

        "indexActionConfirmTitle": "Execute {type} full index confirmation",
        "indexActionConfirm": "Full indexing will take up more server resources, which may cause slow server response. It is recommended to run it when the system is idle.<br><br>Are you sure you want to perform full indexing of {type} documents?",
        "indexActionSuccess": "{type} full index task has been added to the queue, and the system will run immediately!",

        "optimizeIndexConfirmTitle": "Execute index optimization confirmation",
        "optimizeIndexConfirm": "Executing index optimization will occupy more server resources, which may cause slow server response. It is recommended to run it when the system is idle.<br><br>Are you sure you want to perform index optimization?",
        "optimizeIndexSuccess": "The index optimization task has been queued and the system will run it immediately!",

        "restartServerInfo": "<span style='color: red'>The modification of the index configuration will take effect after restarting the server!</span>",

        "enable": "Whether to enable indexing service",

        "modeConfig": "Index storage location",
        "modeConfigInfo": "Select the index storage location, the default is \"local file system\"",
        "indexMode": "Index Storage Location",
        "modeOptions": {
            "localDirectory": "Local File System",
            "hdfsDirectory": "hadoop file system",
            "sharedDirectory": "Shared File System"
        },
        "hdfsDirectoryDefaultFS": "hadoop file system address",
        "hdfsDirectoryPath": "hadoop file system directory",
        "sharedDirectoryPath": "Shared file system directory",

        "optimizeIndexEnable": "Index Optimization",
        "optimizeIndexEnableInfo": "Optimizing the index can compress the index storage space and optimize the index structure to improve retrieval performance.",
        "optimizeIndexCron": "Optimize index timing configuration",
        "isEnable": "Whether to enable",
        "cron": "Timed expression",

        "dataStringThreshold": "Maximum text length threshold for business data",
        "dataStringThresholdInfo": "Maximum text length threshold of business data, exceeding this threshold will ignore writing to the index",

        "summaryLength": "Summary Length",

        "attachmentMaxSize": "Attachment Index Threshold",
        "attachmentMaxSizeInfo": "Attachment index threshold (megabytes), attachments larger than this value will not be indexed",

        "cleanupThresholdDays": "Retrieve Content Cleanup Threshold",
        "cleanupThresholdDaysInfo": "The search content cleanup threshold (days), the index that has not been updated for more than this number of days will be cleared.",

        "searchMaxPageSize": "Maximum number of search pages per page",
        "searchMaxPageSizeInfo": "The maximum number of search results per page",

        "moreLikeThisMaxSize": "Maximum number of associated documents to return",
        "moreLikeThisMaxSizeInfo": "The maximum number of related documents retrieved",

        "workIndexAttachment": "Whether to index the attachment of the document in circulation",
        "workIndexAttachmentInfo": "Whether to index the attachments of documents in circulation. (Indexing attachments may require stronger server performance and larger memory according to different business volumes)",

        "lowFreqWorkEnable": "Whether to enable full index",
        "lowFreqWorkEnableInfo": "Full indexing will update the index of all documents in circulation to ensure the accuracy of permissions and data.",
        "lowFreqWorkCron": "Full index timing expression",
        "lowFreqWorkCronInfo": "Full indexing will take up more server resources. If full indexing is enabled, it is recommended to set it to be executed only during idle periods of the system. It should be noted that for data in circulation, full indexing of completed data and content management data, Please try to run them at different times.",
        "lowFreqWorkMaxCount": "The maximum number of full index executions",
        "lowFreqWorkMaxCountInfo": "Set the maximum number of documents to perform index processing once. When this number is reached, the index will stop running. The next time the index runs, it will continue to execute after the last document processed. Either configuration of the maximum number or processing time satisfies stop indexing.",
        "lowFreqWorkMaxMinutes": "Full index execution processing time (minutes)",
        "lowFreqWorkMaxMinutesInfo": "Set the maximum time for performing an index process. After this time is reached, the index will stop running. When the index is run next time, it will continue to execute after the document was processed last time. Any one of the two configurations of the maximum number and the processing time satisfies stop indexing.",

        "highFreqWorkEnable": "Whether to enable incremental indexing",
        "highFreqWorkEnableInfo": "If incremental indexing is enabled, a signal will be sent when the document data or state changes, and the incremental index timer will run at the specified time to obtain the incremental signal and update the document index.",
        "highFreqWorkCron": "Incremental index timer",
        "highFreqWorkCronInfo": "Incremental index timing execution expression",
        "highFreqWorkMaxCount": "Incremental index single processing maximum number",
        "highFreqWorkMaxMinutes": "Incremental index single processing maximum duration (minutes)",


        "workCompletedIndexAttachment": "Whether to index completed document attachments",
        "workCompletedIndexAttachmentInfo": "Whether to index the attachments of completed documents. (Indexing attachments may require stronger server performance and larger memory according to different business volumes)",

        "lowFreqWorkCompletedEnable": "Whether to enable full index",
        "lowFreqWorkCompletedEnableInfo": "Full indexing will update the index of all documents that have been transferred to ensure the accuracy of permissions and data.",
        "lowFreqWorkCompletedCron": "Full index timing expression",
        "lowFreqWorkCompletedCronInfo": "Full indexing will take up more server resources. If full indexing is enabled, it is recommended to set it to be executed only during system idle time. It should be noted that for data in circulation, full indexing of completed data and content management data, Please try to run them at different times.",
        "lowFreqWorkCompletedMaxCount": "The maximum number of full index executions",
        "lowFreqWorkCompletedMaxCountInfo": "Set the maximum number of documents to perform an index process. When this number is reached, the index will stop running. When the index is run next time, it will continue to execute after the document was processed last time. Any of the two configurations of the maximum number and the processing time is satisfied stop indexing.",
        "lowFreqWorkCompletedMaxMinutes": "Full index execution processing time (minutes)",
        "lowFreqWorkCompletedMaxMinutesInfo": "Set the maximum time for performing an index process. After this time is reached, the index will stop running. The next time the index is run, it will continue to execute after the document was processed last time. Any of the two configurations of the maximum number and the processing time satisfies stop indexing.",


        "highFreqWorkCompletedEnable": "No enable incremental indexing",
        "highFreqWorkCompletedEnableInfo": "If incremental indexing is enabled, a signal will be sent when the document data or state changes, and the incremental index timer will run at the specified time to obtain the incremental signal and update the document index",
        "highFreqWorkCompletedCron": "Incremental index timer",
        "highFreqWorkCompletedCronInfo": "Incremental index timing execution expression",
        "highFreqWorkCompletedMaxCount": "Maximum number of incremental index single processing",
        "highFreqWorkCompletedMaxMinutes": "Incremental index single processing maximum duration (minutes)",
        "documentIndexAttachment": "Whether to index the attachment of the content management document",
        "documentIndexAttachmentInfo": "Whether to index the attachments of completed documents. (Indexing attachments may require stronger server performance and larger memory according to different business volumes)",

        "lowFreqDocumentEnable": "Whether to enable content management full index",
        "lowFreqDocumentEnableInfo": "Full indexing will update the index of all types of \"information\" content management documents to ensure the accuracy of permissions and data.",
        "lowFreqDocumentCron": "Full index timing expression",
        "lowFreqDocumentCronInfo": "Full indexing will take up more server resources. If full indexing is enabled, it is recommended to set it to be executed only during system idle time. It should be noted that for data in circulation, full indexing of completed data and content management data, Please try to run them at different times.",
        "lowFreqDocumentMaxCount": "The maximum number of full index executions",
        "lowFreqDocumentMaxCountInfo": "Set the maximum number of documents for index processing once. When this number is reached, the index will stop running. When the index is run next time, it will continue to execute after the document was processed last time. Either configuration of the maximum number and processing time can satisfy stop indexing.",
        "lowFreqDocumentMaxMinutes": "Full index execution processing time (minutes)",
        "lowFreqDocumentMaxMinutesInfo": "Set the maximum time for performing an index process. After this time is reached, the index will stop running. The next time the index is run, it will continue to execute after the document was processed last time. Any one of the two configurations, the maximum number and the processing time, satisfies stop indexing.",

        "highFreqDocumentEnable": "No enable incremental index",
        "highFreqDocumentEnableInfo": "If incremental indexing is enabled, a signal will be sent when the document data or state changes, and the incremental index timer will run at the specified time to obtain the incremental signal and update the document index.",
        "highFreqDocumentCron": "Incremental index timer",
        "highFreqDocumentCronInfo": "Incremental index timing execution expression",
        "highFreqDocumentMaxCount": "Incremental index single processing maximum number",
        "highFreqDocumentMaxMinutes": "Incremental index single processing maximum duration (minutes)"

    },

    "_appConfig": {
        "connectConfig": "Connection Config",
        "moduleConfig": "Module Config",
        "iconConfig": "Icon Config",

        "cloudConnect": "Cloud service connection check",
        "connectedInfo": "<span style='color:#5fbf78'>[Connected to O2 cloud service]</span>",
        "notConnectedInfo": "<span style='color:red'>[Not connected to O2 cloud service]</span>, please go to the cloud service configuration page to register and log in.",

        "httpProtocol": "WEB access protocol",
        "httpProtocolInfo": "Please select whether the mobile terminal access center service uses the HTTP protocol or the HTTPS protocol.",

        "centerServer": "Center Server",
        "centerServerInfo": "The IP address or domain name and port of the external service of the center server.",

        "webServer": "WEB Server",
        "webServerInfo": "The IP address or domain name and port of the WEB server for external services. If the domain name or IP address is empty or '127.0.0.1', the Center server address will be used.",

        "applicationServer": "Application Server",
        "applicationServerInfo": "The IP address or domain name and port of the application server for external services. If the domain name or IP address is empty or '127.0.0.1', the Center server address will be used.",

        "editServer": "Edit server address",
        "host": "domain name or IP address",
        "port": "port",

        "connectTest": "Mobile connection test",
        "connectTestInfo": "Use your mobile phone to scan the QR code to check whether the external network can connect to the server.",
        "getQrcode": "Generate a connection test QR code",


        "mobileIndex": "Mobile terminal home page configuration",
        "mobileIndexInfo": "You can configure the home page of the mobile terminal as the default APP style, or specify a portal page.",

        "simpleMode": "Easy Mode on Mobile",
        "simpleModeInfo": "After the simple mode is turned on on the mobile terminal, only the home page and the setting page are displayed.",
        
        "appIndexPage": "Mobile page configuration",
        "appIndexPageInfo": "Is the configuration of several main pages on the mobile end displayed",
        "appIndexPageHome": "Home",
        "appIndexPageIM": "Message",
        "appIndexPageContact": "Contact",
        "appIndexPageApp": "App",
        "appIndexPageSettings": "Setting",

        "appIndexCenteredTitle": "Is the mobile app homepage centered",
        "appIndexCenteredInfo": "The homepage of the mobile app is centered, and the number of pages will not be configurable",

        "appIndexCmsFilterTitle": "Home Information Center",
        "appIndexCmsFilterCategoryInfo": "Information center list classification query criteria, if left blank, all queries will be queried",
        "appIndexTaskFilterTitle": "Home Office Center",
        "appIndexTaskFilterProcessInfo": "Office center list process query criteria, if left blank, all will be queried",
        "appIndexTaskFilterProcessSelectorTitle": "Process selection",
        "appIndexCmsFilterCategroySelectorTitle": "Classification selection",

        "systemMessageSwitch": "show system notifications",
        "systemMessageSwitchInfo": "Are system notifications displayed in the mobile app message list?",


        "contactPermissionView": "Mobile App Contacts Permission View",
        "contactPermissionViewInfo": "It is necessary to install the 'Contacts' application in the application market, which contains the permission configuration view of the address book.",

        "nativeAppList": "Application List",
        "nativeAppListInfo": "Here you can set which apps are enabled and which apps are disabled in the mobile APP.",

        "imageNames": {
            "application_top": {"text": "Application page top image", "action": "ApplicationTop"},
            "index_bottom_menu_logo_blur": {"text": "Icon when home navigation is not selected", "action": "MenuLogoBlur"},
            "index_bottom_menu_logo_focus": {"text": "Icon when home navigation is selected", "action": "MenuLogoFocus"},
            "launch_logo": {"text": "Start Logo Image", "action": "LaunchLogo"},
            "login_avatar": {"text": "Login interface default avatar picture", "action": "LoginAvatar"},
            "process_default": {"text": "Process default icon", "action": "ProcessDefault"},
            "setup_about_logo": {"text": "About page icon", "action": "SetupAboutLogo"}
        },
        "imageSzie": "Size",
        "changeImage": "change picture",
        "defaultImage": "default picture",
        "defaultImageTitle": "Confirmation of the default picture",
        "defaultImageInfo": "Are you sure you want to replace {name}, with the default image?",
    },
    "_integrationConfig": {
        "title": "Mobile application integration",

        "dingding": "DingTalk Integration",
        "mPweixin": "WeChat Official Account Integration",
        "qiyeweixin": "Enterprise WeChat Integration",
        "weLink": "Huawei WeLink integration",
        "zhengwuDingding": "Zhezheng Nail Integration",


        "enable": "Whether to enable DingTalk integration",
        "corpId": "DingTalk CorpId",
        "agentId": "DingTalk AgentId",
        "appKey": "App Unique Identifier",
        "appSecret": "Application Key",
        "syncCron": "Synchronous check callback signal timer",
        "forceSyncCron": "Genlock Timer",
        "oapiAddress": "DingTalk API server address",
        "token": "Callback Token",
        "encodingAesKey": "Callback encodingAesKey",
        "workUrl": "DingTalk message open work URL",
        "messageRedirectPortal": "The portal to jump to after processing",
        "messageEnable": "Whether to enable message push",
        "scanLoginEnable": "Whether to enable DingTalk scan code login",
        "scanLoginAppId": "AppId for DingTalk scan code login",
        "scanLoginAppSecret": "appSecret for Dingding scan code login",
        "attendanceSyncEnable": "Whether to enable attendance information",

        "enableInfo": "The O2OA platform has supporting natively developed Android and IOS mobile apps,It can be integrated into Ali DingTalk in the form of a micro-application, and the corporate address book of DingTalk can be synchronized as the local organizational personnel structure, and notifications such as to-dos can be directly pushed to DingTalk for message reminders. (The server needs to be restarted after modification)",
        "enableInfo2": "<span class='mainColor_color'>If O2OA is successfully connected to DingTalk, O2OA will automatically pull all personnel and organizations from DingTalk for synchronization. All personnel and organizations in O2OA are subject to the organizational structure created in DingTalk. (People and organizations that have been created locally will remain and will not be deleted, which may cause duplication of people and organizations.)</span>",
        "enableInfo3": "For more information on the integration of O2OA and DingTalk, please check: <a href='https://www.o2oa.net/search.html?q=%E9%92%89%E9%92%89' target='_blank'>DingTalk</a>.",

        "syncCronInfo": "The callback signal triggers a synchronization check, which runs every 10 minutes by default. If a DingTalk callback signal is received during the period, a synchronization task is triggered to perform personnel synchronization. (Callback configuration needs to be set on DingTalk.)",
        "forceSyncCronInfo": "Forced synchronization timing settings, by default, people and organizations are forced to synchronize at 8:00 and 12:00 every day.",
        "oapiAddressInfo": "The DingTalk API server address generally does not need to be modified.",
        "workUrlInfo": "DingTalk message open work url address. Such as: https://sample.o2oa.net/x_desktop/",
        "messageRedirectPortalInfo": "After the DingTalk message is processed, you can specify to jump to a specific portal page.",

        "saveDingding": "Save DingTalk configuration",
        "saveDingdingSuccess": "DingTalk configuration saved successfully.",

        "mpweixinText": {
            "enable": "Whether to enable",
            "enablePublish": "Enable menu posting",
            "appid": "WeChat Appid",
            "appSecret": "WeChat AppSecret",
            "token": "WeChat Token",
            "encodingAesKey": "WeChat encodingAesKey",
            "portalId": "The portal to jump to after processing",
            "scriptId": "Execute service script",
            "messageEnable": "Use template messages",
            "tempMessageId": "Official account template message id",
            "fieldList": "Template Field Config",
            "tempName": "Template Field",
            "name": "Business Field",

            "enableInfo": "O2OA supports the integration of WeChat official accounts, and users can follow the WeChat official accounts for work processing. It also supports message reminders for to-do tasks. (The server needs to be restarted after modification)",
            "enableInfo2": "For more information on O2OA and WeChat Official Accounts, please check: <a href='https://www.o2oa.net/search.html?q=%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7' target='_blank'>WeChat Official Accounts</a>.",
            "enablePublishInfo": "After the menu publishing is enabled, the menu functions configured in O2OA can be published to the WeChat official account. The WeChat official account menu can be configured in the configuration of 'APP Tools-Official Account Menu'.",
            "portalIdInfo": "When the message processing is completed, you can specify to jump to a specific portal page.",
            "scriptIdInfo": "When a text message is received from the official account, the interface in the platform service management can be executed, and the interface to be executed is specified here.",
            "fieldListInfo": "This is the correspondence between the business fields in the content of the template, Currently O2OA provides the following business fields: creatorPerson, activityName, processName, startTime, title.",

            "saveMpweixin": "Save WeChat official account config",
            "saveMpweixinSuccess": "The WeChat official account configuration is saved successfully."
        },
        "qywenxinText": {
            "enable": "Whether to enable",
            "corpId": "Enterprise WeChat CorpId",
            "agentId": "Enterprise WeChat AgentId",
            "corpSecret": "Enterprise WeChat CorpSecret",
            "syncCron": "Synchronous check callback signal timer",
            "forceSyncCron": "Genlock Timer",
            "apiAddress": "API service address",
            "syncSecret": "Contacts Synchronization Secret",
            "token": "Callback Token",
            "encodingAesKey": "Callback EncodingAesKey",
            "workUrl": "message open job url",
            "messageRedirectPortal": "The portal to jump to after processing",
            "messageEnable": "Whether to enable message push",
            "scanLoginEnable": "Whether to enable scan code login",
            "attendanceSyncEnable": "Whether to enable attendance information",
            "attendanceSyncAgentId": "Time and attendance application ID",
            "attendanceSyncSecret": "Attendance punching application Secret",
            "bindEnable": "Enable user binding",
            "bindEnableInfo": "Do not enable by default, this is for private binding of users and is mutually exclusive with synchronized user organizations!",

            "getUserPrivateInfoMessageTitle": "Enterprise WeChat obtains personal privacy information and sends messages.",
            "getUserPrivateInfoMessageDesc": "The new version of the enterprise WeChat synchronization API restricts the acquisition of user privacy information, such as: mobile phone number, email address, etc. Currently, the synchronization program can only obtain the user name and userId. " +
                "The following message sending function is to send a message to the user to authorize access to private information. After the user clicks on this message, the program can read the required user information!",
            "getUserPrivateInfoMessageConsumerList": "Message Receiver",
            "getUserPrivateInfoMessageFormTitle": "Message Title",
            "getUserPrivateInfoMessageFormContent": "Message Content",
            "getUserPrivateInfoMessageFormTitleDefault": "[Authorization to obtain personal information]",
            "getUserPrivateInfoMessageFormContentDefault": "The application needs to obtain your personal information, click to authorize!",
            "getUserPrivateInfoMessageConsumerEmpty": "Please select message recipients first!",
            "getUserPrivateInfoMessageFormTitleEmpty": "Message title cannot be empty!",
            "getUserPrivateInfoMessageFormContentEmpty": "Message content cannot be empty!",
            "getUserPrivateInfoMessageConfirmTitle": "hint",
            "getUserPrivateInfoMessageConfirmText": "Are you sure you want to send a corporate WeChat message to obtain private information to all selected users and people under the organization?",
            "getUserPrivateInfoMessageSendBtn": "Send a message",
            "getUserPrivateInfoMessageSendSuccess": "The message was sent successfully, please check it later in the corporate WeChat!",

            "syncCronInfo": "The callback signal triggers a synchronization check. By default, it runs every 10 minutes. If an enterprise WeChat callback signal is received during the period, a synchronization task is triggered to perform personnel synchronization. (Need to set callback configuration in Enterprise WeChat)",
            "forceSyncCronInfo": "Forced synchronization timing settings, by default, people and organizations are forced to synchronize at 8:00 and 12:00 every day.",
            "apiAddressInfo": "Enterprise WeChat API server address generally does not need to be modified.",
            "workUrlInfo": "The url address of the enterprise WeChat message to open the work, Such as: https://sample.o2oa.net/x_desktop/",
            "messageRedirectPortalInfo": "After the enterprise WeChat message is processed, you can specify to jump to a specific portal page.",

            "enableInfo": "O2OA supports the integration of self-built applications into the enterprise WeChat, synchronizing the corporate address book of the enterprise WeChat as the local organizational personnel structure, and can directly push notifications such as to-dos to the enterprise WeChat for message reminders.",
            "enableInfo2": "For more information on O2OA and enterprise WeChat, please check: <a href='https://www.o2oa.net/search.html?q=%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1' target='_blank'>Enterprise WeChat</a>.",

            "saveText": "Save enterprise WeChat configuration",
            "saveSuccess": "The enterprise WeChat configuration is saved successfully."
        },
        "welinkText": {

            "enable": "Whether to enable###",
            "clientId": "App's ClientId",
            "clientSecret": "App's ClientSecret###",
            "syncCron": "Synchronous check callback signal timer",
            "forceSyncCron": "genlock timer",
            "oapiAddress": "API service address",
            "messageEnable": "Whether to enable message push",
            "workUrl": "message open job url",
            "messageRedirectPortal": "The portal to jump to after processing",

            "enableInfo": "O2OA supports the integration of Huawei WeLink's internal light applications, synchronizing WeLink's address book as a local organizational personnel structure, and can directly push notifications such as to-dos to WeLink for message reminders. (The server needs to be restarted after modification)",
            "enableInfo2": "For more information on O2OA and WeLink, please refer to: <a href='https://www.o2oa.net/search.html?q=welink' target='_blank'>WeLink</a>. ",

            "syncCronInfo": "The callback signal triggers the synchronization check, which runs every 10 minutes by default. If a WeLink callback signal is received during the period, the synchronization task is triggered for personnel synchronization. (Callback configuration needs to be set in WeLink.)",
            "forceSyncCronInfo": "Forced synchronization timing settings, by default, people and organizations are forced to synchronize at 8:00 and 12:00 every day.",

            "workUrlInfo": "The url address of the WeLink message to open the work, Such as: https://sample.o2oa.net/x_desktop/",
            "messageRedirectPortalInfo": "When the WeLink message is processed, you can specify to jump to a specific portal page.",

            "saveText": "Save WeLink configuration",
            "saveSuccess": "The WeLink configuration is saved successfully."
        }
    },
    "_storageServer": {
        "innerStorage": "Built-in Storage Service",
        "externalStorage": "Extended Storage Service",

        "info": "<span style='color: red'>Modifying the storage configuration will affect the existing file storage of the system in most cases, please modify the configuration here carefully!</span>",
        "info2": "Before modifying the storage configuration, it is recommended that you use the backup function of O2OA to back up the system data. (ctl -dd) . " +
            "Restart the server after modifying the storage configuration, and then restore the backup data. (ctl -rd) . All database-related configuration changes require a server restart.",

        "saveStorageConfig": "Save all storage configurations",
        "saveStorageConfigInfo": "The configuration on this page will not be saved immediately after modification, you must click this button before the configuration you modify will be saved.",
        "saveStorageConfirm": "You are about to save the storage configuration, <br><span style='color:red'>which may affect the system's existing file storage. </span><br><br>Are you sure you want to save the storage configuration?",

        "reloadStorageConfig": "Restore all storage configurations",
        "reloadStorageConfigInfo": "If you want to discard unsaved changes on this page, you can click this button to reload the configuration.",
        "reloadStorageConfirm": "This operation will reload the storage configuration. Unsaved changes will be lost. Are you sure to restore the storage configuration?",

        "storageType": "Storage service type",
        "storageTypeInfo": "The O2OA system provides built-in file storage services, and you can also use external expansion storage nodes if necessary.",
        "storageTypeData": [
            {"value": 'inner', "label": "inner", "text": "Built-in storage service"},
            {"value": 'external', "label": "external", "text": "Extended storage service"}
        ],

        "innerInnerInfo": "<span class='mainColor_color'>You are using the built-in file storage service</span>，<span style='color:red'>Be sure to configure a different name for each storage node</span>.",
        "innerExternalInfo": "<span class='mainColor_color'>You have enabled the extended file storage service</span>, But you can still modify the configuration of the built-in file storage service, <span style='color:red'>Be sure to configure a different name for each storage node</span>.",

        "innerStorageConfig": "Built-in storage service configuration",

        "enable": "Whether to enable",
        "port": "Port",
        "name": "Name",
        "prefix": "Prefix Path",
        "deepPath": "Use deep path",
        "saveStorage": "Save storage configuration",
        "saveStorageSuccess": "The storage configuration is saved successfully.",

        "externalInnerInfo": "<span class='mainColor_color'>You are using the built-in file storage service</span>, The storage configuration is saved successfully.",
        "externalExternalInfo": "<span class='mainColor_color'>You have enabled the extended file storage service.</span>",

        "enableExternal": "Enable extended file storage",
        "disableExternal": "Disable extended file storage",
        "enableExternalInfo": "If you want to enable extended file storage, please ensure that the extended file storage configuration has been completed, otherwise the server may run abnormally. " +
            "Enabling or disabling the extended storage service will affect the existing file storage of the system. It is strongly recommended to back up the system data first.",

        "enableExternalTitle": "Enable extended file storage confirmation",
        "enableExternalConfirm": "You are about to enable extended file storage and disable the built-in file storage service. <br><span style='color:red'>This will affect existing stored files on the system. </span><br><br>Are you sure you want to enable extended file storage?",
        "disableExternalTitle": "Disable Extended File Storage Confirmation",
        "disableExternalConfirm": "You are about to disable extended file storage and enable the built-in file storage service.<br><span style='color:red'>This will affect existing stored files on the system. </span><br><br>Are you sure you want to enable extended file storage?",

        "externalStorageNode": "Extended storage node configuration",
        "addStorageNode": "Add storage node",
        "editStorageNode": "Edit storage node",
        "inputStorageNodeKey": "Please enter the storage node ID",

        "external": {
            "protocol": "Protocol",
            "username": "Username",
            "password": "Password",
            "host": "Host",
            "port": "Port",
            "name": "Name",
            "key": "Node Key",
            "protocolData": {
                "webdav": "webdav",
                "sftp": "sftp",
                "ftps": "ftps",
                "ftp": "ftp",
                "file": "file",
                "hdfs": "hdfs",
                "cifs": "cifs",
                "ali": "Alibaba Cloud Storage",
                "s3":"Amazon Cloud Storage",
                "min":"MinIO Storage"
            },
            "protocolDataInfo": {
                "ali": "If you have not installed the Aliyun OSS integration plug-in in the application market, please install it first.",
                "min": "If you have not installed the MinIO cloud storage integration plug-in in the application market, please install it first."
            }
        },
        "removeNodeConfigTitle": "Confirmation of deleting a storage node",
        "removeNodeConfig": "The storage node '{name}' is about to be deleted, this operation may affect the files already stored in the system, <br>Are you sure you want to delete storage node '{name}'?",

        "assignNode": "Storage node allocation",
        "assignNodeInfo": "There are the following types of files in O2OA, and you can assign storage nodes to these files, and one type of file can be assigned multiple nodes.",
        "files": {
            "file": "File",
            "processPlatform": "Process Platform File",
            "mind": "Mind File",
            "meeting": "Meeting File",
            "calendar": "Calendar File",
            "cms": "CMS File",
            "bbs": "BBS File",
            "teamwork": "Team Work File",
            "structure": "Structure File",
            "im": "IM File",
            "general": "General File",
            "custom": "Custom File",
        },

        "store": "Storage Node",

        "noStoreNode": "Unassigned storage node",
        "addStore": "Add storage node",
        "saveStore": "Save"

    },
    "_appTools": {
        "onlineBuild": "APP online packaging",
        "mpweixinMenu": "Official account menu config",

        "onlineBuildInfo": " <ul style='padding: 0'><li>Currently, the mobile App online packaging function only supports the Android side.</li>" +
            "<li>To package online, you must register and log in to the 'Cloud Service Config' first.</li>" +
            "<li>After submitting the information, the current packaging status will be displayed. The packaging process takes a long time. You can leave the current page first, wait for the packaging to complete, and then download the APK file from this page.</li></ul>",

        "onlineBuildInfo1": "<span class='mainColor_color'>We have provided more excellent 'App在线打包' applications in the application market, you can go to the application market to view and obtain them.</span>",

        "appPack": {
            "formSubmitBtnTitle": "Commit and start packaging.",
            "formReinputBtnTitle": "Fill out the form again and pack it up.",
            "formRePackBtnTitle": "Use the original materials to pack directly.",
            "formDownloadApkBtnTitle": "Download the APK file.",
            "formDownloadPublishBtnTitle": "Download and publish locally.",
            "refreshStatusBtnTitle": "Refresh Status",
            "formUploadLogoBtnTitle": "Upload Image",

            "messageO2cloudNotEnable": "O2 Cloud is not enabled or cannot be connected!",
            "messageO2cloudNotLogin": "Please log in to O2 Cloud first!",
            "messageO2cloudLoginFail": "App packaging server login failed!",
            "statusOrderInline": "In the line......",
            "statusPacking": "Packing......",
            "statusPackEnd": "Packing complete",
            "statusPackError": "Packaging error",
            "publishStatusNone": "Unpublished",
            "publishStatusDoing": "Announcing...",
            "publishStatusCompleted": "After the release is complete, scan the QR code on the login interface to install the APP!",
            "publishStatusFail": "Publishing failed, please try again or contact the administrator!",
            "messageSubmitNotAtStatus": "Currently packing, please try again later!",
            "messageAppnameNotEmpty": "App name cannot be empty!",
            "messageAppnameLenMax6": "App name cannot exceed 6 characters!",
            "messageAppLogoNotEmpty": "Please upload the Logo image again!",
            "messageAppLogoNeedPng": "Logo images must be in png format!",
            "messagePortocolNotEmpty": "HTTP protocol cannot be empty!",
            "messageHostNotEmpty": "The central server domain name cannot be empty!",
            "messageHostFormatError": "Please fill in the central server domain name or IP, Such as: www.o2oa.net. Don't bring headers like http!",
            "messagePortNotEmpty": "The central server port number cannot be empty!",
            "messageContext_not_empty": "Central server context cannot be empty!",
            "messagePortocolMustBeHttpHttps": "The HTTP protocol can only be http or https!",
            "messageAlertTitle": "Confirm Submission",
            "messageAlertSubmit": "Are you sure you want to submit, the current form information will be packaged into a mobile app?",

            "statusLabel": "Current Status",
            "publishStatusLabel": "Post Status",
            "formAppName": "App Name",
            "formAppNameTip": "App desktop display name, the number of characters cannot exceed 6.",
            "formLogo": "Logo Image",
            "formLogoTip": "The logo image displayed on the app desktop must be in png format.",
            "formProtocol": "HTTP Protocol",
            "formProtocolTip": "http / https",
            "formHost": "Domain Name",
            "formHostTip": "Central server domain name or IP. such as: www.o2oa.net",
            "formPort": "Port",
            "formPortTip": "Center server port, such as: 20030",
            "formContext": "The Context",
            "formContextTip": "Center Server Context, such as: /x_program_center",
            "formUrlMapping": "Proxy urlMapping",
            "formUrlMappingTip": "It is used when the server external network uses a proxy address. such as: { \"demo.o2oa.net:20020\": \"demo.o2oa.net/dev/app\" }",
            "formAppVersionName": "APP Version Name",
            "formAppVersionNameTip": "The version name of the APP, such as v1.0.0. This field does not need to be filled in by default!",
            "formAppBuildNo": "APP Version Number",
            "formAppBuildNoTip": "APP version number, must be a positive integer, such as 100. This field does not need to be filled in by default!",
            "formEnableOuterPackage": "Whether to enable external package names",
            "formEnableOuterPackageTip": "Enabling external package names can prevent conflicts with officially released APPs.",
        },

        "mpMenu": {
            "mpweixinInfo": "⚠️ The WeChat official account menu function needs to enable the relevant configuration file first [mpweixin.json], And go to the WeChat official account management background, enable server configuration in the development module!",
            "mpweixin": "WeChat Official Account",
            "publishMpweixin": "Publish to WeChat Official Account",
            "publishToWxmp": "Notice! The current operation will overwrite all saved menu data to the WeChat official account, are you sure you want to continue?",
            "publishSuccess": "If the release is successful, it will be displayed synchronously on the mobile phone after 24 hours!",
            "subscribeMpweixin": "Follow Reply",
            "subscribeMpweixin_desc": "The content of the message that is automatically sent when a new user follows the official account.",
            "subscribeContentErrorEmpty": "The content of the reply message cannot be empty!",
            "subscribeMpweixin_save": "Save",
            "deleteMenuBtnTitle": "Delete Menu",

            "defaultNewName": "New Menu",
            "formNameLabel": "Menu Name",
            "formOrderLabel": "Menu Sort Number",
            "formRadioLabel": "Menu Content",
            "formRadioTypeMsg": "Send Message",
            "formRadioTypeUrl": "Jump Page",
            "formRadioTypeMiniprogram": "Jump Applet",

            "formTypeMsgTips": "Clicking this menu will send the following text to the user, and unauthenticated subscription numbers do not support text messages.",
            "formTypeMsgLabel": "Text Message",
            "formTypeMsgErrorEmpty": "Text message content cannot be empty!",
            "formSubscribeContentErrorEmpty": "Reply message content cannot be empty!",
            "formTypeUrlTips": "Clicking on this menu will jump you to the link below.",
            "formTypeUrlLabel": "Page Address",
            "formTypeUrlErrorEmpty": "The page address cannot be empty!",
            "formTypeMiniprogramTips": "Clicking on this menu will jump to the following applets.",
            "formTypeMiniprogramAppidLabel": "Applet ID",
            "formTypeMiniprogramAppidPlaceholder": "Please go to the WeChat Applet Management background to check the Applet ID.",
            "formTypeMiniprogramAppidErrorEmpty": "Applet ID cannot be empty!",
            "formTypeMiniprogramPathLabel": "Applet Path",
            "formTypeMiniprogramPathPlaceholder": "Please go to the WeChat Applet Management background to check the Applet Path.",
            "formTypeMiniprogramPathErrorEmpty": "Applet Path cannot be empty!",
            "formTypeMiniprogramUrlLabel": "Alternate Page",
            "formTypeMiniprogramUrlPlaceholder": "Backup webpage, the old version of WeChat will open this backup webpage.",
            "formTypeMiniprogramUrlErrorEmpty": "Backup webpage cannot be empty!",
            "formNameTips4": "Only Chinese, English and numbers are supported, and the number of characters does not exceed 4.",
            "formNameTips6": "Only Chinese, English and numbers are supported, and the number of characters does not exceed 6.",
            "formOrderTips": "Only numbers are supported, the number of characters does not exceed 6, and the sorting is based on strings.",
            "msgFirstMaxLen": "You can only create up to 3 first-level menus!",
            "menuMsgSubMaxLen": "You can only create up to 5 secondary menus!",
            "menuMsgParentNotSave": "The upper menu data has not been saved, please save the data first!",
            "menuDeleteAlertMsg": "Are you sure you want to delete this data, and its submenus will also be deleted?",
            "menuDeleteSuccess": "Delete data successfully!",
            "menuSaveSuccess": "Data saved successfully!",
            "formNameErrorEmpty": "Menu name cannot be empty!",
            "formNameErrorMaxLen4": "The number of characters in the menu name cannot exceed 4!",
            "formNameErrorMaxLen6": "The number of characters in the menu name cannot exceed 6!",
            "formNameError": "Word Limit",
            "formOrderErrorEmpty": "Menu sort number cannot be empty!",
            "formOrderErrorNotNumber": "The menu sorting number can only enter numbers!",
            "formOrderErrorMaxLen": "The number of characters in the menu sorting number cannot exceed 6!",
        }
    },
    "_pushConfig": {
        "pushType": "Message push service",
        "pushTypeInfo": "O2OA supports Jiguang Push Service and Huawei Push Service, and you can choose push service according to your needs.",
        "pushTypeData": [
            {"value": "jpush", "label": "jpush", "text": "Jiguang push service"},
            {"value": "none", "label": "none", "text": "Disable push notifications"}
        ],

        "appKey": "Jiguang Push AppKey",
        "masterSecret": "Jiguang Push MasterSecret",
        "appKeyInfo": "AppKey of Jiguang Push APP",
        "masterSecretInfo": "Master Secret of Jiguang Push App",

        "appId": "Huawei Push AppId",
        "appSecret": "Huawei Push AppSecret",
        "appIdInfo": "appId of the Huawei push APP",
        "appSecretInfo": "appSecret of Huawei Push App"
    },
    "_messageConfig": {
        "messageConsumers": "Consumers Config",
        "messageType": "Type Config",
        "messageLoader": "Loader Config",
        "messageFilter": "Filter Config",

        "consumerTypes": {
            "ws": "WebSocket",
            "pmsinner": "Push Message",
            "calendar": "Calendar",
            "dingding": "Dingding",
            "welink": "Welink",
            "qiyeweixin": "Enterprise WeChat",
            "mpweixin": "WeChat Official Account",
            "kafka": "kafka",
            "activemq": "ActiveMQ",
            "restful": "Restful",
            "mail": "Mail",
            "jdbc": "JDBC",
            "table": "Database Table",
            "hadoop": "Hadoop",
            "andfx": "andfx"
        },
        "consumerInfoTitle": "Consumers Config",
        "consumerInfo": "The O2OA system provides a variety of message channels, where you can set how various messages need to be sent.",
        "consumerInfo2": "For more information about message configuration, please see: <a href='https://www.o2oa.net/search.html?q=%E6%B6%88%E6%81%AF%E9%85%8D%E7%BD%AE' target='_blank'>message</a>.",
        "addConsumer": "Add Consumers",
        "consumerLabel": {
            "key": "Consumers Name",
            "type": "Type",
            "filter": "Filter",
            "loader": "Loader",
            "startTlsEnable": "Upgrade transmission encryption"
        },
        "none": "none",
        "editConsumer": "Edit Consumers",

        "inputKey": "Please enter a consumers name.",
        "hasKey": "Consumers name already exists, please use another name.",

        "consumerData": {
            "kafka": ['bootstrapServers', 'topic', 'securityProtocol', 'saslMechanism', 'saslMechanism', 'username', 'password'],
            "activemq": ['url', 'queueName', 'username', 'password'],
            "restful": ['url', 'method', 'internal'],
            "mail": ['host', 'port', 'sslEnable', 'auth', 'startTlsEnable', 'from', 'password'],
            "jdbc": ['driverClass', 'url', 'catalog', 'schema', 'table', 'username', 'password'],
            "table": ['table'],
            "hadoop": ['fsDefaultFS', 'path', 'username']
        },

        "messageTypeTitle": "Message Type Config",
        "messageTypeInfo": "Various built-in events of the O2OA system can send messages, and you can set the channels through which these events need to send messages here. You can also add custom message types.",

        "noConsumer": "There is no sending channel selected for this type of message.",
        "selectConsumer": "Select Consumers",
        "addTmpConsumer": "Add Consumers",

        "addMessageType": "Add Message Type",
        "newMessageData": {
            "key": "Message Key",
            "description": "Description"
        },
        "inputMessageKey": "Please enter message key",
        "hasMessageKey": "Message key already exists, please use another key.",

        "deleteTypeTitle": "Confirmation of delete message type",
        "deleteTypeInfo": "Are you sure you want to delete the message type '{name}'?",

        "filterConfigTitle": "Filter Config",
        "filterConfigInfo": "A filter can be used in a message channel, and a filter is a server-side script that is called before a message is sent. If the filter returns true, the message is allowed to be sent, and if it returns false, the message will not be sent.",
        "addFilter": "Add Filter",
        "filterKey": "Name",

        "inputFilterKey": "Please enter filter name",
        "hasFilterKey": "Filter name already exists, please use another name.",

        "deleteFilterTitle": "Confirmation of removing filter",
        "deleteFilterInfo": "Are you sure you want to delete the filter '{name}'?",

        "loaderConfigTitle": "Loader Config",
        "loaderConfigInfo": "The loader can be used in the message channel. The loader is a server-side script. It is used to modify the content of the message before sending the message. It is called before the message is sent. You must return a JSON format data as the message to be sent. Message content.",
        "addLoader": "Add Loader",
        "loaderKey": "Name",

        "inputLoaderKey": "Please enter loader name",
        "hasLoaderKey": "Loader name already exists, please use another name.",


        "deleteLoaderTitle": "Confirmation of removing loader",
        "deleteLoaderInfo": "Are you sure you want to delete the loader '{name}'?",

        "deleteConsumerTitle": "Confirmation of removing consumer",
        "deleteConsumerInfo": "Are you sure you want to delete the consumer '{name}'?",

        "loaderComment": "/*\nmessage The object is the message body, which is automatically injected by the script execution context environment, which has four fields."+
            "\nmessage.title: Subject "+
            "\nmessage.person: Person "+
            "\nmessage.type: Message Type,  such as: task_create"+
            "\nmessage.body: Message Body,  such as: The message body of the message whose type is task_create is the task data stored in json format. "+
            "\nreturn The returned message object\n*/\nreturn message;",
        "filterComment": "/*\nmessage The object is the message body, which is automatically injected by the script execution context environment, which has four fields. "+
            "\nmessage.title: Subject "+
            "\nmessage.person: Person "+
            "\nmessage.type: Message Type,  such as: task_create"+
            "\nmessage.body: Message Body,  such as: The message body of the message whose type is task_create is the task data stored in json format. "+
            "\nreturn Returned boolan, true means to send; false means not to send.\n*/\nreturn true;"
    }
}
