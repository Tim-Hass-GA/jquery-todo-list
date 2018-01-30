// Requirements
// A user should be able to add items to a 'todo' list from a form input using
// an input field and submit button.

// The form should clear when the user submits a task and focus back on the
// todo item field.

// On every item appended to the 'todo' list, have a way to delete the item.
// This could be in the form of a 'delete' link, a checkbox to mark it as
// active or inactive, or a plain button with an X on it.

// Use event delegation so that clicking the x or other buttons removes the
// item. This will require setting up a click event on the main todoList
// container, and using .on("click", ".childItemSelector", function() {})
// to watch for behavior on newly appended items.

$(document).ready(function(){
    // add dataEntry elements
    var userInput = $("<input id='textInput' type='text'>");

    // submit button
    var button = $("<button id='submit' name='submit'>").click(function(event) {
      event.preventDefault();
      var newItem = $("#textInput").val();
      if (!newItem){
        $("#textInput").focus();
        $(".instructions").text("Enter text to add item");
      } else {
        var newListItem = $("<li>").append(newItem);
        $("#toDoList").append(newListItem);
        $("#textInput").val('');
        $("#textInput").focus();
        $(".instructions").text("Click item to remove from list. Sort list by dragging items around.");
      }
    }).text("Click to Add");

    // do sort
    $( function() {
      $("#toDoList").sortable();
      $("#toDoList").disableSelection();
    });

    // Event delegation
    $('#toDoList').on('click', 'li', function(event) {
      $(this).remove();
    });

    // move data from one list to another

    // add item to DOM
    $("#dataEntry").append(userInput);
    $("#dataEntry").append(button);
    $("#textInput").focus();
    // $("p.instructions").hide();


});
