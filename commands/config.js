alias = localStorage.getItem('alias');

// get     get config of a MinIO server/cluster.
// set     set new config file to a MinIO server/cluster.

// function groupList() {
//     exec("mc.exe admin group list " + alias, (error, stdout) => {
//         if (error) {
//             output = error;
//             document.getElementById('outputField').innerHTML = output;
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         //console.log(`stdout: ${stdout}`);
//         output = stdout;
//         document.getElementById('outputField').innerHTML = output;
//     });
// }