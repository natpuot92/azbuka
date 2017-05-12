$(window).on("scroll", () => {
    let fromTop = $("body").scrollTop();
    $('.sticky-header').toggleClass("sticky", (fromTop > 497));
  });

//window.addEventListener('scroll', function() {
//  var topLine = document.querySelector('.top-line');
//  if (window.pageYOffset > 490) {
//    topLine.classList.add('sticky');
//  }
//  if (window.pageYOffset < 490) {
//    topLine.classList.remove('sticky');
//  }
//})
