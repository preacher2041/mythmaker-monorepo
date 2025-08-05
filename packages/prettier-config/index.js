module.exports = {
  // Use single quotes for string literals.
  'singleQuote': true,
  // Use single quotes for JSX attributes.
  'jsxSingleQuote': true,
  // Print trailing commas where valid in ES5 (objects, arrays, function arguments).
  'trailingComma': 'es5',
  // Specify the line length that Prettier will try to wrap.
  'printWidth': 80,
  // Specify the number of spaces per indent level (when using spaces)
  // or the width of a tab character (when using tabs).
  'tabWidth': 4,
  // Indent using tabs instead of spaces.
  'useTabs': true,

  // --- Recommended / Common Best Practice Rules ---

  // Control whether to print semicolons at the end of statements.
  // 'true' (default): adds semicolons.
  // 'false': removes semicolons where possible.
  'semi': false, 

  // Include parentheses around a sole arrow function parameter.
  // 'always' (default): (x) => x
  // 'avoid': x => x (for single parameters)
  'arrowParens': 'always',

  // Print spaces between brackets in object literals.
  // 'true' (default): { foo: bar }
  // 'false': {foo: bar}
  'bracketSpacing': true,

  // Put the > of a multi-line JSX element on the same line as the last prop.
  // 'true': <div prop1='value' >
  // 'false' (default): <div prop1='value'
  //                    >
  'bracketSameLine': true,

  // Specify the line ending to be used.
  // 'lf' (default): Line Feed only (\n), common on Unix/macOS. Recommended for cross-platform consistency.
  // 'crlf': Carriage Return + Line Feed (\r\n), common on Windows.
  'endOfLine': 'lf',

  // How to wrap prose (text) in Markdown, YAML, and HTML files.
  // 'preserve' (default): Respects existing line breaks.
  // 'always': Wraps text to 'printWidth'.
  // 'never': Does not wrap text.
  'proseWrap': 'preserve'
}