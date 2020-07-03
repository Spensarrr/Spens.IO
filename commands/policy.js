alias = localStorage.getItem('alias');

function policyList() {
    exec("mc.exe admin policy list " + alias, (error, stdout) => {
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

function policyAdd() {
    policyName = document.getElementById('policyname1').value;
    fileName = document.getElementById('filename1').value;
    exec("mc.exe admin policy add " + alias + " " + policyName + " " + fileName, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('policyname1').value = "";
        document.getElementById('filename1').value = "";
    });
}

function policyRemove() {
    policyName = document.getElementById('policyname2').value;
    exec("mc.exe admin policy remove " + alias + " " + policyName, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('policyname2').value = "";
    });
}

function policyInfo() {
    policyName = document.getElementById('policyname3').value;
    exec("mc.exe admin policy info " + alias + " " + policyName, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('policyname3').value = "";
    });
}

function policySetUser() {
    policyName = document.getElementById('policyname4').value;
    userName = document.getElementById('username4').value;
    exec("mc.exe admin policy set " + alias + " " + policyName + " user=" + userName, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('policyname4').value = "";
        document.getElementById('username4').value = "";
    });
}

function policySetGroup() {
    policyName = document.getElementById('policyname5').value;
    groupName = document.getElementById('groupname5').value;
    exec("mc.exe admin policy set " + alias + " " + policyName + " group=" + groupName, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('policyname5').value = "";
        document.getElementById('groupname5').value = "";
    });
}