// 1 index representation
// 2 Do all stuffs on that index
// 3 take the min (all stuffs) (sum them all )
// f(n-1) represents minimum energy required to reach 0 to n-1
// f(0) ==0

// function frogJump(arr, idx, dp) {//memoization
// 	if (idx == 0) return 0;
// 	if (dp[idx]) return dp[idx];
// 	let left = 0;
// 	let right = 0;
// 	left = frogJump(arr, idx - 1, dp) + Math.abs(arr[idx - 1] - arr[idx]);
// 	if (idx > 1)
// 		right = frogJump(arr, idx - 2, dp) + Math.abs(arr[idx - 2] - arr[idx]);

// 	if (idx > 1) {
// 		dp[idx] = Math.min(left, right);
// 		return Math.min(left, right);
// 	} else {
// 		dp[idx] = left;
// 		return left;
// 	}
// }

// function frogJump(arr, idx, dp) {
// 	//tabulation
// 	dp[0] = 0;
// 	for (let i = 1; i <= idx; i++) {
// 		let left = 0;
// 		let right = 0;
// 		left = dp[i - 1] + Math.abs(arr[i] - arr[i - 1]);
// 		i > 1 ? (right = dp[i - 2] + Math.abs(arr[i] - arr[i - 2])) : 0;
// 		if (i > 1) {
// 			dp[i] = Math.min(left, right);
// 		} else {
// 			dp[i] = left;
// 		}
// 	}
//     return dp[idx];
// }
// console.log(frogJump([30, 10, 60, 10, 60, 50], 5, []));

// function frogJump(arr, idx) {
// 	//tabulation with space opt.
// 	let prev = 0;
// 	let prev2 = 0;

// 	for (let i = 1; i <= idx; i++) {
// 		let left = 0;
// 		let right = 0;
// 		left = prev + Math.abs(arr[i] - arr[i - 1]);
// 		i > 1 ? (right = prev2 + Math.abs(arr[i] - arr[i - 2])) : 0;
//         prev2 = prev;
// 		if (i > 1) {
// 			prev = Math.min(left, right);
// 		} else {
// 			prev = left;
// 		}
// 	}
//     return prev;
// }

// console.log(frogJump([30, 10, 60, 10, 60, 50], 5, []));

//  frog can do k jumps
function frogJump(arr, i, k) {
	if (i == 0) return 0;
	let minSteps = undefined;
	for (let j = 1; j <= k; j++) {
		if (i - j > 0) {
			jumpEnergy = frogJump(arr, i - j, k) + Math.abs(arr[i] - arr[i - j]);
			minSteps == undefined
				? (minSteps = jumpEnergy)
				: (minSteps = Math.min(jumpEnergy, minSteps));
		}
	}
	return minSteps;
}

console.log(frogJump([10, 20, 30], 2, 3));
