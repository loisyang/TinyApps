$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'lastPage'],
    menu: '#menu',
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    'navigation': true,
    // 'navigationPosition': 'right',
    // 'navigationTooltips': ['About', 'Letterix']

  });
});