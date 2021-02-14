class CodeLanguage
{
  /**
   * @arg {String} name
   * @arg {String} id
   */
  constructor(name, id)
  {
    this.name = name;
    this.id = id;
  }
}

function getLanguages()
{
  let langIds = Object.keys(Prism.languages).sort(); // sorted for duplicate removal invariance

  return Object.freeze(
    langIds
    .filter((langId, i, src) =>
    {
      var lang = Prism.languages[langId];
      for (var j = src.length - 1; j > i; --j)
        if (Prism.languages[src[j]] === lang)
          return false;

      return langId != 'extend' && langId != 'DFS' && langId != 'insertBefore';
    })
    .map(langId => new CodeLanguage(str.getCodeLanguageName(langId), langId))
    .sort((lhs, rhs) => lhs.name.localeCompare(rhs.name))
  );
}

function createLanguagesDropdown()
{
  var selectedLanguage = getLanguage();

  var selectionInput = CardService.newSelectionInput().setTitle(str.language)
    .setFieldName('language')
    .setType(CardService.SelectionInputType.DROPDOWN);

    getLanguages().forEach(lang => selectionInput
      .addItem(lang.name, lang.id, lang.id == selectedLanguage)
      .setOnChangeAction(CardService.newAction().setFunctionName('onLanguageChanged'))
    );

  return selectionInput;
}

function onLanguageChanged(e)
{
  setLanguage(e.formInput.language);
}

function getLanguage(docScope = '')
{
  return getProp('language', 'cpp', docScope);
}

function setLanguage(languageId, docScope = '')
{
  setProp('language', languageId, docScope);
}