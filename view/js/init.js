
(function($){
  $(function(){

    function checkScroll(){

        var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

        if($(window).scrollTop() > startY){
          $('.navbar').addClass("blue darken-3");
          $('.navbar').removeClass("noShadow");
          $('.navbar').removeClass("transparent");
        }else{
          $('.navbar').addClass("transparent");
          $('.navbar').removeClass("blue darken-3");
          $('.navbar').addClass("noShadow");
        }
    }

    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }

    $('.button-collapse').sideNav();
    $('select').material_select();
    $(".dropdown-button").dropdown();


      smoothScroll.init({
          offset: 64
      });

      $(".typo").typed({
          // Waits 1000ms after typing "First"
          strings: ["Lembrar das^2500", "Organizar as^2500"],
          typeSpeed: 80,
          startDelay: 500,
          backSpeed: 50,
          backDelay: 500,
          loop: true,
          loopCount: 2,
          showCursor: true,
          cursorChar: "|",
          attr: null,
          contentType: 'html'
      });


      // var myDropzone = new Dropzone("#uploadero", {

    // pushengage
    // _pe.subscribe();


    $('.modal').modal();
    Dropzone.autoDiscover = false;


    var myDropzone = new Dropzone("#uploadero", {
      url: "https://108.59.84.186/contax/upload",
      method: "post",
      acceptedFiles: "image/jpeg,application/pdf,image/png",
      autoProcessQueue:false
    });

    myDropzone.on("complete", function(file) {
      myDropzone.removeAllFiles();
    });

    myDropzone.on("addedfile", function(file) {
      $('#mod1').modal('open');
    });

    myDropzone.on("error", function(file,errorMsg,xhrError) {
      console.log(errorMsg);
      console.log(xhrError);

      $('.txt-dz').append('<span style="color:red;" class="erro-dz"><br><br>Ops...Ocorreu um erro.</span>');
      $('.erro-dz').delay(3000).fadeOut();
      myDropzone.removeAllFiles();
    });

    myDropzone.on("sending", function(file, xhr, formData) {
        console.log('sending: '+file.name);
        formData.append("sampleFile", file.name);
        formData.append("email", $('#contact-form').find('input[name="Email"]').val());
    });

    var $contactForm = $('#contact-form');
    $contactForm.submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/tiago@contasbox.com',
            method: 'POST',
            data: $('#contact-form').serialize(),
            dataType: 'json',
            beforeSend: function() {
                $contactForm.append('<div class="col m4 s12 right-align alert alert--loading">Cadastrando…</div>');
            },
            success: function(data) {
                e.preventDefault();
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="col m4 s12 right-align alert alert--success">Pronto!</div>');
                $('.alert--success').delay(3000).fadeOut();
                $('#mod1').modal('close');
                myDropzone.processQueue();
            },
            error: function(err) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="col m4 s12 right-align alert alert--error">Ops...Ocorreu um erro.</div>');
                $('.alert--error').delay(2000).fadeOut();
                $('#mod1').modal('close');
            }
        });
    });

    // Dropzone.options.uploadero = {
    //   url: "http://108.59.84.186/contax/upload",
    //   method: "post",
    //   acceptedFiles: "image/jpeg,application/pdf,image/png",
    //   autoProcessQueue:false,
    //   addedfile: function(file) {
    //     $('#mod1').modal('open');
    //     console.log('addedfile: '+ file.name);
    //   },
    //   error: function(file,errorMsg,xhrError){
    //     console.log(errorMsg);
    //     console.log(xhrError);
    //
    //     $('.txt-dz').append('<span style="color:red;" class="erro-dz"><br><br>Ops...Ocorreu um erro.</span>');
    //     $('.erro-dz').delay(3000).fadeOut();
    //     this.removeAllFiles();
    //   },
    //   sending: function(file, xhr, formData) {
    //     console.log('sending: '+file.name);
    //     formData.append("sampleFile", file.name);
    //     formData.append("email", 'jussara@gmail.com');
    //
    //   }
    // };
    //
    // $('#add').on('click',function(e){
    //   e.preventDefault();
    //   myDropzone.processQueue();
    // });

  }); // end of document ready
})(jQuery); // end of jQuery name space




$(window).resize(function() {

    if ($(window).width() <= 600 && $('#plans-table').hasClass('valign-wrapper')) {

        $('#plans-table').removeClass('valign-wrapper').addClass('plan-small-refactor');
        $('#plan-1').removeClass('valign').addClass('plan-small-refactor');
        $('#plan-2').removeClass('valign').addClass('plan-small-refactor');
        $('#plan-3').removeClass('valign').addClass('plan-small-refactor');

    } else if ($(window).width() > 600 && !($('#plans-table').hasClass('valign-wrapper'))) {

        $('#plans-table').removeClass('plan-small-refactor').addClass('valign-wrapper');
        $('#plan-1').removeClass('plan-small-refactor').addClass('valign');
        $('#plan-2').removeClass('plan-small-refactor').addClass('valign');
        $('#plan-3').removeClass('plan-small-refactor').addClass('valign');

    }
});

// preloader
$(window).load(function() {

    $('.preloader').fadeOut(300); // set duration in brackets
    $('.dz-message span').html('');
    $('.dz-message').addClass("valign-wrapper");

    $('.dz-message').html('<div class="col m12 s12 combo-dz valign"><div class="col m8 s8 txt-dz ">Arraste um comprovante ou clique para fazer o upload</div><div class="col m4 s4 "><img class="img-dz" src="assets/img/invoice.png"/></div></div>');


    if ($(window).width() <= 600 && $('#plans-table').hasClass('valign-wrapper')) {

        $('#plans-table').removeClass('valign-wrapper').addClass('plan-small-refactor');
        $('#plan-1').removeClass('valign').addClass('plan-small-refactor');
        $('#plan-2').removeClass('valign').addClass('plan-small-refactor');
        $('#plan-3').removeClass('valign').addClass('plan-small-refactor');

    }
});
