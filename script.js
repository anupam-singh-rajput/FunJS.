document.getElementById("run").addEventListener("click", function () {
  const code = document.getElementById("editor").value;
  try {
    const output = eval(code);
    document.getElementById("output").textContent =
      output !== undefined ? output : "";
  } catch (e) {
    document.getElementById("output").textContent = e;
  }
});
