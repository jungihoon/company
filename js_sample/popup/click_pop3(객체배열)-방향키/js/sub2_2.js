

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {imgsrc:'big1.jpg' ,title:'제품명1', price:'10,000원', sub1:'제품설명1-1', sub2:'제품설명2-1'},
        {imgsrc:'big2.jpg' ,title:'제품명2', price:'20,000원', sub1:'제품설명1-2', sub2:'제품설명2-2'},
        {imgsrc:'big3.jpg' ,title:'제품명3', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
        {imgsrc:'big4.jpg' ,title:'제품명4', price:'30,000원', sub1:'제품설명1-4', sub2:'제품설명2-4'}
      ];
  var ind = 0;  //전역변수
  var txt =''; // dl태그 생성
  var total = $('.pop_menu li').size(); //총개수 4
  //var total = memo.length; 

  function popchange(){
    //$('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
    $('.pop .popup img').attr('src','./images/'+memo[ind].imgsrc);
    txt ='';
      txt+= '<dl>';
      txt+= '<dt>제품명 : '+memo[ind].title+'</dt>';
      txt+= '<dd>제품가격: '+memo[ind].price+'</dd>';
      txt+= '<dd>제품설명1 : '+memo[ind].sub1+'</dd>';
      txt+= '<dd>제품설명2 : '+memo[ind].sub2+'</dd>';
      txt+= '</dl>';
      $('.pop .popup .txt').html(txt);
      $('.popup span').text( (ind+1)+'/'+total);
  }


  $('.pop .pop_menu a').click(function(e){
      e.preventDefault();
      
      ind = $(this).index('.pop .pop_menu a');  // 0 1 2 3

      $('.pop_btn').fadeIn('slow');
      $('.pop .modal_box').fadeIn('fast');
      $('.pop .popup').fadeIn('slow');

      popchange();

  });

  $('.close_btn,.pop .modal_box').click(function(e){
      e.preventDefault();
      $('.pop .modal_box').fadeOut('fast');
      $('.pop .popup').fadeOut('fast');
      $('.pop_btn').fadeOut('fast');
  });

  
  $('.pop_btn a').click(function(e){
       e.preventDefault();

      $('.pop .popup').hide().fadeIn('slow'); //fade효과 
      
      if($(this).hasClass('pre')){  //이전버튼 클릭
          if(ind==0)ind=total;  // 3 2 1 0 3 2 1 0 ...
          ind--;
          popchange();
      }else if($(this).hasClass('next')){  //다음버튼 클릭
          if(ind==total-1)ind=-1;  // 0 1 2 3 0 1 2 3 ...
          ind++;
          popchange();
      }

  });
});
