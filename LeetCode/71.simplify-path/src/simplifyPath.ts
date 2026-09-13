/**
 * Converts an absolute Unix-style path into its simplified canonical form.
 */
export function simplifyPath(path: string): string {
  return splitPath(path);
}

function splitPath(path: string): string {
  let splitedPath: string[] = path.split("/");
  let stack: string[] = [];

  for(let i = 0; i < splitedPath.length; i++){
    const currentChar = splitedPath[i];
    
    if(currentChar === '.' || currentChar === '') continue
    else if(currentChar === '..') stack.pop();
    else stack.push(currentChar);
  }

  return stackToPath(stack);
}

function stackToPath(stack: string[]): string {
  let result: string = "";
  
  for(let i = 0; i < stack.length; i++) {
    result += "/" + stack[i];
  }

  return result === "" ? "/" : result;
}



// [ '', 'home', 'user', '', '', 'Documents', '..', 'Pictures' ];
// [ 'home', 'user', 'Documents', '..', 'Pictures' ];
// ['']