function showMain(event)
{
  return createCardMain(event);
}

function onOpen(event)
{
  SlidesApp.getUi().createMenu("Prism").addItem("Show", 'showMain');
}