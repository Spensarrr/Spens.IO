alias = localStorage.getItem('alias');

function profileStart() {
    type = document.getElementById('type1').value;
    exec("mc.exe admin profile start " + type + " " + alias, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('type1').value = "";
    });
}

function profileStop() {
    exec("mc.exe admin profile stop " + alias, (error, stdout) => {
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
