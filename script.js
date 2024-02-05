document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.orderbutton');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = 'dili.html';
        });
    });
});
