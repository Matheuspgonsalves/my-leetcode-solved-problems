/**
 * Returns the 1-indexed positions of the two numbers in the sorted
 * `numbers` array that add up to `target`.
 */
export function twoSum(nums: number[], target: number): number[] {
  let left = 0, right = nums.length - 1;
  let res: number[] = [];

  while(left < right) {
    const sum = nums[left]! + nums[right]!;

    if(sum === target) {
      res.push(left + 1); 
      res.push(right + 1);
      break;
    }
    if(sum > target) right--;
    if(sum < target) left++;
  }

  return res;
}
