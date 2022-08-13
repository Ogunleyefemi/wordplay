$(document).ready(function(){
$("#myForm").submit(function(event){
    event.preventDefault();

    let words = $("#sentence").val();
    let final = [];
let newArr = words.split([""]);
let splitArr = newArr.reverse([""]);
// console.log(newArr);

splitArr.forEach(function(word){
    // if(word.length >= 3){
    final.push(word);
});
console.log(final);
// final = final.reverse();
// final = final.join("");
// alert(final);

 

});
});