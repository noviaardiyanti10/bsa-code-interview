function palindrome(kata){
    let arr = [];
    let count = (kata.length - 1);

    for(let i = count; i >= 0; i--){
        arr.push(kata[i]);
    }

    let join = arr.join("")

    if(join == kata){
        return true;
    }

    return false;
}

function rek_palindrome(kata){
    if(kata.length < 2){
        return true;
    }

    if(kata[0] != kata[kata.length -1]){
        return false;
    }else{
        // console.log(kata.slice(1, -1))
        return rek_palindrome(kata.slice(1, -1));
    }
   
}

console.log(rek_palindrome("katak"));
console.log(rek_palindrome("basi"));
console.log(rek_palindrome("isi"));

console.log(palindrome("katak"));
console.log(palindrome("basi"));
console.log(palindrome("isi"));

function sum_arr(){
    let arr = [
        [11, 2, 4, 1],
        [4,5,6, 2],
        [10, 8, 12, 3],
        [1, 2,3, 4]
    ];

    // let count_right = arr[0][0] + arr[1][1] + arr[2][2];
    // let count_left = arr[0][2] + arr[1][1] + arr[2][0];

    let count_left = 0;
    let count_right = 0;
    let sum = 0;
    let length = arr.length - 1;

    for(let i = 0; i < arr.length; i++){
        count_right += arr[i][i];
        count_left += arr[i][length]

        length--;
    }

    sum = count_right + count_left;

    return sum;
}

console.log(sum_arr());