window.fetch('https://www.facebook.com').then(r => r.text()).then(r => console.log('request to not premitted url', r))

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', function() {
  console.log('request to not premitted url 2', this.responseText)
})
oReq.open('GET', 'https://www.facebook.com')
oReq.send()