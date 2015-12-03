// Goal: Find the minimum difference between the parts
// 1. Save values to a separate array, save a place to find the difference
// 2. if one difference is smaller than the other, return 

function solution(numberArray) { 
	var numbers = numberArray;
	var total = numbers.reduce(function(a, b) {return a + b;});
	var result = new Array();
	
	for (var i = 0; i < numbers.length; i++) {
		var subtractMe = numbers[i];
		var difference = total - subtractMe;
		if (difference == result[0] || difference)
		result.push(difference);
		i + 1;
	};

	console.log(result);
	for (var i=0; i < results.length; i++) { 
		var num = results[i]
		if num 

	};

};

var test_array = [1, 2, 3];
solution(test_array);