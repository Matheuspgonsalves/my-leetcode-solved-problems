/**
 * Compares two strings as if typed into text editors, where '#' backspaces.
 */
export function backspaceCompare(s: string, t: string): boolean {
  return build(s) === build(t);
}

function build(s: string): string{
  let newString: string[] = [];

  if(s.length === 0) return '';

  for(let i = 0; i < s.length; i++) {
    if(s.charAt(i) !== '#' && i >= 0) {
      newString.push(s.charAt(i));
    } else {
      newString.pop();
    }
  }
  
  return newString.join();
}
