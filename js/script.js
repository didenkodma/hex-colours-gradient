
const btn = document.querySelector('.click-btn');
const body = document.querySelector('body');
const h2 = document.querySelector('h2');

btn.onclick = function () {
   var num1 = getHexNumber();
   var num2 = getHexNumber();

   body.style = 'background: linear-gradient(to right, ' + num1 + ', ' + num2 + ');';
   h2.innerText = 'background: linear-gradient(to right, ' + num1 + ', ' + num2 + ')';
}

// Generates rundom hex number starts with '#'
function getHexNumber() {
   const hex = '0123456789abcdef';
   const hexArr = hex.split('');
   const strStart = "#";
   let strRet = strStart;
   let runNumb;

   for (var i = 0; i < 6; i++) {
      runNumb = Math.floor(Math.random() * 16);
      strRet += hexArr[runNumb];
   }

   return strRet;

}
