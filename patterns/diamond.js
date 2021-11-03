let n = 5;
    let string = "";
    // Upside pyramid
    for (let i = 1; i <= n; i++) {
      for (let j = n; j > i; j--) {
        string += " ";
      }
       // printing star
      for (let k = 0; k < i; k++) {
        string += "* ";
      }
      string += "\n";
    }
    // downside pyramid
    for (let i = 0; i <= n-1 ; i++) {
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      // printing star
      for (let k = (n - i); k > 0; k--) {
        string += "* ";
      }
      string += "\n";
    }
    console.log(string);