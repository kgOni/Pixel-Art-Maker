$(document).ready(function () {                         //waits, until the side is complied loaded
    $('#sizePicker').submit(function (grid) {
        var height = $('#inputHeight').val();           //pick the height for the grid
        var width = $('#inputWidth').val();             //pick the width for the grid 
        makeGrid(height, width);
        grid.preventDefault();
    });

    function makeGrid(row, col) {
        $('tr').remove();
        for (var i = 1; i <= row; i++) {
            $('#pixelCanvas').append('<tr></tr>');
            for (var j = 1; j <= col; j++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'cells');
            }
        };

        $('.cells').click(function () {
            var paint = $('#colorPicker').val();        //pick the color for the background
            if ($(this).attr('style')) {
                $(this).removeAttr('style')
            } else {
                $(this).attr('style', 'background-color:' + paint);
            }
        });
    };
});
