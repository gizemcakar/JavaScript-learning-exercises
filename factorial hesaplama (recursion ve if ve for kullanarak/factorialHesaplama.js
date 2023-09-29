// Recursion ile;
function factorial(n){
    let answer = n;
        if(n==0 || n==1){
            return 1;
        }
        else if(n>1){
            answer = factorial(n-1) * answer;
        }
    return answer;
}
document.getElementById("sonuc").innerHTML = factorial(4);


//If-else ve for ile;

// function factorial(n){
// let answer = 1;
// if(n==0 || n==1){
//      return answer; 
//}
// else if(n>1){
//      for(var i=n; i>=1; i--){
//         answer= answer*i;
//}
//}
//  return answer;
//}

// document.getElementById("sonuc").innerHTML = factorial(4);

