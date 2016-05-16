  var headerHeight = 64;

  $(document).foundation();

  document.addEventListener('click', event => {
    if (Array.from(document.querySelectorAll('#nav a')).includes(event.target))
      document.location = event.target.href
  })

  $(function(){
    $('pre code').addClass('language-javascript');
  //   $('#nav > ul > li > a[href$="'+location.pathname.substring(location.pathname.lastIndexOf('/')+1, location.pathname.length)+'"]').parent().addClass('active');
  })
