const appSettings = {    
    projectTitle: 'Asset',
    secretkey: 'Adefg',
    secretkeylocal: 'Adefg321',


    /// view all localStorage variable 
    // Name : Kvsf45_
    // value : 
    //         1 - user has checkin asset 
    //         0 - either checkin is not failed or no checkin default - 0

    //window.localStorage.removeItem('id');
    //window.localStorage.removeItem('display');
    //window.localStorage.removeItem('userimg');
    //window.localStorage.removeItem('Kgr67W@'); // This is a user Role
    //window.localStorage.removeItem('LkgdW23!'); // This is for DepartmentID

    // allow to send email
    // value : send --- will send email
    // value : no --- will not send email
    ALLOW_SENDEMAIL_CHECKOUT: 'no',
    ALLOW_SENDEMAIL_CHECKIN_BY_USER: 'no',
    ALLOW_SENDEMAIL_APPROVE_DISPOSE: 'no',
    ALLOW_SENDEMAIL_PULLOUT_BY_USER: 'no',

    // For next-server
    email_key: 're_BReLyfj9_7cLbVV2Rxf5aji3CcnmUvinH',

    // Asset Team email settings
    email_sender : 'asset@test.dev',
    reply_to: 'noreply@test.dev',
    YOUR_SERVICE_ID: 'service_e0mdv86', 
    YOUR_TEMPLATE_ID : 'template_9p4hpvy',
    public_key: 'vEuwkpou6K7nfqdH1',

    // for UserCheckout / Pullout
    //email_source : 'asset@test.dev',
    ASSET_EMAIL: 'dg0at1818@gmail.com',
    USER_SERVICE_ID: 'service_ivu0u7x',
    ASSET_RECEIVERNAME: 'Asset Team',
    USER_TEMPLATE_ID : 'template_n3o5jrb',

        // for UserCheckIn
        // email quota :-) :-)
        // not yet develop
    //email_source : 'asset@test.dev',
    USER_SERVICE_ID: 'service_ivu0u7x',
    USER_TEMPLATE_ID : 'template_n3o5jrb'

  };

  export default appSettings;