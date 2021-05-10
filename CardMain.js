function createCardMain(event)
{
  var builder = CardService.newCardBuilder()
    .setName('main');

  builder.addSection(
    CardService.newCardSection()
    .addWidget(createLanguagesDropdown())
    .addWidget(createStylesDropdown())
    .addWidget(createFontsDropdown())
  );

  builder.addSection(
    CardService.newCardSection()
    //TODO: add after 3 widgets .setCollapsible(true).setHeader("Additional")
    .addWidget(createShapesDropdown())
  );

  let applyAction = CardService.newAction()
    .setFunctionName('processor.highlight');

  builder.addSection(
    CardService.newCardSection()
    .addWidget(
      CardService.newTextButton()
      .setOnClickAction(applyAction)
      .setText(str.process)
      .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
    )
  );

  builder.addCardAction(
    CardService.newCardAction()
    .setOnClickAction(applyAction)
    .setText(str.process)
  );

  builder.addCardAction(
    CardService.newCardAction()
    .setOnClickAction(CardService.newAction().setFunctionName('saveOptions'))
    .setText(str.saveUserDefault)
  );


  builder.addCardAction(
    CardService.newCardAction()
    .setOpenLink(
      CardService.newOpenLink()
      .setUrl("https://longbombus.tk/Syntax-Highlighter-12396b21a725494cbafc8f90a5f55597")
      .setOpenAs(CardService.OpenAs.FULL_SIZE)
      .setOnClose(CardService.OnClose.NOTHING)
    )
    .setText(str.help)
  );

  return builder.build();
}

function saveOptions(e)
{
  setLanguage(e.formInput.language, null);
  setStyle(e.formInput.style, null);
  setFont(e.formInput.font, null);

  return CardService.newActionResponseBuilder()
    .setNotification(
      CardService.newNotification().setText(str.saveUserDefaultHint)
    )
    .build();
}
