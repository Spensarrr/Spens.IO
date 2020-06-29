alias = localStorage.getItem('alias');

function serviceInfo() {
    exec('mc.exe admin --json info ' + alias, (error, stdout) => {
        if (error) {
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
    });
}

function serviceRestart() {
    exec('mc.exe admin service restart ' + alias, (error, stdout) => {
        if (error) {
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
    });
}

function serviceStop() {
    exec('mc.exe admin service stop ' + alias, (error, stdout) => {
        if (error) {
            document.getElementById('outputField').innerHTML = output;
            console.log(`error: ${error.message}`);
            return;
        }
        output = stdout;
        document.getElementById('outputField').innerHTML = output;
    });
}