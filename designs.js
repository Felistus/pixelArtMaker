// // Select color input
// // Select size input

// When size is submitted by the user, call makeGrid()
  //set listener to the form submit event
  //resets the values of the inputField to default value of '1' on submit
  //displays the hiden buttons
$(document).ready( () =>{
  $('#sizePicker').submit((e) =>{
    e.preventDefault();
    const gridHeight = $('#inputHeight').val();
    const gridWidth = $('#inputWeight').val();
    $('#inputHeight, #inputWeight').val(1);
    $('#removeGrid, #wipeGridColor').show();
    makeGrid(gridHeight, gridWidth);
  });
  
//creates the grid using the values of the gridSizes
  const makeGrid = (gridHeight, gridWidth) =>{
    $('tr').remove();
    for (let row = 1; row <= gridHeight; row++) {
      $('#pixelCanvas').append('<tr></tr>');
      for (let column = 1; column <= gridWidth; column++) {
        $('tr').filter(':last').append('<td></td>');
      }
    }assignColor();
  };

//addsColor to the cells when clickedUpon using the conditional statement
  const assignColor = () =>{
    $('td').click(function(){
      const color = $('#colorPicker').val();
      if ($(this).attr('style')) { 
        $(this).removeAttr('style');
      } else {
        $(this).attr('style', 'background-color: ' + color);
      }
    });
  };

  $('#removeGrid').click(() => {  //deletes the entire grid
    $('#pixelCanvas').find('tr').remove(); 
      $('#removeGrid, #wipeGridColor').hide();
  });
  $('#wipeGridColor').click(() =>{  //wipes multiple colors off the gridcells
    $('td').removeAttr('style');
  });
});
