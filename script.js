(function($){   
    $(document).ready(function(){
    
        /* menu */      
        var menu = $("nav ul"), menu_click = $("header .fa");
        menu_click.on("click", function(){
           if( $(this).hasClass("fa-bars") ){
               menu.stop().slideDown(1000);
               $(this).toggleClass("fa-bars").toggleClass("fa-times");
           } 
           else{
               menu.stop().slideUp(500);
               $(this).toggleClass("fa-times").toggleClass("fa-bars");
           }    
        });
       
        
        
        /* slider */
        var next = $(".next"), 
            prev = $(".prev"), 
            control = $(".control");
        
        next.on("click", function(){
            plusSlides(1);
        });
        
        control.hover(function(){
            $(this).removeClass("not_active").addClass("active");
        }, function(){
            $(this).removeClass("active").addClass("not_active");
        });
        
        prev.on("click", function(){
            plusSlides(-1);
        });       
        
        var slideIndex = 1;
       /* showSlides(slideIndex); */
        
        function plusSlides(n) {
            showSlides(slideIndex += n);
            console.log(n);
        }
        function showSlides(n) {
          var i, 
              imgs = $("#testimonial .img"), 
              descs = $("#testimonial .desc");
          if (n > imgs.length) {slideIndex = 1} 
          if (n < 1) {slideIndex = imgs.length}
          for (i = 0; i < imgs.length; i++) {
              /*imgs[i].style.opacity = "0.2";*/ 
              $(imgs[i]).fadeOut();
              /*$(imgs[i]).hide();*/
              $(descs[i]).hide();
          }
          /*imgs[slideIndex-1].style.opacity = "1";*/ 
          $(imgs[slideIndex-1]).fadeIn();  
          /*$(imgs[slideIndex-1]).show(); */
          $(descs[slideIndex-1]).show();       
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    });
  })(jQuery);