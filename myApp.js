
var calcForm = document.calc;
var expr = '';
//var operArr = ['+', '-', '*', '/', '%'];

function NumPressed (symb) {
    
    if(calcForm.ReadOut.value === '0'){
        calcForm.ReadOut.value = '';
    }
    
    //expArr = expr.split('');
    
    console.log(calcForm.ReadOut.value);
    calcForm.ReadOut.value += symb;
    expr = expr + symb;
    console.log(expr);    
             
}


function Neg () {
    
    
    
    var expArr = expr.split('');
    
    for (var i = expArr.length-1; i >= 0; i--){
        
        var buf = expArr[i];
        
        if(buf === '-'){
            
            expArr[i] = '+';
            expr = expArr.join('');
            console.log(expr);
            calcForm.ReadOut.value = expr;
            return;
        }
    
        if(buf === '+'){
            
                expArr[i] = '-';
                expr = expArr.join('');
                console.log(expr);
                calcForm.ReadOut.value = expr;
                return;
            }
        if( buf === '*' ||
            buf === '/' ||
            buf === '%' ) {
                
                shiftRight(i+1, '-');
                console.log(expr);
                calcForm.ReadOut.value = expr;
                return;
            }
        if (i === 0){
            expArr.unshift('-');
            expr = expArr.join('');
            console.log(expr);
            calcForm.ReadOut.value = expr;
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
    expArr[pos] = symb;
    expr = expArr.join('');
}

function Operation (operation){
        
        calcForm.ReadOut.value = '0';
    
    if (operation === '='){
    
        if (eval(expr) === undefined) {
            calcForm.ReadOut.value = '0';
            return;
        }
        
        if (eval(expr) === Infinity){
            calcForm.ReadOut.value = 'Zero devide!!!';
            return;
        }
        
        console.log(eval(expr));
        calcForm.ReadOut.value = eval(expr);
        expr = eval(expr).toString();
        return;
        
    }
    
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
        //calcForm.ReadOut.value += operation;
        return;
    }
    
    
    expArr.push(operation);
    expr = expArr.join('');
    console.log(expr);
    //calcForm.ReadOut.value += operation;
    
}


function ClearEntry() {
    
    expr = '';
    calcForm.ReadOut.value = '0';
    
}


function Clear() {
    
    var expArr = expr.split('');
    for (var i = expArr.length-1; i >= 0; i--){
        var buf = expArr[i];
        if (buf === '*' ||
            buf === '/' ||
            buf === '%' || 
            buf === '+' ||
            buf === '-' ||
            i === 0) {
            (function () {
                for (var j = i; j <= expArr.length; j++)
                expArr.pop();
            }())
            expr = expArr.join('');
            console.log(expr);
            calcForm.ReadOut.value = '0';
            return;
        }
    }
    
    
}


function sqrt() {
    
    var expeArr = expr.split('');
    
    for (var i = expeArr.length-1; i >=0; i--){
        
    }
    
}























