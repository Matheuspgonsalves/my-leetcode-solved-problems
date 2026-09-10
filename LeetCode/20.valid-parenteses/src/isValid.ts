/**
 * Returns true when every delimiter in the string is correctly opened, closed,
 * and nested.
 */
export function isValid(s: string): boolean {
  const newArr: string[] = [];

  if (s.length % 2 !== 0 || s.length === 0) return false;

  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s.charAt(i);
    const stackTop = newArr[newArr.length - 1];

    switch (currentCharacter) {
      case ")":
        if (stackTop === "(") {
          newArr.pop();
        } else {
          return false;
        }
        break;
      case "]":
        if (stackTop === "[") {
          newArr.pop();
        } else {
          return false;
        }
        break;
      case "}":
        if (stackTop === "{") {
          newArr.pop();
        } else {
          return false;
        }
        break;
      default:
        newArr.push(currentCharacter);
    }
  }

  return newArr.length === 0;
}
