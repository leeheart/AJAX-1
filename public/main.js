let n = 1
getPage.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n + 1}`)
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      const array = JSON.parse(request.response)
      array.forEach(element => {
        const li = document.createElement('li')
        li.textContent = element.id
        xxx.appendChild(li)
      });
      n += 1
    }
  }
  request.send()
}

getJSON.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      const object = JSON.parse(request.response)
      console.log(object)
    }
  }
  request.send()
}

getXML.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent.trim()
      console.log(text)
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if(request.status >= 200 && request.status < 300){
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      }else{
        alert('加载CSS失败')
      }
    }
  };
  request.send();
};
