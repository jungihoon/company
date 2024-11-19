// JavaScript Document

   $(document).ready(function () {
	     var timeonoff;  // 타이머
         var pcnt=1;  // 카운터=순서
		 var totalcnt=3; // 총 개수   ****
		 
	 $('.RightBtn').click(function (e) {
		 e.preventDefault();
		 
		 pcnt++;  // 카운터를 1씩 증가
		 if(pcnt>totalcnt){  //카운터가 4가되면
		    pcnt=1;  //카운터를 1로 바꾼다
		 }
		 $('.num strong').text(pcnt);  //해당 카운터를 표시한다.
		 
	     clearInterval(timeonoff );	
         $('.gallery_box ul').first().appendTo('.gallery_box .gallery_box_container');

		 		 
         });


         $('.leftBtn').click(function (e) {
			e.preventDefault();	 
		   pcnt--;	 //카운트 1씩 감소
		   if(pcnt<1){  //1보다 작아지면 0
		    pcnt=totalcnt;  //3으로 바꾼다 총개수..
		   }
		   $('.num strong').text(pcnt);   //해당 카운트 출력
		
			 
	     clearInterval(timeonoff );	
             $('.gallery_box ul').last().prependTo('.gallery_box .gallery_box_container');  //prependTo 가장 위로 보낸다
         });

		 function change(){
			pcnt++;
			if(pcnt>totalcnt){
				pcnt=1;
			 }
			 $('.num strong').text(pcnt);
			 $('.gallery_box ul').first().appendTo('.gallery_box .gallery_box_container'); // 첫번째 ul 의 첫번째 ul (appendTo 가장 밑으로)
		 };

		 timeonoff =  setInterval(change, 4000);
	
   });