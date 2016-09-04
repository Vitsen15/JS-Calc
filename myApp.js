
var calcForm = document.calc;
var expr = '';

function NumPressed(symb) {
        
    calcForm.ReadOut.value = symb;
    expr = expr + symb;
    console.log(expr);    
             
}


function Neg() {
    
    var expArr = expr.split('');
    if (expArr[expArr.length-1] === '-') {
        
        expArr[expArr.length-1] = expArr[expArr.length];
        expArr.pop();
        console.log(expr);
        return;
    }
    var buf = expArr[expArr.length-1];
    expArr[expArr.length-1] = '-';
    expArr.push(buf);
    expr = expArr.join('');
    console.log(expr);
    
}
//function inputshow (NumPressed){
//    
//    var elem = calcForm.elements['ReadOut'];
//    
//    elem.input.value = NumPressed;
//}

//var presRes = NumPressed();
//inputshow(presRes);
    
