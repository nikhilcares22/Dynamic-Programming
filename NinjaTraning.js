// 1 index representation (index , last)
// 2 Do all stuffs on that index
// 3 take the max (all points)
// f(n-1,last) represents maximum points acquired in day n-1 if task performed on prev day was last
// input will be
/* 
    base case  is  day 0 where we performed last task , so we will take maximum of the tasks which are exempted.
*/

// let points = [
// 	//   0  1  2 task number
// 	[2, 1, 3], //1st day
// 	[3, 4, 6], //2nd day
// 	[10, 1, 6], //3rd day
// 	[8, 3, 7], //4th day
// ];

// function calcMaxPoints(day, last, points) {//recursion
// 	//base case
// 	let maxPts = 0;
// 	if (day === 0) {
// 		for (let i = 0; i < points[0].length; i++) {
// 			if (last !== i) {
// 				maxPts = Math.max(maxPts, points[day][i]);
// 			}
// 		}
// 		return maxPts;
// 	}
// 	// recursive case
// 	for (let i = 0; i < points[0].length; i++) {
// 		if (last !== i) {
// 			maxPts = Math.max(
// 				maxPts,
// 				points[day][i] + calcMaxPoints(day - 1, i, points)
// 			);
// 		}
// 	}
// 	return maxPts;
// }

let points = [
	//   0  1  2 task number
	[2, 1, 3], //1st day
	[3, 4, 6], //2nd day
	[10, 1, 6], //3rd day
	[8, 3, 7], //4th day
];

function calcMaxPoints(day, last, points, dp = []) {
	//handel overlapping subproblems
	//base case
	let maxPts = 0;

	if (dp[day] && dp[day][last]) return dp[day][last]; // already present then return from here

	if (day === 0) {
		for (let i = 0; i < points[0].length; i++) {
			if (last !== i) {
				maxPts = Math.max(maxPts, points[day][i]);
			}
		}
		if (!dp[day]) {
			dp.push([]);
		} else if (!dp[day][last]) {
			dp[day][last] = -1;
		}
		dp[day][last] = maxPts;
		return maxPts;
	}
	// recursive case
	for (let i = 0; i < points[0].length; i++) {
		if (last !== i) {
			maxPts = Math.max(
				maxPts,
				points[day][i] + calcMaxPoints(day - 1, i, points,dp)
			);
		}
	}
	if (!dp[day]) {
		dp.push([]);
	} else if (!dp[day][last]) {
        dp[day][last] = -1;
	}
	dp[day][last] = maxPts;
	return maxPts;
}

console.log(calcMaxPoints(3, 3, points));
