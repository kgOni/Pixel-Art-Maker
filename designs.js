// Select color input
// Select size input
var color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (grid) {
    var height = $('#inputHeight').val();
    var width = $('#inputWidth').val();
    makeGrid(height, width);
    // console.log(height, width);
    grid.preventDefault();
})

function makeGrid(row, col) {
    $('tr').remove();
    for (var i = 1; i <= row; i++) {
        $('#pixelCanvas').append('<tr></tr>');
        for (var j = 1; j <= col; j++) {
            $('tr:last').append('<td></td>');
        }
    }
    $('td').click(function () {
        var color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
