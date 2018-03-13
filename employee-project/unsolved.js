// Initialize Firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDdKgZMYUJ0NpNFYftAnulplZRnpGxaRxU",
    authDomain: "employeedb-fb639.firebaseapp.com",
    databaseURL: "https://employeedb-fb639.firebaseio.com",
    projectId: "employeedb-fb639",
    storageBucket: "employeedb-fb639.appspot.com",
    messagingSenderId: "566099365666"
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  
  // This function handles events where one button is clicked
  $("#update-info").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
      // We're using a form so that the user can hit enter instead of clicking the button if they want
      
      event.preventDefault();
  
      // This line will grab the text from the input box
      var employeeName = $(".employee-name").val().trim();
      var role = $(".role").val().trim();
      var startDate = $(".start-date").val().trim();
      var monthlyRate = $(".monthly-rate").val().trim();
      var tBody = $("tbody");
      var tRow = $("<tr>");
  
      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var employeeNameCol = $("<td>").text(employeeName);
      var roleCol = $("<td>").text(role);
      var startDateCol = $("<td>").text(startDate);
      var monthlyRateCol = $("<td>").text(monthlyRate);
  
      // Append the newly created table data to the table row
      tRow.append(employeeNameCol, roleCol, startDateCol, monthlyRateCol);
        
      // Append the table row to the table body
      tBody.append(tRow);
  
      database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
  
      })
      // logging variables
      console.log(employeeName);
      console.log(role);
      console.log(startDate);
      console.log(monthlyRate);
   
  
       // Alert
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $(".employee-name").val("");
    $(".role").val("");
    $(".start-date").val("");
    $(".monthly-rate").val("");
  });
  
  database.ref().on("value", function(snapshot) {
  
    // Then we console.log the value of snapshot
    console.log(snapshot.val());
  
    // Then we change the html associated with the number.
    $(".click-value").text(snapshot.val().employeeName);
    $(".click-value").text(snapshot.val().role);
    $(".click-value").text(snapshot.val().startDate);
    $(".click-value").text(snapshot.val().monthlyRate);
    
  
    // Then update the clickCounter variable with data from the database.
    employeeName = snapshot.val().employeeName;
    role = snapshot.val().role;
    startDate = snapshot.val().startDate;
    monthlyRate = snapshot.val().monthlyRate;
    // nextArrival = snapshot.val().nextArrivalInput;
    // minutesAway = snapshot.val().minutesAwayInput;
  
  // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
  // Again we could have named errorObject anything we wanted.
  }, function(errorObject) {
  
    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
  });
  
  