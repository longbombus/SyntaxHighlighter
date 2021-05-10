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

  dark: {
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
    _backgroundColor: incapsulateColor(paletteCoy.Background, 'color'), //фон
    _default: {foregroundColor: incapsulateColor(paletteCoy.Foreground)},// Цвет текста по умолчанию

    'comment': {foregroundColor: incapsulateColor(paletteCoy.Gray)},// комментарии
    'prolog': 'comment',
    'doctype': 'comment',
    'cdata': 'comment',
    
    'punctuation': {foregroundColor: incapsulateColor(paletteCoy.GrayLight)}, //Пунктуационные знаки
    
    'property': {foregroundColor: incapsulateColor(paletteCoy.Red)},//??
    
    'boolean': 'number',
    'number': {foregroundColor: incapsulateColor(paletteCoy.Red)},//цифры черные
    'constant': 'number',
    'symbol': 'number',
    'deleted': {foregroundColor: incapsulateColor(paletteCoy.Red)},//??

    'selector': 'string',
    'attr-name': {foregroundColor: incapsulateColor(paletteCoy.Green)},//??
    'string': {foregroundColor: incapsulateColor(paletteCoy.Green)},// То, что в одинарных кавычках пишется
    
    'char': 'number',
    'builtin': 'string',
    'inserted': {foregroundColor: incapsulateColor(paletteCoy.Green)},//??
    

    'operator': {foregroundColor: incapsulateColor(paletteCoy.Brown)}, //равно, или, и 
    'entity': 'operator',
    'url': {foregroundColor: incapsulateColor(paletteCoy.Brown), underline: true}, //??
    
    'atrule': 'operator',
    'attr-value': {foregroundColor: incapsulateColor(paletteCoy.Blue)},
    'keyword': {foregroundColor: incapsulateColor(paletteCoy.Blue)}, // if for и всякие ключевые слова

    'function': {foregroundColor: incapsulateColor(paletteCoy.Green)}, //  названия функций 
    'class-name': {foregroundColor: incapsulateColor(paletteCoy.Blue), italic: true}, //??
    'namespace': {foregroundColor: incapsulateColor(paletteCoy.Green), bold: true}, //??
    'return-type': 'class-name',

    'regex': {foregroundColor: incapsulateColor(paletteCoy.Orange)}, //??
    'important': 'variable',
    'variable': {foregroundColor: incapsulateColor(paletteCoy.Brown)}, //???

    'bold': {bold: true},
    'italic': {italic: true},
  },
  default: {
    _backgroundColor: incapsulateColor(paletteMonokai.Foreground, 'color'), //фон
    _default: {foregroundColor: incapsulateColor(paletteMonokai.Background)},// Цвет текста по умолчанию

    'comment': {foregroundColor: incapsulateColor(paletteMonokai.Gray)},// комментарии
    'prolog': 'comment',
    'doctype': 'comment',
    'cdata': 'comment',
    
    'punctuation': {foregroundColor: incapsulateColor(paletteMonokai.GrayLight)}, //Пунктуационные знаки
    
    'property': {foregroundColor: incapsulateColor(paletteMonokai.Blue)},//??
    
    'boolean': 'number',
    'number': {foregroundColor: incapsulateColor(paletteMonokai.Background)},//цифры черные
    'constant': 'number',
    'symbol': 'number',
    'deleted': {foregroundColor: incapsulateColor(paletteMonokai.Red)},//??

    'selector': 'string',
    'attr-name': {foregroundColor: incapsulateColor(paletteMonokai.Green)},//??
    'string': {foregroundColor: incapsulateColor(paletteMonokai.Green)},// То, что в одинарных кавычках пишется
    
    'char': 'number',
    'builtin': 'string',
    'inserted': {foregroundColor: incapsulateColor(paletteMonokai.Green)},//??
    

    'operator': {foregroundColor: incapsulateColor(paletteMonokai.Gray)}, //равно, или, и 
    'entity': 'operator',
    'url': {foregroundColor: incapsulateColor(paletteMonokai.Blue), underline: true}, //??
    
    'atrule': 'operator',
    'attr-value': {foregroundColor: incapsulateColor(paletteMonokai.Blue)},
    'keyword': {foregroundColor: incapsulateColor(paletteMonokai.Red)}, // if for и всякие ключевые слова

    'function': {foregroundColor: incapsulateColor(paletteMonokai.Green)}, //  названия функций 
    'class-name': {foregroundColor: incapsulateColor(paletteMonokai.Red), italic: true}, //??
    'namespace': {foregroundColor: incapsulateColor(paletteMonokai.Green), bold: true}, //??
    'return-type': 'class-name',

    'regex': {foregroundColor: incapsulateColor(paletteMonokai.Whitish)}, //??
    'important': 'variable',
    'variable': {foregroundColor: incapsulateColor(paletteMonokai.OrangeLight)}, //???

    'bold': {bold: true},
    'italic': {italic: true},
  },
  TomorrowNight: {
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
    'string': {foregroundColor: incapsulateColor(paletteMonokai.Green)},
    'char': 'number',
    'builtin': 'string',
    'inserted': {foregroundColor: incapsulateColor(paletteMonokai.Green)},

    'operator': {foregroundColor: incapsulateColor(paletteMonokai.Blue)},
    'entity': 'operator',
    'url': {foregroundColor: incapsulateColor(paletteMonokai.Blue), underline: true},
    
    'atrule': 'operator',
    'attr-value': {foregroundColor: incapsulateColor(paletteMonokai.Yellow)},
    'keyword': {foregroundColor: incapsulateColor(paletteMonokai.Purple)},

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

  adaptive: {}
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
    .addItem(str.getCodeStyleName(styleId), styleId, styleId == selectedStyle)
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
  return getProp('style', 'dark', docScope);
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