
    $(document).ready(function() {

      $("#demosMenu").change(function(){
        window.location.href = $(this).find("option:selected").attr("id") + '.html';
      });

      $('#fullpage').fullpage({
        sectionsColor: ['#fff', '#fff'],
        anchors: ['firstPage', 'secondPage'],
        menu: '#menu',
        continuousVertical: true
      });
    });
