//Ajax getdata method
/*
 *@url  type: String
 *@page type: String
 *@cb   type: function
 */
export default function getData(url, page, cb) {

  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300 || request.status === 304) {
        const data = JSON.parse(request.responseText);
        cb(data);
      }
    }
  }
  request.open('GET', url + page, true)
  request.send(null);
}