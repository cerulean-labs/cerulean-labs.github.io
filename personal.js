// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {

var wordWrap = tricksWord.item(i);
wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksword">$2</span>');

}

var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {

   var letterWrap = tricksLetter.item(i);
   letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

}

// Fade Up Animation for Name in Loading Animation
var fadeUp = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUp 
  .add({
    targets: '.fade-up .letter',
    translateY: [10,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 200 + 30 * i
  	})
    .add({
    	targets: '.fade-up',
      scaleX: .8,
      scaleY: .8,
      opacity: [1,0],
      easing: 'easeOutExpo',
      duration: 500,
  });
  
  
  // Fade Up Logo Animation for Loading Animation
var fadeLogo = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeLogo 
  .add({
    targets: '.fade-logo',
      scaleX: .8,
      scaleY: .8,
      opacity: [0,1],
      easing: 'easeOutExpo',
      duration: 500,
      delay: 2000,
  	})
    .add({
    	targets: '.fade-logo',
      scaleX: .6,
      scaleY: .6,
      opacity: [1,0],
      easing: 'easeOutExpo',
      duration: 500,
   });
  
 // Fade Up Animation for Resources CMS Grid
var fadeUpResources = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpResources 
  .add({
    targets: '.resources-container',
    translateY: [100,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 600 + 400 * i
  	});
    
//YOUTUBE SECTION
// h2Appear Animation
var h2Appear = anime.timeline({
  loop: false,
  autoplay: false,
});

h2Appear
  .add({
    targets: '.h2 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  });
  
  
  // h2Appear Animation
var ytIconAppear = anime.timeline({
  loop: false,
  autoplay: false,
});

ytIconAppear
  .add({
    targets: '.yt-icon',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2400,
    delay: (el, i) => 500 + 30 * i
  });
  
  
  // h4Appear Animation
var h4Appear = anime.timeline({
  loop: false,
  autoplay: false,
});

h4Appear
  .add({
    targets: '.h4 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 700 + 30 * i
  });
  
    // pAppear Animation
var pAppear = anime.timeline({
  loop: false,
  autoplay: false,
});

pAppear
  .add({
    targets: '.p',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1800,
    delay: (el, i) => 1000 + 30 * i
  });
 
     // ytAppear Animation (Button)
var ytAppear = anime.timeline({
  loop: false,
  autoplay: false,
});

ytAppear
  .add({
    targets: '.button-yt-channel',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1800,
    delay: (el, i) => 1000 + 30 * i
  });
 
 
// Appear Animation
var videoCardAppear = anime.timeline({
  loop: false,
  autoplay: false,
});

videoCardAppear
  .add({
    targets: '.video-card',
    translateX: [100,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 1200 + 250 * i
  });

//--------------TikTok Section --------------------------------------------
// h2Appear Animation
var h2AppearTikTok = anime.timeline({
  loop: false,
  autoplay: false,
});

h2AppearTikTok
  .add({
    targets: '.h2-tt .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  });
  
  
  // h2Appear Animation
var ttIconAppear = anime.timeline({
  loop: false,
  autoplay: false,
});

ttIconAppear
  .add({
    targets: '.tt-icon',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2400,
    delay: (el, i) => 500 + 30 * i
  });
  
  
  // h4Appear Animation
var h4AppearTikTok = anime.timeline({
  loop: false,
  autoplay: false,
});

h4AppearTikTok
  .add({
    targets: '.h4-tt .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 700 + 30 * i
  });
  
    // pAppear Animation
var pAppearTikTok = anime.timeline({
  loop: false,
  autoplay: false,
});

pAppearTikTok
  .add({
    targets: '.p-tt',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2300,
    delay: (el, i) => 1500 + 30 * i
  });
 
     // ttAppear Animation (Button)
var ttAppear = anime.timeline({
  loop: false,
  autoplay: false,
});

ttAppear
  .add({
    targets: '.button-tt-channel',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1800,
    delay: (el, i) => 2000 + 30 * i
  });


// ttAppearVideo1 Animation (Video 1)
var ttAppearVideo1 = anime.timeline({
  loop: false,
  autoplay: false,
});

ttAppearVideo1
  .add({
    targets: '.tt-container-1',
    translateY: [70,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2300,
    delay: (el, i) => 2100 + 30 * i
  });

// ttAppearVideo2 Animation (Video 2)
var ttAppearVideo2 = anime.timeline({
  loop: false,
  autoplay: false,
});

ttAppearVideo2
  .add({
    targets: '.tt-container-2',
    translateY: [70,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2300,
    delay: (el, i) => 2100 + 30 * i
  });
  
  
// bioAppear Animation---------------------------------

var bioAppear = anime.timeline({
  loop: false,
  autoplay: false,
});

bioAppear 
  .add({
    targets: '.p-bio .tricksword',
    translateY:[50,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 400,
    delay: (el, i) => 200 + 100 * i
  	});
  
  // clientAppear Animation---------------------------------

var clientAppear = anime.timeline({
  loop: false,
  autoplay: false,
});

clientAppear 
  .add({
    targets: '.client-logo',
    translateY:[50,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 1400 + 100 * i
  	});
  


var igGridRipple = anime.timeline({
  loop: false,
  autoplay: false,
});

igGridRipple 
  .add({
    targets: '.ig-grid-container',
    translateY:[50,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 2500 + 100 * i
  	});
  
// Play your animation with these
fadeUp.play();
fadeLogo.play();


// Wait before playing animation
setTimeout(() => {  
	// Put the play below this line
}, 800);

// Play animaton when something is clicked
$( ".your-button-class" ).click(function() {
	// Put the play below this line
});

// Play animaton when hovered in
$( ".your-button-class" ).mouseenter(function() {
		// Put the play below this line
});

// Play animation when scrolled into view
$('#creative-resources').on('inview', function(event, isInView) {
  if (isInView) {
		// Put the play below this line
    
    fadeUpResources.play();

  } else {
  }
});

// Play animation when scrolled into view
$('#yt').on('inview', function(event, isInView) {
  if (isInView) {
		// Put the play below this line
    h2Appear.play();
    ytIconAppear.play();
    h4Appear.play();
    pAppear.play();
    ytAppear.play();
    videoCardAppear.play();

  } else {
  }
});

// Play animation when scrolled into view
$('#tt').on('inview', function(event, isInView) {
  if (isInView) {
		// Put the play below this line
    h2AppearTikTok.play();
    ttIconAppear.play();
    h4AppearTikTok.play();
    pAppearTikTok.play();
    ttAppear.play();
    ttAppearVideo1.play();
    ttAppearVideo2.play();


  } else {
  }
});


// Play animation when scrolled into view
$('#bio').on('inview', function(event, isInView) {
  if (isInView) {
		// Put the play below this line
   bioAppear.play();


  } else {
  }
});

// Play animation when scrolled into view
$('#client').on('inview', function(event, isInView) {
  if (isInView) {
		// Put the play below this line
   clientAppear.play();


  } else {
  }
});

// Play animation when scrolled into view
$('#ig').on('inview', function(event, isInView) {
  if (isInView) {
		// Put the play below this line
   igGridRipple.play();


  } else {
  }
});


// when document is fully loaded
$( document ).ready(function() {


$('.list').slick({
  dots: false,
  speed: 700,
  infinite: true,
  rows: 1,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  touchThreshold:300,
  responsive: [
    {
      // tablet
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      // mobile portrait
      breakpoint: 479,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.slider-prev').click(function(){
    $("#slider-id").slick('slickPrev');
});

$('.slider-next').click(function(){
    $("#slider-id").slick('slickNext');
});


});






      document.addEventListener('DOMContentLoaded', () => {
      const controls = [
      
            'play', // Play/pause playback
            'progress', //Progress Bar
            'current-time', // The current time of playback
            'mute', // Toggle mute
            'volume', // Volume control
        ];
        
         const player = Plyr.setup('.js-player', { controls });
      });


