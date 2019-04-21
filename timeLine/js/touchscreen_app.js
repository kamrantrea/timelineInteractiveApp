$(document).ready(function () {
    
        'use strictt';
    
        // set first section number
        var currentSection = 1;
    
        // animate current screen/section content
        function animateScreen(cs, reverse) {
            // create current section selector
            var sec = 'section:nth-child(' + cs + ')';
    
            var video;
            console.log(reverse)
    
            // if the direction is forward
            if(!reverse) {
                video = $(sec).find('video.forward');
                video.show();
                $(sec).find('video.reverse').hide();
            }
            else {
                video = $(sec).find('video.reverse');
                video.show();
                $(sec).find('video.forward').hide();
            }
    
            // show screen/section
            $(sec).fadeIn(500);
    
            // rewind and start the background video
            // $(sec).find('video')[0].currentTime = 0;
            // $(sec).find('video')[0].play();
            video[0].currentTime = 0;
            video[0].play();
    
            // for animaing each element below consider the following:
            // $(sec + ' #div_id' + cs) --> defines the div to animate via id
            // .css({opacity:0, left:0}) --> resets div css for starting point of animation
            // .delay(2000) --> sets a delay in between animations... set in milliseconds
            // .animate({opacity:1, left:'135px'}, 500, 'easeOutElastic'); --> properties to animate, duration, easing
    
            // animate main title
            $(sec + ' #maintitle' + cs)
                .css({
                    opacity: 0,
                    left: 0
                })
                .delay(2000)
                .animate({
                    opacity: 1,
                    left: '115px'
                }, 500, 'easeOutBounce');
    
            // animate subtitle
            $(sec + ' #subtitle' + cs)
                .css({
                    opacity: 0,
                    left: 0
                })
                .delay(2500)
                .animate({
                    opacity: 1,
                    left: '135px'
                }, 500, 'easeOutBounce');
    
            // animate bodycopy
            $(sec + ' #bodycopy' + cs)
                .css({
                    opacity: 0
                })
                .delay(3500)
                .animate({
                    opacity: 1
                }, 1000, 'linear');
            
             $(sec + ' .bodycopy' + cs)
                .css({
                    opacity: 0
                })
                .delay(3500)
                .animate({
                    opacity: 1
                }, 1000, 'linear');
    
    
            // animate other
            $(sec + ' #other' + cs)
                .css({
                    opacity: 0,
                    '-webkit-transform': 'scale(0.1)'
                })
                .delay(3000)
                .animate({
                    opacity: 1,
                    '-webkit-transform': 'scale(1)'
                }, 500, 'easeOutBounce');
            
            // animate popup button 1 (if necessary)
            $(sec + ' #popup1btn' + cs)
                .css({
                    opacity: 0
                })
                .delay(4000)
                .animate({
                    opacity: 1
                }, 1000, 'linear');
    
            // animate popup button 2 (if necessary)
            $(sec + ' #popup2btn' + cs)
                .css({
                    opacity: 0
                })
                .delay(4000)
                .animate({
                    opacity: 1
                }, 1000, 'linear');
    
            // animate popup button 2 (if necessary)
            $(sec + ' #popup3btn' + cs)
                .css({
                    opacity: 0
                })
                .delay(4000)
                .animate({
                    opacity: 1
                }, 1000, 'linear');
        }
    
        // load first screen at startup
        animateScreen(currentSection);
    
        // next button
        $('.next').on('click', nextScreen);
        // swipe to next
        $(document).on('swipeleft', nextScreen);
    
        function nextScreen() {
            if (currentSection < $('section').length) {
                // transition popup content out
                $('.popupcontent' + currentSection).fadeOut(500);
    
                // transition current section out
                $('section:nth-child(' + currentSection + ')').fadeOut(500);
    
                // set next section
                currentSection++;
    
                // transition next section in
                animateScreen(currentSection);
            }
        }
    
        // previous button
        $('.prev').on('click', prevScreen);
        // swipe to previous
        $(document).on('swiperight', prevScreen);
    
        function prevScreen() {
            if (currentSection > 1) {
                // transition popup content out
                $('.popupcontent' + currentSection).fadeOut(500);
    
                // transition current section out
                $('section:nth-child(' + currentSection + ')').fadeOut(500);
    
                // set prev section
                currentSection--;
    
                // transition next section in
                animateScreen(currentSection, true);
            }
        }
    



        $('#home').on('click', homeScreen);
        
                function homeScreen() {
                    window.location.href = "../victoriaHall/index.html";
                }






                $('.pag1').on('click', homeScreen);
                
                        function homeScreen() {
                           
                        }
        


                $('.pag2').on('click', homeScreen);
                
                        function homeScreen() {
                            prevScreen();
                          
                        }
        


                $('.pag3').on('click', homeScreen);
                
                        function homeScreen() {
                
                            prevScreen();
               
                        }
        



                $('.pag4').on('click', homeScreen);
                
                        function homeScreen() {
                           
                            prevScreen();
                        }
        













        // highest z-index of popups (set in css)
        var maxZ = 1000000;
    
        // all popups work from same click function
        $('.popupbtn').click(function () {
    
            // find out popup number and type of content
            var num = $(this).attr('data-num');
            var type = $(this).attr('data-type');
    
            // increase the z-index
            maxZ++;
            
            // check for video and rewind
            if (type == "video") {
                $('#popup' + num + 'content' + currentSection).find('video')[0].currentTime = 0;
            }
    
            // show content
            $('#popup' + num + 'content' + currentSection)
                .css('z-index', maxZ)
                .show()
                .animate({
                    opacity: 1
                }, 500, 'linear', function () {
    
                    // after content is displayed check for video and play
                    if (type == "video") {
                        $(this).find('video')[0].play();
                    }
                });
            
            // hide other popups
            $('.popupcontent:visible').not('#popup' + num + 'content' + currentSection).find('.close').trigger('click');
    
        });
    
        // close popups
        $('.close').click(function () {
    
            $(this).parent().animate({
                opacity: 0
            }, 500, 'linear', function () {
                $(this).hide();
            });
    
        });
    
    });