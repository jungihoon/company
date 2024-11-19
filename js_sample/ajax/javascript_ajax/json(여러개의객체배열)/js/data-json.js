

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체배열로 변환한다.

    var newContent = '';
    var newContent2 = '';

    newContent += '<ul>';
    for (var i = 0; i < responseObject.events.length; i++) { 
        newContent += '<li>';
        newContent += '<img src="'+ responseObject.events[i].map +'" alt="'+ responseObject.events[i].location +'">';
        newContent += '<dl>';
        newContent += '<dt>'+ responseObject.events[i].location +'</dt>';
        newContent += '<dd>'+ responseObject.events[i].date +'</dd>';
        newContent += '</dl>';
        newContent += '</li>';
    }
    newContent += '</ul>';
    document.getElementById('content').innerHTML = newContent;


    newContent2 += '<ul>';
    for (var i = 0; i < responseObject.products.length; i++) { 
        newContent2 += '<li>';
        newContent2 += '<img src="'+ responseObject.products[i].map +'" alt="'+ responseObject.products[i].location +'">';
        newContent2 += '<dl>';
        newContent2 += '<dt>'+ responseObject.products[i].location +'</dt>';
        newContent2 += '<dd>'+ responseObject.products[i].date +'</dd>';
        newContent2 += '</dl>';
        newContent2 += '</li>';
    }
    newContent2 += '</ul>';
    document.getElementById('content2').innerHTML = newContent2;
  }
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

