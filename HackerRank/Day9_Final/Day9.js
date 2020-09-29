var resulDiv = document.createElement('div');
resultDiv.id = 'res';
resulDiv.addEventListener('click', buttonClick);
document.body.appendChild(resulDiv);

var buttonDiv = document.createElement('div');
buttonDiv.id = 'btns'
document.body.appendChild(buttonDiv);

var ids = ['btn0', 'btn1', 'btnClr', 'btnEql', 'btnSum', 'btnSub', 'btnMul','btnDiv'];
var innerHTMLs = ['0', '1', 'C', '=', '+', '-', '*', '/'];
var styles = ['biButton', 'biButton', 'utiButton', 'utiButton', 'operButton', 'operButton', 'operButton', 'operButton'];

for (var i = 0; i < ids.length; i++) {
    var button = document.createElement('button');
    button.id = ids[i];
    button.innerHTML = innerHTMLs[i];
    button.className = 'button' + styles[i];
    button.addEventListener('click', buttonClick);
    buttonDiv.appendChild(button);
}

var opr = '';

function buttonClick(e) {
    var button = e.target || e.srcElement;

    if (button.id == 'btnClr') {
        op
    }
}