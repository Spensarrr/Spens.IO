alias = localStorage.getItem('alias');

function healCommand1() {
    flag = document.getElementById('heal1').value;
    exec("mc.exe admin heal " + flag + " " + alias, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('heal1').value = "";
    });
}

function healCommand2() {
    flag = document.getElementById('heal2').value;
    path = document.getElementById('path').value;
    exec("mc.exe admin heal " + flag + " " + alias + " " + path, (error, stdout) => {
        if (error) {
            output = error;
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
        document.getElementById('heal2').value = "";
        document.getElementById('path').value = "";
    });
}

function healStatus() {
    exec("mc.exe admin heal " + alias, (error, stdout) => {
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