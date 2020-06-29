alias = localStorage.getItem('alias');

function groupList() {
    exec("mc.exe admin group list " + alias, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
    });
}

function groupAdd() {
    groupName = document.getElementById('groupname1').value;
    username = document.getElementById('username1').value;
    exec("mc.exe admin group add" + " " + 
            alias + " " + 
            groupName + " " +
            username, 
            (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('groupname1').value = "";
        document.getElementById('username1').value = "";
    });
}

function groupRemoveUser() {
    groupName = document.getElementById('groupname2').value;
    username = document.getElementById('username2').value;
    exec("mc.exe admin group remove" + " " + 
            alias + " " + 
            groupName + " " +
            username, 
            (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('groupname2').value = "";
        document.getElementById('username2').value = "";
    });
}

function groupRemoveGroup() {
    groupName = document.getElementById('groupname3').value;
    exec("mc.exe admin group remove" + " " + 
            alias + " " + 
            groupName, 
            (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('groupname3').value = "";
    });
}

function groupInfo() {
    groupName = document.getElementById('groupname4').value;
    exec("mc.exe admin group info" + " " + 
            alias + " " + 
            groupName, 
            (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('groupname4').value = "";
    });
}

function groupEnable() {
    groupName = document.getElementById('groupname5').value;
    exec("mc.exe admin group enable" + " " + 
            alias + " " + 
            groupName, 
            (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('groupname5').value = "";
    });
}

function groupDisable() {
    groupName = document.getElementById('groupname6').value;
    exec("mc.exe admin group disable" + " " + 
            alias + " " + 
            groupName, 
            (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('groupname6').value = "";
    });
}