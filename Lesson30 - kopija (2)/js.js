$(function() {
    
    
    $('.faq .answer:first').show();
    $('.faq .ask').on('click', function() {
        var answer = $(this).next();
        
        $('.faq .answer').not(answer).slideUp(400);
       answer.slideToggle(500) ;
    });
    
    
    $('.list .jautajums').on('click', function() {
       var atbilde = $(this).next();
        $('.list .atbilde').not(atbilde).slideUp(300); 
        atbilde.slideToggle(500);
       
    });
    
    
    
    
    
})