$(document).ready(function() {
  $('#fullpage').fullpage({
    menu: '#menu',
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['firstPage', 'secondPage','lastPage']

  });
});