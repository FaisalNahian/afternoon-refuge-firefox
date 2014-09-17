var tabs = require('tabs');
var pageMod = require('page-mod');
var data = require('self').data;
var tabs = require("tabs");
var sStorage = require("sdk/simple-storage").storage;
var CapturedData;
var contextMenu = require("sdk/context-menu");
var Request = require("request").Request;
//var mediator = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator);
var toolbarbutton = require("toolbarbutton");
var button;
function createButton(options) {
  return toolbarbutton.ToolbarButton({
    id: "tb_button",
    label: "Save this job",
    tooltiptext: "Appliedat.com",
    image: data.url("icons/icon19.png"),
    /*onCommand: function(e) {
        console.log("Addon Button Commanded");
       // button.button().setAttribute('image', data.url("Click2CallLogo.ico")); // Change the button's icon
    },*/
    onClick: function(e) {
      console.log("Addon Button Clicked");
      if (e.which == 1) {
        for (var i = 0; i < workers.length; i++){
          if (workers[i].tab.index === tabs.activeTab.index){
            console.log("workers[i].tab = "+workers[i].tab.title +", tabs.activeTab = "+tabs.activeTab.title)
            workers[i].port.emit("show-box", "");
          }
        }
      } else{
         tabs.open(data.url("options.html"));
      }
      
       // button.button().setAttribute('image', data.url("Click2CallLogo.ico")); // Change the button's icon
    }
  });
}


if (!sStorage.firstRun) {
  tabs.open(data.url("options.html"));
  sStorage.firstRun = true;
}
if (!sStorage.username) {
  sStorage.username = '';
}
if (!sStorage.password) {
  sStorage.password = '';
}
var workers = [];
pageMod.PageMod({
  include : ['http://*','https://*'],
  contentScriptWhen : "ready",
  attachTo : ["existing", "top"],
  contentScriptFile : data.url("content.js"),
  onAttach : function (worker) {
    worker.port.on('get-logins', function (data) {
      var d={
        haveLogins : false,
        User : sStorage['username'],
        Pass : sStorage['password']
      }
      if (sStorage['username'] == '' || sStorage['username'] == undefined || sStorage['password'] == '' || sStorage['password'] == undefined ) {
      
      }else{
        d.haveLogins = true;
      }
      worker.port.emit('set-logins',d);
    });
    worker.port.on('save-logins', function (data) {
      sStorage['username'] = data.username;
      sStorage['password'] = data.password;
      var d={
        haveLogins : true,
        User : sStorage['username'],
        Pass : sStorage['password']
      }
      worker.port.emit('logins-saved',d);
    });
    worker.port.on('save-job', function (data) {
      Request({
        "url" : data.authUrl,
        "content" : data.authData,
        onComplete : function (response) {
          var resp = response.json;
          console.log('job saved:- ' + response.text);
          if (response.status == "200") {
            worker.port.emit('job-saved', resp);
          }
        }
      }).post();
    });

    
     
    workers.push(worker);
  
    worker.on("detach", function(){
      var index = workers.indexOf(worker);
      if (index >= 0)
        workers.splice(index, 1);
    });
    
  }
});
var script = "self.on('click', function (node, data) {" +
             "  console.log('clicked: ' + node.nodeName);" +
             "self.postMessage();"+
             "});";
 var defaultContext = contextMenu.Item({
  label: "Save this job for later...",
  image: data.url("icons/icon16.png"),
  context: contextMenu.PageContext(), //contextMenu.URLContext("*"),
  contentScript: script,
  
  onMessage: function () {
  for (var i = 0; i < workers.length; i++){
    if (workers[i].tab.index === tabs.activeTab.index){
       console.log("workers[i].tab = "+workers[i].tab.title +", tabs.activeTab = "+tabs.activeTab.title)
        workers[i].port.emit("show-box", "");
        }
    }
  }
  
}); 


/* get preference for option html*/
var prefs_pageMod = require("sdk/page-mod");
prefs_pageMod.PageMod({
  include: data.url("options.html"),
  contentScriptWhen : "ready",
  attachTo : ["existing", "top"],
  contentScriptFile : data.url("options.js"),
  onAttach : function (worker) {
    var prefs = {username: sStorage.username, password: sStorage.password};
    
    worker.port.emit('load-options', prefs);
    
    worker.port.on('save-options', function (data) {
      sStorage.username = data.username;
      sStorage.password = data.password;
    });
  }
});

 button = createButton();
  
  button.moveTo({
    toolbarID: "nav-bar",
    forceMove: false
  });
  button
exports.onUnload = function (reason) {
  console.log(reason + '\n');
  if (reason == 'disable') {
    console.log('Uninstalling.. ' + sStorage.firstRun);
    sStorage.firstRun = false;
  }
};
