const readline = require('./console_io');
let f_name = " ";
let l_name = " ";

readline.console_input.question(` Enter your first name: `, function(_name_) {
    f_name = _name_;
    readline.console_input.close();
});

readline.console_input.question(` Enter your Second name: `, function(_name_) {
    l_name = _name_;
    readline.console_input.close();
});

readline.console_input.on('close', function() {
    console.log(` Hello, ${f_name} ${l_name}`);
});