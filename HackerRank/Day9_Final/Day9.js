var resulDiv = document.createElement('div');
resultDiv.id = 'res';
resulDiv.addEventListener('click', buttonClick);
document.body.appendChild(resulDiv);

var buttonDiv = document.createElement('div');
buttonDiv.id = 'btns'
document.body.appendChild(buttonDiv);

var ids = ['btn0', 'btn1', 'btnClr', 'btnSum', 'btnSub', 'btnMul','btnDiv'];
var innerHTMLs = ['0', '1', 'C', '=', '+', '-', '*', '/'];
var styles = []