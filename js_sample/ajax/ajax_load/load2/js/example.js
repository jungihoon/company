

$(function() {                                   

  
 var fragment = $('#content #sessions li a.current').attr('href');   // 'data.html#Modeling'
    
 fragment = fragment.replace('#', ' #');                 
 $('#details').load(fragment); 
    
  $('#content #sessions li a').on('click', function(e) { 
    e.preventDefault();                                     
    fragment = this.href;                               

    fragment = fragment.replace('#', ' #');  
    $('#details').load(fragment);                          

    $('#sessions a.current').removeClass('current');       
    $(this).addClass('current');
  });



});
