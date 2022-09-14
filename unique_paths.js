// function findUniquePaths(i, j) {//recursive solution
// 	//  f(i,j) represents no. of ways from 0,0 i can reach to i,j
// 	if (i == 0 && j == 0) return 1;
// 	if (i < 0 || j < 0) return 0;
// 	let up = findUniquePaths(i - 1, j);
// 	let left = findUniquePaths(i, j - 1);
// 	let result = up + left;
// 	return result;
// }

// console.log(findUniquePaths(2, 2));

// function findUniquePaths(i, j, dp = []) {
// 	//recursive solution with dynamic programming
// 	if (i == 0 && j == 0) return 1;
// 	if (i < 0 || j < 0) return 0;
// 	if (dp[i] && dp[i][j]) return dp[i][j];
// 	let up = findUniquePaths(i - 1, j, dp);
// 	let left = findUniquePaths(i, j - 1, dp);
// 	let result = up + left;
// 	if (!dp[i]) dp[i] = [];
// 	dp[i][j] = result;
// 	return result;
// }

// console.log(findUniquePaths(2, 2));

function findUniquePaths(m, n, dp = []) {
	//tabulation
	if (dp.length == 0) {
		//only write if not declared already
		for (let i = 0; i <= m; i++) {
			dp.push([]);
		}
	}
	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			if (i == 0 && i == j) {
				dp[0][0] = 1;
				continue;
			}
			let up = 0;
			let left = 0;
			if (i - 1 >= 0) up = dp[i - 1][j];
			if (j - 1 >= 0) left = dp[i][j - 1];
			dp[i][j] = up + left;
		}
	}
	return dp[m][n];
}

console.log(findUniquePaths(2, 2));
