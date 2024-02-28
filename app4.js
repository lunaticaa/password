let str = prompt("enter your word: ");

const reversed = reverseString(str);

console.log(reversed);

function reverseString(str){
  return str.split("").reverse().join(", ");
};


// function reversing(str){
//   let reversed = "";
//   for (const c of str){
//     reversed = c + reversed;

//   }
//   return reversed;
// }


// conditions in switch
// ----------------------------
// num1
// -----------------------------
// let flower = "tulip";

// switch (flower){
//     case "rose":
//         console.log("Roses are red");
//         break;
//     case "violet":
//         console.log("Violets are blue");
//         break;
//     case "sunflower":
//         console.log("Sunflowers are yellow");
//         break;
//     default:
//         console.log("Please select another flower");
// }

// num2
// -----------------------------
// let age = 29;

// switch(age){}
// // or
// switch(true){}
// switch("A string"){}
// switch(5+5){}

// num3
// -----------------------------
// let score = 70;

// switch(score){
//     case score > 50:
//         console.log("Score is higher than 50");
//         break;
//     default:
//         console.log("Score is 50 or lower");
// }

// num4
// -----------------------------
// const grade = 87;

// switch (true) {
// 	// If score is 90 or greater
// 	case grade >= 90:
// 		console.log("A");
// 		break;
// 	// If score is 80 or greater
// 	case grade >= 80:
// 		console.log("B");
// 		break;
// 	// If score is 70 or greater
// 	case grade >= 70:
// 		console.log("C");
// 		break;
// 	// If score is 60 or greater
// 	case grade >= 60:
// 		console.log("D");
// 		break;
// 	// Anything 59 or below is failing
// 	default:
// 		console.log("F");
// }