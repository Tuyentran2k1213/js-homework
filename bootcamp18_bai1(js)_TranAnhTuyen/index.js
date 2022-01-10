function sapxep(array) {
    var length = array.length, n = 0;
    var extraNum, newArray = '';
    for(i = 0; i < length - 1; i++) {
        if(typeof array[i] != 'undefined'){
            for(j = i + 1; j < length; j++){
                if(array[i] >= array[j]){
                    extraNum = array[i];
                    array[i] = array[j];
                    array[j] = extraNum;
                }
            }
        }
    }
    while(n < length && typeof array[i] != 'undefined'){
        newArray += '  ' + array[n];
        n++;
    }
    return newArray;
}
function numCount() {
    var number = document.getElementsByClassName('input_num');
    var output = document.getElementById('number'); 
    var textLine, num = '';
    var length = number.length;
    var numberTest = new Array(length);
    for(i = 0; i <  length; i++){
         if(number[i].value === ''){
            textLine = 'Hãy nhập đầy đủ 3 số';
            num = '';
            break;
         } else{
            numberTest[i] = Number(number[i].value);
            textLine = 'Sắp xếp theo thứ tự tăng dần của 3 số nguyên là: ';
            }
         }
        var thText = sapxep(numberTest) || num;

        output.innerText = textLine + thText;
}
function reset() {
    var number = document.getElementsByClassName('input_num');
    var output = document.getElementById('number');
    for(i = 0; i < number.length; i++){
        if(number[i].value === ''){
            output.innerHTML = '';
        }
    }
}