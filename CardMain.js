function createCardMain(event)
{
  var builder = CardService.newCardBuilder()
    .setName('main');

  let optionsSection = CardService.newCardSection()
    .addWidget(createLanguagesDropdown())
    .addWidget(createStylesDropdown())
    .addWidget(createFontsDropdown());

  builder.addSection(optionsSection);
  
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