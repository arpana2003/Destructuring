function countUniqueLetters(...args) {
    let uniqueLetters = [];
  
    for (let i=0;i < args.length;i++) {
      let key=args[i];
  
      if (!uniqueLetters[key]) {
        let count = 0;
  
        for (let j = i; j < args.length; j++) {
          if (key == args[j]) {
            count++;
          }
        }
        console.log(`count of ${key} is ${count}`);
        uniqueLetters[key] = true;
      }
    }
  }
  
  let result = countUniqueLetters("a", "b","a","b","c");