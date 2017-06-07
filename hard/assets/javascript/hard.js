/**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

 (function(){

   //jQuery equivelent to window.onload = function{}
   //code in here wont run until page loads
   $(function(){


      //1. Any time someone clicks on the title at the top "feed template,"
      //   make the color of the "feed template" text change from black to red
      //   and then from red to black when clicked again.
         let feedTemp = $('.panel h1');
         feedTemp.click (function(){
         let colorNow = $(this).css("color");
         //console.log(colorNow);
           if (colorNow == "rgb(0, 0, 0)"){
              $(this).css({color: "red"});
           }else{
              $(this).css({color: "black"});
           }
        })

      // 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
      //   hide every odd-numbered link in the menu.
      $(".vertical-nav .section:nth-child(odd)").hide();

      // 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
      $("p").each(function(){
         let text = $(this).html();
         $(this).html(text.replace(/Bacon/g, 'LASER VISION'));
      });

      //4. Delete the last two posts in the middle section (they have a CSS class "post"
      $(".post:nth-last-child(1)").remove();
      $(".post:nth-last-child(2)").remove();

       //* 5. Remove the images in the right column
      $('.large-3 p').remove();

      //*Bonus - make a surprise
      let tmpImg = $('.panel > a > img')
      tmpImg.attr('src', 'assets/grumpy.jpeg');
      tmpImg.click(function(){
      animateDiv();
      tmpImg.attr('src', 'assets/grumpy2.gif');
      });

      function makeNewPosition(){
      // Get viewport dimensions (remove the dimension of the div)
       var h = $(window).height() - 50;
       var w = $(window).width() - 50;
       var nh = Math.floor(Math.random() * h);
       var nw = Math.floor(Math.random() * w);
       return [nh,nw];
       }

      function animateDiv(){
         console.log("in");
          var newq = makeNewPosition();
          $(".large-12").animate({ top: newq[0], left: newq[1] }, function(){
            animateDiv();
          });
       };
   })

 })();
