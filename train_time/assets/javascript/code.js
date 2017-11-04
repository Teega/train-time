//we have input form
//when someone clickes the button we need to get the values from the input form
var config = {
    apiKey: "AIzaSyCEffRd0OijoJqky0aieWhfDafQZB0a2mk",
    authDomain: "train-time-b8105.firebaseapp.com",
    databaseURL: "https://train-time-b8105.firebaseio.com",
    projectId: "train-time-b8105",
    storageBucket: "train-time-b8105.appspot.com",
    messagingSenderId: "374724678714"
  };
  firebase.initializeApp(config);

  var db = firebase.database()
$("#addTrainBtn").on("click", function(event) {
  event.preventDefault();
  // console.log(event);
  // console.log("hey you clicked me");
  var trainName = $("#trainNameInput").val();
  var trainLine = $("#lineInput").val();
  var trainDest = $("#destinationInput").val();
  var trainTime = $("#trainTimeInput").val();
  var trainFreq = $("#frequencyInput").val();
  
  db.ref().push({
    trainName: trainName,
    trainLine: trainLine,
    trainDest: trainDest,
    trainTime: trainTime,
    trainFreq: trainFreq
  })
  //put values into database

});
//when values get added to database, take those values and show them on the screen
  db.ref().on("child_added", function (child) {
    console.log(child.val().trainName);
    console.log(child.val().trainLine);
    console.log(child.val().trainDest);
    console.log(child.val().trainTime);
    console.log(child.val().trainFreq);
    // var name = snapshot.child.val().trainName;
    // console.log(name);

$("#trainTable").append("<tr><td>"+ child.val().trainName+ "</td><td>"+ "<tr><td>"+ child.val().trainLine+ "</td><td>"+ "<tr><td>"+ child.val().trainDest+ "</td><td>"+ "<tr><td>"+ child.val().trainTime+ "</td><td>"+ "<tr><td>"+ child.val().trainFreq+ "</td><td>");
  })

