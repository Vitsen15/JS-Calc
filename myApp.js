
var calcForm = document.calc;
var expr = '';
//var operArr = ['+', '-', '*', '/', '%'];

function NumPressed (symb) {
        
    calcForm.ReadOut.value = symb;
    expr = expr + symb;
    console.log(expr);    
             
}


function Neg () {
    
    var expArr = expr.split('');
    
    for (var i = expArr.length-1; i > 0; i--){
        
        var buf = expArr[i];
        
        if(buf === '-'){
            
            expArr[i] = '+';
            expr = expArr.join('');
            console.log(expr);
            return;
        }
    
        if(buf === '+'){
            
                expArr[i] = '-';
                expr = expArr.join('');
                console.log(expr);
                return;
            }
        if( buf === '*' ||
            buf === '/' ||
            buf === '%' ||  
            buf === '*') {
                
                shiftRight(i, '-');
                console.log(expr);
                return;
            }
        if (i == 0){
            shiftRight(i, '-');
            console.log(expr);
            return;
        }
        
    }
    
}


function shiftRight (pos , symb){
    
    var expArr = expr.split('');
    expArr.push(' ');
    
    for (var i = expArr.length-1; i > pos; i--){
        expArr[i] = expArr[i-1];
    }
    expArr[pos+1] = symb;
    expr = expArr.join('');
}

function Operation (operation){
    
    var expArr = expr.split('');
    var buf = expArr[expArr.length-1];
    
    if (buf === '*' ||
        buf === '/' ||
        buf === '%' || 
        buf === '+' ||
        buf === '-' ) {
        expArr[expArr.length-1] = operation;
        expr = expArr.join('');
        console.log(expr);
        return;
    }
    expArr.push(operation);
    expr = expArr.join('');
    console.log(expr);
    
}




//function insRemoveMin(pos){
//    
//    if (expArr[pos-1] === '-') {
//        
//        expArr[expArr.length-1] = expArr[expArr.length];
//        expArr.pop();
//        expr = expArr.join();
//        console.log(expr);
//        return;
//    }
//    
//    var buf = expArr[expArr.length-1];
//    expArr[expArr.length-1] = '-';
//    expArr.push(buf);
//    expr = expArr.join('');
//    console.log(expr);
//    
//}

//function inputshow (NumPressed){
//    
//    var elem = calcForm.elements['ReadOut'];
//    
//    elem.input.value = NumPressed;
//}

//var presRes = NumPressed();
//inputshow(presRes);
    
