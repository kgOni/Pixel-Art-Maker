// Select color input
// Select size input
var color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(event) {
    eight = $('#inputHeight').val();
    var width = $('#inputWidth').val();
    // makeGrid(height, width);
    $('tr').remove();
    for (var i = 1; i <= height; i++) {
        $('table').append('<tr></tr>');
        for (var j = 1; j <= width; j++) {
            $('tr:last').append('<td></td>');
            // console.log(height, width);
        })
event.preventDefault();
    }
}

document.querySelector('#pixelCanvas') 
//test 


function makeGrid(x, y) {
    $('tr').remove();
    for (var i = 1; i <= x; i++) {
        $('table').append('<tr></tr>');
        for (var j = 1; j <= y; j++) {
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