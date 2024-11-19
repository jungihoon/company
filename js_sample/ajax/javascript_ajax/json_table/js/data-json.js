/*
직급별 보너스(pay3변수)
-부장 => 100(만원)  -과장 => 60
-대리 => 30   -주임 => 20   -사원 => 10
*/

var xhr = new XMLHttpRequest();// XMLHttpRequest 객체를 생성한다.
var pay3 =0; //보너스

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    
    newContent = '<h3>사원의 월급여</h3>';
    newContent += '<table>';
    newContent += '<tr><th>사번</th><th>이름</th><th>직급</th><th>본봉</th><th>수당</th><th>보너스</th><th>총급여</th></tr>';

    for (var i = 0; i < responseObject.job.length; i++) { 
      newContent += '<tr>';
      newContent += '<td>' + responseObject.job[i].sabun + '</td>';
      newContent += '<td>' + responseObject.job[i].sname + '</td>';
      newContent += '<td>' + responseObject.job[i].level + '</td>';
      newContent += '<td>' + responseObject.job[i].pay1 + '</td>';
      newContent += '<td>' + responseObject.job[i].pay2 + '</td>';

      if(responseObject.job[i].level == '부장'){
        pay3=100;
      }else if(responseObject.job[i].level == '과장'){
        pay3=60;
      }else if(responseObject.job[i].level == '대리'){
        pay3=30;
      }else if(responseObject.job[i].level == '주임'){
        pay3=20;
      }else if(responseObject.job[i].level == '사원'){
        pay3=10;
      }  

      newContent += '<td>' + pay3 + '</td>';
      newContent += '<td>' + (responseObject.job[i].pay1+responseObject.job[i].pay2+pay3) + '(만원)'+'</td>';    
      newContent += '</tr>';
    }
    newContent += '</table>';
 
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

