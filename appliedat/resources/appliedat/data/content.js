/*
http://heyfaisal.com/app.lied.at/login.php
http://appliedat.com/login.php
http://mylocalhost/Appliedat/login.php
 */
function addGlobalStyle(doc, css) {
  var head = doc.getElementsByTagName('head')[0]; // find head element, which should exist
  if (!head) {
    return;
  } // defective HTML document
  var style = doc.createElement('style'); // create <style> element
  style.type = 'text/css';
  if (style.styleSheet) { // for some cross-browser problem
    style.styleSheet.cssText = css; // attach CSS text to style elt
  } else {
    style.appendChild(document.createTextNode(css)); // attach CSS text to style elt
  }
  head.appendChild(style); // attach style element to head
}
var css = "#appliedat-wrapper *{margin:0;padding:0;text-align:left;border:0;font-size:13px;font-family:'Lucida Sans Unicode','Lucida Grande',sans-serif;  box-sizing: content-box;-moz-box-sizing: content-box;-webkit-box-sizing: content-box; }#appliedat-wrapper{margin:auto;height:100%;width:400px;position:fixed;top:1%;right:1%;display:none;text-align:left;line-height:normal;z-index:99999999}#appliedat-wrapper .header{background:#eff4f6;border-bottom:1px solid #c3d4db;border-left:1px solid #c3d4db;border-right:1px solid #c3d4db;border-top:1px solid #c3d4db;border-top-left-radius:5px;border-top-right-radius:5px;color:#09c;font-family:'Lucida Sans Unicode','Lucida Grande',sans-serif;font-size:17px;margin:auto;padding:5px 0;text-align:center;width:100%}#appliedat-wrapper .header span{font-size:17px;font-weight:bolder;right:10px;position:absolute}#appliedat-wrapper .header span:hover{text-shadow:0 0 3px gray;cursor:pointer}#appliedat-wrapper .main{background:#fefefe;border-left:1px solid #c3d4db;border-right:1px solid #c3d4db;margin:auto;width:100%;font-size:12px}#appliedat-wrapper .main .content,#appliedat-wrapper .main .login{width:95%;margin:auto;padding-top:5px}#appliedat-wrapper .main .row{display:block;margin-bottom:8px;padding-right:5px}#appliedat-wrapper .main .row span{color:#666362;font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:12px}#appliedat-wrapper .main .row input[type=text],#appliedat-wrapper .main .row input[type=password]{border:2px solid #f7f9fa;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-moz-box-shadow:2px 3px 3px rgba(0,0,0,0.06) inset,0 0 1px #95a2a7 inset;-webkit-box-shadow:2px 3px 3px rgba(0,0,0,0.06) inset,0 0 1px #95a2a7 inset;box-shadow:2px 3px 3px rgba(0,0,0,0.06) inset,0 0 1px #95a2a7 inset;margin:3px 0 4px;padding:8px 6px;width:360px;height:12px;display:block}#appliedat-wrapper .main .row input[type=text]:focus,#appliedat-wrapper .main .row input[type=password]:focus{border:3px solid #f0f7fc;-moz-box-shadow:2px 3px 3px rgba(0,0,0,0.04) inset,0 0 1px #0d6db6 inset;-webkit-box-shadow:2px 3px 3px rgba(0,0,0,0.04) inset,0 0 1px #0d6db6 inset;box-shadow:2px 3px 3px rgba(0,0,0,0.04) inset,0 0 1px #0d6db6 inset;color:#333}#appliedat-wrapper .main .line{height:220px;width:0;margin-top:20px}#appliedat-wrapper .main .right .row select{border-radius:3px;font-size:20px;padding-top:10px;padding-bottom:7px;padding-right:5px;height:50px;width:200px;border:1px solid #696565}#appliedat-wrapper .main .right .row span{color:#666362;font-family:Arial,Helvetica,sans-serif;font-weight:bold}#appliedat-wrapper .main .right .row{display:block}#appliedat-wrapper .main .row textarea{height:200px;border:3px solid #f7f9fa;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-moz-box-shadow:2px 3px 3px rgba(0,0,0,0.06) inset,0 0 1px #95a2a7 inset;-webkit-box-shadow:2px 3px 3px rgba(0,0,0,0.06) inset,0 0 1px #95a2a7 inset;box-shadow:2px 3px 3px rgba(0,0,0,0.06) inset,0 0 1px #95a2a7 inset;margin:3px 0 4px;padding:8px 6px;width:360px;display:block}#appliedat-wrapper .main .row textarea:focus{border:3px solid #f0f7fc;-moz-box-shadow:2px 3px 3px rgba(0,0,0,0.04) inset,0 0 1px #0d6db6 inset;-webkit-box-shadow:2px 3px 3px rgba(0,0,0,0.04) inset,0 0 1px #0d6db6 inset;box-shadow:2px 3px 3px rgba(0,0,0,0.04) inset,0 0 1px #0d6db6 inset;color:#333}#appliedat-wrapper .appliedat_button{-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:15px;background:#a1d8f0;background:-moz-linear-gradient(top,#badff3,#7acbed);background:-webkit-gradient(linear,left top,left bottom,from(#badff3),to(#7acbed));border:1px solid #7db0cc !important;cursor:pointer;font:bold 13px/14px Arial,Helvetica,sans-serif;text-shadow:rgba(0,0,0,0.2) 0 1px 0;color:#fff;-moz-box-shadow:inset rgba(255,255,255,0.6) 0 1px 1px,rgba(0,0,0,0.1) 0 1px 1px;-webkit-box-shadow:inset rgba(255,255,255,0.6) 0 1px 1px,rgba(0,0,0,0.1) 0 1px 1px;box-shadow:inset rgba(255,255,255,0.6) 0 1px 1px,rgba(0,0,0,0.1) 0 1px 1px;margin-left:5px;margin-top:5px;margin-bottom:5px;padding:7px 21px;display:inline-block;text-decoration:none}#appliedat-wrapper .appliedat_button:hover,#appliedat-wrapper .appliedat_button:focus,#appliedat-wrapper .appliedat_button:active{background:#a1d8f0;background:-moz-linear-gradient(top,#7acbed,#badff3);background:-webkit-gradient(linear,left top,left bottom,from(#7acbed),to(#badff3))}#appliedat-wrapper .appliedat_button:active{text-shadow:rgba(0,0,0,0.3) 0 -1px 0}#appliedat-wrapper .reminder{margin-top:15px}#appliedat-wrapper .footer{font-family:'Lucida Sans Unicode','Lucida Grande',sans-serif;font-size:16px;margin:auto;padding-top:5px;padding-bottom:10px;position:relative;text-align:center;width:100%;background-color:#eff4f6;border-top:1px solid #c3d4db;position:relative;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-left:1px solid #c3d4db;border-right:1px solid #c3d4db;border-bottom:1px solid #c3d4db}#appliedat-wrapper .footer ul{margin:0;text-align:center;padding-top:3px;padding-bottom:3px}#appliedat-wrapper .footer li{display:inline;margin:0;padding:0}#appliedat-wrapper .footer a,#appliedat-wrapper .footer a:visited,#appliedat-wrapper .footer a:active{color:#444;padding:3px;text-decoration:none}#appliedat-wrapper .footer a:hover{color:#000}";
addGlobalStyle(document, css);
self.port.emit('get-logins');

var localDebug = false;
var domain = '';
if (localDebug) {
  domain = "http://mylocalhost/Appliedat/";
} else {
  domain = "http://appliedat.com/";
}

var loginURL = domain + "login.php";
var addJobURL = domain + "addJob.php";
var homeURL = domain + "home.php";
var newEntryURL = "http://appliedat.com/new-entry.php";

var haveLogins = false,  User = '',  Pass = '';

function getText(element){
  return document.querySelector(element).textContent.trim();
}

function saveJob() {
  var authUrl = addJobURL;
  var applied = (document.querySelectorAll('#appliedat-wrapper input[type=radio]')[0].checked ? '1' : '0');
  var authData = [
    "username=" + encodeURIComponent(User),
    "password=" + encodeURIComponent(Pass),
    "site_name=" + encodeURIComponent(document.getElementById('appliedat_SiteName').value),
    "job_url=" + encodeURIComponent(document.getElementById('appliedat_Url').value),
    "description=" + encodeURIComponent(document.getElementById('appliedat_Description').value),
    "notes=" + encodeURIComponent(document.getElementById('appliedat_Notes').value),
    "applied=" + applied,
    "reminder=" + encodeURIComponent(document.getElementById('appliedat_reminderDate').value)
  ].join("&");
  
  var data={"authUrl" : authUrl, "authData" : authData};
  self.port.emit('save-job', data);
  return false;
}
self.port.on('job-saved', function(response){
  console.log(response);
  alert(response.output);
  document.getElementById('appliedat-wrapper').style.display = 'none';
});

self.port.on('logins-saved', function(response){
  console.log(response);
  haveLogins = response.haveLogins;
  User = response.User;
  Pass = response.Pass;
  document.querySelector('#appliedat-wrapper #saved_info').style.display='block';
  document.querySelector('#appliedat-wrapper #btnSaveLogin').style.display='none';
  setTimeout(function(){
    document.querySelector('#appliedat-wrapper .main .login').style.display='none';
    document.querySelector('#appliedat-wrapper .main .content').style.display='block';
  },1500);  
});

function CreateBox() {
  //evt_Name, evt_Date, evt_Where, evt_OtherDetails, evt_List
  var el = document.createElement('div');
  var s = "<div class='header'>Add to Applied.at<span id='close' style='font-size: 17px;font-weight: bold; color#333;right: 10px;position: absolute;'>X</span></div><div class='main'><div class='login' style='display:none'><br><div class='row'><span>Please update your Appliedat.com credentials to Save jobs in your account. <br>If not signed up, please signup here <a href='http://appliedat.com/signup.php' target='_blank'>Signup</a></span><br><br></div><div class='row'><span>UserName</span><br /><input type='text' id='appliedat_username' /></div><div class='row'><span>Password</span><br /><input type='password' id='appliedat_password' /></div><div class='row' style='display:none' id='saved_info'><span style='color:blue;' >Your account details have been saved successfully. <br>You can start using the extension now to save job listings..</span></div><a id='btnSaveLogin' class='appliedat_button'>Update</a></div><div class='content'><div class='row'><span>Title</span><br /><input type='text' id='appliedat_SiteName' /></div><div class='row'><span>Saved Date &amp; Time</span><br /><input type='text' id='appliedat_SaveDate' /></div><div class='row'><span>URL</span><br /><input type='text' id='appliedat_Url' /></div><div class='row'><span>Job Description</span><br /><textarea id='appliedat_Description'></textarea></div><div class='row'><span>Personal Note</span><br /><input type='text' id='appliedat_Notes' /></div><div class='row'><span>Did you apply for this job?</span> &nbsp;&nbsp; <input type='radio' name='applied' value='1' />Applied &nbsp;&nbsp; <input type='radio' name='applied' value='0' checked='checked' />Didn&#39;t Apply</div><div class='row reminder' style='display:none'><div><input type='checkbox' checked='checked' />&nbsp;&nbsp; Remind me to follow-up when? (Y/m/d format) <input type='text' id='appliedat_reminderDate' /></div></div><a id='btnSaveJob' class='appliedat_button'>Save</a></div></div><div class='footer'><a href='http://appliedat.com/home.php' target='_blank'>Recently Saved&nbsp;&nbsp;/</a><a href='http://appliedat.com/applied.php' target='_blank'>Applied Jobs&nbsp;&nbsp;/</a><a href='http://appliedat.com/help.php' target='_blank'>Help</a>";
  el.setAttribute("id", "appliedat-wrapper");
  document.body.appendChild(el);
  el.innerHTML = s;
  document.querySelectorAll('#appliedat-wrapper input[type=radio]')[0].onclick = function () { //Applied clicked
    document.querySelector('#appliedat-wrapper .reminder').style.display = 'block';
  }
  document.querySelectorAll('#appliedat-wrapper input[type=radio]')[1].onclick = function () { //Not Applied clicked
    document.querySelector('#appliedat-wrapper .reminder').style.display = 'none';
    document.querySelector('#appliedat-wrapper #appliedat_reminderDate').checked = false;
  }
  document.querySelector('#appliedat-wrapper #close').onclick = function () {
    document.getElementById('appliedat-wrapper').style.display = 'none';
  }
  document.querySelector('#appliedat-wrapper #btnSaveLogin').onclick = function () {
    if(document.getElementById('appliedat_username').value!='' && document.getElementById('appliedat_password').value!=''  ){
      var  data = {
        username:document.getElementById('appliedat_username').value,
        password:document.getElementById('appliedat_password').value
      };
      self.port.emit('save-logins', data);
    }
  }
  document.querySelector('#appliedat-wrapper #btnSaveJob').onclick = saveJob;
};

self.port.on('set-logins',function(response){
  haveLogins = response.haveLogins;
  User = response.User;
  Pass = response.Pass;
  CreateBox();
  if (!haveLogins) {
    document.querySelector('#appliedat-wrapper .main .login').style.display='block';
    document.querySelector('#appliedat-wrapper .main .content').style.display='none';
  }
});

self.port.on('show-box',function(){
    var isjobSite = false;
    var description = '';
    var longLine = '\n---------------------------------------------------------------------------------------\n';
    // craiglist.org
    if (document.domain.indexOf('craigslist.org') != -1) {
      if (  document.querySelector('#postingbody' ) && 
            document.querySelector('.cltags'      )) {
            
        isjobSite = true;
        description = getText('#postingbody') + longLine + 'TAGS:-\n' + 
                      getText('.cltags');
      }
    }
    // idealist.org
    if (document.domain.indexOf('idealist.org') != -1) {
      if (document.getElementById('box-Jobdescription') && 
          document.getElementById('box-Howtoapply') &&
          document.getElementById('box-Location') && 
          document.getElementById('box-Details')) {
        
        isjobSite = true;
        description = getText('#box-Jobdescription .body') + longLine + 
                      getText('#box-Howtoapply .body') + longLine +
                      getText('#box-Location .body') + longLine + 
                      getText('#box-Details .body');
      }
    }
    // indeed.com
    if (document.domain.indexOf('indeed.com') != -1) {
      if (document.querySelector('#job_header') && 
          document.querySelector('#job_header+table')) {
        
        isjobSite = true;
        description = getText('#job_header') + longLine + 
                      getText('#job_header+table');
      }
    }
    // USAJOBS.org TODO Need to Grab the JobTitle in the header
    if (document.domain.indexOf('usajobs.gov') != -1) {
      if (document.querySelector('#jobinfo1') && 
          document.querySelector('#jobinfo2') &&
          document.querySelector('#jobsummary') && 
          document.querySelector('#keyrequirements') && 
          document.querySelector('#duties') && 
          document.querySelector('#qualifications') &&
          document.querySelector('#requireddocuments') && 
          document.querySelector('#agencycontact')) {
        
        isjobSite = true;
        description = getText('#jobinfo1') + longLine +
                      getText('#jobinfo2') + longLine +
                      getText('#jobsummary') + longLine +
                      getText('#keyrequirements') + longLine +
                      getText('#duties') + longLine +
                      getText('#qualifications') + longLine +
                      getText('#requireddocuments') + longLine +
                      getText('#agencycontact');
      }
    }
    // Monster.com TODO Add more support
    if (document.domain.indexOf('jobview.monster.com') != -1) {
      if (document.getElementById('jobcopy') && 
          document.getElementById('jobBodyContent') &&
          document.getElementById('jobsummary')) {
        
        isjobSite = true;
        description = getText('#jobcopy') + longLine +
                      getText('#jobBodyContent') + longLine +
                      getText('#jobsummary');
      }

      if (document.querySelector('table')) {
        isjobSite = true;
        description = getText('table');
      }
    }
    // bright.com
    if (document.domain.indexOf('bright.com') != -1) {
      if( document.querySelector('.company-details') && 
          document.querySelector('.job-details') && 
          document.getElementById('job-description')) {
        isjobSite = true;
        description = getText('.company-details') + longLine +
                      getText('.job-details') + longLine +
                      getText('#job-description');
      }
    }
    // glassdoor.com
    if (document.domain.indexOf('glassdoor.com') != -1) {
      if (document.querySelector('.desc')) {
        isjobSite = true;
        description = getText('.desc');
      }
    }
    // linkedin.com
    if (document.domain.indexOf('linkedin.com') != -1) {
      if (document.querySelector('.job-description') && 
          document.querySelector('.job-skills') && 
          document.querySelector('.company-description') && 
          document.querySelector('.additional-info')) {
        
        isjobSite = true;
        description = getText('.job-description') + longLine +
                      getText('.job-skills') + longLine +
                      getText('.company-description') + longLine +
                      getText('.additional-info');
      }
      
      if (document.querySelector('.job-description') && 
          document.querySelector('.additional-info')) {
        isjobSite = true;
        description = getText('.job-description') + longLine +
                      getText('.additional-info');
      }
      if (document.querySelector('.job-description') && 
          document.querySelector('.company-description') && 
          document.querySelector('.additional-info')) {
        isjobSite = true;
        description = getText('.job-description') + longLine +
                      getText('.company-description') + longLine +
                      getText('.additional-info');
      }
    }
    // TheLadders.com
    if (document.domain.indexOf('theladders.com') != -1) {
      if (document.querySelector('.shiftDown')) {
        isjobSite = true;
        description = getText('.shiftDown');
      }
    }
    // snagajob.com
    if (document.domain.indexOf('snagajob.com') != -1) {
      if (document.querySelector('.jobDescription')) {
        isjobSite = true;
        description = getText('.jobDescription');
      }
    }
    // ziprecruiter.com
    if (document.domain.indexOf('ziprecruiter.com') != -1) {
      if (document.querySelector('.jobDescription')) {
        isjobSite = true;
        description = getText('.jobDescription');
      }
    }
    // dice.com
    if (document.domain.indexOf('dice.com') != -1) {
      if (document.location.href.indexOf('/job/result/') != -1) {
        if (document.getElementById('jobOverview') && 
            document.getElementById('detailDescription') &&
            document.getElementById('contactInfo')) {
          
          isjobSite = true;
          description = getText('#jobOverview') + longLine +
                        getText('#detailDescription') + longLine +
                        getText('#contactInfo') + longLine;
        }
      } 
      if (document.location.href.indexOf('jobsearch/servlet') != -1) {
        if (document.querySelector('.job_overview') && 
            document.querySelector('.contact_info') &&
            document.querySelector('.job_description')) {
          
          isjobSite = true;
          description = getText('.job_description') + longLine +
                        getText('.job_overview') + longLine +
                        getText('.contact_info') + longLine;
        }
      }

    }
  if (!isjobSite) {
     // do extra magic to tell user we don't support this yet
      document.querySelector('#appliedat-wrapper .header').setAttribute('style', 'border-width: 3px; border-color:red; border-bottom: 1px solid #C3D4DB');
      document.querySelector('#appliedat-wrapper .main').setAttribute('style', 'border-width: 3px; border-color:red;');
      document.querySelector('#appliedat-wrapper .footer').setAttribute('style', 'border-width: 3px; border-color:red; border-top: 1px solid #C3D4DB');
      document.getElementById('appliedat_Description').style.color='red';
      description = "We don't support this site yet, so ENTER the description on your own......"; 
    } 
    var d = new Date();
    document.getElementById('appliedat_SiteName').value = document.title;
    document.getElementById('appliedat_SaveDate').value = d.toGMTString();
    document.getElementById('appliedat_Url').value = location.href;
    document.getElementById('appliedat_Description').value = description;
    document.getElementById('appliedat_Notes').value = '';
    var reminder = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    //;+ " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.getElementById('appliedat_reminderDate').value = reminder;
    document.getElementById('appliedat-wrapper').style.display = 'block';
});

