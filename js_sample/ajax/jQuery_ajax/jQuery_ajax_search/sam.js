$(function(){

   $.ajax({
       url: './sam.json',
       dataType: 'json',
       success: function(data){
           var useData = data.sam;
           
           function dataPrint(arr){
               
                   var txt = '<ul>';
                   
                   for(var i in arr){
                       
                       var $Name = arr[i].Name;
                       var $Price = arr[i].Price;
                       var $Descript = arr[i].Descript;
                       var $Image = arr[i].Image;

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
           dataPrint(useData);


           $('#btn').click(function(){ //검색버튼을 클릭하면
                 /*
                    var 객체배열 = 객체배열.filter(function(element){
                          return 조건절;  //조건에 만족하면 리턴
                        
                    });
                 */
                var newArray = useData.filter(function(element){
                  
                //console.log($('#title').val());
                //return element.Name == $('#title').val();
                 return element.Name.includes($('#title').val());
                });
                //console.log(newArray);
                dataPrint(newArray);  //검색된 배열로 리스트 출력
           });

           $('.btn_all').click(function(){  //모두보기
               dataPrint(useData);
           });
       } 
   });
    
});