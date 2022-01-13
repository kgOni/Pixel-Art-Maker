$(document).ready(function () {                                             //waits, until the website is compled loaded 

    sizePicker.addEventListener("submit", (grid) => {                       //start after click submit
        var height = sizePicker.querySelector('#inputHeight').value;        //pick the height for the grid
        var widht = sizePicker.querySelector('#inputWidth').value;          //pick the width for the grid
        makeGrid(height, widht);
        grid.preventDefault();
    });

    function makeGrid(row, col) {                                           //call function to creat a grid 
        $('table tr').remove();                                             //remove the old table if there is one
        for (var i = 1; i <= row; i++) {                                    //push/append tr td to the table element in the html
            $('table').append('<tr></tr>');
            for (var j = 1; j <= col; j++) {
                $('tr:last').append('<td></td>');
            };
        };
    };

    const pixel = document.querySelector('table');                          //pic Element from table 
    pixel.addEventListener('click', function (e) {
        const color = document.querySelector('#colorPicker').value;         //pick the color and push it to the click target
        if ($(e.target).attr('style')) {
            $(e.target).removeAttr('style')                                 //remove if there is a style attribute
        } else {
            $(e.target).css('background-color', color);                     //push/append color to background 
        }
    });

});
