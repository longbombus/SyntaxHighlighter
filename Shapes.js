// See: https://developers.google.com/apps-script/reference/slides/shape-type
const shapes = [
  { name:'None', id: '' },
  { name:'Rectangle', id: 'RECTANGLE' },
  { name:'Rounded Rectangle', id: 'ROUND_RECTANGLE' },
  { name:'Almost Rounded Rectangle', id: 'ROUND_2_DIAGONAL_RECTANGLE' },
]

function createShapesDropdown()
{
  let selectedShape = getShape();

  var selectionInput = CardService.newSelectionInput().setTitle(str.shape)
    .setFieldName('shape')
    .setType(CardService.SelectionInputType.DROPDOWN);

  for (let shape of shapes)
    selectionInput
    .addItem(str.localize(shape.name), shape.id, shape.id == selectedShape)
    .setOnChangeAction(CardService.newAction().setFunctionName('onShapeChanged'));

  return selectionInput;
}

function onShapeChanged(e)
{
  setShape(e.formInput.shape);
}

function getShape(docScope = '')
{
  return getProp('shape', shapes[1].id, docScope);
}

function setShape(shapeId, docScope = '')
{
  setProp('shape', shapeId, docScope);
}
