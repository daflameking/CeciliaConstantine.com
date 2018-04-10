// These need to be loaded before other elements so user doesn't see the switch
$(window).ready(function() {
    changeScrollerIcon();
    $(overlay).toggle(false);
});

$(document).ready(function() { 
    changeNavIcon(); 
    showNav();
    closeNavWithLinks();
    printCurrentYear();
    document.getElementById("getmessage").addEventListener("click", updateTwitterFeed);
});

// GLOBAL VARIABLES
var mobileMenu = document.getElementById("mobile-menu");
var overlay = document.getElementById("overlay");
var icon = document.getElementById("menu-icon");

// METHODS
function showNav() { 
    $(mobileMenu).on("click", function() {
        $(overlay).toggle();   
    });
}

function changeNavIcon() {
    $(mobileMenu).on("click", function() {
    $(icon).text(
        $(icon).text() == "close" ? "menu" : "close"
    )
    });
}

function closeNavWithLinks(){
    $("#overlay a").on("click", function() {
        $(overlay).toggle(false); 
        $(icon).text("menu");
    });   
}

function changeScrollerIcon() {
    var scroller = document.getElementById("scroll-icon");
    if ($(window).width() >= 650) {
        $(scroller).attr("src", "src/assets/icons/001-mouse-clicker.png");
    } else {
        $(scroller).attr("src", "src/assets/icons/013-hand.png");
    }
};

function printCurrentYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("copy-year").innerHTML = currentYear;
}

function updateTwitterFeed() {
    // document.getElementById("message").innerHTML ="Here is the message!";
    $.getJSON("/json/cats.json", function(json) {
        $(".message").html(JSON.stringify(json));
    });
    
    // send-contact = contact form button
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatecchange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("form-confirmation").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
    // preparing for AJAX call from FCC tutorial by creating a click event handler
    // $("#getmessage").on("click", function() {
    //     $(".twitte
    

/* Fetch any embeddable Twitter object from the OEmbed API */

// let oembedResponse = await fetch(new Request('https://publish.twitter.com/oembed?url=https://twitter.com/ceciliaconsta3/status/976456784821993472'));
// let oembedTweet = oembedResponse.json();

// {
//     "url": "https://twitter.com/ceciliaconsta3/status/976456784821993472",
//     "author_name": "ceciliaconsta3",
//     "author_url": "https://twitter.com/ceciliaconsta3",
//     "html": "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">just setting up my twttr</p>&mdash; jack (@jack) <a href=\"https://twitter.com/jack/status/20\">March 21, 2006</a></blockquote>\n<script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>",
//     "width": 550,
//     "height": null,
//     "type": "rich",
//     "cache_age": "3153600000",
//     "provider_name": "Twitter",
//     "provider_url": "https://twitter.com",
//     "version": "1.0"
//   }

}

document.addEventListener("scroll", function() {
    if (document.body.scrollTop >= 605) {
        mobileMenu.style.background = "#eb8cb6";
        mobileMenu.style.boxShadow = "1px 5px 32px -9px #555";
    } else {
        mobileMenu.style.background = "transparent";
        mobileMenu.style.boxShadow = "none";
    }
});



// Form email submission and OAuth validation
// Followed SitePoint tutorial ref: https://www.sitepoint.com/sending-emails-gmail-javascript-api/

// restricted credentials
var clientId = "363670200860-5fu1vu3tn13vm2kn0cu349ahoko18dcf.apps.googleusercontent.com";
var apiKey = "AIzaSyBPXCYugi8OaUMn8og6Lr1N_QOggd_aKz8";

// dictating authentification scopes
var scopes = 'https://www.googleapis.com/auth/gmail.readonly '+
  'https://www.googleapis.com/auth/gmail.send';

function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth, 1);
  }

function checkAuth() {
  gapi.auth.authorize({
    client_id: clientId,
    scope: scopes,
    immediate: true
  }, handleAuthResult);
}

function handleAuthClick() {
  gapi.auth.authorize({
    client_id: clientId,
    scope: scopes,
    immediate: false
  }, handleAuthResult);
  return false;
}

// hide the form elements after form is successfully sent
function handleAuthResult(authResult) {
  if(authResult && !authResult.error) {
    loadGmailApi();
    $('#authorize-button').remove();
    $('.table-inbox').removeClass("hidden");
    $('#compose-button').removeClass("hidden");
  } else {
    $('#authorize-button').removeClass("hidden");
    $('#authorize-button').on('click', function(){
      handleAuthClick();
    });
  }
}

function sendEmail()
{
  // prevent user from clicking button again while request is in progress
  $('#send-contact').addClass('disabled');
  sendMessage(
    {
      'name': $('#msg-from').val(),
      'email': $('#msg-email').val(),
      'Subject': $('#msg-subject').val(),
    },
    $('#msg-text').val(),
    composeTidy
  );
  // prevents form from submitting and reloading the page
  return false;
}

function composeTidy()
{
  $("#thank-you-msg").css("display", "block");
  $("contact-title").css("display", "none");
  $("contact-text").css("display", "none");  
  $('#gfrom').css("display", "none");
  $('#msg-from').val('');
  $('#msg-email').val('');
  $('#msg-subject').val('');
  $('#msg-text').val('');
  $('#send-contact').removeClass('disabled');
}

function sendMessage(headers_obj, message, callback)
{
  var email = '';

  for(var header in headers_obj)
    email += header += ": "+headers_obj[header]+"\r\n";
  email += "\r\n" + message;

  var sendRequest = gapi.client.gmail.users.messages.send({
    'userId': 'me',
    'resource': {
      'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
    }
  });
  return sendRequest.execute(callback);
}

