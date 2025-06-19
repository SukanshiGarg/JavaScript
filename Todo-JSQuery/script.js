// Add a new to-do item when Enter key (keycode 13) is pressed
$('input').keypress(function(e) {
    if (e.which === 13 && $(this).val().trim() !== "") {
        const todoText = $(this).val(); // get the input value
        $('#list').append(`<li>${todoText}</li>`); // append as <li>
        $(this).val(""); // clear the input field
    }
});

// Remove to-do item on clicking it
$('#list').on('click', 'li', function() {
    $(this).fadeOut(300, function() {
        $(this).remove(); // completely remove after fade
    });
});


//toggle input
$('#plus').click(function(){
    $('input').fadeToggle();
  
})