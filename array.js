var friendsAge = [15, 117, 18,20];
// console.log(friendsAge);

friendsAge[1] = 17;
// console.log(friendsAge)

var position = friendsAge.indexOf(18);
console.log(position);

friendsAge.push(22);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);
friendsAge.unshift(56);
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);