
var xhr = new XMLHttpRequest();        //  XMLHttpRequest 객체 생성

xhr.onload = function() {              // 응답이 로드되면
 // if (xhr.status === 200) {             // 서버 응답이 정상이면

  var response = xhr.responseXML;                      // 서버에서 xml을 얻어온다
  var events = response.getElementsByTagName('event'); // <event> 요소를 찾는다

    
   var newContent = '';    
    
    //alert(events[0].getElementsByTagName('map')[0].firstChild.nodeValue);
  
  for (var i = 0; i < events.length; i++) {            // 루프를 실행한다
      
      newContent += '<div class="event">';
      newContent += '<img src="' + events[i].getElementsByTagName('map')[0].firstChild.nodeValue + '" ';
      newContent += 'alt="' + events[i].getElementsByTagName('location')[0].firstChild.nodeValue + '" />';
      newContent += '<p><b>' + events[i].getElementsByTagName('location')[0].firstChild.nodeValue + '</b><br>';
      newContent += events[i].getElementsByTagName('date')[0].firstChild.nodeValue + '</p>';
      newContent += '</div>';
 
  }
// }
  document.getElementById('content').innerHTML = newContent;

};

xhr.open('GET', 'data/data.xml', true);             // 요청을 준비한다
xhr.send(null);                                     // 요청을 전송한다