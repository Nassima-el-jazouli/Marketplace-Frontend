/**
  * isMobile
  * Parallax
  * flatContentBox
  * flatCounter
  * flatIsotopeCase
  * flatAccordion
  * swClick
  * buttonHeart
  * goTop
  * WOW
  * toggleMenu
  * topSearch
  * flatProgressBar
  * popUpLightBox
  * donatProgress
  * Preloader
  * clearcheckbox
  * flatAccordions
  * dropdown
  * no_link
  * flcustominput
  * tabs
  * copycode
*/

; (function ($) {

    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var Parallax = function () {
        if ($().parallax && isMobile.any() == null) {
            $(".parallax").parallax("50%", 0.2);
        }
    };

    var flatContentBox = function () {
        $(window).on('load resize', function () {
            var mode = 'desktop';
            if (matchMedia('only screen and (max-width: 1199px)').matches)
                mode = "mobile";
            $('.themesflat-content-box').each(function () {
                var margin = $(this).data('margin');
                if (margin) {
                    if (mode === 'desktop') {
                        $(this).attr('style', 'margin:' + $(this).data('margin'))
                    } else if (mode === 'mobile') {
                        $(this).attr('style', 'margin:' + $(this).data('mobilemargin'))
                    }
                }
            });
        });
    };

    var flatCounter = function () {
        if ($(document.body).hasClass('counter-scroll')) {
            var a = 0;
            $(window).scroll(function () {
                var oTop = $('.tf-counter').offset().top - window.innerHeight;
                if (a === 0 && $(window).scrollTop() > oTop) {
                    if ($().countTo) {
                        $('.tf-counter').find('.number').each(function () {
                            var to = $(this).data('to'),
                                speed = $(this).data('speed');

                            $(this).countTo({
                                to: to,
                                speed: speed
                            });
                        });
                    }
                    a = 1;
                }
            });
        }
    };

    var flatIsotopeCase = function () {
        $(".box-gallery").each(function () {
            if ($().isotope) {
                var $container = $('.isotope-gl');
                $('.flat-filter-isotope li').on('click', function () {
                    var selector = $(this).find("a").attr('data-filter');
                    $('.flat-filter-isotope li').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({ filter: selector });
                    return false;
                });
            };
        });
    };

    var flatAccordion = function () {
        var args = { duration: 600 };
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();
        $('.flat-toggle.enable .toggle-title').on('click', function () {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        });
        $('.flat-accordion .toggle-title').on('click', function () {
            if (!$(this).is('.active')) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var flatAccordion2 = function() {
        var args = {duration: 600};
        $('.flat-toggle2 .toggle-title.active').siblings('.toggle-content').show();
      
        $('.flat-toggle2.enable .toggle-title').on('click', function() {
            $(this).closest('.flat-toggle2').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 
      
        $('.flat-accordion2 .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.flat-accordion2').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion

        // arow
        $('flat-toggle2').on('click', function(){
            $(this).addClass('active');
        });
    }; 
      

    var swClick = function () {
        function activeLayout() {
            $(".switcher-container").on("click", "a.sw-light", function () {
                $(this).toggleClass("active");
                $('body').addClass('home-boxed');
                $('body').css({ 'background': '#f6f6f6' });
                $('.sw-pattern.pattern').css({ "top": "100%", "opacity": 1, "z-index": "10" });
            }).on("click", "a.sw-dark", function () {
                $('.sw-pattern.pattern').css({ "top": "98%", "opacity": 0, "z-index": "-1" });
                $(this).removeClass('active').addClass('active');
                $('body').removeClass('home-boxed');
                $('body').css({ 'background': '#fff' });
                return false;
            })
        }

        function activePattern() {
            $('.sw-pattern').on('click', function () {
                $('.sw-pattern.pattern a').removeClass('current');
                $(this).addClass('current');
                $('body').css({ 'background': 'url("' + $(this).data('image') + '")', 'background-size': '30px 30px', 'background-repeat': 'repeat' });
                return false
            })
        }

        activeLayout();
        activePattern();
    };

    var buttonHeart = function () { 
        $(".wishlist-button").on("click", function() {
            var iteration = $(this).data('iteration') || 1;
            
            switch (iteration) {
                case 1:
                    $(this).addClass("active");
                    var val = parseInt($(this).find("span").text())+1;
                    $(this).find("span").text(val);
                    break;
                case 2:
                    $(this).removeClass("active");
                    var val = parseInt($(this).find("span").text())-1;
                    $(this).find("span").text(val);                   
                    break;
            }
            iteration++;
            if (iteration > 2) iteration = 1;
            $(this).data('iteration', iteration);
        });
    }

    var goTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
            return false;
        });
    };

    new WOW().init();

    var toggleMenu = function () {
        $(".header-menu").on("click", function () {
            $(".side-menu__block").addClass("active");
        });

        $(".side-menu__block-overlay,.side-menu__toggler, .scrollToLink").on(
            "click",
            function (e) {
                $(".side-menu__block").removeClass("active");
                e.preventDefault();
            }
        );
    }

    var topSearch=function(){
        
        $(document).on('click',function(e){
            var clickID=e.target.id;if((clickID!=='s')){
                $('.top-search').removeClass('show');
            }});
            $(document).on('click',function(e){
                var clickID=e.target.class;if((clickID!=='a111')){
                    $('.show-search').removeClass('active');
                }});
            
                $('.show-search').on('click',function(event){
                    event.stopPropagation();});
                $('.search-form').on('click',function(event){
                    event.stopPropagation();});
                $('.show-search').on('click',function(event){
                    if(!$('.top-search').hasClass("show")){
                        $('.top-search').addClass('show');
                            event.preventDefault();
                        }
                    else
                        $('.top-search').removeClass('show');
                        event.preventDefault();
                        if(!$('.show-search').hasClass("active"))
                            $('.show-search').addClass('active');
                        else
                            $('.show-search').removeClass('active'); 
                })
        ;}

        var search = function () {
            $('.header-search').on('click', function () {
                $('.form-checkbox').find('input').prop('checked', false);
            });
    
            $('a.clear-checkbox').on('click' , function(e){
              e.preventDefault();
            });
        };

    var flatProgressBar = function () {
        $('.couter').appear(function () {
            $('.chart').easyPieChart({
                easing: 'easeOut',
                lineWidth: 5,
                size: 90,
                scaleColor: false,
                barColor: '#FD4A36',
                trackColor: '#FFE2DE',
                animate: 5000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }, {
            offset: 400
        });
    };

    var popUpLightBox = function () {
        if ($(".lightbox-image").length) {
            $(".lightbox-image").fancybox({
                openEffect: "fade",
                closeEffect: "fade",
                helpers: {
                    media: {}
                }
            });
        }
    };

    var donatProgress = function () {
        $(".content-progress-box").appear(function () {
            $(this).find("div.donat-bg").each(function () {
                $(this).find(".custom-donat").delay(600).animate({
                    width: $(this).attr("data-percent")
                }, 1000, "easeInCirc");
            });
        });
    };

    var Preloader = function () {
        setTimeout(function () {
        $(".preload").fadeOut("slow", function () {
            $(this).remove();
        });
        }, 1500);
    };

    var clearcheckbox = function () {
        $('.clear-checkbox').on('click', function () {
            $('.form-checkbox').find('input').prop('checked', false);
        });

        $('a.clear-checkbox').on('click' , function(e){
          e.preventDefault();
        });
    };

    var clearcheckbox2 = function () {
        $('.box-check').find('a').on('click', function () {
            $(this).toggleClass('active');
        });
        $('.clear-check').on('click', function () {
            $('.box-check').find('a').removeClass('active');
        });

        $('a.clear-check').on('click',function(e){
          e.preventDefault();
        });

        $('.box-check').find('a').on('click',function(e){
            e.preventDefault();
        });
    };

    var flatAccordions = function() {
        var args = {easing:'easeOutExpo', duration:500};
        $('.widget-category.active').find('.content-wg-category').show();
        $('.title-wg-category').on('click', function () {
            if ( !$(this).parent().is('.active') ) {
                $(this).parent().toggleClass('active')
                    .children('.content-wg-category').slideToggle(args)
                    .children('.content-wg-category').slideToggle(args);
                    this.addClass('show');
            } else {
                $(this).parent().toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var dropdown = function(id){
        var obj = $(id+'.dropdown');
        var btn = obj.find('.btn-selector');
        var dd = obj.find('ul');
        var opt = dd.find('li');
            dd.hide();
            obj.on("mouseenter", function() {
                dd.show();
                dd.addClass('show');
                $(this).css("z-index",1000);
            }).on("mouseleave", function() {
                dd.hide();
                 $(this).css("z-index","auto")
                 dd.removeClass('show');
            })
            
            opt.on("click", function() {
                dd.hide();
                var txt = $(this).text();
                opt.removeClass("active");
                $(this).addClass("active");
                btn.text(txt);
            });
    }

    var no_link = function(){
        $('a.nolink').on('click', function(e){
          e.preventDefault();
      });
      }

    var flcustominput = function () {
        $("input[type=file]").change(function (e) {
            $(this).parents(".uploadFile").find(".filename").text(e.target.files[0].name);
          });          
    };

    var tabs = function(){
        $('.flat-tabs').each(function(){
            $(this).find('.content-tab').children().hide();
            $(this).find('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').on('click',function(){
                var liActive = $(this).index();
                var contentActive=$(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn("slow");
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide();
            });
        });
        
    };
    var copycode = function() {
        $('.btn-copycode').on('click',function() {
            $('.inputcopy').select() ;            
            document.execCommand('copy');
            alert('copy completed !');
        });
    }
    $("#profileimg").click(function (e) {
        $("#tf-upload-img").click();
    });
    
    function fasterPreview(uploader) {
        if (uploader.files && uploader.files[0]) {
            $('#profileimg').attr('src',
                window.URL.createObjectURL(uploader.files[0]));
        }
    }
    
    $("#tf-upload-img").change(function () {
        fasterPreview(this);
    });
    
    // Dom Ready
    $(function () {
        goTop();
        flatContentBox();
        topSearch();
        flatIsotopeCase();
        flatAccordion();
        flatAccordion2();
        swClick();
        popUpLightBox();
        toggleMenu();
        Parallax();
        flatCounter();
        tabs();
        buttonHeart();
        flatProgressBar();
        donatProgress();
        clearcheckbox();
        clearcheckbox2();
        flatAccordions();
        no_link();
        dropdown('#item_category');
        dropdown('#buy');
        dropdown('#all-items');
        dropdown('#artworks');
        dropdown('#sort-by');
        dropdown('#item-create');
        dropdown('#item-create2');
        dropdown('#item-create3');
        flcustominput();
        copycode();
        Preloader();
    });

})(jQuery);
