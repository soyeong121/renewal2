$(function () {
    // 서브메뉴 풀다운
    var $navMenu1 = $('#nav > ul > li:nth-child(1)'),
        $navMenu2 = $('#nav > ul > li:nth-child(2)'),
        $navMenu3 = $('#nav > ul > li:nth-child(3)'),
        $navMenu4 = $('#nav > ul > li:nth-child(4)'),
        $navMenu5 = $('#nav > ul > li:nth-child(5)'),
        $navMenu6 = $('#nav > ul > li:nth-child(6)'),
        $navMenu7 = $('#nav > ul > li:nth-child(7)'),
        $header = $('#nav-container');

    var $container1 = $('#submenu1'),
		$container2 = $('#submenu2'),
		$container3 = $('#submenu3'),
		$container4 = $('#submenu4'),
		$container5 = $('#submenu5'),
		$container6 = $('#submenu6'),
		$container7 = $('#submenu7');
    
    $navMenu1.mouseenter(function(e){
		e.preventDefault();
        $header.stop().animate({height : '100px'}, 200);
		$container1.slideDown();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
	}).mouseleave(function(){
        $header.stop().animate({height : '50px'}, 200);
    });
    $navMenu2.mouseenter(function(e){
		e.preventDefault();
        $header.stop().animate({height : '160px'}, 200);
		$container1.slideUp();
		$container2.slideDown();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
	}).mouseleave(function(){
        $header.stop().animate({height : '50px'}, 200);
    });
    $navMenu3.mouseenter(function(e){
		e.preventDefault();
        $header.stop().animate({height : '100px'}, 200);
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideDown();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
	}).mouseleave(function(){
        $header.stop().animate({height : '50px'}, 200);
    });
    $navMenu4.mouseenter(function(e){
		e.preventDefault();
        $header.stop().animate({height : '160px'}, 200);
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideDown();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
	}).mouseleave(function(){
        $header.stop().animate({height : '50px'}, 200);
    });
    $navMenu5.mouseenter(function(e){
		e.preventDefault();
        $header.stop().animate({height : '160px'}, 200);
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideDown();
		$container6.slideUp();
		$container7.slideUp();
	}).mouseleave(function(){
        $header.stop().animate({height : '50px'}, 200);
    });
    $navMenu6.mouseenter(function(e){
		e.preventDefault();
        $header.stop().animate({height : '100px'}, 200);
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideDown();
		$container7.slideUp();
	}).mouseleave(function(){
        $header.stop().animate({height : '50px'}, 200);
    });
    $navMenu7.mouseenter(function(e){
		e.preventDefault();
        $header.stop().animate({height : '100px'}, 200);
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideDown();
	}).mouseleave(function(){
        $header.stop().animate({height : '50px'}, 200);
    });

    // 배너 자동 슬라이드
    var $imageList = $('#banner-container'),
        photoLength = $imageList.children().length,
        photoIndex = 0,
        defaultInterval = 500;

    var timerId = window.setInterval(slideImage, 4000);
    $('#banner').hover(
        function () {
            window.clearInterval(timerId);
        },
        function () {
            timerId = window.setInterval(slideImage, 4000);
        }
    );

    // 블릿
    var $bullets = $('<ul></ul>').attr('id', 'bullets').appendTo('#banner');

    $imageList.children().each(function (index) {
        $('<li></li>').append($('<a></a>').attr('href', '#').html(index + 1)).appendTo($bullets);
    });

    var $bulletList = $bullets.find('a');

    $bulletList.eq(0).addClass('on');
    $bulletList.on('click', function (e) {
        e.preventDefault();

        var index = parseInt($(this).html()) - 1;
        var step = index - photoIndex;

        if (step < 0) step += photoLength;
        if (step > 0) {
            photoIndex = index;
            $bulletList.removeClass('on').eq(photoIndex).addClass('on');
            $imageList.animate({ 'margin-left': step * -100 + '%' }, function () {
                $imageList.removeAttr('style').append(
                    $imageList.children().eq(step).prevAll().get().reverse()
                );
            });
        }
    });

    // 타이머에 의해 실행될 함수 미리 선언
    function slideImage(interval) {
        if (typeof interval == 'undefined') interval = defaultInterval;

        photoIndex++;
        photoIndex %= photoLength;

        $bulletList.removeClass('on').eq(photoIndex).addClass('on');
        $imageList.animate({ 'margin-left': '-100%' }, interval, function () {
            $(this).removeAttr('style').children(':first').appendTo(this);
        });
    };

    // 하단 배너 클릭 시 슬라이드
    var slides = document.querySelector('#container2 > ul > li'),
        slide = document.querySelector('#container2 > ul'),
        photoCount = slides.length,
        duration = 400,
        photoIndex = 0;

    // 슬라이드 버튼 클릭 이벤트
    document.querySelector("#next").addEventListener("click", nextSlideImage);
    document.querySelector("#prev").addEventListener("click", prevSlideImage);

    // 다음 사진으로 슬라이드
    function nextSlideImage() {
        photoIndex++;
        photoIndex %= photoCount;
        slide.style.left = "-100%";
        slide.style.transition = duration + "ms";
        window.setTimeout(() => {
            slide.appendChild(slide.firstElementChild);
            slide.removeAttribute("style");
        }, duration);
    }
    // 이전 사진으로 슬라이드
    function prevSlideImage() {
        photoIndex--;
        photoIndex %= photoCount;
        slide.insertBefore(slide.lastElementChild, slide.firstChild);
        slide.style.left = "-100%";
        slide.style.transition = "0ms";
        window.setTimeout(() => {
            slide.style.left = 0;
            slide.style.transition = duration + "ms";
        });
    }
});