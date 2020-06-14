const { exec } = require("child_process");

userList = 'mc admin user list --json ' + alias
userAdd = 'mc admin user add ' + alias + ' ' + userName + ' ' + userPass
userDisable = 'mc admin user disable ' + alias + ' ' + userName
userEnable = 'mc admin user enable ' + alias + ' ' + userName
userRemove = 'mc admin user remove ' + alias + ' ' + userName
userInfo = 'mc admin user info ' + alias + ' ' + userName


function test() {
    exec("mc.exe admin --json info buzzmc", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}
