// Hardcoded credentials - HIGH severity
const username = "admin";
const password = "123456";

// DOM-based XSS - HIGH severity
const userInput = location.hash.substring(1);
document.body.innerHTML = "Welcome, " + userInput;

// Unused variable - CODE SMELL
let unusedVar = 42;

// SQL Injection-like string pattern - CRITICAL (may need custom rule or plugin)
const query = "SELECT * FROM users WHERE id = " + userInput;
