let n = 10;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k <  i; k++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
