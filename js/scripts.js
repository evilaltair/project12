jQuery(document).ready((function(e){function i(i,n,a="true"){if(e("#block-after-menu").length&&e("#block-after-menu").remove(),a){var t,s=e(window).height();e(i).after('<div style="text-indent: -9999px; width: 1px; height: 1px;" id="block-after-menu">Конец меню</div>'),s>(t=e("#block-after-menu").offset().top)?e(n).height(s):e(n).height(t),e(n).css("overflow","hidden")}else e(n).css("overflow","hidden"),e(n).css("height","auto")}if(e(".m-nav").prepend('<div class="slide-out-close">Меню</div>'),e(".main-box").prepend('<div class="slide-out-open">Меню</div>'),e("#main").prepend('<div class="menu-overlay">Закрыть меню</div>'),e(".slide-out-open").click((function(){e("body").addClass("js-nav"),e(".slide-out-close").addClass("rotate"),e(".js-nav").length&&i(".main-menu__inner","#main")})),e(".slide-out-close").click((function(){e("body").removeClass("js-nav"),e(this).removeClass("rotate"),i(".main-menu__inner","#main",!1)})),e(".menu-overlay").click((function(){e("body").removeClass("js-nav"),e("#slide-out-open").removeClass("slide-out-close").addClass("slide-out-open"),i(".main-menu__inner","#main",!1)})),e(".main-menu__inner ul > li:has(ul)").append('<div class="menu-arrow">Sub-menu</div>'),e(".main-menu__inner .menu-arrow").click((function(){var n=e(this).parent().find("ul");n.is(":hidden")?(n.slideDown(450,(function(){i(".main-menu__inner","#main")})),e(this).addClass("active")):(n.slideUp(450,(function(){i(".main-menu__inner","#main")})),e(this).removeClass("active"))})),e(".main-menu__inner ul > li > ul >li").hasClass("current-menu-item")&&(e(".main-menu__inner ul > li > ul > li.current-menu-item").parent().addClass("ul_block"),e(".main-menu__inner ul > li > ul > li.current-menu-item").parent().next().addClass("active")),e(".main-menu__inner ul > li > ul > li").hasClass("current-post-parent")&&(e(".main-menu__inner ul > li > ul > li.current-post-parent").parent().addClass("ul_block"),e(".main-menu__inner ul > li > ul > li.current-post-parent").parent().next().addClass("active")),e(".add-menu__toggle").click((function(){e(this).next("ul").is(":hidden")?e(this).next("ul").slideDown(300):e(this).next("ul").slideUp(300)})),e(".sidebar-menu ul > li:has(ul) > a").after('<div class="menu-arrow">Sub-menu</div>'),e(".sidebar-menu ul > li:has(ul) > span").after('<div class="menu-arrow">Sub-menu</div>'),e(".sidebar-menu .menu-arrow").click((function(){var i=e(this).parent().find("ul");i.is(":hidden")?(i.slideDown(450),e(this).addClass("active"),e(this).parent().addClass("active")):(i.slideUp(450),e(this).removeClass("active"),e(this).parent().removeClass("active"))})),e(".sidebar-menu ul > li > ul >li").hasClass("current-menu-item")&&(e(".sidebar-menu ul > li > ul > li.current-menu-item").parent().addClass("ul_block"),e(".sidebar-menu ul > li > ul > li.current-menu-item").parent().prev().addClass("active"),e(".sidebar-menu ul > li > ul > li.current-menu-item").parent().parent().addClass("active")),e(".sidebar-menu ul > li > ul > li").hasClass("current-post-parent")&&(e(".sidebar-menu ul > li > ul > li.current-post-parent").parent().addClass("ul_block"),e(".sidebar-menu ul > li > ul > li.current-post-parent").parent().prev().addClass("active"),e(".sidebar-menu ul > li > ul > li.current-post-parent").parent().parent().addClass("active")),(t=e("#slider")).length&&t.bxSlider({controls:!1,pager:!0,auto:!0,autoHover:!0}),e("#slider-posts").length){var n=function(){return e(window).width()>1024?{minSlides:3,maxSlides:3,moveSlides:3,slideWidth:210,slideMargin:5,adaptiveHeight:!0,autoHover:!0}:{minSlides:3,maxSlides:3,moveSlides:1,slideWidth:210,slideMargin:5,adaptiveHeight:!0,autoHover:!0}};function a(){t.reloadSlider(n())}t=e("#slider-posts").bxSlider(n()),e(window).resize(a)}if(e("#recommended-posts").length){var t,s=function(){return e(window).width()>1024?{minSlides:3,maxSlides:3,moveSlides:3,slideWidth:210,slideMargin:5,adaptiveHeight:!0,pager:!1,autoHover:!0}:{minSlides:3,maxSlides:3,moveSlides:1,slideWidth:210,slideMargin:5,adaptiveHeight:!0,pager:!1,autoHover:!0}};function a(){t.reloadSlider(s())}t=e("#recommended-posts").bxSlider(s()),e(window).resize(a)}e("ol[start]").each((function(){var i=parseFloat(e(this).attr("start"))-1;e(this).css("counter-increment","li "+i)})),e(window).width()<="1023"&&e(".sidebar-menu").appendTo(".m-nav"),e(window).resize((function(){e(window).width()<="1023"?e(".sidebar-menu").appendTo(".m-nav"):e(".sidebar-menu").prependTo(".sidebar")})),e('<div id="up" class="up" style="display: none">наверх</div>').appendTo(".footer").click((function(){e("html, body").animate({scrollTop:0},700)}));var l,d=e(window),r=e("#up");(d.on("scroll",(function(){d.scrollTop()>d.height()/3?r.fadeIn():r.fadeOut()})).scroll(),e.ajaxSetup({complete:function(){e(".last_item").next(".more").remove()}}),e(".more").length&&e("body").on("click",".more:not(.loading)",(function(){var i=e(this),n=e(this).prev(".ajax_pagination"),a=i.html();i.addClass("loading").html(i.data("loading"));var t=i.data("offset"),s=i.data("items"),l=i.data("theme"),d="",r="",o="",u="";i.data("newposts")&&(d="&newposts="+i.data("newposts")),i.data("category")&&(r="&cat="+i.data("category")),i.data("tag")&&(o="&tag="+i.data("tag")),i.data("search")&&(u="&search="+i.data("search")),console.log(u),e.ajax({url:"/wp-content/themes/"+l+"/ajax-posts.php?offset="+t+"&items="+s+d+r+o+u}).done((function(l){n.after(l),i.data("offset",t+s).removeClass("loading").html(a),""===e.trim(l)?i.remove():e("html, body").animate({scrollTop:e(".ajax_pagination:last").offset().top-100},900)}))})),e(".sticky_menu").length)&&(l=e(".sticky_menu").offset().top,e(window).scroll((function(){e(this).scrollTop()>=l?e(".header").addClass("main-menu_sticky-enable"):e(".header").removeClass("main-menu_sticky-enable")})))}));