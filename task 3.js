let str1="fkjdhfbselrhgaejh";
let str2="skdjfhejfhewfejhvb";
var arr1=str1.split("");
var arr2=str2.split("");
var arrcommon=[];
var com=0;
for (var i=0; i<arr1.length; i++) {
    for (var j=0; j<arr2.length; j++) {
        if (arr1[i]===arr2[j]) {
            if(!arrcommon.includes(arr1[i]))
            arrcommon.push(arr1[i]);
        }
    }
}
console.log(arrcommon);