
var calcForm = document.calc;
var expr = '';
var operArr = ['+', '-', '*', '/', '%'];
var expArr = expr.split(',');

function NumPressed(symb) {
        
    calcForm.ReadOut.value = symb;
    expr = expr + symb;
    console.log(expr);    
             
}


function Neg() {

    for (var i = expArr.length-1; i > 0; i--){

        if(expArr[i] === '-'){
            
            expArr[i] = '+';
            exp = expArr.join('');
            return;
        }
    
        if(expArr[i] === '+'){
            
                expArr[i] = '-';
                exp = expArr.join('');
                return;
            }
        if(expArr[i] === '*' || '/' || '%'){
                
                shiftRight(i);
                expArr[i] = '-';
                exp = expArr.join();
                return;
            }
        
    }
    
}


function shiftRight(pos){
    
    expArr.push(' ');
    for (var i = expArr.length-1; i > pos; i--){
        expArr[i] = expArr[i-1];
    }
}


function insRemoveMin(pos){
    
    if (expArr[pos-1] === '-') {
        
        expArr[expArr.length-1] = expArr[expArr.length];
        expArr.pop();
        expr = expArr.join();
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
    
