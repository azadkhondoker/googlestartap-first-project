(function ($) {
	'use strict';

    /*-----------------------------
	=== ALL ESSENTIAL FUNCTIONS ===
	------------------------------*/

    // ===== 01. Main Menu
    function mainMenu() {
        const navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            mobilePanel = $('.mobile-slide-panel'),
            mobilePanelMenu = $('.mobile-menu'),
            mobileOverly = $('.panel-overlay'),
            navClose = $('.panel-close');

        // Show Mobile Slide Panel
        navbarToggler.on('click', function(e) {
            e.preventDefault();
            mobilePanel.toggleClass('panel-on');
        });
        // Close Mobile Slide Panel
        navClose.add(mobileOverly).on('click', function(e) {
            e.preventDefault();
            mobilePanel.removeClass('panel-on');
        });
        // Adds toggle button to li items that have children
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });
        mobilePanelMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });
        // Expands the dropdown menu on each click
        mobilePanelMenu.find('.dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent().parent('li').children('ul.sub-menu').stop(true, true).slideToggle(350);
            $(this).toggleClass('sub-menu-opened');
        });
    }

    // ==== 02. Sticky Header
    function stickyHeader() {
        const scroll_top = $(window).scrollTop(),
            siteHeader = $('.header-navigation');

        if (siteHeader.hasClass('sticky-header')) {
            if (scroll_top < 110) {
                siteHeader.removeClass('sticky-on');
            } else {
                siteHeader.addClass('sticky-on');
            }
        }
    }

    // ===== 03. Scroll To Top
    function scrollToTop() {
        var $scrollUp = $('#fixed-scroll-top'),
            $footerScrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({ scrollTop: 0 }, 300);
            evt.preventDefault();
        });
        $footerScrollUp.on('click', function (evt) {
            $('html, body').animate({ scrollTop: 0 }, 300);
            evt.preventDefault();
        });
    }

    // ===== 04. Video Popup
    function videoPopup() {
        $('.popup-video').each(function () {
            $(this).magnificPopup({
                type: 'iframe',
            });
        });
    }

    /*---------------------
	=== DOCUMENT READY  ===
	----------------------*/
    $(document).ready(function () {
        mainMenu();
        stickyHeader();
        scrollToTop();
        videoPopup();
    });

    /*--------------------
	=== WINDOW SCROLL  ===
	----------------------*/
    $(window).on('scroll', function() {
        stickyHeader();
    });

    /*------------------
	=== WINDOW LOAD  ===
	--------------------*/
	$(window).on('load', function () {
		// preloader();
		// new WOW().init();
	});

})(jQuery);

/*======blog js=======*/
(function ($) {
	'use strict';

    /*-----------------------------
	=== ALL ESSENTIAL FUNCTIONS ===
	------------------------------*/

    // ===== 01. Example Slider 
    function theSlider() {
        const sliders = $('.slider-class');
        sliders.slick({
            infinite: true,
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 800,
            centerPadding: '10%',
            centerMode: true,
            swipe: true,
            swipeToSlide: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    /*---------------------
	=== DOCUMENT READY  ===
	----------------------*/
    $(document).ready(function () {
        theSlider();
    });

    /*--------------------
	=== WINDOW SCROLL  ===
	----------------------*/
    $(window).on('scroll', function() {
        
    });

})(jQuery);


    /*--------------------
	=== nabver fixed js  ===
	----------------------*/
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPosition > 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });

 /*--------------------
	=== slider fixed js  ===
	----------------------*/
         
            $(document).ready(function() {
                $('.multiple-items').slick({
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: false, // Enable dots navigation
                  prevArrow: $('.prevbutton'),
                  nextArrow: $('.nexbutton')
                });
              });

              /*--------------------
	=== read on fixed js  ===
	----------------------*/
    $(document).ready(function() {
        // Set the number of visible rows
        var visibleRows = 1;
    
        // Hide the excess rows initially
        $('.category-row .row:gt(' + (visibleRows - 1) + ')').hide();
    
        // Show more rows on click
        $('.see-more').click(function() {
          visibleRows++;
          $('.category-row .row:lt(' + visibleRows + ')').show();
    
          // If all rows are shown, hide the "See more" button
          if ($('.category-row .row').length <= visibleRows) {
            $('.see-more').hide();
          }
    
          // Show the "See less" button
          $('.see-less').show();
        });
    
        // Hide rows on "See less" click
        $('.see-less').click(function() {
          visibleRows--;
          $('.category-row .row:gt(' + (visibleRows - 1) + ')').hide();
    
          // If only one row is shown, hide the "See less" button
          if (visibleRows <= 1) {
            $('.see-less').hide();
          }
    
          // Show the "See more" button
          $('.see-more').show();
        });
    
        // Initially hide the "See less" button
        $('.see-less').hide();
      });



      /* dropdown js */
      
      function toggleDropdown() {
        var dropdownMenuOne = document.getElementById("dropdown-menu-one");
        dropdownMenuOne.classList.toggle("show");
    }
    


    document.addEventListener("DOMContentLoaded", function() {
        var slideshow = document.querySelector(".slideshow");
        var slideWidth = slideshow.offsetWidth;
        var slides = slideshow.querySelectorAll(".slideshow-slide");
        var totalSlides = slides.length;
        var currentIndex = 0;
      
        function updateSliderPosition() {
          var translateX = -currentIndex * slideWidth;
          slideshow.style.transform = "translateX(" + translateX + "px)";
        }
      
        function nextSlide() {
          currentIndex++;
          if (currentIndex >= totalSlides) {
            currentIndex = 0;
          }
          updateSliderPosition();
        }
      
        function prevSlide() {
          currentIndex--;
          if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
          }
          updateSliderPosition();
        }
      
        function handleNextClick() {
          nextSlide();
        }
      
        function handlePrevClick() {
          prevSlide();
        }
      
        var nextBtn = document.createElement("button");
        nextBtn.classList.add("next-btn");
        nextBtn.innerHTML = "Next";
        nextBtn.addEventListener("click", handleNextClick);
      
        var prevBtn = document.createElement("button");
        prevBtn.classList.add("prev-btn");
        prevBtn.innerHTML = "Previous";
        prevBtn.addEventListener("click", handlePrevClick);
      
        var sliderContainer = document.querySelector(".slider-bord");
        sliderContainer.appendChild(nextBtn);
        sliderContainer.appendChild(prevBtn);
      });




