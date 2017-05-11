$(window).on("scroll", () => {
    let fromTop = $("body").scrollTop();
    $('.sticky-header').toggleClass("sticky", (fromTop > 496));
  });
