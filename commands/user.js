const { exec } = require("child_process");

alias = localStorage.getItem('alias') + " ";

function userList() {
    exec("mc.exe admin user list --json " + alias, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
    });
    
}

function userAdd() {
    username = document.getElementById('username1').value + " "
    password = document.getElementById('password1').value
    exec("mc.exe admin user add " + alias + " " + username + password, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('username1').value = "";
        document.getElementById('password1').value = "";
    });
}

function userRemove() {
    username = document.getElementById('username2').value + " "
    exec("mc.exe admin user remove " + alias + username, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('username2').value = "";
    });
}

function userInfo() {
    username = document.getElementById('username3').value + " "
    exec("mc.exe admin user info " + alias + username, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('username3').value = "";
    });
}

function userEnable() {
    username = document.getElementById('username4').value + " "
    exec("mc.exe admin user enable " + alias + username, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('username4').value = "";
    });
}

function userDisable() {
    username = document.getElementById('username5').value + " "
    exec("mc.exe admin user disable " + alias + username, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('username5').value = "";
    });
}