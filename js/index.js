$(function () {
    /*轮播图*/
    var imgIndex = 0;
    var indicators = $("#slide .carousel-indicators").children();
    var inner = $("#slide .carousel-inner").children();
    var flag = false;//标志位防止跳两个
    var t;
    t = setInterval(() => {
        $(indicators).removeClass("active");
        $(inner).removeClass("active");
        $(indicators[imgIndex]).addClass("active");
        $(inner[imgIndex]).addClass("active");
        imgIndex++;
        flag = true;
        if (imgIndex > 3)
            imgIndex = 0;
    }, 2000);

    $("#slide #Prev").click(function () {
        clearInterval(t);
        if (flag) {
            imgIndex--;
        }
        imgIndex--;
        flag = false;
        if (imgIndex < 0) {
            imgIndex = 3;
        }
        $(indicators).removeClass("active");
        $(inner).removeClass("active");
        $(indicators[imgIndex]).addClass("active");
        $(inner[imgIndex]).addClass("active");
        t = setInterval(() => {
            $(indicators).removeClass("active");
            $(inner).removeClass("active");
            $(indicators[imgIndex]).addClass("active");
            $(inner[imgIndex]).addClass("active");
            imgIndex++;
            flag = true;
            if (imgIndex > 3)
                imgIndex = 0;
        }, 2000);

    });
    $("#slide #Next").click(function () {
        clearInterval(t);
        if (imgIndex > 3) {
            imgIndex = 0;
        }
        $(indicators).removeClass("active");
        $(inner).removeClass("active");
        $(indicators[imgIndex]).addClass("active");
        $(inner[imgIndex]).addClass("active");
        imgIndex++;//由于上一个定时器+1了所以放在这位置
        t = setInterval(() => {
            $(indicators).removeClass("active");
            $(inner).removeClass("active");
            $(indicators[imgIndex]).addClass("active");
            $(inner[imgIndex]).addClass("active");
            imgIndex++;
            flag = true;
            if (imgIndex > 3)
                imgIndex = 0;
        }, 2000);
    });
    //轮播图标点击切换
    $("#slide .carousel-indicators").on("click", "li", function () {
        clearInterval(t);
        $(indicators).removeClass("active");
        $(inner).removeClass("active");

        var index = $(this).attr("data-slide-to");

        $(indicators[index]).addClass("active");
        $(inner[index]).addClass("active");
        imgIndex = index;
        t = setInterval(() => {
            $(indicators).removeClass("active");
            $(inner).removeClass("active");
            $(indicators[imgIndex]).addClass("active");
            $(inner[imgIndex]).addClass("active");
            imgIndex++;
            flag = true;
            if (imgIndex > 3)
                imgIndex = 0;
        }, 2000);
    });


    // tab选项卡悬停事件
    var nav_item = $(".nav-tabs").children(".nav-item");
    var tab_pane = $(".tab-content").children(".tab-pane");
    $(nav_item[0]).mouseover(function () {
        $(tab_pane[1]).removeClass("active");
        $(tab_pane[0]).addClass("active");
    });
    $(nav_item[1]).mouseover(function () {
        $(tab_pane[0]).removeClass("active");
        $(tab_pane[1]).addClass("active");
    });
});

//弹窗提示信息
$(function () {

    // 消息框弹出
    $("#msg").slideDown();
    //5秒以后让msg隐藏
    setTimeout(`$("#msg").slideUp()`, 4000);
})

