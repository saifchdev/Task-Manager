$('.owl-carousel').owlCarousel({
  center: true,
  loop:false,
  margin:10,
  nav:true,
  items:1,
  autowidth:true
  
})

$('.owl-dot').click(function () {
  owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});
