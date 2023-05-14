$(function() {
    const $btnMega = $(".btn-megamenu");
    const $btnMegaClose =$(".btn-close");
    const $megamenu =$(".megamenu");




    //모바일메뉴
    function mega(){
        $btnMega.on("click", megaOpen);
        $btnMegaClose.on("click", megaClose);
    }
    function megaOpen(){
        $megamenu.show();
    }
    function megaClose(){
        $megamenu.hide();
    }
    mega();


    //반응형 모바일메뉴 제어

    function removMobileNav(){
        $(window).on('resize', resizeMobile);
    }
    function resizeMobile(){
        let $windowWidth = $(window).width();
        if($windowWidth > 1024){
            megaClose()
        }
    }
    removMobileNav();
});