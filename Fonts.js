const fonts = [
  'Roboto Mono',
  'Ubuntu Mono',
  'Inconsolata',
  'Fira Code',
  'VT323'
]

function createFontsDropdown()
{
  let selectedFont = getFont();

  var selectionInput = CardService.newSelectionInput().setTitle(str.font)
    .setFieldName("font")
    .setType(CardService.SelectionInputType.DROPDOWN);

  for (let font of fonts)
    selectionInput
    .addItem(font, font, font == selectedFont)
    .setOnChangeAction(CardService.newAction().setFunctionName('onFontChanged'));

  return selectionInput;
}

function onFontChanged(e)
{
  setFont(e.formInput.font);
}

function getFont(docScope = '')
{
  return getProp('font', fonts[0], docScope);
}

function setFont(fontId, docScope = '')
{
  setProp('font', fontId, docScope);
}