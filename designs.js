// Select color input
// Select size input
var color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (grid) {
    grid.preventDefault();
    var height = $('#inputHeight').val();
    var width = $('#inputWidth').val();
    makeGrid(height, width);
    // console.log(height, width);
})

//add Table to Page
function makeGrid(row, col) {
    $('tr').remove();
    for (var i = 1; i <= row; i++) {
        $('#pixelCanvas').append('<tr id=table' + i +'></tr>');
        for (var j = 1; j <= col; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    $('td').click(function addColor() {
        var color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}