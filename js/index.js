/*!2015-06-09-06:42:04 */
function showElement() {

    if (pageNumber == 1) {
     setTimeout(function() {$(".tabBox").addClass("zoomIn")},500);
 } else {
    if (pageNumber == 2) {
        setTimeout(function() {$(".p2-1").addClass("fadeInDown")},500);
        setTimeout(function() {$(".focus").addClass("slideInLeft")},1500);
    } else {
        if (pageNumber == 3) {
           setTimeout(function() {$(".p3-1").addClass("zoomIn")},500);
           setTimeout(function() {$(".p3-2").addClass("slideInLeft")},1300);
           setTimeout(function() {$(".p3-3").addClass("slideInRight")},2000);
           setTimeout(function() {$(".p3-4").addClass("zoomIn")},500);
       } else {
        if (pageNumber == 4) {
             // setTimeout(function() {$(".p4-1").addClass("zoomIn")},500);
             // setTimeout(function() {$(".p4-2").addClass("slideInLeft")},1400);
             // setTimeout(function() {$(".p4-3").addClass("slideInRight")},2000);
             // setTimeout(function() {$(".p4-4").addClass("fadeInUp")},2400);
             // setTimeout(function() {$(".p4-5").addClass("fadeInUp")},2400);
             // setTimeout(function() {$(".p4-4").addClass("fadeInUp")},3000);
            setTimeout(function() {$(".p5-1").addClass("zoomIn")},500);
            setTimeout(function() {$(".p5-2").addClass("slideInLeft")},1300);
            setTimeout(function() {$(".p5-3").addClass("slideInRight")},2000);
            setTimeout(function() {$(".p5-6").addClass("fadeInUp")},2000);
            setTimeout(function() {$(".p5-5").addClass("fadeInUp")},2400);
            setTimeout(function() {$(".p5-4").addClass("fadeInUp")},3000);

        } else {
            if (pageNumber == 5) {

            } else {
                if (pageNumber == 6) {

                } else {
                    if (pageNumber == 7) {

                    } else {
                        if (pageNumber == 8) {

                        }
                    }
                }
            }
        }
    }
}
}
}
function screenBack() {
    var a, b;
    pageNumber--,
    0 > pageNumber && (pageNumber = 0),
    currentDistance = screenHeight * pageNumber,
    a = "translate3d(0, -" + currentDistance + "px, 0)",
    b = "all 0.5s ease-in",
    contentList.css({
        "-webkit-transform": a,
        transform: a,
        "-webkit-transition": b,
        transition: b
    });
    showElement();
     if(pageNumber>=4){
        $(".notice-swipe-up").css("display", "none")
    }else{
       $(".notice-swipe-up").css("display", "");
       $(".notice-swipe-up").addClass("swipeMove")
    }
}
function goPage(num,type){
    pageNumber=num;
    currentDistance = screenHeight * pageNumber;
    a = "translate3d(0, -" + currentDistance + "px, 0)",
    b = "all 0.5s ease-in",
    contentList.css({
        "-webkit-transform": a,
        transform: a,
        "-webkit-transition": b,
        transition: b
    });
    showElement();console.log(pageNumber);
    type && $('.header .nav').toggle();
    if(pageNumber==4){
        $(".notice-swipe-up").css("display", "none")
    }else{
       $(".notice-swipe-up").css("display", "");
       $(".notice-swipe-up").addClass("swipeMove")
    }
     /* 5 !== pageNumber ? 4 === pageNumber ? showTheLast && setTimeout(function() {$(".notice-swipe-up").addClass("swipeMove")},800) :
      setTimeout(function() {$(".notice-swipe-up").addClass("swipeMove")},800) : $(".notice-swipe-up").css("display", "none")*/
}
function screenForward() {
    var a, b;
    pageNumber++,
    showTheLast || 5 !== pageNumber || (pageNumber = 4),
    pageNumber > 4 && (pageNumber = 5),
    currentDistance = screenHeight * pageNumber,
    a = "translate3d(0, -" + currentDistance + "px, 0)",
    b = "all 0.5s ease-in",
    contentList.css({
        "-webkit-transform": a,
        transform: a,
        "-webkit-transition": b,
        transition: b
    }),
    showElement();
    if(pageNumber>=4){
        $(".notice-swipe-up").css("display", "none");
    }else{
       $(".notice-swipe-up").css("display", "");
       $(".notice-swipe-up").addClass("swipeMove")
    }
}
function startTouch(a) {
    if (a.touches || (a.touches = [{
        pageX: a.pageX,
        pageY: a.pageY
    }]), a.touches.length) {
        tmpEndY = 0;tmpEndX = 0;
        var b = a.touches[0];
        tmpStartY = b.pageY;tmpStartX = b.pageX
    }
}
function moveTouch(a) {
    if (a.preventDefault(), a.touches || (a.touches = [{
        pageX: a.pageX,
        pageY: a.pageY
    }]), a.touches.length) {
        var b = a.touches[0];
        tmpEndY = b.pageY; tmpEndX = b.pageX;
    }
}
function endTouch() {
    var a = tmpEndY,
    b = tmpStartY;
    if(  tmpEndX-tmpStartX >=35 || tmpEndX-tmpStartX <= -35){
       return
   }else{
    a && a !== b && -25 >= a - b 
    ? (screenForward()/*$(".notice-swipe-up").removeClass("swipeMove")*/) : a && a !== b && a - b >= 25 && screenBack()
}

}
function preImg(a) {
    var b = $(a).css("background-image");
    b = b.split("(")[1].split(")")[0];
    var c = new Image;
    return c.src = b,
    c
}
var screenHeight = $(window).height(),
pageNumber = 0,
currentDistance = 0,
contentList = $(".content-list"),
tmpEndY,tmpEndX,
tmpStartY,tmpStartX,
isFlip = [0, 0, 0, 0, 0],
showTheLast = 0,
sUserAgent = navigator.userAgent.toLowerCase(),
bIsAndroid = "android" == sUserAgent.match(/android/i),
isShort;
if ($(window).height() <= 416 && (isShort = !0), $(".content-li").each(function() {
    $(this).css("height", $(window).height());

}), screenHeight > 504) {}
    setTimeout(function() {
     $(".p0-1").addClass("zoomIn")
 },
 500),
    setTimeout(function() {
     $(".p0-2").addClass("zoomIn")
 },
 1300),
    setTimeout(function() {
     $(".p0-3").addClass("zoomIn")
 },
 2100),

    contentList.on("touchstart mousedown",
        function(a) {
            startTouch(a)
        }),
    contentList.on("touchmove mousemove",
        function(a) {
            moveTouch(a)
        }),
    contentList.on("touchend mouseup",
        function(a) {
            endTouch(a)
        });
    setTimeout(function() {
        $(".notice-swipe-up").css("display", "");
       $(".notice-swipe-up").addClass("swipeMove")
    },
    500);
    $(document).ready(function(){


      $('.header .right').click(function(){
        $('.header .nav').toggle();
    });
  })

    TouchSlide({ slideCell:"#leftTabBox" });
    TouchSlide({ 
        slideCell:"#focus",
          titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
          mainCell:".bd ul", 
          effect:"left", 
          autoPlay:false,//自动播放
          autoPage:true, //自动分页
          switchLoad:"_src" //切换加载，真实图片路径为"_src" 
      });

    //baidu count
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?0e974eb5dee97294e9e170713984ff69";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();