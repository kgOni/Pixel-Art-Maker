sizePicker.addEventListener("submit", (grid) => {
    var height = sizePicker.querySelector('#inputHeight').value;
    var widht = sizePicker.querySelector('#inputWidth').value;
    makeGrid(height, widht);
    grid.preventDefault();
});

function makeGrid(row, col) {
    $('table tr').remove();
    for (var i = 1; i <= row; i++) {
        $('table').append('<tr></tr>');
        for (var j = 1; j <= col; j++) {
            $('tr:last').append('<td></td>');
        };
    };
};

const pixel = document.querySelector('table');
pixel.addEventListener('click', function (e) {
    const color = document.querySelector('#colorPicker').value;
    if ($(e.target).attr('style')) {
        $(e.target).removeAttr('style')
    } else {
        $(e.target).css('background-color', color);
    }
});

