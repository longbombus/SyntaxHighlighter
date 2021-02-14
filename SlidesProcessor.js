class SlidesProcessor
{
  highlight(event)
  {
    let presentation = SlidesApp.getActivePresentation();
    let selection = presentation.getSelection();
    let elements
      = selection.getSelectionType() == SlidesApp.SelectionType.PAGE_ELEMENT
      || selection.getSelectionType() == SlidesApp.SelectionType.TEXT
        ? selection.getPageElementRange().getPageElements()
        : [];
    
    var updates = []

    var processedElementsCount = 0;

    this.options = {
      language: getLanguage(),
      style: getStyle(),
      font: getFont()
    }

    this.codeStyle = codeStyles[this.options.style];

    for (let e of elements)
    {
      switch (e.getPageElementType())
      {
        case SlidesApp.PageElementType.SHAPE:
          let shape = e.asShape();
          updates.push({
            updateShapeProperties:
            {
              objectId: e.getObjectId(),
              shapeProperties: {
                shapeBackgroundFill: {
                  propertyState: 'RENDERED',
                  solidFill: Object.assign(
                    {alpha: 1},
                    codeStyles[this.options.style]._backgroundColor
                  )
                }
              },
              fields: 'shapeBackgroundFill'
            }
          });


          let code = shape.getText();
          if (code.isEmpty() || code.asString().trim().length == 0)
            break;

          updates.push({
            updateParagraphStyle:
            {
              objectId: e.getObjectId(),
              style: {
                indentStart: {magnitude: 0, unit: 'PT'},
                indentEnd: {magnitude: 0, unit: 'PT'},
                spaceAbove: {magnitude: 0, unit: 'PT'},
                spaceBelow: {magnitude: 0, unit: 'PT'},
                indentFirstLine: {magnitude: 0, unit: 'PT'},
              },
              textRange: {type: 'ALL'},
              fields: '*'
            }
          });

          this.generateHighlightRequests(
            code.asString(),
            0,
            e.getObjectId(),
            updates
          );
          break;

        default:
          break;
      }

      ++processedElementsCount;
    }

    if (updates.length > 0)
      Slides.Presentations.batchUpdate(
        {requests: updates},
        presentation.getId()
      );

    var response = CardService.newActionResponseBuilder();
    if (processedElementsCount > 0)
      response.setNotification(CardService.newNotification().setText(str.processSuccess.replace('#', processedElementsCount.toString())));
    else
      response.setNotification(CardService.newNotification().setText(str.processFailed));

    return response.build();
  }

  /**
   * @arg {String} code
   * @arg {Number} codeShift
   * @arg {Array} requests
   */
  generateHighlightRequests(code, codeShift, objId, requests)
  {
    this.stylizeToken(
      {
        type: '_default',
        content: Prism.tokenize(code, Prism.languages[this.options.language]),
        length: code.length
      },
      codeShift,
      objId,
      requests
    );
  }

  stylizeToken(token, codeShift, objId, requests)
  {
    if (token.type in this.codeStyle)
    {
      var tokenStyle = this.codeStyle[token.type];

      while (typeof tokenStyle === 'string')
        if (tokenStyle in this.codeStyle)
          tokenStyle = this.codeStyle[tokenStyle];
        else
        {
          Logger.log('⚠️ unknown token style link ' + tokenStyle + ' in code style ' + this.codeStyle);
          tokenStyle = null;
          break;
        }

      if (tokenStyle !== null)
      {
        requests.push({
          updateTextStyle:
          {
            objectId: objId,
            textRange: {type: 'FIXED_RANGE', startIndex: codeShift, endIndex: codeShift + token.length},
            style: Object.assign(
              {fontFamily: this.options.font},
              tokenStyle
            ),
            fields: '*'
          }
        });

        Logger.log('Highlighted ' + token.type + ' : ' + (typeof token.content === 'string' ? token.content : 'complex: ' + token.content.map(c => typeof c === 'string' ? c : '{' + c.type + '}').join(',')));
      }
    }

    if (Array.isArray(token.content))
    {
      var localCodeShift = codeShift;
      for (let subContent of token.content)
      {
        if (typeof(subContent) === 'object' &&
          'type' in subContent &&
          'length' in subContent &&
          'content' in subContent
        )
          this.stylizeToken(subContent, localCodeShift, objId, requests);
          
        localCodeShift += subContent.length;
      }
    }
  }

  /** https://www.cl.cam.ac.uk/~mgk25/ucs/quotes.html
   *  @arg {String} code
   */
  /*escapeQuotes(code)
  {
    code.replace(//g)
  }*/
}

// TODO: init depending on doc/slides/etc
const processor = new SlidesProcessor();