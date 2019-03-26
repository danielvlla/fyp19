const config = require('./config')

let dwellTime = config.dwellTime;

module.exports = {
  camelCase: (str) => {
    str = str.replace(/\s[a-z]/g, str.toUpperCase())
    return str;
  },

  byId: (id) => {
    return document.getElementById(id);
  },

  readFile: (file, callback) => {
    var rawFile = new XMLHttpRequest()
    rawFile.open("GET", file, true)
  
    rawFile.onreadystatechange = (e) => {
      if(rawFile.readyState === 4) {
        if(rawFile.status === 200 || rawFile.status == 0) {
          callback(rawFile.responseText, null)
        }
      }
    }
    rawFile.send(null)
  },

  dwell: (elem, callback) => {
    let timeout = 0
    elem.onmouseover = () => {
      timeout = setTimeout(callback, dwellTime)
    };
  
    elem.onmouseout = () => {
      clearTimeout(timeout)
    }
  }
}