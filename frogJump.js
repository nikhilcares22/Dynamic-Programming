// 1 index representation
// 2 Do all stuffs on that index
// 3 take the min (all stuffs) (sum them all )
// f(n-1) represents minimum energy required to reach 0 to n-1
// f(0) ==0

function frogJump(arr, idx, dp) {
	if (idx == 0) return 0;
	if (dp[idx]) return dp[idx];
	let left = 0;
	let right = 0;
	left = frogJump(arr, idx - 1, dp) + Math.abs(arr[idx - 1] - arr[idx]);
	if (idx > 1)
		right = frogJump(arr, idx - 2, dp) + Math.abs(arr[idx - 2] - arr[idx]);

	if (idx > 1) {
		dp[idx] = Math.min(left, right);
		return Math.min(left, right);
	} else {
		dp[idx] = left;
		return left;
	}
}

console.log(frogJump([30, 10, 60, 10, 60, 50], 5, []));
