const codeStyles = Object.freeze({
  // exampleThemeName: {
  //   syntaxUnit: {
  //     foregroundColor: complex,
  //     bold: boolean,
  //     italic: boolean,
  //     strikethrough: boolean,
  //     underline: boolean
  //   }
  // }

  monokai: {
    _name: "Dark",
    _backgroundColor: incapsulateColor(paletteMonokai.Background, 'color'),
    _default: {foregroundColor: incapsulateColor(paletteMonokai.Foreground)},

    'comment': {foregroundColor: incapsulateColor(paletteMonokai.Gray)},
    'prolog': 'comment',
    'doctype': 'comment',
    'cdata': 'comment',
    
    'punctuation': {foregroundColor: incapsulateColor(paletteMonokai.GrayLight)},
    
    'property': {foregroundColor: incapsulateColor(paletteMonokai.Blue)},
    'tag': {foregroundColor: incapsulateColor(paletteMonokai.Red)},
    'boolean': 'number',
    'number': {foregroundColor: incapsulateColor(paletteMonokai.Purple)},
    'constant': 'number',
    'symbol': 'number',
    'deleted': {foregroundColor: incapsulateColor(paletteMonokai.Red)},

    'selector': 'string',
    'attr-name': {foregroundColor: incapsulateColor(paletteMonokai.Green)},
    'string': {foregroundColor: incapsulateColor(paletteMonokai.Yellow)},
    'char': 'number',
    'builtin': 'string',
    'inserted': {foregroundColor: incapsulateColor(paletteMonokai.Green)},

    'operator': {foregroundColor: incapsulateColor(paletteMonokai.Red)},
    'entity': 'operator',
    'url': {foregroundColor: incapsulateColor(paletteMonokai.Blue), underline: true},
    
    'atrule': 'operator',
    'attr-value': {foregroundColor: incapsulateColor(paletteMonokai.Yellow)},
    'keyword': {foregroundColor: incapsulateColor(paletteMonokai.Red)},

    'function': {foregroundColor: incapsulateColor(paletteMonokai.Green)},
    'class-name': {foregroundColor: incapsulateColor(paletteMonokai.Green), italic: true},
    'namespace': {foregroundColor: incapsulateColor(paletteMonokai.Green), bold: true},
    'return-type': 'class-name',

    'regex': {foregroundColor: incapsulateColor(paletteMonokai.Whitish)},
    'important': 'variable',
    'variable': {foregroundColor: incapsulateColor(paletteMonokai.OrangeLight)},

    'bold': {bold: true},
    'italic': {italic: true},
  },
  coy: {
    _name: "Light",
    _backgroundColor: incapsulateColor(paletteCoy.Background, 'color'),
    _default: {foregroundColor: incapsulateColor(paletteCoy.Foreground)},

    'comment': {foregroundColor: incapsulateColor(paletteCoy.Gray)},
    'prolog': 'comment',
    'doctype': 'comment',
    'cdata': 'comment',
    
    'punctuation': {foregroundColor: incapsulateColor(paletteCoy.GrayLight)},
    
    'property': {foregroundColor: incapsulateColor(paletteCoy.Red)},
    
    'boolean': 'number',
    'number': {foregroundColor: incapsulateColor(paletteCoy.Red)},
    'constant': 'number',
    'symbol': 'number',
    'deleted': {foregroundColor: incapsulateColor(paletteCoy.Red)},

    'selector': 'string',
    'attr-name': {foregroundColor: incapsulateColor(paletteCoy.Green)},
    'string': {foregroundColor: incapsulateColor(paletteCoy.Green)},
    
    'char': 'number',
    'builtin': 'string',
    'inserted': {foregroundColor: incapsulateColor(paletteCoy.Green)},
    

    'operator': {foregroundColor: incapsulateColor(paletteCoy.Brown)},
    'entity': 'operator',
    'url': {foregroundColor: incapsulateColor(paletteCoy.Brown), underline: true},
    
    'atrule': 'operator',
    'attr-value': {foregroundColor: incapsulateColor(paletteCoy.Blue)},
    'keyword': {foregroundColor: incapsulateColor(paletteCoy.Blue)},

    'function': {foregroundColor: incapsulateColor(paletteCoy.Green)},
    'class-name': {foregroundColor: incapsulateColor(paletteCoy.Blue), italic: true},
    'namespace': {foregroundColor: incapsulateColor(paletteCoy.Green), bold: true},
    'return-type': 'class-name',

    'regex': {foregroundColor: incapsulateColor(paletteCoy.Orange)},
    'important': 'variable',
    'variable': {foregroundColor: incapsulateColor(paletteCoy.Brown)},

    'bold': {bold: true},
    'italic': {italic: true},
  },
});

function incapsulateColor(col, colorKey='opaqueColor')
{
  var result = {}
  result[colorKey] = col;
  return result;
}

function createStylesDropdown()
{
  let selectedStyle = getStyle();

  var selectionInput = CardService.newSelectionInput().setTitle(str.style)
    .setFieldName("style")
    .setType(CardService.SelectionInputType.DROPDOWN);

  Object.keys(codeStyles)
  .forEach(styleId => selectionInput
    .addItem(str.localize(codeStyles[styleId]._name), styleId, styleId == selectedStyle)
    .setOnChangeAction(CardService.newAction().setFunctionName('onStyleChanged'))
  );

  return selectionInput;
}

function onStyleChanged(e)
{
  setStyle(e.formInput.style);
}

function getStyle(docScope = '')
{
  return getProp('style', 'monokai', docScope);
}

function setStyle(styleId, docScope = '')
{
  setProp('style', styleId, docScope);
}

function testStyles()
{
  for(let [styleId, style] of Object.entries(codeStyles))
  {
    for (let [token, tokenStyle] of Object.entries(style))
    {
      if (typeof tokenStyle == 'string' && !(tokenStyle in style))
        Logger.log(`${styleId}/${token} links to ${tokenStyle} but not contains it`);
    }
  };
}