/**
 * Wraps isBadVersion into a function that finds the first bad version among [1, n].
 */
export function solution(isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    let left = 1;
    let right = n;

    while(left < right) {
      let mid = Math.floor((left + right) / 2)
      if(isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
}
