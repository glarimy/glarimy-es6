class SecuritySystem {
    constructor() {
        this.credentials = [];
        this.register = (uid, pwd, name) => { 
            return new Promise((resolve, reject) => {
                this.credentials.push({
                    uid: uid,
                    pwd: pwd,
                    name: name
                });
                resolve();
            });
        }
        this.authenticate = (uid, pwd) => {
            return new Promise((resolve, reject) => {
                let credential = this.credentials.find(c => c.uid == uid && c.pwd == pwd);
                if (credential != undefined)
                    resolve(credential.name);
                else
                    reject();
            });
        }
    }
}

let security = new SecuritySystem();
security.register('krishna', '1234', 'Krishna Mohan Koyya')
.then(()=> {
    security.authenticate('krishna', '1234')
    .then(name=> console.log(`Hi ${name}, you are logged in successfully`))
    .catch(()=> console.log(`Wrong credentials!`));
});