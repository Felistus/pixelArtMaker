// // Select color input
// // Select size input

// When size is submitted by the user, call makeGrid()
  //set listener to the form submit event
$('#sizePicker').submit((e) =>{
  e.preventDefault();
  const gridHeight = $('#inputHeight').val();
  const gridWidth = $('#inputWeight').val();
  
  $('#inputHeight').val(1);    //resets the values of the inputField(gridHeight && gdidWidth) to default value of '1' after table creation by makeGrid();
  $('#inputWeight').val(1);

  makeGrid(gridHeight, gridWidth);    //calling the makeGrid()
});

//creates the grid using the values of the gridSizes(gridHeight & gridWidth)
const makeGrid = (gridHeight, gridWidth) =>{
  $('tr').remove();              //removes any previous table created

  for (let row = 1; row <= gridHeight; row++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (let column = 1; column <= gridWidth; column++) {
      $('tr').filter(':last').append('<td></td>');
    }
  }
  assignColor();
}

//addColor to the cell when clickedUpon
const assignColor = () =>{
  $('td').click(function(){
    const color = $('#colorPicker').val();
    if ($(this).attr('style')) {    //checks if the attribute: 'style' exists in td.
      $(this).removeAttr('style'); //deletes attribute: 'style'
    }
    else {
      $(this).attr('style', 'background-color: ' + color);  //adds attribute: 'style' 
    }
  });
}

$('#removeGrid').click(() => {  //deletes the entire grid
  $('#pixelCanvas').find('tr').remove(); 

});
$('#wipeGridColor').click(() =>{  //wipes multiple colors off the gridcells
  $('td').removeAttr('style');
});