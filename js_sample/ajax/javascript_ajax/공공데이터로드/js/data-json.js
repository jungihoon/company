

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    newContent +='<table>';
    newContent +=    '<thead>';
    newContent +=    '<tr>';
    newContent +=      '<th>약국ID</th>';
    newContent +=      '<th>약국명</th>';
    newContent +=      '<th>약국전화번호</th>';
    newContent +=     '<th>약국주소</th>';
    newContent +=   '</tr>';
    newContent +=    '</thead>';
    newContent +=    '<tbody>';

    for (var i = 0; i < responseObject.DATA.length; i++) { 
      newContent +='<tr>';
      newContent +='<td>'+responseObject.DATA[i].hpid+'</td>';
      newContent +='<td>'+responseObject.DATA[i].dutyname+'</td>';
      newContent +='<td>'+responseObject.DATA[i].dutytel1+'</td>';
      newContent +='<td>'+responseObject.DATA[i].dutyaddr+'</td>';
      newContent +='</tr>';
    }
    newContent +='</tbody>';
    newContent +='</table>';
 
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

