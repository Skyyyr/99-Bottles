finished_message = "Take one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
def bottle_song(bottle_number):
	# write your code here!
	output = f"{bottle_number} Bottles of beer on the wall, {bottle_number} bottles of beer on the wall.\nTake one down pass it around, {bottle_number - 1} more on the wall.";
	if (bottle_number == 1):
		return print(finished_message);
	print(output)
	bottle_song(bottle_number - 1)

bottle_song(99)