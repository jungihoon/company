

var xhr = new XMLHttpRequest();                 //  XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // 응답이 로드되면
  // 서버 환경에서만 작동한다.
  //if(xhr.status === 200) {                       // 서버의 응답이 정상이면
    document.getElementById('content').innerHTML = xhr.responseText; // 수정 된다
  //}
};

xhr.open('GET', 'data/data.html', true);        // 요청을 준비한다
xhr.send(null);                                 // 요청을 전송한다