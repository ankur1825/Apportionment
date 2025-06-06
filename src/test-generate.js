// Intentionally bad JS code to trigger SonarQube issues

function insecureFunction(input) {
  eval("console.log('This is dangerous: ' + input)");
}

var unusedVariable = 42;

function unusedFunction() {
  var password = 'hardcodedPassword123';
  console.log("This is not secure.");
}
