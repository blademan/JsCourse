//$(function() {
//    
//    
//    $('.faq .answer:first').show();
//    $('.faq .ask').on('click', function() {
//        var answer = $(this).next();
//        
//        $('.faq .answer').not(answer).slideUp(400);
//       answer.slideToggle(500) ;
//    });
//    
//    
//    $('.list .jautajums').on('click', function() {
//       var atbilde = $(this).next();
//        $('.list .atbilde:visible').not(atbilde).slideUp(300); 
//        atbilde.slideToggle(500);
//       
//    });
//    
//    
//    
//    
//    
//})


$(function() {
   
    $('.list-item .header').on('click', function() {
       var id = $(this).attr('data-header');
        $('.list-item .title[data-title=' + id +']').slideToggle(400);
        
        
        
    });
    
    
    
});