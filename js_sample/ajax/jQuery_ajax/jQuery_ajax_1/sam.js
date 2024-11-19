$(function(){

   $.ajax({
       url: 'sam.json',
       dataType: 'json',
       success: function(data){
           var useData = data.sam;
           
           function dataPrint(){
               
                   var txt = '<ul>';
                   
                   for(var i in useData){
                       
                       var $Name = useData[i].Name;
                       var $Price = useData[i].Price;
                       var $Descript = useData[i].Descript;
                       var $Image = useData[i].Image;

                       txt+='<li>';
                       txt+='<img src="'+ $Image +'" alt="">';
                       txt+='<dl>';
                       txt+='<dt>'+$Name+'</dt>'; 
                       txt+='<dd>'+$Price+'원</dd>';
                       txt+='<dd>'+$Descript+'</dd>';
                       txt+='</dl>';
                       txt +='</li>';
                   }

                   txt += '</ul>';

                   $('.product_list').html(txt);
              
           };
           
           //초기실행, 함수호출
           dataPrint();
       } 
   });
    
});