// $(document).ready(function() {

// to make sure full pager always works, make sure the first section is always 'firstPage'
  
// })

$(window).on("load",function(){
    // Animate loader off screen
    $("body").fadeIn("slow");

    $('#fullpage').fullpage({
    anchors: ['firstPage', 'fourthPage', 'thirdPage','secondPage','lastPage'],
    menu: '#menu ',
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['Intro', 'Omega Go','123Tiles','Letterix','NeverEnd'],
    showActiveTooltip: true,
    keyboardscrolling: true,
    scrollingSpeed: 800,
    responsiveWidth: 1024,
    responsiveHeight: 400,
    loopBottom: true,
    fixedElements: '#header',

    // onLeave: function(index, nextIndex, direction){
    //   var thisSection = "#section"+ (index-1)
    //   $(thisSection+ ' div.words').removeClass('active').addClass('inactive');
    //   // $(thisSection+ ' img.screenshot').removeClass('active').addClass('inactive');

    //   // detect the next section
    //   if(direction == 'down') {
    //     var nextSection = "#section"+index;
    //   } else if (direction == 'up') {
    //     var nextSection = "#section"+(index-2);
    //   }
    //   console.log(nextSection)
    //   if (nextSection != ('section0')){
    //     $(nextSection + ' div.words').removeClass('inactive').addClass('active');
    //     // $(nextSection + ' img.screenshot').removeClass('inactive').addClass('active');
    //   }
    //     // else if(index == 2 && direction == 'up'){
    //     //     alert("Going to section 1!");
    //     // }
    // // }
    // }
  })
});

