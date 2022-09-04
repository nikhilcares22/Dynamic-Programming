//find max sum without taking adj element
// function findMaxAdjSum(arr, i) {
// 	if (i < 0) return 0;
// 	if (i == 0) return arr[i];
// 	//pick
// 	let pick = arr[i] + findMaxAdjSum(arr, i - 2);
// 	//non-pick
// 	let nonPick = findMaxAdjSum(arr, i - 1);

// 	return Math.max(pick, nonPick);
// }
// let arr = [2, 1, 4, 9];
// console.log(findMaxAdjSum(arr, 3));

// function findMaxAdjSum(arr, i, dp = []) {
// 	//dynamic programming(memoization)
// 	if (i < 0) return 0;
// 	if (i == 0) return arr[i];
// 	if (dp[i]) return dp[i]; //if already in dp array return and avoid overlapping subproblems

// 	//pick
// 	let pick = arr[i] + findMaxAdjSum(arr, i - 2, dp);
// 	//non-pick
// 	let nonPick = findMaxAdjSum(arr, i - 1, dp);

// 	dp[i] = Math.max(pick, nonPick); //add to dp array
// 	return Math.max(pick, nonPick);
// }
// let arr = [2, 1, 4, 9];
// console.log(findMaxAdjSum(arr, 3));

function findMaxAdjSum(arr, i, dp = []) {
	//tabulation
	if (i < 0) return 0;
	if (i == 0) return arr[i];
	if (dp[i]) return dp[i]; //if already in dp array return and avoid overlapping subproblems

	dp[0] = arr[0]; //base case
	let neg = 0;

	for (let j = 1; j <= i; j++) {
		let pick;
		if (j == 1) pick = arr[j] + neg;
		else pick = arr[j] + dp[i - 2];
		let nonPick = dp[j - 1];
		dp[j] = Math.max(pick, nonPick);
	}
	return dp[i];
}
let arr = [2, 1, 4, 9];
console.log(findMaxAdjSum(arr, 3));
