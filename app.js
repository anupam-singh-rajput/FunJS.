(function () {
  var oldLog = console.log;
  console.log = function (message) {
    document.getElementById("output").textContent += message + "\n";
    oldLog.apply(console, arguments);
  };

  // Enhanced error handling for 'throw new Error'
  console.error = function (message) {
    document.getElementById(
      "output"
    ).textContent += `SyntaxError: ${message}\n`;
  };
})();

// Initialize CodeMirror editor
const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "default",
});

// Add event listener to the run button
document.getElementById("run").addEventListener("click", function () {
  const code = editor.getValue();
  document.getElementById("output").textContent = ""; // Clear previous output

  try {
    // Execute code with a function wrapper for better error handling
    eval(`(function() { ${code} })()`);
  } catch (e) {
    // Display error messages, including those from 'throw new Error'
    if (e instanceof Error) {
      console.error(e.message); // Use console.error for formatted error output
    } else {
      console.error(`An unexpected error occurred: ${e}`);
    }
  }
});
