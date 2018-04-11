function loadTwitter() {
    $.ajax({
      url: '//socialtrackr.herokuapp.com/search/_myfashionhub',
      dataType: 'json',
      success: displayTweets
    });
  }
  
  
  function displayTweets(data) {
    for (var i = 0; i < 5; i++) {
      var tweet = $('<span>').html(data[i]['content']);
      tweet.appendTo('.tweets').hide();
    }
  
    var tweets     = $('.tweets').children();
    var firstTweet = tweets.first();
    firstTweet.addClass('current').fadeIn();
  
    setInterval(function() {
      var currentIdx = $('.tweets').find('.current').index();
      tweets.eq(currentIdx).removeClass('current').fadeOut(500, function() {
  
        if (currentIdx + 1 === tweets.length) { currentIdx = -1 }
        tweets.eq(currentIdx + 1).addClass('current').fadeIn();
      });
    }, 3500);
  }
  
  
  function iconHover() {
    var socialLis = $('.contact').children();
  
    var hoverState = function() {
      $(this).animate({
        'top' : '-6px',
        'backgroundColor': 'rgba(255,155,77,0.8)'});
    };
  
    var normalState = function() {
       $(this).animate({
         'top' : '0',
         'backgroundColor': 'transparent'});
     };
  
    for (var i = 0; i < socialLis.length; i++) {
      $(socialLis[i]).mouseenter(hoverState);
      $(socialLis[i]).mouseout(normalState);
    }
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
