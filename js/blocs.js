function setUpSpecialNavs(){$(".navbar-toggle").click(function(e){var s,o,n=$(this).closest("nav"),t=n.find("ul.site-navigation"),i=t.clone();t.parent().hasClass("nav-special")&&(e.stopPropagation(),$(this).hasClass("selected-nav")?($(".blocsapp-special-menu blocsnav").removeClass("open"),$(".selected-nav").removeClass("selected-nav"),setTimeout(function(){$(".blocsapp-special-menu").remove(),$("body").removeClass("lock-scroll"),$(".selected-nav").removeClass("selected-nav")},300)):($(this).addClass("selected-nav"),s=n.attr("class").replace("navbar","").replace("row",""),o=t.parent().attr("class").replace("navbar-collapse","").replace("collapse",""),($(".content-tint").length=-1)&&$("body").append('<div class="content-tint"></div>'),i.insertBefore(".page-container").wrap('<div class="blocsapp-special-menu '+s+'"><blocsnav class="'+o+'">'),$("blocsnav").prepend('<a class="close-special-menu animated fadeIn" style="animation-delay:0.5s;"><div class="close-icon"></div></a>'),function(){var e="fadeInRight",t=0,n=60;$(".blocsapp-special-menu blocsnav").hasClass("fullscreen-nav")?(e="fadeIn",n=100):$(".blocsapp-special-menu").hasClass("nav-invert")&&(e="fadeInLeft"),$(".blocsapp-special-menu blocsnav li").each(function(){$(this).parent().hasClass("dropdown-menu")?$(this).addClass("animated fadeIn"):(t+=n,$(this).attr("style","animation-delay:"+t+"ms").addClass("animated "+e))})}(),setTimeout(function(){$(".blocsapp-special-menu blocsnav").addClass("open"),$(".content-tint").addClass("on"),$("body").addClass("lock-scroll")},10)))}),$("body").on("mousedown touchstart",".content-tint, .close-special-menu",function(){$(".content-tint").removeClass("on"),$(".selected-nav").click(),setTimeout(function(){$(".content-tint").remove()},10)}).on("click",".blocsapp-special-menu a",function(e){$(e.target).closest(".dropdown-toggle").length||$(".close-special-menu").mousedown()})}function extraNavFuncs(){$(".site-navigation a").click(function(e){$(e.target).closest(".dropdown-toggle").length||$(".navbar-collapse").collapse("hide")}),$("a.dropdown-toggle").click(function(){$(this).parent().addClass("target-open-menu"),$(this).closest(".dropdown-menu").find(".dropdown.open").each(function(){$(this).hasClass("target-open-menu")||$(this).removeClass("open")}),$(".target-open-menu").removeClass("target-open-menu")})}function setFillScreenBlocHeight(){$(".bloc-fill-screen").each(function(){var t=$(this);window.fillBodyHeight=0,$(this).find(".container").each(function(){fillPadding=2*parseInt($(this).css("padding-top")),t.hasClass("bloc-group")?fillBodyHeight=fillPadding+$(this).outerHeight()+50:fillBodyHeight=fillBodyHeight+fillPadding+$(this).outerHeight()+50}),$(this).css("height",getFillHeight()+"px")})}function getFillHeight(){var e=$(window).height();return e<fillBodyHeight&&(e=fillBodyHeight+100),e}function scrollToTarget(e){1==e?e=0:2==e?e=$(document).height():(e=$(e).offset().top,$(".sticky-nav").length&&(e-=$(".sticky-nav .navbar-header").height())),$("html,body").animate({scrollTop:e},"slow"),$(".navbar-collapse").collapse("hide")}function animateWhenVisible(){hideAll(),inViewCheck(),$(window).scroll(function(){inViewCheck(),scrollToTopView(),stickyNavToggle()})}function setUpDropdownSubs(){$("ul.dropdown-menu [data-toggle=dropdown]").on("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open");var t=$(this).parent().children(".dropdown-menu");t.offset().left+t.width()>$(window).width()&&t.addClass("dropmenu-flow-right")})}function stickyNavToggle(){var t,n=0,e="sticky";$(".sticky-nav").hasClass("fill-bloc-top-edge")&&(t=$(".fill-bloc-top-edge.sticky-nav").parent().css("background-color"),"rgba(0, 0, 0, 0)"==t&&(t="#FFFFFF"),$(".sticky-nav").css("background",t),n=$(".sticky-nav").height(),e="sticky animated fadeInDown"),$(window).scrollTop()>n?($(".sticky-nav").addClass(e),"sticky"==e&&$(".page-container").css("padding-top",$(".sticky-nav").height())):($(".sticky-nav").removeClass(e).removeAttr("style"),$(".page-container").removeAttr("style"))}function hideAll(){$(".animated").each(function(){$(this).closest(".hero").length||$(this).removeClass("animated").addClass("hideMe")})}function inViewCheck(){$($(".hideMe").get().reverse()).each(function(){var s,t=jQuery(this),n=t.offset().top+t.height(),o=$(window).scrollTop()+$(window).height();t.height()>$(window).height()&&(n=t.offset().top),n<o&&(s=t.attr("class").replace("hideMe","animated"),t.css("visibility","hidden").removeAttr("class"),setTimeout(function(){t.attr("class",s).css("visibility","visible")},.01))})}function scrollToTopView(){$(window).scrollTop()>$(window).height()/3?$(".scrollToTop").hasClass("showScrollTop")||$(".scrollToTop").addClass("showScrollTop"):$(".scrollToTop").removeClass("showScrollTop")}function setUpVisibilityToggle(){$(document).on("click","[data-toggle-visibility]",function(e){e.preventDefault();var n,t=$(this).attr("data-toggle-visibility");-1!=t.indexOf(",")?(n=t.split(","),$.each(n,function(e){s($("#"+n[e]))})):s($("#"+t));function s(e){e.is("img")?e.toggle():e.slideToggle()}})}function setUpLightBox(){window.targetLightbox,$(document).on("click","[data-lightbox]",function(e){e.preventDefault(),targetLightbox=$(this);var s,a,n=targetLightbox.attr("data-lightbox"),r=targetLightbox.attr("data-autoplay"),o='<p class="lightbox-caption">'+targetLightbox.attr("data-caption")+"</p>",t="no-gallery-set",i=targetLightbox.attr("data-frame");targetLightbox.attr("data-gallery-id")&&(t=targetLightbox.attr("data-gallery-id")),targetLightbox.attr("data-caption")||(o=""),s="",1==r&&(s="autoplay"),a=$('<div id="lightbox-modal" class="modal fade"><div class="modal-dialog"><div class="modal-content '+i+' blocs-lb-container"><button id="blocs-lightbox-close-btn" type="button" class="close-lightbox" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="modal-body"><a href="#" class="prev-lightbox" aria-label="prev"><span class="fa fa-chevron-left"></span></a><a href="#" class="next-lightbox" aria-label="next"><span class="fa fa-chevron-right"></span></a><img id="lightbox-image" class="img-responsive" src="'+n+'"><div id="lightbox-video-container" class="embed-responsive embed-responsive-16by9"><video controls '+s+' class="embed-responsive-item"><source id="lightbox-video" src="'+n+'" type="video/mp4"></video></div>'+o+"</div></div></div></div>"),$("body").append(a),"fullscreen-lb"==i&&($("#lightbox-modal").addClass("fullscreen-modal").append(`<a class="close-full-screen-modal animated fadeIn" style="animation-delay:0.5s;" onclick="\`('#lightbox-modal').modal('hide');"><div class="close-icon"></div></a>`),$("#blocs-lightbox-close-btn").remove()),".mp4"==n.substring(n.length-4)?($("#lightbox-image, .lightbox-caption").hide(),$("#lightbox-video-container").show()):($("#lightbox-image,.lightbox-caption").show(),$("#lightbox-video-container").hide()),$("#lightbox-modal").modal("show"),"no-gallery-set"==t?(0==$("a[data-lightbox]").index(targetLightbox)&&$(".prev-lightbox").hide(),$("a[data-lightbox]").index(targetLightbox)==$("a[data-lightbox]").length-1&&$(".next-lightbox").hide()):(0==$('a[data-gallery-id="'+t+'"]').index(targetLightbox)&&$(".prev-lightbox").hide(),$('a[data-gallery-id="'+t+'"]').index(targetLightbox)==$('a[data-gallery-id="'+t+'"]').length-1&&$(".next-lightbox").hide()),addLightBoxSwipeSupport()}).on("hidden.bs.modal","#lightbox-modal",function(){$("#lightbox-modal").remove()}),$(document).on("click",".next-lightbox, .prev-lightbox",function(e){e.preventDefault();var o,i,n="no-gallery-set",s=$("a[data-lightbox]").index(targetLightbox),t=$("a[data-lightbox]").eq(s+1);targetLightbox.attr("data-gallery-id")&&(n=targetLightbox.attr("data-gallery-id"),s=$('a[data-gallery-id="'+n+'"]').index(targetLightbox),t=$('a[data-gallery-id="'+n+'"]').eq(s+1)),$(this).hasClass("prev-lightbox")&&(t=$('a[data-gallery-id="'+n+'"]').eq(s-1),"no-gallery-set"==n&&(t=$("a[data-lightbox]").eq(s-1))),o=t.attr("data-lightbox"),".mp4"==o.substring(o.length-4)?(i="",1==t.attr("data-autoplay")&&(i="autoplay"),$("#lightbox-image, .lightbox-caption").hide(),$("#lightbox-video-container").show().html("<video controls "+i+' class="embed-responsive-item"><source id="lightbox-video" src="'+o+'" type="video/mp4"></video>')):($("#lightbox-image").attr("src",o).show(),$(".lightbox-caption").html(t.attr("data-caption")).show(),$("#lightbox-video-container").hide()),targetLightbox=t,$(".next-lightbox, .prev-lightbox").hide(),"no-gallery-set"==n?($("a[data-lightbox]").index(t)!=$("a[data-lightbox]").length-1&&$(".next-lightbox").show(),$("a[data-lightbox]").index(t)>0&&$(".prev-lightbox").show()):($('a[data-gallery-id="'+n+'"]').index(t)!=$('a[data-gallery-id="'+n+'"]').length-1&&$(".next-lightbox").show(),$('a[data-gallery-id="'+n+'"]').index(t)>0&&$(".prev-lightbox").show())})}function addSwipeSupport(){$(".carousel-inner").length&&$(".carousel-inner").swipe({swipeLeft:function(){$(this).parent().carousel("next")},swipeRight:function(){$(this).parent().carousel("prev")},threshold:0})}function addKeyBoardSupport(){$(window).keydown(function(e){37==e.which?$(".prev-lightbox").is(":visible")&&$(".prev-lightbox").click():39==e.which&&$(".next-lightbox").is(":visible")&&$(".next-lightbox").click()})}function addLightBoxSwipeSupport(){$("#lightbox-image").length&&$("#lightbox-image").swipe({swipeLeft:function(){$(".next-lightbox").is(":visible")&&$(".next-lightbox").click()},swipeRight:function(){$(".prev-lightbox").is(":visible")&&$(".prev-lightbox").click()},threshold:0})}$(document).ready(function(){$("#scroll-hero").click(function(e){e.preventDefault(),$("html,body").animate({scrollTop:$("#scroll-hero").closest(".bloc").height()},"slow")}),extraNavFuncs(),setUpSpecialNavs(),setUpDropdownSubs(),setUpLightBox(),setUpVisibilityToggle(),addSwipeSupport(),addKeyBoardSupport(),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&$("#page-loading-blocs-notifaction").remove()}),$(window).load(function(){setFillScreenBlocHeight(),animateWhenVisible(),$("#page-loading-blocs-notifaction").remove()}).resize(function(){setFillScreenBlocHeight()}),$(function(){$('[data-toggle="tooltip"]').tooltip()})