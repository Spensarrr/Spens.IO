alias = localStorage.getItem('alias');

function configGet() {
    command = document.getElementById('config1').value;
    exec("mc.exe admin config get " + alias + " " + command, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('config1').value = "";
    });
}

function configSet() {
    command = document.getElementById('config2').value;
    exec("mc.exe admin config set " + alias + " " + command, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('policyconfig2name1').value = "";
    });
}