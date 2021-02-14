function showHelp()
{
  var builder = CardService.newCardBuilder()
    .setName('help');
  
  builder.addCardAction(
    CardService.newCardAction()
    .setText(str.help)
    .setOpenLink(
      CardService.newOpenLink()
      .setUrl("https://prism.longbombus.workers.dev")
      .setOpenAs(CardService.OpenAs.OVERLAY)
      .setOnClose(CardService.OnClose.NOTHING)
    )
  )

  return builder.build();
}
