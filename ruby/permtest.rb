#CodilityTest2
#find the missing element
def solution(array)
	test = array.sort
	length = test.length - 1
	test.each_index do |index|
		if test[index + 1] != test[index] + 1 && index != length
			return test[index] + 1
		end
	end
end

origen_array = [1, 2, 3, 4, 5] 

p solution(origen_array)