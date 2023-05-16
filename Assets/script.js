// Look into JS substring. Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var currentTime = dayjs();
  $('#currentDay').text(currentTime.format('dddd, MMMM D, YYYY h:mm A'));

  //TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var currentBlockEL = $('.col-2')
  var pastHours = [];
  var futureHours = [];

  for (var i = 0; i < currentTime; i++) {
    pastHours.push(i + ":00");
  }
  for (var i = currentTime; i < 24; i++) {
    futureHours.push(i + ":" + ("00"));
  }
  console.log(pastHours);
  console.log(futureHours);
  var hours = [
    //   //list every hour in work day and show it on page

  ];
  var saveBtn = $('#save');
  saveBtn.click(function () {
    saveSchedule();
  });
  var userDescription = $('<textarea>')
  var userTime = $('')
  var userSchedule = userDescription &&
    function saveSchedule() {
      localStorage.setItem("time", JSON.stringify(userSchedule));

      //     }

      //   // TODO: Add code to apply the past, present, or future class to each time
      //   // block by comparing the id to the current hour. HINTS: How can the id
      //   // attribute of each time-block be used to conditionally add or remove the
      //   // past, present, and future classes? How can Day.js be used to get the
      //   // current hour in 24-hour time?
      function changeColor() {
        var pastColor = { 'color': #d3d3d3 };
        var presentColor = { 'color': #ff6961 };
        var futureColor = {
          'color': #77dd77
    if currentTime = //time of schedule block//
          {
            presentColor;
          };
          if currentTime >= //time of schedule block//
          {
            futureColor;
          };
          else {
            pastColor;
          };
        }
      };
      //
      // TODO: Add code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements. HINT: How can the id
      // attribute of each time-block be used to do thi
      function getData() {
        var getUserDescription = localStorage.getItem("description");
        var getUserTime = localStorage.getItem("userTime");
        getUserTime.textContent = userTime
        getUserDescription.textContent = userDescription

        // TODO: Add code to display the current date in the header of the page.
      };
    };
