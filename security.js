class SecuritySystem {
    constructor() {
        this.credentials = [];
        this.register = (uid, pwd, name) => this.credentials.push({
            uid: uid,
            pwd: pwd,
            name: name
        });
        this.authenticate = (uid, pwd) => {
            let credential = this.credentials.find(c => c.uid == uid && c.pwd == pwd);
            if (credential != undefined)
                return credential.name;
            else
                return undefined;
        }
    }
}

let security = new SecuritySystem();
security.register('krishna', '1234', 'Krishna Mohan Koyya');
let name = security.authenticate('krishna', '1234');
if(name != undefined)
    console.log(`Hi ${name}, you are logged in successfully`);
else
    console.log(`Wrong credentials!`);