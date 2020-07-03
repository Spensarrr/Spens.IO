alias = localStorage.getItem('alias');

// --scan value                     select the healing scan mode (normal/deep) (default: "normal")
// --recursive, -r                  heal recursively
// --dry-run, -n                    only inspect data, but do not mutate
// --force-start, -f                force start a new heal sequence
// --force-stop, -s                 force stop a running heal sequence
// --remove                         remove dangling objects in heal sequence
// --help, -h                       show help