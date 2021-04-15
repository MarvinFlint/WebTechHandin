$(function(){

    // large viewer functionality
    $('.gallery img').click(function(){
        // save the clicked object
        let clickedImage = $(this);
        // set the image's source to that of the clicked element
        $('#img-large').attr('src', clickedImage.attr('src'));
        // display the large viewer
        $('.gallery-viewer').css('display', 'flex');
    })

    // close functionality, either click or esc key
    $('.exit').click(function(){
        $('.gallery-viewer').hide();
    })
    $(document).keydown(function(e){
        var c = e.key;
        if(c == "Escape"){
            $('.gallery-viewer').hide();
        }
    })

    // mobile menu toggle
    $(".toggle").click(function(){
        $('.nav-list').slideToggle(500);
        $(this).toggleClass('cross');
    })
})
