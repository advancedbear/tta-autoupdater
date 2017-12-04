var gui = require('nw.gui');
var https = require('https');
var path = require('path');
var fs = require('fs');
var child_process = require('child_process');

var url = 'https://dl.dropboxusercontent.com/s/dpw5qaj1kn16rm2/TwitchTalkApp.exe';
var exePath = path.join(path.dirname(process.execPath),"TwitchTalkApp.exe");
var cws = fs.createWriteStream(exePath);

nw.Window.get().on('loaded', function(){
    var req = https.get(url, function(res){
        console.log(res.headers);
        res.pipe(cws);
        
        res.on('end', function () {
            console.log("download finish!");
            $('.message').text("Launching new version...");
            cws.end();
            setTimeout(function(){
                gui.Shell.openExternal(exePath);
                setTimeout(function(){
                    nw.Window.get().close();
                },1000);
            }, 2000);
        }); 
    })

    req.on('error', function (err) {
        alert('ダウンロードに失敗しました。手動でダウンロードしてください。');
        gui.Shell.openExternal('https://advancedbear.github.io/products.html#TwitchTalkApp');
        return;
    });
});