$(function() {
    
    $('.faq .ask').on('click', function() {
        var answer = $(this).next();
        
        $('.faq .answer').not(answer).slideUp(400);
       answer.slideToggle(500) ;
    });
})