const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(function(num) {
  return num >= 5;
});

console.log(filteredNumbers);


const houseplants = ["фикус", "монстера", "алоэ", "фиалка", "кактус"];
 
const hasMonstera = houseplants.includes("монстера");
const hasOrchid = houseplants.includes("орхидея");
 
console.log(hasMonstera); 
console.log(hasOrchid); 


function reverseArray(arr) {
  return arr.reverse();
}
 
console.log("перевёрнутые числа:", reverseArray(numbers));
console.log("перевёрнутые растения:", reverseArray(houseplants));


import { socialComments } from "./comments.js";

 const commentsWithCom = socialComments.filter(function(comment) {
  return comment.email.includes(".com");
});

console.log(commentsWithCom);


socialComments.forEach(function(comment) {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
});

console.log(socialComments);


const shortComments = socialComments.map(function(comment) {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log(shortComments);


const invalidComments = socialComments.map(function(comment) {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});

console.log(invalidComments);


const emails = socialComments.reduce(function(acc, comment) {
  acc.push(comment.email);
  return acc;
}, []);
    
console.log(emails);


const emailsString = emails.join(', ');

console.log(emailsString);


