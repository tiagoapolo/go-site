


(function($){
  $(function(){

    // function checkScroll(){
    //
    //     var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
    //
    //     if($(window).scrollTop() > startY){
    //       $('.navbar').addClass("blue darken-3");
    //       $('.navbar').removeClass("noShadow");
    //       $('.navbar').removeClass("transparent");
    //     }else{
    //       $('.navbar').addClass("transparent");
    //       $('.navbar').removeClass("blue darken-3");
    //       $('.navbar').addClass("noShadow");
    //     }
    // }
    //
    // if($('.navbar').length > 0){
    //     $(window).on("scroll load resize", function(){
    //         checkScroll();
    //     });
    // }


    // $('.modal-trigger').leanModal();
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
      ready: function() {
        $("body").addClass("modal-open");
      }, // Callback for Modal open
      complete: function() {
        $("body").removeClass("modal-open");
      } // Callback for Modal close
    });
    $('.button-collapse').sideNav();
    $('select').material_select();
    $(".dropdown-button").dropdown();



  }); // end of document ready
})(jQuery); // end of jQuery name space
