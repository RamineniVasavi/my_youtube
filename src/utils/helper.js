var nameList = ["John", "Mary", "David", "Linda", "Sarah", "James", "Jennifer","Suraj","Vijay","Sita","Rahul","Siri","Nanda","Chaitu","David","Pandu","Mohan","Ravi","Poori"];
var Messages=["Hello","Good Morning","How are you","You are looking good","Have a great day","You are audible","Speak loud","Make it more clear","Speed up","Helpful","Clear","Not clear","Can you repeat"]; 
export  function generateRandomName() {
 return nameList[Math.floor(Math.random() * nameList.length)];
      };
export function generateRandomMsg(length) {
return Messages[Math.floor(Math.random() * Messages.length)];;
}