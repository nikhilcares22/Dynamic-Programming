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

// function findMaxAdjSum(arr, i, dp = []) {/* O(n) O(n) */
// 	//tabulation
// 	if (i < 0) return 0;
// 	if (i == 0) return arr[i];
// 	if (dp[i]) return dp[i]; //if already in dp array return and avoid overlapping subproblems

// 	dp[0] = arr[0]; //base case

// 	for (let j = 1; j <= i; j++) {
// 		let pick;
// 		if (j == 1) pick = arr[j];// for 1 f(-1) is 0
// 		else pick = arr[j] + dp[i - 2];
// 		let nonPick = dp[j - 1];
// 		dp[j] = Math.max(pick, nonPick);
// 	}
// 	return dp[i];
// }
// let arr = [2, 1, 4, 9];
// console.log(findMaxAdjSum(arr, 3));

function findMaxAdjSum(arr, i) {
	//space optimisation O(1)
	//tabulation
	if (i < 0) return 0;
	if (i == 0) return arr[i];

	let prev = arr[0]; //previous required value for computation
	let prev2 = 0; //next to previous

	for (let j = 1; j <= i; j++) {
		let pick;
		if (j == 1) pick = arr[j];
		else pick = arr[j] + prev2;
		let nonPick = prev;
		//update pointers variables
		prev2 = prev;
		prev = Math.max(pick, nonPick);
	}
	return prev;
}
let arr = [2, 1, 4, 9];
console.log(findMaxAdjSum(arr, 3));
