// main.js

$(function(){
    $('.img-list > li > a').on('click', function(e){
        // e.preventDefault(); // 기본이벤트 제거
        var src = $(this).children().attr('src');
        $('.main-photo > img').attr('src', src);
    })
})
// document.ready() - html이 loading된후 함수가 실행

// loading 준비 완료 이벤트
window.onload = function() {
    // 로딩중 지연시간
    setTimeout(function(){
        // console.log('3초가 경과함...')
        $('.splash-screen').removeClass('on');
        // console.log('문서 로딩 완료!')
    }, 3000)
    
    
}