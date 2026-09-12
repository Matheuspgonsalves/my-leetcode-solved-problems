/**
 * Repeatedly removes adjacent same-letter pairs that differ only in case until the string is good.
 */
export function makeGood(s: string): string {
  const stack: string[] = [];
  
  for (let i = 0; i < s.length; i++) {
    const cChar = s.charAt(i);
    const tChar = stack[stack.length - 1];

    if(!stack.length){
      stack.push(cChar);
    } else {
      if (tChar !== cChar && tChar.toLowerCase() === cChar.toLowerCase()) {
        stack.pop();
      } else {
        stack.push(cChar);
      }

    }
  }

  return stack.join("");
};
