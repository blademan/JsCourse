$(function() {
    
    
    // all input
    var myVariable = $('.check');
    console.log(myVariable);
    // event  -- notikums
    
    
    
    myVariable.on('focus', function() {
       $(this).addClass('focus'); 
    });
    
    myVariable.on('blur', function() {
        $(this).removeClass('focus');
    });
    
    $('.items .item').on('click', function() {
     $(this).fadeOut(1000, function() {
      
     }) ; 
    });
    
    
    
    
    
});