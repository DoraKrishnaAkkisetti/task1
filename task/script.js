List1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
List2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];
l = [];
l1 = [];
l2 = [];
for (i in List1) {
  if (List2.includes(List1[i]) == false) {
    l.push(List1[i]);
  }
}
console.log(l);
for (i in List2) {
  if (List1.includes(List2[i]) == false) {
    l1.push(List2[i]);
  }
}
console.log(l1);
for (i in List2) {
  if (List1.includes(List2[i])) {
    l2.push(List2[i]);
  }
}
console.log(l2);

