document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
document.addEventListener("keydown", (event) => {
  // Disable Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+C
  if (
    event.ctrlKey &&
    (event.key === "u" ||
      event.key === "s" ||
      event.key === "a" ||
      event.key === "c")
  ) {
    event.preventDefault();
  }
  // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
  if (
    event.ctrlKey &&
    event.shiftKey &&
    (event.key === "I" || event.key === "J" || event.key === "C")
  ) {
    event.preventDefault();
  }
  // Disable F12 key
  if (event.key === "F12") {
    event.preventDefault();
  }
});

//--------------------------------------------------rightside maxi-min ---------------------------------------------------
let rightside = document.querySelector(".rightside");
let leftside = document.querySelector(".leftside");
let btn = document.querySelector(".max-min");
let nsh221whb2dbn = 1;
function fullscreen() {
  rightside.style.maxWidth = `${window.innerWidth}px`;
  if (nsh221whb2dbn == 1) {
    leftside.style.display = "none";
    rightside.style.width = "100%";
    btn.textContent = "Minimize";
    nsh221whb2dbn = 0;
  } else {
    leftside.style.display = "block";
    rightside.style.width = "50%";
    btn.textContent = "Maximize";
    nsh221whb2dbn = 1;
  }
}
//---------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------Mobile Responsiveness-----------------------------------------------------------
let windowwidth = `${window.innerWidth}px`;

window.addEventListener("resize", function () {
  if (window.innerWidth <= 427) {
    console.log("Mobile Responsiveness");
    rightside.style.display = "none";
    leftside.style.width = "100%";
    btn.display = "none";
  }
});

//``-----------------------------------------------------------------------------------------------

function copyCode(button) {
  const codeContainer = button.nextElementSibling;
  const code = codeContainer.textContent;

  // Remove comments
  const codeWithoutComments = code
    .split("\n")
    .map((line) => {
      const commentIndex = line.indexOf("//");
      return commentIndex !== -1 ? line.slice(0, commentIndex).trimEnd() : line;
    })
    .filter((line) => line.trim().length > 0)
    .join("\n");

  navigator.clipboard
    .writeText(codeWithoutComments)
    .then(() => {
      button.textContent = "Copied!";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 2000);
    })
    .catch(() => {
      button.textContent = "Failed to copy";
    });
}

let topics = [
  "Introduction to JavaScript",
  "Expression And Operators",
  "All About Variables",
  "Data Types in JavaScript",
  "Loops In JavaScript",
  "Array In JavaScript",
  "All About Object",
  "Array aur object destructuring",
  "Type Casting",
  "Exception Handling",
  "Functions In JavaScript",
  "Pure aur impure function",
  "Arrow Function",
  "IIFE",
  "Scope and Function Stack",
  "Synchronous and Asynchronous Code",
  "Value Of this",
  "First-Class Functions in JavaScript",
  "Callback Function",
  "Promise In JavaScript",
  "Fetch API And Async/Await ",
];

let sidebar = document.querySelector(".sidebar");
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 427) {
    console.log("Mobile Responsiveness");
    rightside.style.display = "none";
    leftside.style.width = "100%";
    btn.display = "none";
  } else if (window.innerWidth > 427) {
    rightside.style.display = "50%";
    leftside.style.width = "50%";
    btn.display = "block";
  }

  topics.forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add("sideBarItems");
    div.textContent = element;
    sidebar.appendChild(div);
  });
});

let mainBar = document.querySelector(".Mainbar");
// ------------------------------------Four Function For Sidebar----------------------------------------
function showMenu() {
  sidebar.style.left = "0";
  mainBar.style.width = "75%";
}

function hideMenu() {
  sidebar.style.left = "-25%";
  mainBar.style.width = "100%";
}

document.querySelector(".fa-xmark").addEventListener("click", function () {
  hideMenu();
});

window.addEventListener("mousemove", function () {
  if (event.clientX <= 5) {
    showMenu();
  }
  if (event.clientX >= 200) {
    hideMenu();
  }
});
// ---------------------------------------------------------------------------------------------------

// ------------------------------------Main Content-----------------------------------------------------
let mainContent = document.querySelector(".mainContent");
let topic;
sidebar.addEventListener("click", function (e) {
  topic = e.target.textContent;
  hideMenu();
  displayTopicContent(topic);
});

function displayTopicContent(topic) {
  const topicData = twothree.find((t) => t.topic === topic);
  mainBar.innerHTML = `<h1 style="text-align: center;">${topicData.topic}</h1>`;

  let subcontent = topicData.subcontent;

  let i = 0;
  for (let element in subcontent) {
    i = 1;
    if (element.includes("subheading")) {
      mainBar.innerHTML += `<br><br><h2>${subcontent[element]}</h2><br>`;
      mainBar.scrollIntoView({ behavior: "smooth" });
    }

    if (element.includes("content")) {
      mainBar.innerHTML += `<p>${subcontent[element]}</p>`;
      if (subcontent[element].includes(".")) {
        mainBar.innerHTML += `<br>`;
      }
    }

    if (element.includes("image")) {
      mainBar.innerHTML += `<img src="${subcontent[element]}" alt="${topicData.topic}" style="width: 100%; height: auto; object-fit: cover">`;
    }

    if (element.includes("code")) {
      mainBar.innerHTML += `
                        <div class="code-container">
                        <button class="copy-button" onclick="copyCode(this)">Copy</button><pre style="height:auto !important;"><code class="language-javascript">${subcontent[element]}</code></pre></div>
                    `;
      if (subcontent[element].includes("")) {
        mainBar.innerHTML += `<br>`;
      }
    }
  }
  if (i == 0) {
    mainBar.innerHTML += `<h3>...Don't worry it's coming soon</h3>`;
  }

  Prism.highlightAll();
}
// -----------------------------------------------------------------------------------------------------
