let sum = 0
let enter1 = Number(prompt("enter first num: "));
let enter2 = Number(prompt("enter second num: "));

for (let x = enter1; x < enter2; x++) {
  if (x % enter1 == 0 && x > 0) {
    sum += x;
  } else if(x <= 0){
    alert("INVALID")
  }

}

console.log(sum);