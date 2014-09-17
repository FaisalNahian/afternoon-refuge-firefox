
self.port.on('load-options',function(data){
  var username = data['username'] ;
  var password = data['password'] ;
  document.getElementById('appliedat_username').value = username;
  document.getElementById('appliedat_password').value = password;
});

document.getElementById('btnSaveLogin').onclick = function () {
  var data={'username': document.getElementById('appliedat_username').value,
            'password': document.getElementById('appliedat_password').value};
  document.querySelector('#appliedat-wrapper #saved_info').style.display = 'block';
  self.port.emit('save-options',data);
  setTimeout(function () {
    location.reload();
  }, 10000);
};
