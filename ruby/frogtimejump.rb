def solution(position, array)
	array.each_index do |index|
		return index if array[index] == position
	end
	return -1
end