/**
 * Returns the indices of the two numbers in `nums` that add up to `target`.
 */
export function twoSum(nums: number[], target: number): number[] {
  const sumMap = new Map<number, number>();
  let res: number[] = [];

  for(let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const diff = target - current!;

    if(sumMap.has(nums[i]!)) {
      res.push(sumMap.get(nums[i]!)!);
      res.push(i);
      break;
    }

    sumMap.set(diff, i);
  }

  return res;
}
