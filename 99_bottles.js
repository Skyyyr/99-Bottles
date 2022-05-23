//Just because... initialize it once and use it at the end.
const finishedMessage = "Take one down and pass it around, 1 bottle of beer on the wall.\n" +
"1 bottle of beer on the wall, 1 bottle of beer.\n" +
"Take one down and pass it around, no more bottles of beer on the wall.\n" +
"No more bottles of beer on the wall, no more bottles of beer.\n" +
"Go to the store and buy some more, 99 bottles of beer on the wall."

function bottleSong(bottleNumber = 99) {
  // Write your code here!
  const output = bottleNumber + " Bottles of beer on the wall, " + bottleNumber + " bottles of beer on the wall.\n"
  + "Take one down pass it around, " + (bottleNumber - 1) + " on the wall.";
  if (bottleNumber === 1) {
    return console.log(finishedMessage);
  }
  console.log(output);
  bottleSong(bottleNumber - 1);
};

bottleSong();
