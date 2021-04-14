$(function(){

    $('.gallery img').click(function(){
        let clickedImage = $(this);
        console.log(clickedImage.attr('src'));
        
        $('#img-large').attr('src', clickedImage.attr('src'));
        $('.gallery-viewer').css('display', 'flex');
    })
    $('.exit').click(function(){
        $('.gallery-viewer').css('display', 'none');
    })
})
