let _noneStringCode = '¯'

/**
 * @arg {String} key
 * @arg {String} value
 * @arg {String} docScope
 */
function setProp(key, value, docScope = '')
{
  var props;
  if (docScope != null)
  {
    props = PropertiesService.getDocumentProperties();
    key = key + docScope;
  }
  else
    props = PropertiesService.getUserProperties();

  props.setProperty(key, value ? value : _noneStringCode );
}

/**
 * @arg {String} key
 * @arg {String} defaultValue
 * @return {String}
 */
function getProp(key, defaultValue = null, docScope = '')
{
  if (docScope != null)
  {
    let localValue = PropertiesService.getDocumentProperties().getProperty(key + docScope);
    if (localValue != null)
      return localValue === _noneStringCode ? '' : localValue;
  }
  
  let globalValue = PropertiesService.getUserProperties().getProperty(key);
  return globalValue ? (globalValue === _noneStringCode ? '' : globalValue) : defaultValue;
}