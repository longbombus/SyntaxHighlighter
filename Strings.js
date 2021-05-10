class StringConstants
{
  constructor()
  {
    this.userLocale = Session.getActiveUserLocale();
    {
      var sublang = this.userLocale.indexOf('_');
      if (sublang > 0)
        this.userLocale = this.userLocale.substr(0, sublang);
    }

    this.appName = this.localize('Syntax Highlighter');

    this.appIcon = '{△}';

    this.process = this.localize('Apply to selected');

    this.help = this.localize('How to use?');

    this.language = this.localize('Programming language');
    this.style = this.localize('Style');
    this.font = this.localize('Font');
    
    this.shape = this.localize('Shape');

    this.processSuccess = '✔️\u00A0\u00A0# ' + this.localize('processed');
    this.processFailed = '⚠️\u00A0\u00A0' + this.localize('No text block is selected');

    this.saveUserDefault = this.localize('Save as default');
    this.saveUserDefaultHint = this.localize('Selected options will be used for new documents');

    // src: https://prismjs.com/plugins/show-language/
    this.languageNames = {
      "none":"Plaintext","html":"HTML","xml":"XML","svg":"SVG","mathml":"MathML","ssml":"SSML","rss":"RSS","css":"CSS","clike":"C-like","js":"JavaScript","abap":"ABAP","abnf":"ABNF","al":"AL","antlr4":"ANTLR4","g4":"ANTLR4","apacheconf":"ApacheConfiguration","apl":"APL","aql":"AQL","arff":"ARFF","asciidoc":"AsciiDoc","adoc":"AsciiDoc","aspnet":"ASP.NET(C#)","asm6502":"6502Assembly","autohotkey":"AutoHotkey","autoit":"AutoIt","basic":"BASIC","bbcode":"BBcode","bnf":"BNF","rbnf":"RBNF","bsl":"BSL(1C:Enterprise)","oscript":"OneScript","csharp":"C#","cs":"C#","dotnet":"C#","cpp":"C++","cil":"CIL","cmake":"CMake","coffee":"CoffeeScript","conc":"Concurnas","csp":"Content-Security-Policy","css-extras":"CSSExtras","dataweave":"DataWeave","dax":"DAX","django":"Django/Jinja2","jinja2":"Django/Jinja2","dns-zone-file":"DNSzonefile","dns-zone":"DNSzonefile","dockerfile":"Docker","dot":"DOT(Graphviz)","gv":"DOT(Graphviz)","ebnf":"EBNF","editorconfig":"EditorConfig","ejs":"EJS","etlua":"EmbeddedLuatemplating","erb":"ERB","excel-formula":"ExcelFormula","xlsx":"ExcelFormula","xls":"ExcelFormula","fsharp":"F#","firestore-security-rules":"Firestoresecurityrules","ftl":"FreeMarkerTemplateLanguage","gml":"GameMakerLanguage","gamemakerlanguage":"GameMakerLanguage","gcode":"G-code","gdscript":"GDScript","gedcom":"GEDCOM","glsl":"GLSL","graphql":"GraphQL","hs":"Haskell","hcl":"HCL","hlsl":"HLSL","http":"HTTP","hpkp":"HTTPPublic-Key-Pins","hsts":"HTTPStrict-Transport-Security","ichigojam":"IchigoJam","ignore":".ignore","gitignore":".gitignore","hgignore":".hgignore","npmignore":".npmignore","inform7":"Inform7","javadoc":"JavaDoc","javadoclike":"JavaDoc-like","javastacktrace":"Javastacktrace","jq":"JQ","jsdoc":"JSDoc","js-extras":"JSExtras","json":"JSON","webmanifest":"WebAppManifest","json5":"JSON5","jsonp":"JSONP","jsstacktrace":"JSstacktrace","js-templates":"JSTemplates","kts":"KotlinScript","kt":"Kotlin","latex":"LaTeX","tex":"TeX","context":"ConTeXt","lilypond":"LilyPond","ly":"LilyPond","emacs":"Lisp","elisp":"Lisp","emacs-lisp":"Lisp","llvm":"LLVMIR","lolcode":"LOLCODE","md":"Markdown","markup-templating":"Markuptemplating","matlab":"MATLAB","mel":"MEL","mongodb":"MongoDB","moon":"MoonScript","n1ql":"N1QL","n4js":"N4JS","n4jsd":"N4JS","nand2tetris-hdl":"NandToTetrisHDL","naniscript":"NaninovelScript","nani":"NaninovelScript","nasm":"NASM","neon":"NEON","nginx":"nginx","nsis":"NSIS","objectivec":"Objective-C","objc":"Objective-C","ocaml":"OCaml","opencl":"OpenCL","parigp":"PARI/GP","objectpascal":"ObjectPascal","pcaxis":"PC-Axis","px":"PC-Axis","peoplecode":"PeopleCode","pcode":"PeopleCode","php":"PHP","phpdoc":"PHPDoc","php-extras":"PHPExtras","plsql":"PL/SQL","powerquery":"PowerQuery","pq":"PowerQuery","mscript":"PowerQuery","powershell":"PowerShell","promql":"PromQL","properties":".properties","protobuf":"ProtocolBuffers","purebasic":"PureBasic","pbfasm":"PureBasic","purs":"PureScript","py":"Python","q":"Q(kdb+database)","qml":"QML","rkt":"Racket","jsx":"ReactJSX","tsx":"ReactTSX","renpy":"Ren'py","rpy":"Ren'py","rest":"reST(reStructuredText)","robotframework":"RobotFramework","robot":"RobotFramework","rb":"Ruby","sas":"SAS","sass":"Sass(Sass)","scss":"Sass(Scss)","shell-session":"Shellsession","sh-session":"Shellsession","shellsession":"Shellsession","sml":"SML","smlnj":"SML/NJ","solidity":"Solidity(Ethereum)","sol":"Solidity(Ethereum)","solution-file":"Solutionfile","sln":"Solutionfile","soy":"Soy(ClosureTemplate)","sparql":"SPARQL","rq":"SPARQL","splunk-spl":"SplunkSPL","sqf":"SQF:StatusQuoFunction(Arma3)","sql":"SQL","iecst":"StructuredText(IEC61131-3)","t4-templating":"T4templating","t4-cs":"T4TextTemplates(C#)","t4":"T4TextTemplates(C#)","t4-vb":"T4TextTemplates(VB)","tap":"TAP","tt2":"TemplateToolkit2","toml":"TOML","trig":"TriG","ts":"TypeScript","tsconfig":"TSConfig","uscript":"UnrealScript","uc":"UnrealScript","vbnet":"VB.Net","vhdl":"VHDL","vim":"vim","visual-basic":"VisualBasic","vba":"VBA","vb":"VisualBasic","wasm":"WebAssembly","wiki":"Wikimarkup","xeoracube":"XeoraCube","xml-doc":"XMLdoc(.net)","xojo":"Xojo(REALbasic)","xquery":"XQuery","yaml":"YAML","yml":"YAML","yang":"YANG"}
  
  }

  localize(phrase)
  {
    if (this.userLocale == 'en')
      return phrase;
     
    var cache = CacheService.getScriptCache();

    var cacheKey = this.userLocale + '@' + phrase;
    var cacheValue = cache.get(cacheKey);
    if (cacheValue == null)
    {
      cacheValue = LanguageApp.translate(phrase, 'en', this.userLocale);
      cache.put(cacheKey, cacheValue, 60*60*24);
    }
    return cacheValue;
  }

  getCodeLanguageName(id)
  {
    return id in this.languageNames
      ? this.languageNames[id]
      : id.charAt(0).toUpperCase() + id.slice(1);
  }
  
  getCodeStyleName(id)
  {
    return id.charAt(0).toUpperCase() + id.slice(1);
  }
}

const str = new StringConstants();