// // Select color input
// // Select size input

// When size is submitted by the user, call makeGrid()
  //set listener to the form submit event
  //resets the values of the inputField to default value of '1' on submit
  //displays the hiden buttons
$(document).ready( () =>{
  $('#size-picker').submit((e) =>{
    e.preventDefault();
    const gridHeight = $('#input-height').val();
    const gridWidth = $('#input-weight').val();
    $('#input-height, #input-weight').val(1);
    $('#remove-grid, #wipe-grid-color').show();
    makeGrid(gridHeight, gridWidth);
  });
/**
* @description creates the grid using the values of the gridSizes
* @param {number} gridHeight
* @param {number} gridWidth
**/
  const makeGrid = (gridHeight, gridWidth) =>{
    $('tr').remove();
    for (let row = 1; row <= gridHeight; row++) {
      $('#pixel-canvas').append('<tr></tr>');
      for (let column = 1; column <= gridWidth; column++) {
        $('tr').filter(':last').append('<td></td>');
      }
    }assignColor();
  };
//a listener that adds color to the cells & removes color when clicked upon 
  const assignColor = () =>{
    $('td').click(function(){
      const color = $('#color-picker').val();
      if ($(this).attr('style')) { 
        $(this).removeAttr('style');
      } else {
        $(this).attr('style', 'background-color: ' + color);
      }
    });
  };
  
  $('#remove-grid').click(() => {  //a listener that deletes the entire grid
    $('#pixel-canvas').find('tr').remove(); 
      $('#remove-grid, #wipe-grid-color').hide();
  });
  $('#wipe-grid-color').click(() =>{  //a listener that wipes multiple colors off the gridcells
    $('td').removeAttr('style');
  });
});
