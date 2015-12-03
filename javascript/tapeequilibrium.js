// Goal: Find the minimum difference between the parts
// 1. Save values to a separate array, save a place to find the difference
// 2. if one difference is smaller than the other, return 

var solution = function(nums) { 
	var numbers = nums;
	var firstHalf = numbers[0];
	var total = (numbers.reduce(function(a, b) {return a + b;})) - firstHalf;
	var result = new Array();
	
	for (var i = 0; i < numbers.length; i++) {
		if (i === 0) { 
			result[0] = Math.abs(firstHalf - total);
		}
		else { 
			firstHalf = firstHalf + numbers[i];
			total = total - firstHalf;
			var difference = Math.abs(firstHalf - total);
			if (difference < result[0]) {
				result[0] = difference;
				result[1] = i;
			};
		};
		i + 1;
	};
	return numbers[result[1]];
};

var test_array = [3, 1, 2, 4, 3];
solution(test_array);