/**
 * Searches for target in a sorted array and returns its index, or -1 if it isn't present.
 */
export function search(nums: number[], target: number): number {
  let left: number = 0
  let right: number = nums.length - 1;
  let position: number = -1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if(nums[mid] === target) {
      position = mid;
      break;
    } else if (target > nums[mid]!) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return position;
}
