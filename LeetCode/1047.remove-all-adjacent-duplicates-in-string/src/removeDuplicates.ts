/**
 * Repeatedly removes adjacent equal-letter pairs from the string until none remain.
 */
export function removeDuplicates(s: string): string {
  return colision(s);
}

function colision(s: string): string {
  let newString: string[] = [];

  for(let i = 0; i < s.length; i++) {
    const currentChar = s.charAt(i);
    const stackTop = newString[newString.length - 1];

    if(!newString.length) {
      newString.push(currentChar);
    } else {
      if(currentChar === stackTop) {
        newString.pop();
      } else {
        newString.push(currentChar);
      }
    } 
  }
  
  return newString.join("");
}
