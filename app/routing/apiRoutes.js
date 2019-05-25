//LOAD DATA

var friends = require("../data/friends");

// Routing 
// ===========================================
module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        //loop through friends
        var perfectFriend = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        
        var newFriendSearch = req.body;
        var userScores = newFriendSearch.scores;
        
        //takes results of users name and photo,other than the survey questions, to post and parse
        var newFriendName = newFriendSearch.name;
        var newFriendPhoto = newFriendSearch.photo;
        
        //variable used to calculate difference of the user score and scores of each user
        var totalDifferenceScore = 0;
        
        //loops through the friendArray data objects to gather friends scores.
        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friendArray[i].name);
            totalDifference = 0;

             //loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
             for (var j = 0; j < 10; j++) {
               
                // Difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If the sum of total differences is less then the differences of perfectFriend
                if (totalDifferenceScore <= perfectFriend.friendDifference) {

                    // Reset perfectFriend 
                    perfectFriend = friends[i].name;
                    perfectFriend = friends[i].photo;
                    perfectFriend.friendDifference = totalDifferenceScore;
                }
            }
        }

        // Saves user's data to the database
        friends.push(newFriendSearch);

        //Returns JSON data with the user's match, looped through friends data array. 
        res.json(perfectFriend);
    });
        };