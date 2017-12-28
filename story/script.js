// Scroll Reveal
$(document).ready(function(){

  window.ck_name = /^[A-Za-z0-9 ]{3,20}$/
	window.ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	window.ck_username = /^[A-Za-z0-9-_]{1,20}$/

  $('#menu-icon').click(function(){
    if( $('#menu-icon').hasClass('fa-bars') ) {
      $(this).removeClass('fa-bars').addClass('fa-times');
    }
    else {
      $(this).removeClass('fa-times').addClass('fa-bars');
    }
  });

  var bioPic = {
    origin   : "bottom",
    distance : "32px",
    duration : 500,
    delay    : 500,
    scale    : 0
  };

  var textContainer = {
    origin   : "bottom",
    distance : "32px",
    duration : 1000,
    delay    : 1000,
    scale    : 0
  };

  var revONE = {
    origin   : "top",
    distance : "32px",
    duration : 500,
    delay    : 500,
    scale    : 0
  };

  window.sr = ScrollReveal({ duration: 500 });
  sr.reveal('#header-img-c', bioPic);
  sr.reveal('#head-text-c', textContainer);
  sr.reveal('.rev-1', revONE);

  //

  var reg = $('#top-bar');
  var height = $(window).height();
  var point = height / 3;

  $(window).scroll(function(){

    var top = $(window).scrollTop();

    if( top > point ) {
      reg.removeClass('reg-1');
    }
    else {
      reg.addClass('reg-1');
    }

  });

  $('#top-links li a').click(function(){

    var id = $(this).attr('name');

    /*$('html, body').animate({
	    scrollTop: pos // $("#sdl").offset().top
	  }, 1000);*/

  });

  $('.bta').click(function(){
    $('html, body').animate({
      scrollTop: 0 // $("#sdl").offset().top
    }, 1725);
  });

  //

  $('#send-form-btn').click(function(){

			var name = $('#f-name').val();
			var email = $('#f-email').val();
			var subject = $('#f-subject').val();
			var message = $('#f-message').val();

			if(name == '') {
				alert('Name Field Is Required.');
				return;
			}
			if(email == '') {
				alert('Email Field Is Required.');
				return;
			}
			if(!ck_email.test(email)) {
				alert('Bad Email Input.');
				return;
			}
			if(subject == '' || subject.length <= 3) {
				alert('Subject Is Required And Should Be Descriptive.');
				return;
			}
			if(message == '' || message.length <= 10) {
				alert('Message Field Is Required And Should Be Descriptive.');
				return;
			}

			var obj = {
				name: name,
				email: email,
				subject: subject,
				message: message
			}

			$('#form').hide();
			$('#loading-gif').show();

			var jsonSTR = JSON.stringify(obj);

			$.ajax({
				url: 'http://ryanwaite.tk/sendemail.php?j=' + jsonSTR,
				type: 'POST',
				contentType: 'application/json',
				//data: JSON.stringify(obj),
				success: function(data) {
					console.log(data);
					$('#f-name').val('');
					$('#f-email').val('');
					$('#f-subject').val('');
					$('#f-message').val('');
					$('#form').show();
					$('#loading-gif').hide();
					$('#msg').text('Message Sent!');
					setTimeout(function(){ $('#msg').text(''); } , 5000)
				}
			})

		});

});

// Main Angular Application
var App = angular.module("myApp", []);

/*App.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);*/

App.controller('masterCtrl', ['$scope', function($scope) {

	$scope.references = [
		{
			name: 'Larry Rubin',
			icon: '../img/laurence_rubin.png',
			linkedin: 'https://www.linkedin.com/in/larry-rubin-cpa-82b20a6',
			email: 'lrubin@aronsonllc.com'
		},
		{
			name: 'Aaron Brachman',
			icon: '../img/aaron_brachman.jpg',
			linkedin: 'https://www.linkedin.com/in/aaron-brachman-cfp%C2%AE-aams-a82b3a3/',
			email: 'aaron.brachman@stewardpartners.com'
		},
		{
			name: 'Kristi Dearing',
			icon: '../img/kristi_dearing.jpg',
			linkedin: 'https://www.linkedin.com/in/kristi-dearing-46a62727',
			email: 'ksddearing@gmail.com'
		},
		{
			name: 'Jason Gromley',
			icon: '../img/jason_gromley.jpg',
			linkedin: 'https://www.linkedin.com/in/jason-gromley-a3358031',
			email: 'jason.gromley@shcare.net'
		},
		{
			name: 'Britany Miller',
			icon: '../img/britany_miller.jpg',
			linkedin: 'https://www.linkedin.com/in/britanymiller',
			email: 'b.miller5@yahoo.com'
		},
		{
			name: 'Debrina Harrell',
			icon: '../img/debrina_harrell.jpg',
			linkedin: 'https://www.linkedin.com/in/debrina-harrell-mba-aa1084a',
			email: 'debrinah@gmail.com'
		},
		{
			name: 'Steve Walker',
			icon: '../img/steve_walker.jpg',
			linkedin: 'https://www.linkedin.com/in/stevewalkerpmp',
			email:'SteveWalkerNY@gmail.com'
		},
		/*{
			name: 'Gina Allen',
			icon: '/img/gina_allen.jpg',
			linkedin: 'https://www.linkedin.com/in/allengm',
			email: 'gallen@YearUp.org'
		},*/
		{
			name: 'Katrina Hill',
			icon: '../img/katrina_hill.jpg',
			linkedin: 'https://www.linkedin.com/in/katrinarhill',
			email: 'katrina.hill0823@gmail.com'
		},
		{
			name: 'Rashad Hammonds',
			icon: '../img/rashad_hammonds.jpg',
			linkedin: 'https://www.linkedin.com/in/rashad-hammonds-78403076',
			email: 'rashad.hammonds0114@gmail.com'
		},
		{
			name: 'Allison Alt',
			icon: '../img/allison_alt.jpg',
			linkedin: 'https://www.linkedin.com/in/allisonalt',
			email: 'allisonclairealt@gmail.com'
		}
	]

}])
