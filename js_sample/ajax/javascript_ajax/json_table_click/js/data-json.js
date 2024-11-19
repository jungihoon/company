

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var view=document.getElementById('view');
view.onclick = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	  // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    
    newContent = '<h3>사원의 월급여</h3>';
    newContent += '<table>';
    newContent += '<tr><th>사번</th><th>이름</th><th>본봉</th><th>수당</th><th>보너스</th><th>총급여</th></tr>';

    for (var i = 0; i < responseObject.job.length; i++) { 
      newContent += '<tr>';
      newContent += '<td>' + responseObject.job[i].sabun + '</td>';
      newContent += '<td>' + responseObject.job[i].sname + '</td>';
      newContent += '<td>' + responseObject.job[i].pay1 + '</td>';
      newContent += '<td>' + responseObject.job[i].pay2 + '</td>';
      newContent += '<td>' + responseObject.job[i].pay3 + '</td>';
      newContent += '<td>' + (responseObject.job[i].pay1+responseObject.job[i].pay2+responseObject.job[i].pay3) + '(만원)'+'</td>';    
      newContent += '</tr>';
    }
    newContent += '</table>';
 
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

