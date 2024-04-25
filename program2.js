function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  let n = nums.length;
  let pre = new Array(n + 1);
  let result = 0;
  for (let i = 0; i < n; i++) {
    pre[i] = false;
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0 && nums[i] <= n) {
      pre[nums[i]] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!pre[i]) {
      result = i;
    }
  }
  return result;
}

module.exports = { smallestMissingPositiveInteger };
