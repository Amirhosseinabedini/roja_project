

$(document).ready(function(){


    // loadin theme_____________________________________________________________________________
    loader();
    /*====================================LOADER======================================*/
    function loader(_success) {
      // var obj = $('.preloader'),
      // inner = $('.preloader_inner'),
      // page = $('.main');
      // console.log(page);

      // $('.preloader_inner').addClass('show');

      var w = 0,
      t = setInterval(function () {
        w = w + 1;
        $('.preloader_inner').html(w + '%');
        if (w === 100) {
          $('.preloader').removeClass('show');
          $('.preloader').addClass('d-none');
          $('.main').removeClass('d-none');
          clearInterval(t);
          w = 0;
          if (_success) {
            return _success();
          }
        }
      }, 20);
    }


    
    $('.videotomodal').on('click' ,function(){
        
        var sorce = $(this).attr("data-src");

        $("#yaqoob").html('<span style="display: block;padding-top: 57%"></span><iframe id="my-iframe" src="" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>');
        $('#my-iframe').attr("src" , sorce );

    });
    $("#modal-target").on('hidden.bs.modal', function(){
        $(this).find("#yaqoob").html("");
    });

    // footer send btn____________________________________________________________
    
    var x = document.getElementById("btnfooter");
    x.addEventListener("focus", myFocusFunction, true);
    x.addEventListener("blur", myBlurFunction, true);

      function myFocusFunction() {
        $('.mail-icon').addClass('btn-active');
        $('.sendbox-footer').addClass('btn-active');
        $('.txtbox-send').addClass('btn-active');
        $('.sendbox').addClass('btn-active');
      }

      function myBlurFunction() {
        $('.mail-icon').removeClass('btn-active');
        $('.sendbox-footer').removeClass('btn-active');
        $('.txtbox-send').removeClass('btn-active');
        $('.sendbox').removeClass('btn-active');
      }






      

      // <!-- home-slider -->
         
          $(document).ready(function () {
            $(".home_slider").owlCarousel({
              rtl:true,
              loop: true,
              margin: 10,
              autoplay:true,
              autoplayTimeout:2000,
              autoplayHoverPause:true,
              responsiveClass: true,
              responsive: {
                0: {
                  items: 1,
                  nav: true,
                },
                600: {
                  items: 1,
                  nav: false,
                },
                1000: {
                  items: 1,
                  nav: true,
                  loop: true,
                  margin: 20,
              
                },
              },
            });
          });
         
      // <!-- slider-banner-1  -->
         
          $(document).ready(function () {
            $(".slider-banner-1").owlCarousel({
              rtl:true,
              loop: true,
              margin: 10,
              autoplay:true,
              autoplayTimeout:2000,
              autoplayHoverPause:true,
              responsiveClass: true,
              responsive: {
                0: {
                  items: 1,
                  nav: false,
                },
                600: {
                  items: 2,
                  nav: false,
                },
                1000: {
                  items: 3,
                  nav: true,
                  loop: true,
                  margin: 20,
              
                },
              },
            });
          });
         
      // <!-- slider-logo -->
         
          $(document).ready(function () {
            $(".slider-logo").owlCarousel({
              rtl:true,
              loop: true,
              margin: 10,
              autoplay:true,
              autoplayTimeout:2000,
              autoplayHoverPause:true,
              responsiveClass: true,
              responsive: {
                0: {
                  items: 2,
                  nav: false,
                },
                600: {
                  items: 3,
                  nav: false,
                },
                1000: {
                  items: 6,
                  nav: true,
                  loop: true,
                  margin: 20,
              
                },
              },
            });
          });
         
        // <!-- video-slider -->
           
                       $(document).ready(function () {
            $(".slider-video").owlCarousel({
              rtl:true,
              loop: true,
              margin: 10,
              autoplay:true,
              autoplayTimeout:2000,
              autoplayHoverPause:true,
              responsiveClass: true,
              responsive: {
                0: {
                  items: 1,
                  nav: true,
                },
                600: {
                  items: 2,
                  nav: true,
                },
                1000: {
                  items: 4,
                  nav: true,
                  loop: true,
                  margin: 20,
              
                },
              },
            });
          });
           

        // <!-- countdown script------------------------------------------------------------------------- -->
           
          // Set the date we're counting down to
          var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
          
          // Update the count down every 1 second
          var x = setInterval(function() {
          
            // Get today's date and time
            var now = new Date().getTime();
              
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
              
            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              if(hours<10)
                  hours="0" + hours;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              if(minutes<10)
                  minutes="0" + minutes;
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                  if(seconds<10)
                      seconds="0" + seconds;
              
            // Output the result in an element with id="demo"
            $(".demo").html (hours + " : "
            + minutes + " : " + seconds)
              
            // If the count down is over, write some text 
            if (distance < 0) {
              clearInterval(x);
              document.getElementById("demo").innerHTML = "EXPIRED";
            }
          }, 1000);
             

              // <!-- back to top button -->

                 
                  //Get the button
                  var mybutton = document.getElementById("myBtn");
                  
                  // When the user scrolls down 20px from the top of the document, show the button
                  window.onscroll = function() {scrollFunction()};
                  
                  function scrollFunction() {
                    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                      mybutton.style.display = "block";
                    } else {
                      mybutton.style.display = "none";
                    }
                  }
                  
                  // When the user clicks on the button, scroll to the top of the document
                  function topFunction() {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                  }
                     
                     
                      $(".video-4").on('hidden.bs.modal', function(){
                          $(this).find(".modal-content").html("");
                      });
                     


      // var a=0;
      // $('#humberger-btn').on('click',function(){
      //   a+=1;
      //   if(a===1){
      //     $('#myheader').removeClass('sticky');
      //   }
      //   else{
      //     $('#myheader').addClass('sticky');
      //     a=0;
      //   }
      // });
    


      $('#humberger-btn').on('click',function(){
    
        if($('#myheader').hasClass('sticky')){
          $('#myheader').removeClass('sticky');
        }
        else{
          $('#myheader').addClass('sticky');

        }
      });
});