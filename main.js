const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

   // Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.

   let usernames = [];
   gameInfo.forEach((item, i) => {
        usernames.push(item["username"]+"!")
   })
   console.log(usernames)
   // Create an array using forEach that contains the usernames of all players with a score bigger than 5. Tip: Use the ternary operator

   let newarr = []
   gameInfo.forEach((item, i) => {
       let biggerThanFive = (item["score"] > 5) ? newarr.push(item["username"]) : false
   });
   console.log(newarr)

   // Find and display the total score of the users.
   let sum = 0;
   gameInfo.forEach((item, i) => {
    sum += item["score"];
});
   console.log(sum)