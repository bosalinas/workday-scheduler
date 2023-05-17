// Look into JS substring

$(function () {

  var currentTime = dayjs();
  $('#currentDay').text(currentTime.format('dddd, MMMM D, YYYY h:mm A'));

  setInterval(currentTime, 1000);

  //event when clicking save button
  $('.saveBtn').on('click', function() {
    var description = $(this).siblings('textarea').val();
    var id = $(this).parent().attr('id');

    localStorage.setItem(id, description);
  })

//change color depending on current time
  function changeColorBlocks() {
    var timeBlock = $('.time-block');

    for (var i = 0; i < timeBlock.length; i++) {
  //recieved help with this and don't understand these var
      var hour = dayjs().hour();
      var blockId = $(timeBlock[i]).attr('id');
      var blockHour = blockId.split("-")[1];

//change color depending on current time if statements
      if (blockHour < hour) {
        $(timeBlock[i]).removeClass('present');
        $(timeBlock[i]).removeClass('future');
        $(timeBlock[i]).addClass('past');
      } else if (blockHour == hour) {
        $(timeBlock[i]).removeClass('future');
        $(timeBlock[i]).removeClass('past');
        $(timeBlock[i]).addClass('present');
      } else {
        $(timeBlock[i]).removeClass('past');
        $(timeBlock[i]).removeClass('present');
        $(timeBlock[i]).addClass('future');
      };

    };
  };

//get from local storage and display on HTML
  function getData() {
    $("#hour-9 textarea").val(localStorage.getItem('hour-9'));
    $("#hour-10 textarea").val(localStorage.getItem('hour-10'));
    $("#hour-11 textarea").val(localStorage.getItem('hour-11'));
    $("#hour-12 textarea").val(localStorage.getItem('hour-12'));
    $("#hour-13 textarea").val(localStorage.getItem('hour-13'));
    $("#hour-14 textarea").val(localStorage.getItem('hour-14'));
    $("#hour-15 textarea").val(localStorage.getItem('hour-15'));
    $("#hour-16 textarea").val(localStorage.getItem('hour-16'));
    $("#hour-17 textarea").val(localStorage.getItem('hour-17'));
  };

  setInterval(changeColorBlocks, 30000);
  getData();
});   