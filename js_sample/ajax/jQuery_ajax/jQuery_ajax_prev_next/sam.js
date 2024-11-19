$(function(){
  var i = 0;
  var useData=[];

  function dataPrint(){
   $.ajax({
       url: 'sam.json',
       dataType: 'json',
       success: function(data){
            useData = data.sam;
           
            var txt = '<ul>';
            
            var $Name = useData[i].Name;
            var $Price = useData[i].Price;
            var $Descript = useData[i].Descript;
            var $Image = useData[i].Image;

            $Price = $Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  //천단위 , 처리

            txt+='<li>';
            txt+='<img src="'+ $Image +'" alt="">';
            txt+='<dl>';
            txt+='<dt>'+$Name+'</dt>'; 
            txt+='<dd>'+$Price+'원</dd>';
            txt+='<dd>'+$Descript+'</dd>';
            txt+='</dl>';
            txt +='</li>';
            
            txt += '</ul>';

            $('.product_list').html(txt).hide().stop().fadeIn('fast');
            $('.text .num1').text(i+1);
            $('.text .num2').text(useData.length);
       } 
   });
};
           
dataPrint();//초기실행, 함수호출

$('.btn a').click(function(e){
    e.preventDefault();

    if($(this).hasClass('prev')){
       if(i==0)i=useData.length; 
       i--;
       dataPrint();
    }else if($(this).hasClass('next')){
       if(i==useData.length-1)i=-1;
       i++;
       dataPrint();
    }
    
});
    
});