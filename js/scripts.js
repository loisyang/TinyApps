$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage','lastPage'],
    menu: '#menu',
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['Intro', 'Letterix','123Tiles','About'],
    showActiveTooltip: true,
    keyboardscrolling:true,

    onLeave: function(index, nextIndex, direction){
      var thisSection = "#section"+ (index-1)
      $(thisSection+ ' div.words').removeClass('active').addClass('inactive');
      $(thisSection+ ' img.screenshot').removeClass('active').addClass('inactive');

      // detect the next section
      if(direction == 'down') {
        var nextSection = "#section"+index;
      } else if (direction == 'up') {
        var nextSection = "#section"+(index-2);
      }
      console.log(nextSection)
      if (nextSection != ('section0')){
        $(nextSection + ' div.words').removeClass('inactive').addClass('active');
        $(nextSection + ' img.screenshot').removeClass('inactive').addClass('active');
      }
        // else if(index == 2 && direction == 'up'){
        //     alert("Going to section 1!");
        // }
    // }
    }
  })
})


