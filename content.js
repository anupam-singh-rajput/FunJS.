const twothree = [
  {
    topic: "Introduction to JavaScript",
    subcontent: {
      subheading: "What is Javascript?",
      content: `
        1. JavaScript is an essential programming language for web development, which makes websites interactive.</br>
        2. JavaScript is also known as "JS" and primarily runs in the user's browser, making it fast and efficient.</br>
        3. It can add features like animations, dynamic content, forms validation, and cookies handling, enhancing user experience.</br>
        4. The popularity of JavaScript is due to its versatility and widespread support across all modern web browsers.</br>
        5. Using JavaScript, websites can be made dynamic and engaging to create a user-friendly interface.</br>
        </br>
        What is Interactive?</br>
        JavaScript allows us to make websites interactive.<br><br>
        Interactive means when a user interacts with a system or application, and the system or application responds to their actions. When you click something, type something, or press a button on a website and the website reacts accordingly, it is called interactive. </br>
        And we do all this using JavaScript.
        `,
      subheading2: "History of Javascript?",
      content2: `
        The history of JavaScript (JS) is very important for web development. It was created by Brendan Eich, an engineer at Netscape Communications Corporation, in 1995. Initially, it was named Mocha, then LiveScript, and later became JavaScript.</br></br>

        JavaScript was initially developed for Netscape Navigator web browser. However, soon Microsoft also started supporting it in Internet Explorer. This provided web developers with a common language to create dynamic web pages.</br></br>

        In 2009, Google launched the V8 JavaScript engine, which came with the Chrome browser. This engine helps in running JavaScript very fast.</br></br>

        In 2015, an important addition was made to JavaScript, which was ECMAScript 2015 (or ES6) as a new version, which included many new features and improvements, such as let and const
        keywords, arrow functions, template literals, and modules.</br></br>

        Today, JavaScript is a dominant programming language that covers all aspects of web development. It is used not only in client-side scripting but also in server-side scripting, such as through Node.js. JavaScript has made a significant contribution to the evolution of the web and continues to be one of the most widely used languages today.</br>
        `,
      subheading3: "What is IP address?",
      content3: `
        IP address:</br>
        An IP address (Internet Protocol address) is a unique numerical label used to identify each device on the internet. Every connected device, such as computers, smartphones, tablets, and servers, is assigned a unique IP address so that they can communicate on the internet.</br></br>

        An IP address is very important for network communication. When you enter a website's URL in your web browser, the browser requests the DNS (Domain Name System) server for the corresponding IP address of the domain name. Then the DNS server provides that IP address to the browser, and the browser uses that IP address to reach the server.</br></br>

        There are two types of IP addresses:</br></br>

        IPv4 (Internet Protocol version 4):</br>
        An IPv4 address is 32-bit and generally in the form of four decimal numbers (0-255) separated by dots, such as 192.168.0.1.</br></br>

        IPv6 (Internet Protocol version 6):</br>
        An IPv6 address is 128-bit, introduced to address the scarcity of IPv4 addresses. IPv6 addresses are in the form of hexadecimal digits (0-9 and A-F) separated by colons, such as 2001:0db8:85a3:0000:0000:8a2e:0370:7334. </br>
        `,
      subheading4: "What is Data Packets?",
      content4: `
        Data packets are small units of data used to transmit data in computer networks. Whenever data is sent over the internet or a local network, it is divided into data packets.</br></br>

        Each data packet contains some information, such as:</br></br>

        1. Source and Destination Addresses: Addresses of the sender and receiver that indicate the endpoints of communication.</br>

        2. Data: The actual information or message being transmitted.</br>

        3. Packet Number: Each packet is given a unique identifier so that the receiver can arrange them in sequence.</br>

        4. Header and Footer Information: Additional information such as error checking codes and routing information.</br></br>

        When data packets are transmitted, routers and other network devices guide them to the correct destination. When packets reach the receiver, they are assembled to restore the original data. This technique of using data packets improves reliability and efficiency in communication.
        `,
      subheading5: "How Internet Work?",
      image: "images/diagram.png",
      content5: `
        </br>
        1. URL Enter:</br>
           - When a user enters the URL of a website in their browser, such as "www.google.com".</br></br>

        2. DNS Lookup:</br>
           - The browser calls the DNS (Domain Name System) server to convert the domain name given in the URL into an IP address.</br>
           - The DNS server returns the corresponding IP address of the domain name.</br>
        The browser uses this IP address to reach the server. The server is connected to your browser through this IP address. When your request reaches the server, the server sends the webpage or requested content to your browser.</br></br>

        3. Establishing Connection:</br>
           - The browser establishes a connection with the server through the IP address.</br>
           When you enter the URL of a website in the browser, the browser generates an HTTP (or HTTPS) request. This request informs the server that a user's request has come.</br></br>

        4. Server Response:</br>
           - When the server receives the user's request, its server generates an appropriate response. The response includes the HTML code of the webpage, along with CSS, JavaScript, and other resources.</br></br>

        5. Data Transfer:</br>
           - Once the server generates the response, it is transmitted to the user's browser in multiple data packets. Routers and other network devices guide data packets to the correct destination so that they can reach the user's device.</br></br>

        6. Rendering Web Page:</br>
           The browser parses the HTML code to render the webpage. Then CSS styles are applied to prepare the design and appearance of the webpage. After that, JavaScript code is executed for dynamic content and functionality.</br></br>

        7. Displaying Content:</br>
           - The final version of the webpage is displayed on the user's device.
           - The user browses through the content of the webpage by interacting with it.</br>
        `,
      subheading6: "Javascript Versions?",
      content6: `
        Several versions of JavaScript have been developed, such as:</br>

        1. JavaScript (Netscape): The original version launched with Netscape Navigator browser in 1995.</br></br>

        2. JScript (Microsoft): An implementation for Microsoft Internet Explorer browser. It was compatible with JavaScript dialect.</br></br>

        3. ECMAScript (ES1): ECMAScript is a standardized version of JavaScript maintained by ECMA International. ES1 was the first standardized version of JavaScript released in 1997.</br></br>

        4. ECMAScript 2 (ES2): Released in 1998, it included minor corrections and amendments.</br></br>

        5. ECMAScript 3 (ES3): Released in 1999, it included many improvements and new features such as regular expressions, try/catch exception handling, and better error handling.</br></br>

        6. ECMAScript 4 (ES4): It was a planned version proposed to bring new features and major changes, but it was eventually discarded, and the focus was on ES3 enhancements.</br></br>

        7. ECMAScript 5 (ES5): Released in 2009, it was a major rewrite and modernization of ECMAScript. It included features like strict mode, JSON support, and Array methods.</br></br>

        8. ECMAScript 6 (ES6 / ECMAScript 2015): Released in 2015, it introduced many new features and improvements such as let and const keywords, arrow functions, template literals, and classes.</br></br>

        9. ECMAScript 2016 (ES7): Released in 2016, it included minor updates and features such as the Array.includes() method.</br></br>

        10. ECMAScript 2017 (ES8): Released in 2017, it included features such as async functions, Object.values/Object.entries methods, and SharedArrayBuffer object.</br></br>

        11. ECMAScript 2018 (ES9): Released in 2018, it included features like rest/spread operators, asynchronous iterators, and Promise.prototype.finally() method.</br></br>

        12. ECMAScript 2019 (ES10): Released in 2019, it included features like Array.prototype.flat() and Array.prototype.flatMap() methods, Object.fromEntries() method, and optional catch binding.</br></br>

        13. ECMAScript 2020 (ES11): Released in 2020, it included features like nullish coalescing operator (??) and optional chaining operator (?.).</br></br>
        Each version has introduced improvements, optimizations, and new features in the JavaScript language, helping developers write and maintain better code.</br>
    `,
    },
  },
  {
    topic: "Expression And Operators",
    subcontent: {
      subheadingg1: "Operands",
      contentt1: `
      Operands woh values hain jin par operations perform kiye jaate hain. Ye values variables, constants ya expressions ho sakti hain.
    `,
      codee1: `
      let a = 5;
      let b = 3;
      let result = a + b;
      // Is example mein, a aur b operands hain jin par addition operation perform ho raha hai. a aur b ke values 5 aur 3 hain.
    `,
      subheadingg2: "Operators",
      contentt2: `
      Operators woh symbols hain jo specific operations ko indicate karte hain, jaise addition, subtraction, comparison, etc. Operators operands par operations perform karte hain aur result produce karte hain.
    `,
      codee2: `
      let result = a + b;
      // Is example mein, + ek operator hai jo a aur b operands par addition operation perform karta hai.
    `,
      subheadingg3: "Arithmetic Operators",
      contentt3: `
      Arithmetic operators mathematical operations perform karte hain.
    `,
      codee3: `
      let a = 5;
      let b = 3;
      console.log(a + b); // a+b i.e 5+3=8
      console.log(a - b); // a-b i.e 5-3=2
      console.log(a * b); // a*b i.e 5*3=15
      console.log(a / b); // a/b i.e 5/3=1.666... ye quotient hai
      console.log(a % b); // a%b i.e 5/3=2 ... ye remainder hai
      console.log(a ** b); // a+b i.e 3+5= 125
    `,
      subheadingg4: "Assignment Operators",
      contentt4: `
      Assignment operators values assign karne ke liye use hote hain.
    `,
      codee4: `
      let a = 5;
      a += 3;
      // asliyat me ye horaha hai
      //Kabhi bhi right to left value compute karo assignment operator ke samay
      //a = a+3; Chalu isko compute karte hai
                //1st: a ki value(5) ko 3 se add karo total 8 ayega
                //2nd ab total value ko a me assign kardo means a me daaldo
      //a =5+3 i.e a=8;

      a -= 2;
      //a=a-2
      //a=5-2 i.3 a=3

      a *= 2; // 10
      a /= 4; // 1.333...
      a %= 2; // 1
    `,
      subheadingg5: "Comparison Operators",
      contentt5: `
      Comparison operators do values ko compare karte hain aur boolean result return karte hain.
      Comparison Opertor ka output hamesa ya to true hoga ya to false
    `,
      codee5: `
      let a = 5;
      let b = 3;

      console.log(a == b);
      // == equality check karta hai
      // kye a ka value b ke barabar hai i.e kya 5 3 ke barabar hai nahi i.e false

      let c = "5"
      let d = 5;
      console.log(a === b); // false
      //Kya c ka value d ke barabar hai yes "5" or 5 barabar lekin unka datatype same nahi hai
      //=== strictly equal check two thing 1st kya value same hai 2nd kya unke datatype bhi same hai.

      let e = "4";
      let f = 4;
      console.log(a != b); // false
      //!= not equal
      //Agar value same nahi rahegi to true return karta hai warna false
      //Ye unka datatype nahi check nahi karta hai

      console.log(a !== b); // false
      //Ye unka datatype bhi check nahi karta hai

      console.log(a > b); // true
      //greater than
      //kya a ki value b ke value se jada hai i.e 5>3 se bada hai, haa

      console.log(a < b); // false
      //smaller than
      //kya a ki value b ke value se kam hai i.e 5<3 se chota hai, nahi

      console.log(a >= b); // true
      //greater than
      //kya a ki value b ke value se jada hai i.e 5>3 se bada hai

      console.log(a <= b); // false
      //greater than
      //kya a ki value b ke value se jada hai i.e 5>3 se bada hai
    `,
      subheadingg18: "Logical Operators",
      contentt18: `
      Logical operators do ya zyada boolean expressions ko combine karte hain aur boolean result return karte hain..
    `,
      code18: `
      let x = true;
let y = false;

console.log(x && y); // Logical AND: x && y i.e true && false is false
// x aur y dono true hone chahiye, tabhi result true hoga.

console.log(x || y); // Logical OR: x || y i.e true || false is true
// x ya y me se koi ek bhi true ho, to result true hoga.

console.log(!x); // Logical NOT: !x i.e !true is false
// x ka opposite value return karta hai.

    `,
      subheadingg8: "String Operators",
      contentt8: `
      String operators strings ke sath operations perform karte hain.
    `,
      codee8: `
      let str = "Hello";
      str += " World";
      console.log(str); // "Hello World"
    `,
      subheadingg21: "Conditional (Ternary) Operator",
      contentt21: `
      Conditional operator ek condition ko test karta hai aur true ya false ke hisaab se value return karta hai.
      Ternary operator if-else statement ka shorthand hai.
    `,
      code21: `
      let a = 5;
let b = 3;

let result = a > b ? "a is greater" : "b is greater";
console.log(result); // "a is greater"
// Agar a > b true hai to "a is greater" return karega, nahi to "b is greater".
    `,
      subheadingg10: "Comma Operator",
      contentt10: `
      Comma operator multiple expressions ko evaluate karta hai aur last expression ka result return karta hai.
    `,
      codee10: `
      let x = (1, 2, 3);
      console.log(x); // 3
    `,
      subheadingg11: "Unary Operators",
      contentt11: `
      Unary operators ek single operand pe operation perform karte hain.
    `,
      codee11: `
      let x = 5;
      console.log(+x); // 5
      console.log(-x); // -5
      console.log(typeof x); // "number"
      console.log(void 0); // undefined
      let obj = { a: 1 };
      delete obj.a;
      console.log(obj.a); // undefined
    `,
      subheadingg12: "Relational Operators",
      contentt12: `
      Relational operators operands ke beech relation ko check karte hain.
    `,
      codee12: `
      let obj = { a: 1 };
      console.log('a' in obj); // true
      let arr = [];
      console.log(arr instanceof Array); // true
    `,
      subheadingg17: "Bitwise Operators",
      contentt17: `
      Bitwise operators binary representations pe operations perform karte hain.
    `,
      code17: `
      let a = 5; // In binary: 0101
let b = 3; // In binary: 0011

console.log(a & b); // Bitwise AND: 0101 & 0011 i.e 0001 (1 in decimal)
// Binary representation ke corresponding bits ko AND karta hai.

console.log(a | b); // Bitwise OR: 0101 | 0011 i.e 0111 (7 in decimal)
// Binary representation ke corresponding bits ko OR karta hai.

console.log(a ^ b); // Bitwise XOR: 0101 ^ 0011 i.e 0110 (6 in decimal)
// Binary representation ke corresponding bits ko XOR karta hai.

console.log(~a); // Bitwise NOT: ~0101 i.e 1010 (-6 in decimal, two's complement)
// Binary representation ke har bit ka opposite karta hai.

console.log(a << 1); // Left Shift: 0101 << 1 i.e 1010 (10 in decimal)
// Binary representation ko left shift karta hai aur 0 se fill karta hai.

console.log(a >> 1); // Right Shift: 0101 >> 1 i.e 0010 (2 in decimal)
// Binary representation ko right shift karta hai aur left side 0 se fill karta hai.

console.log(a >>> 1); // Unsigned Right Shift: 0101 >>> 1 i.e 0010 (2 in decimal)
// Binary representation ko right shift karta hai, left side 0 se fill karta hai (unsigned shift).

        \`\`\`
    `,
      subheadingg19: "BigInt Operators",
      contentt19: `
      BigInt operators bohot bade integers pe operations perform karte hain.
    `,
      code19: `
      - \`+\`, \`-\`, \`*\`, \`/\`, \`%\`, \`**\` can be used with BigInt similar to normal numbers.
        \`\`\`javascript
        let big = BigInt(12345678901234567890);
        big + BigInt(10); // 12345678901234567900n
        \`\`\`
    `,
      subheadingg20: "String Operators",
      contentt20: `
      String operators strings ke sath operations perform karte hain.
    `,
      code20: `
      - \`+\` : Concatenation
        \`\`\`javascript
        "Hello" + " " + "World"; // "Hello World"
        \`\`\`

      - \`+=\` : Concatenation assignment
        \`\`\`javascript
        let str = "Hello";
        str += " World"; // "Hello World"
        \`\`\`
    `,
      subheadingg22: "Comma Operator",
      contentt22: `
      Comma operator multiple expressions ko evaluate karta hai aur last expression ka result return karta hai.
    `,
      code22: `
      \`\`\`javascript
      let x = (1, 2, 3); // x is 3
      \`\`\`
    `,
      subheadingg23: `Relational Operators`,
      content24: `
        Relational operators operands ke beech relation ko check karte hain.<br><br>
<br><br><br>
- \` in \` : Checks if a property is in an object`,
      code24: `
        let obj = {a: 1};
  'a' in obj; // true

- \`instanceof\` : //Checks if an object is an instance of a constructor
  let arr = [];
  arr instanceof Array; // true`,
    },
  },
  {
    topic: "All About Variables",
    subcontent: {
      subheading: "All About Variables",
      content1:
        "JavaScript has three types of variables: var, let, and const.<br><br><br><b>Basic definition of variable:</b> Variable is something whose value can change even after assigning it. We declare variables using var or let keywords.<br><br><b>Basic definition of constant:</b> Constant is something whose value cannot be changed after assigning it. We declare and assign constants using the const keyword, and we cannot assign it later.<br><br><br>Variable Declaration:<br><br>",
      code: "\nvar a = 10;\nvar a = 12;  //Output: No error\na = 14;\n\nlet b = 10;\nb = 12;\nlet b = 12;  //Output: SyntaxError: Identifier 'b' has already been declared\n\nconst pi =3.147; \n    ",
      content2:
        "\n      <br><br>\n  <h3>Hoisting in Javascript:</h3><br><br>Hoisting is a JavaScript concept in which variable and function declarations are moved to the top of their scope during compilation, but their value is not initialized.<br><br><br>(Concept: When we declare a variable but do not assign any value to it, JavaScript assigns the variable an undefined value by default)<br><br><br>Therefore, when you write this code:\n    ",
      code2:
        "\nconsole.log(a);\nvar a = 12;\noutput: undefined.  //When no value is assigned to the variable then the value of the variable is undefined.\n",
      content: "JavaScript actually interprets it like this:",
      code3:
        "\nvar a; // Declaration\nconsole.log(a);\na = 12; // Initialization.\n      ",
      content4:
        "\n      And that's why 'undefined' is printed in the console. There is no error because the declaration of variable 'a' is moved to the top due to hoisting, but its value remains undefined until the time of assignment.<br><br><br><b>undefined</b> - Represents something that exists but has no value.<br><br><b>not-defined</b> - Represents something that does not exist.<br><br><b>Null-</b> is an explicit value assigned to a variable when there is no value.<br><br>\n      ",
      subheading: "Variable Scopes:",
      content5:
        "<b>Global Scope:</b> Global variables are those that are available for access throughout the program.<br><br><b>Function Scope:</b> Variables declared inside a function cannot be accessed outside the function.<br><br>",
      codee:
        "\nfunction abcd(){\n\tfor(var i=0; i<12; i++){\n\t\tconsole.log(i);\n\t}  \n\tconsole.log(i);\n}\nabcd();\n//output: 1 2 3 4 5 6 7 8 9 10 11 12\n",
      contentt:
        "\n<br><br>var is function scoped: var variable can be used anywhere in its parent function, so it ran outside the for loop.<br><br>\nMeans var variable used anywhere in a function, its curly braces are used outside{} <br><br>\nExample:<br><br>\n      ",
      content6:
        "\n      <b>Block or Braces Scoped:</b>  let and const braces scoped hai -- let and const varibale apne braces ke bahar nahi chalega.<br><br> Agar hum upar var ko let se replace karde to variable braces ke bahar nahi yani for loop ke bahar nahi.<br><br>\nMeans let and const varibable shirf curly braces ke andar hi use kiye ja sakte hai uske bahar nahi.<br><br>Example:<br><br>\n",
      codee2:
        "\nfunction abcd(){\n\tfor(let i=0; i<12; i++){\n\t\tconsole.log(i);\n\t}  \n\tconsole.log(i);\n}\nabcd();\n//ReferenceError: i is not definedDifference betweeb Null and undefined:\n",
      content7:
        "\nNull is a JavaScript value explicitly assigned to a variable. It signifies that there is no value in the variable or that the value of the variable is intentionally absent.<br><br><br><b>1.Explicit Assignment:</b>  Null is an explicit value assigned to a variable that signifies that the developer does not want to give any value to the variable.<br><br><b>2.Absence of Value:</b> Null represents the absence of a value. When there is no value available for a variable, null is used.<br><br><b>3.Different from Undefined:</b> Null and undefined are different. Undefined is used when a variable is declared but no value is assigned to it, while null is used when there is intentionally no value for a variable.<br><br><b>4.Type of Null:</b> Null is a JavaScript data type, which is one of the primitive data types.<br><br><br>For example:<br><br> ",
      codee3: "\nvar x = null;\nconsole.log(x); // Output: null\n\n      ",
      content8:
        "\nIn this example, variable x is assigned null, which signifies that there is no value in variable x.<br><br><br><h3> We don't use js features always. </h3> <br>1.	Js has many features but some features that we use are not in the js language then still we can use them.<br><br>2.	Because they are the features of the window object and JavaScript closely integrates with the browser environment, and the window object is a box of features provided by the browser.<br><br>3.	And js takes those features from the window object, so that JavaScript code can interact with the browser environment.<br><br>\n\n      ",
    },
  },
  {
    topic: "Data Types in JavaScript",
    subcontent: {
      subheading1: "Data Types in JavaScript",
      c: "\n      In JavaScript, there are several built-in data types, including:\n    ",
      subheading2: "Primitive Data Types",
      content2:
        "\n      These are the basic data types in JavaScript, and they include:<br><br>\n      - Number: Represents numeric values, both integers and floating-point numbers.<br><br>\n      - String: Represents textual data, enclosed within single (' ') or double (\" \") quotes.<br><br>\n      - Boolean: Represents a logical value, either true or false.<br><br>\n      - Undefined: Represents a variable that has been declared but not assigned any value.<br><br>\n      - Null: Represents the intentional absence of any object value.<br><br>\n      - Symbol: Represents a unique identifier, introduced in ECMAScript 6 (ES6).<br><br>\n    ",
      subheading3: "Non-primitive Data Types (Reference Types)",
      content3:
        "\n      These are more complex data types that are comprised of collections of data or objects. They include:<br><br>\n      - Object: Represents a collection of key-value pairs, also known as properties.<br><br>\n      - Array: Represents a collection of elements, each identified by an index.<br><br>\n      - Function: Represents a reusable block of code that can be invoked by name.<br><br>\n      - Date: Represents a specific moment in time.<br><br>\n      - RegExp: Represents a regular expression, used for pattern matching within strings.<br><br>\n    ",
      subheading4: "Dynamic Typing",
      content4:
        "\n      JavaScript is a dynamically-typed language, which means that variables can hold values of any data type, and a variable's data type can change during the execution of a program.\n    ",
      subheading5: "Primitive Values",
      content5:
        "\n      Primitive values represent direct data and when copied, their actual value is copied.\n      When you copy a primitive value from one variable to another, the actual value is copied, and both variables refer to different memory locations.\n    ",
      code1:
        "\n      var a = 12;\n      var b = a;\n      console.log(b); // Output: 12\n      b = b + 2;\n      console.log(b); // Output: 14\n    ",
      subheading6: "Reference Values",
      content6:
        "\n      Reference values represent data indirectly, and when copied, a reference (or address) is copied.\n      <br><br>When you copy a reference value from one variable to another, not the actual value but its reference (or address) is copied, so both variables point to the same object or data.\n    ",
      code2:
        "\n      var a = [12, 13];\n      var b = a;\n      b.pop();\n      console.log(b); // Output: [12]\n      console.log(a); // Output: [12]\n    ",
      subheading7: "Notice!",
      content7:
        "\n      Any value that, when copied, does not result in a real value copy, but instead copies its reference or address, is called a reference (address) type value.<br><br> And that whose copy causes real copy is called primitive type value.\n    ",
      subheading8: "Examples",
      subheading9: "1. Number",
      content9:
        "\n      Represents numeric values, like integers or floating-point numbers.\n    ",
      code3:
        "\n      var x = 10; // Integer\n      var y = 3.14; // Floating-point number\n    ",
      subheading10: "2. String",
      content10:
        "\n      Represents textual data, enclosed within single (' ') or double (\" \") quotes.\n    ",
      code4: '\n      var message = "Hello, world!";\n    ',
      subheading11: "3. Boolean",
      content11:
        "\n      Represents a logical value, either true or false.\n    ",
      code5: "\n      var isRaining = true;\n      var isSunny = false;\n    ",
      subheading12: "4. Undefined",
      content12:
        "\n      Represents a variable that has been declared but not assigned any value.\n    ",
      code6: "\n      var username; // Declared but not assigned\n    ",
      subheading13: "5. Null",
      content13:
        "\n      Represents the intentional absence of any object value.\n    ",
      code7: "\n      var product = null; // No product is selected\n    ",
      subheading14: "6. Symbol",
      content14:
        "\n      Represents a unique identifier, introduced in ECMAScript 6 (ES6).\n    ",
      code8: '\n      var id = Symbol("uniqueId");\n    ',
      subheading15: "7. Object",
      content15:
        "\n      Represents a collection of key-value pairs, also known as properties.\n    ",
      code9:
        '\n      var person = { name: "John", age: 30, city: "New York" };\n    ',
      subheading16: "8. Array",
      content16:
        "\n      Represents a collection of elements, each identified by an index.\n    ",
      code10: "\n      var numbers = [1, 2, 3, 4, 5];\n    ",
      subheading17: "9. Function",
      content17:
        "\n      Represents a reusable block of code that can be invoked by name.\n    ",
      code11:
        '\n      function greet(name) {\n        console.log("Hello, " + name + "!");\n      }\n    ',
      subheading18: "10. Date",
      content18: "\n      Represents a specific moment in time.\n    ",
      code12: "\n      var today = new Date();\n    ",
      subheading19: "11. RegExp",
      content19:
        "\n      Represents a regular expression, used for pattern matching within strings.\n    ",
      code13:
        '\n      var pattern = /hello/i; // Case-insensitive search for "hello"\n    ',
      subheading20: "Conclusion",
      content20:
        "\n      Understanding these data types and their usage is essential for writing effective JavaScript code.\n    ",
    },
  },
  {
    topic: "Loops In JavaScript",
    subcontent: {
      subheading: "Loops In JavaScript",
      content:
        "In JavaScript, loops and iterations are used to perform repetitive tasks. Here, we will discuss commonly used loop statements such as for, do...while, and while statements.<br><br><br><h3>1. for Statement</h3 !important>Syntax:<br><br>for (initialization; condition; increment/decrement) {</b><br><br>  // code block to be executed<br><br>}<br><br>Example:<br><br>",
      code: "for (let i=0; i<5; i++) {</b><br><br>  console.log(i); }",
      content2:
        "<br><br>Working:</br>1. Initialization: let i = 0<br><br>2. Condition: i < 5<br><br>3. code Block: console.log(\"Iteration number: \" + i)<br><br>4. Increment: i++<br><br>• When the loop executes for the first time, i's value is 0.<br><br>• Condition is checked (0 < 5), which is true.<br><br>• Code block is executed, Iteration number: 0 is printed.<br><br>• Increment happens, i's value becomes 1.<br><br>• This process repeats until the i < 5 condition becomes false.<br><br>",
      content3:
        "<h3>2. do...while Statement</h3 !important>Syntax:<br><br>do {</b><br><br>  // code block to be executed<br><br>} while (condition);<br><br><br><br>Example:<br><br>",
      code2:
        'let i = 0; do { console.log("Iteration number: " + i); i++; } while (i < 5);',
      content4:
        'Working:<br><br>1. Initialization: let i = 0<br><br>2. Code Block: console.log("Iteration number: " + i) executes first.<br><br>3. Increment: i++<br><br>4. Condition: i < 5<br><br>• The code block executes first without checking the condition.<br><br>• Iteration number: 0 is printed.<br><br>• Increment happens, i\'s value becomes 1.<br><br>• Condition is checked (1 < 5), which is true.<br><br>• This process repeats until the i < 5 condition becomes false.<br><br><br><h3>3. while Statement</h3 !important>Syntax:<br><br>while (condition) {</b><br><br>  // code block to be executed<br><br>}<br><br>Example:<br><br>',
      code3:
        'let i = 0; while (i < 5) { console.log("Iteration number: " + i); i++; }',
      content5:
        "Working:<br><br>1. Initialization: let i = 0<br><br>2. Condition: i < 5<br><br>3. Code Block: console.log(\"Iteration number: \" + i)<br><br>4. Increment: i++<br><br>• When the loop executes for the first time, i's value is 0.<br><br>• Condition is checked (0 < 5), which is true.<br><br>• Code block is executed, Iteration number: 0 is printed.<br><br>• Increment happens, i's value becomes 1.<br><br>• This process repeats until the i < 5 condition becomes false<br><br><br><br><h3>for...in Statement</h3 !important>Using the for...in statement, you can iterate over the properties of an object or the indices of an array. This loop iterates over the keys of an object's enumerable properties.<br><br><br><br>Syntax:<br><br>javascript<br><br>for (variable in object) {</b><br><br>  // code block to be executed<br><br>}<br><br><br>Example:",
      code4:
        'const person = { name: "John", age: 30, city: "New York" }; for (let key in person) { console.log(key + ": " + person[key]); }',
      content6:
        "Explanation:<br><br>- The key variable represents the keys of the object.<br><br>- The loop iterates over each key of the person object and prints their values.<br><br><br>Working:<br><br>1. The loop iterates over each key of the person object, meaning the loop will run as many times as there are keys.<br><br>2. The key variable represents the current key of the object.<br><br>3. The code block executes and prints the value corresponding to the key.<br><br><br><h3>for...of Statement</h3 !important>The for...of statement allows you to iterate over the elements of iterable objects (arrays, strings, maps, sets, etc.). This loop iterates directly over the values of iterable objects.<br><br>Syntax:<br><br>for (variable of iterable) {</b><br><br>// code block to be executed<br><br>}<br><br><br>Example:",
      code5:
        "const arr = [10, 20, 30, 40, 50]; for (let value of arr) { console.log(value); }",
      content7:
        "Explanation:<br><br>- The value variable represents the elements of the array.<br><br>- The loop iterates over each element of the arr array and prints them.<br><br><br><h3>Working:</h3 !important>1. The loop iterates over each element of the arr array.<br><br>2. The value variable represents the current element of the array.<br><br>3. The code block executes and prints the current value.<br><br><br>Summary of Differences<br><br><br>1. for...in Statement:<br><br>- Used to iterate over properties of an object or indices of an array.<br><br>- Syntax: for (variable in object) { ... }<br><br>- Example: Iterating over an object to get its properties.<br><br><br>2. for...of Statement:<br><br>- Used to iterate over values of an iterable object (like arrays, strings, maps, sets).<br><br>- Syntax: for (variable of iterable) { ... }<br><br>- Example: Iterating over an array to get its elements.<br><br><br>Using all three loops (for, for...in, and for...of), you can effectively handle different types of iterations in your JavaScript code.<br><br>",
      subheading2: "Break Statement",
      content8:
        "The break statement immediately terminates the loop.<br><br>When the break statement executes, the loop stops immediately and control shifts to the next statement outside the loop.<br><br>Syntax: break;<br><br>Example:",
      code6:
        'for (let i = 0; i < 10; i++) { if (i === 5) { break; } console.log("Iteration number: " + i); }',
      content9:
        "Explanation:<br><br>• The loop starts from i = 0 and runs until i < 10.<br><br>• When i's value is 5, the break statement terminates the loop.<br><br>• Output: Iterations from 0 to 4 are printed.<br><br>",
      subheading3: "continue Statement",
      content10:
        "• The continue statement skips the current iteration and jumps to the next iteration of the loop. When the continue statement executes, the current iteration's code is skipped and the loop continues to the next iteration.<br><br>Syntax: continue;<br><br><br>Example:<br><br>",
      code7:
        'for (let i = 0; i < 10; i++) { if (i === 5) { continue; } console.log("Iteration number: " + i); }',
      content11:
        "Explanation:<br><br>• The loop starts from i = 0 and runs until i < 10.<br><br>• When i's value is 5, the continue statement skips the current iteration.<br><br>• Output: Iterations from 0 to 4 and 6 to 9 are printed.<br><br>",
      subheading4: "Labeled Statements",
      content12:
        "• Labeled statements are a method of assigning an identifier to any statement, which can be used with break and continue statements. They are useful for terminating or skipping nested loops.<br><br>Syntax: label: statement.<br><br><br>Example:<br><br>",
      code8:
        'outerLoop: for (let i = 0; i < 3; i++) { for (let j = 0; j < 3; j++) { if (i === 1 && j === 1) { break outerLoop; } console.log("i = " + i + ", j = " + j); } }',
      content13:
        "Explanation:<br><br>• An outer loop labeled 'outerLoop' is defined.<br><br>• When i = 1 and j = 1, the break statement with the label 'outerLoop' breaks the outer loop.<br><br>• Output: The loop terminates when i = 1 and j = 1.<br><br><br><br>",
    },
  },
  {
    topic: "Array In JavaScript",
    subcontent: {
      subheadingg1: "Array In JavaScript",
      contentt1: `
      In JavaScript, an array is an ordered collection where multiple values can be stored. JavaScript arrays are slightly different from those in other programming languages. Using arrays in JS, we can store different types of data within a single variable.
    `,
      codee1: `
      let arr = ["Hello", 1, 2, 3, true, false, "Enter any thing with proper syntax"];
      console.log(arr);
    `,
      outputt1: `
      Hello, 1, 2, 3, true, false, Enter any thing with proper syntax
    `,
      outputt2: `
      true
    `,
      contentt2: `
      If this is not clear, it's perfectly normal; it can be a bit complex at first. Let's start with something simpler.

      In JavaScript, an array is an ordered collection where multiple values can be stored. Using arrays, we can store different types of data within a single variable. Let's understand arrays in detail.
    `,
      subheadingg2: "Array Creation",
      contentt3: `
      To create arrays, we use [] (square brackets). There are several ways to create arrays:
    `,
      codee2: `
      // Empty array
      let emptyArray = [];

      // Array with initial elements
      let numbers = [1, 2, 3, 4, 5];

      // Array with mixed data types
      let mixedArray = [1, 'hello', true, null];
    `,
      subheadingg3: "Accessing Array Elements",
      contentt4: `
      Elements in an array are accessed through their index. Indexing starts at 0.
    `,
      codee3: `
      let fruits = ["apple", "banana", "cherry"];

      // Accessing elements
      console.log(fruits[0]); // Output: apple
      console.log(fruits[1]); // Output: banana
      console.log(fruits[2]); // Output: cherry
    `,
      subheadingg4: "Modifying Array Elements",
      contentt5: `
      Elements in an array can also be modified through their index, meaning changing or deleting the value of the current element.
    `,
      codee4: `
      let fruits = ["apple", "banana", "cherry"];

      // Modifying elements
      fruits[1] = "blueberry";

      console.log(fruits); // Output: ["apple", "blueberry", "cherry"]
    `,
      subheadingg5: "Array Methods",
      contentt6: `
      JavaScript provides several built-in methods for working with arrays. Some common methods are:
    `,
      methods: [
        {
          methodName: "push()",
          description: "Adds new elements to the end of the array.",
          code: `
          let fruits = ["apple", "banana"];
          fruits.push("cherry");
          console.log(fruits); // Output: ["apple", "banana", "cherry"]
        `,
        },
        {
          methodName: "pop()",
          description: "Removes the last element from the end of the array.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          fruits.pop();
          console.log(fruits); // Output: ["apple", "banana"]
        `,
        },
        {
          methodName: "shift()",
          description: "Removes the first element from the start of the array.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          fruits.shift();
          console.log(fruits); // Output: ["banana", "cherry"]
        `,
        },
        {
          methodName: "unshift()",
          description: "Adds new elements to the start of the array.",
          code: `
          let fruits = ["banana", "cherry"];
          fruits.unshift("apple");
          console.log(fruits); // Output: ["apple", "banana", "cherry"]
        `,
        },
        {
          methodName: "length",
          description: "Returns the length of the array.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          console.log(fruits.length); // Output: 3
        `,
        },
        {
          methodName: "indexOf()",
          description: "Returns the index of an element in the array.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          console.log(fruits.indexOf("banana")); // Output: 1
        `,
        },
        {
          methodName: "slice()",
          description:
            "Returns a shallow copy of a portion of an array between start and end indices.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          let newFruits = fruits.slice(1, 3);
          console.log(newFruits); // Output: ["banana", "cherry"]
        `,
        },
        {
          methodName: "splice()",
          description: "Removes and/or adds elements from the array.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          fruits.splice(1, 1, "blueberry");
          console.log(fruits); // Output: ["apple", "blueberry", "cherry"]
        `,
        },
      ],
      subheadingg6: "Iterating Over Arrays",
      contentt7: `
      There are several ways to iterate over arrays, such as using the for loop, for...of loop, and forEach method.
    `,
      codee5: `
      let fruits = ["apple", "banana", "cherry"];

      // Using for loop
      for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
      }
    `,
      subheadingg7: "for...of Statement",
      contentt8: `
      The for...of statement allows you to iterate over iterable objects (arrays, strings, maps, sets, etc.). This loop iterates directly over the values of iterable objects.

      Syntax:
    `,
      codee6: `
      for (variable of iterable) {
        // code block to be executed
      }
    `,
      contentt9: `
      Example:
    `,
      codee7: `
      const arr = [10, 20, 30, 40, 50];

      for (let value of arr) {
        console.log(value);
      }
    `,
      contentt10: `
      Explanation:
      - The value variable represents the elements of the array.
      - The loop iterates over each element of the arr array and prints them.

      Working:
      1. The loop iterates over each element of the arr array.
      2. The value variable represents the current element of the array.
      3. The code block executes and prints the current value.
    `,
      codee8: `
      // Using forEach method
      let fruits = ["apple", "banana", "cherry"];

      fruits.forEach(function(fruit) {
        console.log(fruit);
      });
    `,
      subheadingg8: "Summary",
      contentt11: `
      Arrays are very powerful and flexible data structures in JavaScript used to store ordered collections of elements. There are many built-in methods to access, modify, and manipulate array elements. By using arrays effectively, you can make your JavaScript code more powerful and efficient.
    `,
    },
  },
  {
    topic: "All About Object",
    subcontent: {
      subheadingg1: "All About Object",
      contentt1:
        "<h3>Object Creation</h3 !important><br><br>The syntax for creating an object is `{ }`. These curly braces are called an object. <br><br>In an object, we can create variables and functions, but the way to create them is different.",
      contentt2:
        '<h3>Object Keys and Values</h3 !important><br><br>The variables inside an object are called keys. <br><br>Keys can have corresponding values which can be strings, numbers, booleans, arrays, objects, or functions (which are called methods).<br><br>Example:<br><br>{</b><br><br>keyname="stringvalue",<br><br>keyname2=9, //We do not store numbers & boolean values in double quotes "";<br><br>keyname3=true,<br><br>}.<br><br>',
      contentt3:
        '<h3>Adding Methods</h3 !important><br><br>In JavaScript, we assign functions to keys. Such functions are called methods. <br><br>Methods can be defined using normal function syntax or arrow function syntax.<br><br>Example:<br><br>keyname:function(){</b><br><br>console.log("This is a method")<br><br>};<br><br>',
      content4:
        '<h3>Accessing Properties and Methods</h3 !important><br><br>To access properties and methods of an object, we use dot notation (`myObject.key1`) or bracket notation (`myObject["key1"]`).<br><br><br><b>Example of Object with keys and methods:</b>',
      code: 'const person = {\n  name: "John",\n  age: 30,\n  greet: function() {\n    console.log("Hello, " + this.name);\n  },\n  updateAge(newAge) {\n    this.age = newAge;\n  }\n};\n\n// Accessing properties\nconsole.log(person.name); // Output: John\nconsole.log(person.age); // Output: 30\n\n// Calling methods\nperson.greet(); // Output: Hello, John\nperson.updateAge(31);\nconsole.log(person.age); // Output: 31',
      contentt5:
        "In this example:<br><br>\n`name` and `age` are keys.<br><br>\n`greet` and `updateAge` are methods defined within the `person` object.<br><br><br>This can also be considered a part of object-oriented programming (OOP), where data and functions are encapsulated into a single unit.",
      contentt6:
        "In JavaScript, an object is an entity that can store properties (key-value pairs) and methods (functions). Objects represent real-world entities.",
      code2:
        'var person = {\n  name: "John",\n  age: 30,\n  greet: function() {\n    console.log("Hello, " + this.name);\n  }\n};\n\nconsole.log(person.name); // Output: John\nperson.greet(); // Output: Hello, John',
      subheadingg2: "Object Prototype",
      contentt7:
        "In JavaScript, every object has a prototype. The prototype is also an object that allows other objects to inherit properties and methods. JavaScript objects can use prototypal inheritance to inherit properties and methods. The main benefit of prototype inheritance is that it allows code reuse and organization.",
      subheadingg3: "Example with Detailed Explanation",
      contenttt8: "1. Constructor Function:",
      codee3:
        "function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}",
      contentt9:
        "Here, `Person` is a constructor function that initializes `name` and `age` properties. A constructor function acts as a template for creating new objects.",
      contentt10: "2. Adding Methods to Prototype:",
      codee4:
        'Person.prototype.greet = function() {\n  console.log("Hello, " + this.name);\n};',
      contenttx:
        "Here, the `greet` method is added to the `Person` prototype. This means that this method will be available to all `Person` objects created from this constructor function.",
      contenttxi: "3. Creating Objects:",
      codee5:
        'var john = new Person("John", 30);\nvar jane = new Person("Jane", 25);',
      contenttxii:
        "Here, `john` and `jane` objects are created using the `Person` constructor function. Both objects inherit the `greet` method from their prototype.",
      contenttxiii: "4. Using the Inherited Method:",
      codee6:
        "john.greet(); // Output: Hello, John\njane.greet(); // Output: Hello, Jane",
      contenttxiv:
        "Here, `john` and `jane` objects call the inherited `greet` method from their prototype. The `greet` method uses `this.name`, which is the `name` property of the respective object (`john` or `jane`).",
      subheadingg4: "Extended Example with More Methods and Properties",
      contenttxv: "1. Constructor Function with Additional Methods:",
      codee7:
        'function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nPerson.prototype.greet = function() {\n  console.log("Hello, " + this.name);\n};\n\nPerson.prototype.getAge = function() {\n  console.log(this.name + " is " + this.age + " years old.");\n};',
      contenttxvi:
        "Here, along with the `greet` method, the `getAge` method is also added to the `Person` prototype.",
      contenttxvii: "2. Creating Objects and Using Methods:",
      codee8:
        'var john = new Person("John", 30);\nvar jane = new Person("Jane", 25);\n\njohn.greet(); // Output: Hello, John\njane.greet(); // Output: Hello, Jane\n\njohn.getAge(); // Output: John is 30 years old.\njane.getAge(); // Output: Jane is 25 years old.',
      contentt14:
        "Here, the `john` and `jane` objects use the `greet` and `getAge` methods that they inherited from their prototype.",
      contentt15: "3. Adding Properties to Prototype:",
      codee9: 'Person.prototype.species = "Homo Sapiens";',
      contentt16:
        "Here, the `species` property is added to the `Person` prototype.",
      contentt17: "4. Accessing Prototype Properties:",
      codee12:
        "console.log(john.species); // Output: Homo Sapiens\nconsole.log(jane.species); // Output: Homo Sapiens",
      contentt18:
        "Here, the `john` and `jane` objects access the `species` property inherited from their prototype.",
      subheadingg5: "Prototypal Inheritance",
      contentt19:
        "Prototypal inheritance is a process where one object inherits properties and methods from another object. It involves using the prototype chain.",
      codee10:
        'var animal = {\n  eats: true,\n  walk: function() {\n    console.log("Animal walks");\n  }\n};\n\nvar rabbit = {\n  jumps: true\n};\n\nrabbit.__proto__ = animal; // rabbit inherits from animal\n\nconsole.log(rabbit.eats); // Output: true\nrabbit.walk(); // Output: Animal walks',
      subheadingg6: "Summary",
      contentt20:
        "- Constructor Function: Template for creating objects.<br>- Prototype: An object from which other objects inherit properties and methods.<br>- Prototypal Inheritance: Allows objects to share properties and methods.<br>- Example: Creating objects using constructor function and accessing prototype properties and methods.<br><br>In this way, you can efficiently manage and reuse objects in JavaScript using object prototypes and prototypal inheritance.",
      subheadingg8: "typeof Operator",
      contentt22:
        "In JavaScript, the `typeof` operator is used to determine the type of a variable or expression. It returns a string that represents the type of the operand. Commonly used types include `number`, `string`, `boolean`, `object`, `function`, `undefined`, and `symbol`. The `typeof` operator is helpful for debugging and type-checking in JavaScript code.",
      subheadingg9: "typeof Operator Examples",
      codee13:
        'console.log(typeof "Hello"); // Output: string\nconsole.log(typeof 42); // Output: number\nconsole.log(typeof true); // Output: boolean\nconsole.log(typeof {name: "John"}); // Output: object\nconsole.log(typeof function() {}); // Output: function\nconsole.log(typeof undefined); // Output: undefined',
      subheadingg10: "Conclusion",
      contentt23:
        "Understanding objects, prototypes, and the `typeof` operator in JavaScript is essential for mastering the language. Objects help in organizing and managing data, prototypes enable inheritance and code reuse, and the `typeof` operator aids in determining variable types for better control over your code.",
    },
  },
  {
    topic: "Array aur object destructuring",
    subcontent: {
      subheading: "Array and Object Destructuring",
      content:
        "Array and object destructuring is a shorthand method in JavaScript for extracting values from arrays and objects and assigning them to variables. This feature makes the code concise and helps in easily accessing and manipulating values.<br><br><br><b>Array Destructuring:</b><br><br>In array destructuring, we extract values from an array and assign them to variables. This can be done in several ways:<br><br><br>Basic Array Destructuring:",
      code: "var a = [1, 2, 3];\nvar [a, b, c] = a; // a=1, b = 2, c = 3\nconsole.log(b); // Output: 1\nconsole.log(c); // Output: 2",
      content2: "<br><br><b>Skipping Values:</b>",
      code2:
        "var a = [1, 2, 3];\nvar [b, , c] = a; // b = 1, c = 3\nconsole.log(b); // Output: 1\nconsole.log(c); // Output: 3",
      content3: "<br><br><b>Default Values:</b>",
      code3:
        "var a = [1, 2];\nvar [b, c, d = 3] = a; // b = 1, c = 2, d = 3\nconsole.log(b); // Output: 1\nconsole.log(c); // Output: 2\nconsole.log(d); // Output: 3",
      content4:
        "<br><br><b>Object Destructuring</b><br><br>In object destructuring, we extract properties from an object and assign them to variables. This can be done in several ways:<br><br><br><b>Basic Object Destructuring:</b>",
      code4:
        'var obj = { name: "Alice", age: 30 };\nvar { name, age } = obj; // name = "Alice", age = 30\nconsole.log(name); // Output: "Alice"\nconsole.log(age); // Output: 30',
      content5: "<br><br><b>Renaming Variables:</b>",
      code5:
        'var obj = { name: "Alice", age: 30 };\nvar { name: fullName, age: personAge } = obj; // fullName = "Alice", personAge = 30\nconsole.log(fullName); // Output: "Alice"\nconsole.log(personAge); // Output: 30',
      content6: "<br><br><b>Default Values:</b>",
      code6:
        'var obj = { name: "Alice" };\nvar { name, age = 25 } = obj; // name = "Alice", age = 25\nconsole.log(name); // Output: "Alice"\nconsole.log(age); // Output: 25',
    },
  },
  {
    topic: "Type Casting",
    subcontent: {
      subheading: "Type Casting",
      content:
        "Type casting means converting one data type to another. In JavaScript, type casting happens in two ways: implicit (automatic) and explicit (manual).<br><br><br><h3>Explicit Typecasting (Manual) or Type Conversion (Explicit Typecasting):</h3 !important> The developer manually converts the data type using JavaScript functions.<br><br><br> Type conversion or Explicit Typecasting is the process where the developer manually converts the data type using built-in functions or methods. This is also known as explicit typecasting.",
      code: 'var a = "123";\nvar b = Number(a); // Convert string to number\nconsole.log(b); // Output: 123\n\nvar c = 456;\nvar d = String(c); // Convert number to string\nconsole.log(d); // Output: "456"',
      content2:
        "<br><br><h3>Implicit Typecasting (Automatic) or Coercion (Implicit Typecasting):</h3 !important> JavaScript automatically converts data types when needed<br><br><br> Coercion or Implicit Typecasting is the process where JavaScript automatically (implicitly) converts data types when needed. JavaScript changes types automatically during certain operations.<br><br>",
      code2:
        'var x = 5;\nvar y = "10";\nvar result = x + y; // Converts number to string and concatenates\nconsole.log(result); // Output: "510"\n\nvar a = "5";\nvar b = 3;\nvar sum = a - b; // Converts string to number and performs subtraction\nconsole.log(sum); // Output: 2',
      content3: "<br><br><b>Examples of All Conversions Together:</b><br><br>",
      code3:
        '// String to Number\nvar str = "456";\nvar num = Number(str);\nconsole.log(num); // Output: 456\n\n// Number to String\nvar num = 789;\nvar str = String(num);\nconsole.log(str); // Output: "789"\n\n// Boolean to Number\nvar bool = true;\nvar num = Number(bool);\nconsole.log(num); // Output: 1\n\n// Number to Boolean\nvar num = 0;\nvar bool = Boolean(num);\nconsole.log(bool); // Output: false\n\n// String to Integer\nvar str = "123abc";\nvar intNum = parseInt(str);\nconsole.log(intNum); // Output: 123\n\n// String to Float\nvar str = "123.45abc";\nvar floatNum = parseFloat(str);\nconsole.log(floatNum); // Output: 123.45',
    },
  },
  {
    topic: "Exception Handling",
    subcontent: {
      subheading: "Exception Handling in JavaScript",
      content:
        "Exception handling is a way to manage unexpected errors in JavaScript. It uses the try, catch, finally, and throw statements to handle errors that occur during code execution.<br><br><br><b>throw Statement</b><br><br>The throw statement allows you to generate custom errors. When the throw statement is executed, an exception is raised, and the program execution stops.<br><br><br><b>throw expression;</b>",
      code: 'function divide(a, b) {\n  if (b === 0) {\n    throw new Error("Division by zero is not allowed.");\n  }\n  return a / b;\n}\n\ntry {\n  console.log(divide(10, 0));\n} catch (error) {\n  console.log("Error caught: " + error.message);\n}',
      content2:
        "Explanation:<br><br>\n• If the value of b is 0, the throw statement raises a new Error object.<br><br>\n• The function call is made inside the try block.<br><br>\n• The catch block catches the error and prints the error message.<br><br><br><h3>try / catch / finally Statement</h3 !important><br><br>\nYou can handle error-prone code using the try, catch, and finally statements. These statements allow you to catch errors and provide an appropriate response.<br><br>\nsyntax:<br><br>\ntry {</b><br><br>\n  // code that may throw an error<br><br>\n} catch (error) {</b><br><br>\n  // code to handle the error<br><br>\n} finally {</b><br><br>\n  // code to be executed regardless of an error<br><br>\n}<br><br><br>\nJavaScript is an interpreted language where code is executed line by line. If there is an error in a line, subsequent lines are not executed. To handle this situation, we use try and catch blocks.<br><br><br><b>Without try and catch input:</b>",
      code2:
        'console.log("hey");\nconsole.log(hey);  // This will cause an error as "hey" is not defined.\nconsole.log("hey");\n//Output:\n//hey\n//Uncaught ReferenceError: hey is not defined',
      content3:
        "<br><br>In this case, the first console.log statement executes, but the second statement throws an error, preventing the third statement from executing.<br><br><br><b>With try and catch input</b>",
      code3:
        'console.log("hey");\n\ntry {\n    console.log(hey);  // If an error occurs here, the catch block will execute.\n} catch (err) {\n    console.log(err);  // Error message will be printed.\n}\n\nconsole.log("hey");\n//Output:\n//hey\n//ReferenceError: hey is not defined\n//Hey',
      content4:
        "<br><br>In this case, the first console.log statement executes, then the try block encounters an error, so the catch block executes and prints the error message. The subsequent console.log statement also executes.<br><br><b>Explanation:</b><br><br>\n• The try block contains code that may throw an error.<br><br>\n• The catch block contains code to handle the error.<br><br>\n• The finally block contains code that always executes regardless of whether an error occurs.<br><br><br><h3>Utilizing Error Objects</h3 !important><br><br>\nError objects provide detailed information about the error. Using error objects, you can access the type, message, and stack trace of the error.<br><br>",
      code4:
        'const error = new Error(message);\nfunction customErrorHandling() {\n  try {\n    throw new Error("Something went wrong!");\n  } catch (error) {\n    console.log("Name: " + error.name);\n    console.log("Message: " + error.message);\n    console.log("Stack: " + error.stack);\n  }\n}\n\ncustomErrorHandling();',
      content5:
        '<b>Explanation:</b><br><br>\n• throw new Error("Something went wrong!") throws a new error.<br><br>\n• The catch block catches the error and prints the error object properties.<br><br><br>\n• error.name is the name of the error.<br><br>\n• error.message is the message of the error.<br><br>\n• error.stack provides the stack trace indicating the occurrence of the error.<br><br><br><h3>Summary of Exception Handling</h3 !important><br><br>\n<b>1. throw Statement:</b><br>\n• Generates custom errors.<br><br>\n• Syntax: throw expression;<br><br>\n• Example: throw new Error("Division by zero is not allowed.");<br><br><br>\n<b>2. try / catch / finally Statement:</b><br><br>\n• Method to handle errors.<br><br>\n• Syntax:<br><br>\ntry {</b><br><br>\n  // code that may throw an error<br><br>\n} catch (error) {</b><br><br>\n  // code to handle the error<br><br>\n} finally {</b><br><br>\n  // code to be executed regardless of an error<br><br>\n}<br><br>\nExample: Place error-prone code in the try block, handle the error in the catch block, and execute cleanup code in the finally block.<br><br><br><b>3. Utilizing Error Objects:</b><br><br>\n• Error objects provide detailed information about errors.<br><br>\n• Syntax: const error = new Error(message);<br><br>\n• Example: Access and print error object properties.',
    },
  },
  {
    topic: "Functions In JavaScript",
    subcontent: {
      subheading: `Functions In JavaScript`,
      content: `<br><br>Functions in JavaScript are blocks of code designed to perform a specific task. Variables and functions declared inside a function are only accessible within that function.<br><br><br>
      <h3>Functions Declaration and Definition</h3 !important>
<b>1. Function Declaration</b><br><br>
Syntax:<br><br>
function functionName() {</b><br><br>
    console.log("Hello!");<br><br>
}<br><br>
//Function Call<br><br>
functionName();<br><br>
//Function Call<br><br>
//To call a function, the function name and parentheses<b>()</b> are used:<br><br>
`,
      code: `
function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!

      `,
      content2: `
      <b>2. Function with Parameters</b><br><br>
When we call a function and provide a value, we call that value an "argument." When we define a function, we define a placeholder or variable to accept that value, which is called a "parameter."<br><br>
`,
      code2: `
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
      `,
      content3: `<br><br>
      In this example, name is a parameter defined inside the greet function. When we call greet("Alice"), "Alice" is passed to the function as an argument. Thus, "Alice" is received as the value of the name parameter inside the function, and the function uses that value to generate the string "Hello, Alice!"<br><br><br>
Similarly, when we call a function, we provide arguments for the function, and when we define a function, we define parameters that receive those arguments.<br><br><br>
<b>3. Return Values</b><br><br>
When a function generates a value and wants to return it to the outside of the function, we use the return keyword. Using this keyword stops the function execution and returns control to the place where the function was called.<br><br>
`,
      code3: `
  function add(a, b) {
    return a + b;
}

var result = add(3, 5);
console.log(result); // Output: 8
      `,
      content4: `
      <br><br>In this example, the add function generates a result by adding the values of a and b, and then returns that result using the return keyword. When we call add(3, 5), the function generates 8 and returns it to the place where it was called. Thus, we can store the result of the add function in the result variable and use it later.<br><br><br>
Using the return keyword ends the function execution, and control returns to the place where the function was called.<br><br><br>
<b>4. Default Parameters</b><br><br>
By using default parameters, you can define default values for function parameters. If no argument is passed during the function call, the default value is used.<br><br><br>
Syntax: <br><br>
function functionName(param1 = defaultValue1, param2 = defaultValue2, ...) {</b><br><br>
  // function body<br><br>
}<br><br>
<br><br>
<b>Example:</b><br><br>
`,
      code4: `
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet();        // Output: Hello, Guest!

      `,
      content5: `
      Explanation:<br><br><br>
•	The default value "Guest" is defined for the name parameter.<br><br>
•	When the function greet("Alice") is called, the value of name is "Alice".<br><br>
•	When the function greet() is called without any argument, the default value "Guest" is used for name.
<br><br><br>
<b>5. Rest Parameters</b><br><br>
Using rest parameters, you can pass a variable number of arguments to a function. These arguments are received by the function as an array. When defining a rest parameter, the ... (spread operator) is placed before the parameter name.<br><br>
Syntax:<br><br>
function functionName(...restParam) {</b><br><br>
  // function body<br><br>
}<br><br><br>

Example:

      `,
      code5: `
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3));       // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100

      `,
      content6: `<b>Explanation:</b><br><br>
•	The sum function defines a rest parameter numbers which is an array.<br><br>
•	All arguments passed to the function are stored in the numbers array.<br><br>
•	The total is calculated by adding all elements of the numbers array using a loop.<br><br>
<br><br><br>
<b>Combining Default and Rest Parameters</b><br><br>
You can use default and rest parameters in the same function. Default parameters must be defined first, and rest parameters last.<br><br><br>
Example:<br><br>
`,
      code6: `
      function introduce(name = "Guest", ...hobbies) {
  console.log("Hello, " + name + "!");
  console.log("Your hobbies are: " + hobbies.join(", "));
}

introduce("Alice", "Reading", "Traveling");
// Output:
// Hello, Alice!
// Your hobbies are: Reading, Traveling

introduce();
// Output:
// Hello, Guest!
// Your hobbies are:
      `,
      content7: `
      <b>Explanation:</b><br><br>
•	The default value "Guest" is defined for the name parameter.<br><br>
•	The hobbies rest parameter stores a variable number of arguments as an array.<br><br>
•	When calling the function introduce("Alice", "Reading", "Traveling"), "Alice" is printed as the name and hobbies "Reading" and "Traveling" are printed.<br><br>
•	When calling the function introduce() without any arguments, the default name "Guest" and an empty hobbies list are printed.<br><br>
      `,
    },
  },
  {
    topic: "Pure aur impure function",
    subcontent: {
      subheading1: "Pure and Impure Functions",
      content1: `Pure and impure functions are important concepts in programming that define the behavior of functions.<br><br><br>

<br><br>Pure Function:</br><br><br>
- A function is called pure if it satisfies these two conditions:<br><br>
1. Deterministic: A pure function is always deterministic, meaning it produces the same output for the same input.<br><br>
2. Side-effect free: A pure function does not modify any external state, such as global variables or mutable objects.<br><br><br>
Example of a pure function:`,

      code1: `
function add(a, b) {
return a + b;
}`,

      content2: `
This add() function is pure because:<br><br>
- Every time the same inputs are provided (e.g., add(2, 3)), it always returns the same output.<br><br>
- It does not modify any external state.<br><br><br> <b>Impure Function</b>
<br><br>An impure function violates one or both of the conditions that define a pure function. These functions produce side effects or are not deterministic.<br><br>`,

      code2: `Example of an impure function:

let result = 0;

function addToResult(num) {
result += num;
return result;
}`,
      content3: `
This addToResult() function is impure because:<br><br>
- It modifies an external state (the result variable).<br><br>
- The output of this function is not deterministic because the value of result changes after each function call.<br><br><br>

When using impure functions, you need to be cautious about how to handle their side effects, as they can introduce unpredictable behavior, especially in concurrent programming or testing. On the other hand, pure functions are predictable and their use improves maintainability and testability.`,
    },
  },
  {
    topic: "Arrow Function",
    subcontent: {
      subheading: "Arrow Function",
      content: `Arrow functions are a concise way to define functions in JavaScript. They were introduced in ES6 (ECMAScript 2015). Arrow functions are an alternative to traditional function expressions, helping to make code shorter and more readable in some situations.`,

      code3: `Syntax:
// Single parameter arrow function
const functionName = parameter => {
// function body
};

// Multiple parameters arrow function
const functionName = (parameter1, parameter2) => {
// function body
};

// Arrow function with implicit return
const functionName = parameter => expression;

// Arrow function with block body and explicit return
const functionName = parameter => {
return expression;
};`,

      code4: `Example:
// Traditional function
function add(a, b) {
return a + b;
}

// Arrow function
const add = (a, b) => a + b;
`,
      content2: `
<br><br>
One advantage of using arrow functions is that they provide a concise syntax, making the code easier to read and write. These functions use the lexical this keyword, meaning they inherit the this keyword from their surrounding context, and do not create their own this context like traditional functions.<br><br><br>Example:<br><br>`,

      code5: `
const person = {
name: "Alice",
greet: function() {
console.log("Hello, " + this.name + "!");
}
};

person.greet(); // Output: Hello, Alice!

// Using arrow function
const person = {
name: "Alice",
greet: () => {
console.log("Hello, " + this.name + "!");
}
};

person.greet(); // Output: Hello, undefined!
`,
      content2: `<br><br><br>
In arrow functions, the this keyword refers to the global context, so using an arrow function inside an object does not refer to the object. In such cases, it is better to use traditional function expressions.<br><br><br>
Arrow functions have some important characteristics and limitations:
<br><br><br>
- No arguments object: Arrow functions do not have an arguments object, unlike traditional functions.<br><br>
- Can't be used as constructors: Arrow functions cannot be used with the new keyword. They cannot be used as constructors.
- No super keyword: The super keyword cannot be used in arrow functions.<br><br>
- No new.target: The new.target property cannot be used in arrow functions.<br><br>
<br><br>
If you have any confusion about using arrow functions in a specific situation or any other questions, feel free to ask!`,
    },
  },
  {
    topic: "IIFE",
    subcontent: {
      subheading4: "IIFE",
      content4: `Immediately Invoked Function Expressions (IIFEs) are a common pattern in JavaScript that defines a function expression and then immediately executes it. This pattern is primarily used for variable scoping to avoid global scope pollution.`,

      code6: `Syntax:
(function() {
// function body
})();
`,
      content7: `<br><br>
This syntax wraps a function expression inside parentheses and then uses an additional set of parentheses to immediately invoke the function.
<br><br><br>
Example:<br><br>`,
      code7: `
(function() {
var message = "Hello, world!";
console.log(message);
})();
// Output: Hello, world!
`,
      content: `<br><br>In this example, an IIFE is defined where a variable message is initialized and then printed to the console. Due to the IIFE, the message variable is only within the scope of the IIFE and not in the global scope, avoiding global scope pollution.<br><br><br>

<b>IIFEs are used primarily for two main purposes:</b>
<br><br><br>
<b>1. Variable Scoping:</b> IIFEs limit variables to the local scope, avoiding global scope pollution. This helps avoid naming conflicts between variables and functions.
<br><br><br>
<b>2. Encapsulation:</b> IIFEs create a closure, controlling access to variables and functions. This achieves a module-like behavior, encapsulating specific functionality.
<br><br><br>
Example:`,

      code9: `
var get = (function() {
  var mess = "Hello World!";
  console.log(mess);
  return {
    getter: function () {
      console.log(mess);
    },
    setter: function (name) {
      mess = name;
    }
  };
})();

get.getter();
get.setter("Anupam");
get.getter();
`,
      content9: `
In this example, the IIFE function returns an object containing two methods: getter() and setter().<br>
The getter() method prints the value of the mess variable from inside the IIFE.<br>
The setter() method allows the user to change (reassign) the value of the mess variable from inside the IIFE.<br>
The object returned by the IIFE is stored in the get variable.
`,

      code8: `
var counter = (function() {
  var count = 0;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
})();

console.log(counter.getCount()); // Output: 0
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2
`,
      content8: `
In this example, the IIFE function returns an object with three methods: increment(), decrement(), and getCount().<br>
The increment() method increases the count variable by 1.<br>
The decrement() method decreases the count variable by 1.<br>
The getCount() method prints the value of the count variable.<br>
The object returned by the IIFE is stored in the counter variable.<br>
Due to the IIFE, the count variable and its methods are only within the scope of the counter object and cannot be accessed from outside.
<br><br><br>
IIFEs are commonly used for variable scoping and encapsulation. However, with the introduction of ES6, block-scoping can be achieved using let and const keywords, reducing the need for IIFEs. Nonetheless, IIFEs are still used in legacy code and specific use cases. If you have any questions or need further clarification, feel free to ask!`,
    },
  },
  {
    topic: "Scope and Function Stack",
    subcontent: {
      subheading: "Scope",
      content:
        "Scope means the accessibility of variables, objects, and functions in different parts of the code. In JavaScript, there are two main types of scope:<br><br><br>\n\n<b>Global Scope:</b>\n<br><br>Variables declared outside of any function have a global scope. These variables can be accessed from any part of the code.<br><br>\n<br><br><b>Local Scope:</b>\n<br><br>Variables declared inside a function have a local scope. These variables can only be accessed within that function.<br><br>",
      subheadingg: "Function Stack",
      contentt:
        "Function Stack: When a function is called, a new execution context is created and placed on the stack. After the function executes, it is removed from the stack. This stack of execution contexts is called the call stack.<br><br><br>\n\nExample:\n",
      codee1:
        "function first() {\nconsole.log('First function');\nsecond();\nconsole.log('First function again');\n}\n\nfunction second() {\nconsole.log('Second function');\n}\n\nfirst();",
      content3:
        "<br><br>In this example, the first function calls the second function, creating a stack of function calls.<br><br>",
      subheadingg2: "Browser Context API",
      contentt4:
        "The Browser Context API allows managing browser contexts, such as tabs, windows, and memory management.<br><br><br>\n\n<br><br><b>Window, Stack & Heap Memory</b><br><br>\n<br><br>When we perform a calculation, the intermediate values that are not the final result are stored in heap memory.<br><br>",
      contentt5:
        "<br><br>\nExample: 1 + 2 + 3 + 4:<br><br><br>\n\n- Heap Memory:<br><br>\n- 1 + 2 results in 3<br><br>\n- 3 + 3 results in 6<br><br>\n- 6 + 4 results in 10<br><br>\n\n<br><br>Intermediate values are temporarily stored in heap memory.<br><br>",
      subheadingg3: "Execution Context",
      contentt6:
        "An execution context is created as soon as a function runs. It is like an imaginary box that contains three things:<br><br>\n\n<br><br>Variables:\n<br><br>Variables declared inside the function.\n<br><br>Functions:\n<br><br>Functions declared inside the function.\n<br><br>Lexical Environment:\n<br><br>It indicates what the function can access and what it cannot.<br><br><br>\n<br><br>\nExample:",
      codee2:
        "function abcd() {\nvar a = 12;\nfunction def() {\nvar b = 12;\n}\n}",
      contentt7:
        "<br><br>In this example:<br><br>\n<br><br>- The function <b>abcd</b> has access to the variable <b>a</b>.<br><br>\n<br><br>- The nested function <b>def</b> has access to the variable <b>b</b>.<br><br>\n<br><br>- The <b>abcd</b> function cannot access the variable <b>b</b> because <b>b</b> is in the lexical environment of the <b>def</b> function.<br><br>",
      subheadingg4: "Lexical Environment",
      contentt11:
        "A lexical environment is like a chart that shows what a particular function can access.<br><br><br>\n\n- A child function can access the variables and functions of its parent function.<br><br>\n- A parent function cannot access the variables of its child function.<br><br><br>\n\nExample:<br><br>",
      codee5:
        "function outer() {\nvar a = 10;\nfunction inner() {\nvar b = 20;\nconsole.log(a); // This will work\n}\nconsole.log(b); // This will not work\n}",
      contentt8:
        "<br><br>In this example, the child function <b>inner</b> can access the variable <b>a</b> of its parent function <b>outer</b>, but the parent function <b>outer</b> cannot access the variable <b>b</b> of its child function <b>inner</b>.<br><br>",
      subheadingg10: "Summary",
      contentt10:
        "- Heap Memory: Stores intermediate values during calculations.\n- Execution Context: Created when a function is called and contains variables, functions, and the lexical environment.<br><br>\n- Lexical Environment: Defines scope and scope chain.<br><br>",
    },
  },
  {
    topic: "Synchronous and Asynchronous Code",
    subcontent: {
      subheading: "Synchronous Code",
      content: `Synchronous code executes sequentially, where each line completes before the next line executes. There are no asynchronous operations causing delays.<br><br><br>
Example`,
      code: `
javascript
console.log('Line 1');
console.log('Line 2');
console.log('Line 3');
console.log('Line 4');
`,
      contentt: `Execution Steps:<br><br>
<br><br>
1. Line 1: <b>console.log('Line 1');</b><br><br>
- The JavaScript engine reads the code and pushes <b>console.log('Line 1')</b> onto the main stack.<br><br>
- The statement executes and <b>Line 1</b> is printed.<br><br>
- After execution, the statement is popped from the main stack.<br><br>
<br><br>
Main Stack: (empty)<br><br>
<br><br>
Output:<br><br>
Line 1<br><br>
<br><br>
2. Line 2: <b>console.log('Line 2');</b><br><br>
- Next, <b>console.log('Line 2')</b> is pushed onto the main stack.<br><br>
- The statement executes and <b>Line 2</b> is printed.<br><br>
- After execution, the statement is popped from the main stack.<br><br>
<br><br>
Main Stack: (empty) <br><br>
Output: <br><br>
Line 1 <br><br>
Line 2 <br><br>

3. Line 3: <b>console.log('Line 3');</b><br><br>
- <b>console.log('Line 3')</b> is pushed onto the main stack.<br><br>
- The statement executes and <b>Line 3</b> is printed.<br><br>
- After execution, the statement is popped from the main stack.<br><br>
<br><br><br>
Main Stack: (empty)<br><br>
Output:<br><br>
Line 1<br><br>
Line 2<br><br>
Line 3<br><br>
<br><br><br>

4. Line 4: <b>console.log('Line 4');</b><br><br>
- <b>console.log('Line 4')</b> is pushed onto the main stack.<br><br>
- The statement executes and <b>Line 4</b> is printed.<br><br>
- After execution, the statement is popped from the main stack.
<br><br><br>
Main Stack: (empty)<br><br>
<br><br><br>
Output:<br><br>
Line 1<br><br>
Line 2<br><br>
Line 3<br><br>
Line 4<br><br>
`,
      subheadingg: "Summary",
      contentt3: `- Synchronous code executes line by line sequentially.
- Main Stack: Each statement is pushed onto the main stack, executed, and then popped off.
- In synchronous code, there is no delay; each statement executes immediately.<br><br>`,

      imagee: "images/sync.png",
      subheadingg1: "Asynchronous JavaScript",
      contentt1: `In asynchronous JavaScript, code does not execute line by line. Some operations (like timers, network requests) run in the background and provide results later. Background operations can proceed, and results are provided when they complete.<br><br><br>

We will use 4 lines of code, where the 2nd line is asynchronous and will execute after 5 seconds.<br><br><br>

Example`,
      codee1: `
console.log('Line 1');
setTimeout(() => {
console.log('Line 2');
}, 5000);
console.log('Line 3');
console.log('Line 4');
`,

      content3: `Execution Steps:<br><br><br>

1. Line 1: <b>console.log('Line 1');</b><br><br>
- The JavaScript engine reads the code and pushes <b>console.log('Line 1')</b> onto the main stack.<br><br>
- The statement executes and <b>Line 1</b> is printed.<br><br>
- After execution, the statement is popped from the main stack.<br><br>
<br><br>
Main Stack: (empty)<br><br>
<br><br>
Output:<br><br>
Line 1
<br><br><br>

2. Line 2: <b>setTimeout(() => { console.log('Line 2'); }, 5000);</b><br><br>
- <b>setTimeout</b> is an asynchronous function that is pushed onto the main stack.<br><br>
- The JavaScript engine hands <b>setTimeout</b> over to the Web API.<br><br>
- <b>setTimeout</b> executes in the background via the Web API.<br><br>
- The Web API starts a countdown for 5000ms (5 seconds).<br><br>
- <b>setTimeout</b> is popped from the main stack.
<br><br>
Main Stack: (empty)<br><br>
<br><br>
Output:
Line 1
<br><br><br>
3. Line 3: <b>console.log('Line 3');</b><br><br>
- The JavaScript engine pushes <b>console.log('Line 3')</b> onto the main stack.<br><br>
- The statement executes and <b>Line 3</b> is printed.<br><br>
- After execution, the statement is popped from the main stack.<br><br><br>

Main Stack: (empty)<br><br>

Output:<br><br>
Line 1<br><br>
Line 3<br><br>
<br><br><br>
4. Line 4: <b>console.log('Line 4');</b><br><br>
- The JavaScript engine pushes <b>console.log('Line 4')</b> onto the main stack.<br><br>
- The statement executes and <b>Line 4</b> is printed.<br><br>
- After execution, the statement is popped from the main stack.<br><br>
<br><br>
Main Stack: (empty)<br><br>
<br><br>
Output:<br><br>
Line 1<br><br>
Line 3<br><br>
Line 4<br><br>

<br><br><br>
5. After 5 seconds:<br><br>
- The Web API pushes the callback function of setTimeout into the Callback Queue.<br><br>
- The Event Loop checks if the main stack is empty.<br><br>
- The callback function (which is <b>console.log('Line 2')</b>) is pushed from the Callback Queue to the main stack.<br><br>
- The statement executes and <b>Line 2</b> is printed.<br><br>
- After execution, the statement is popped from the main stack.<br><br>
<br><br>
Main Stack: (empty)
<br><br><br>
Output:<br><br>
Line 1<br><br>
Line 3<br><br>
Line 4<br><br>
Line 2 (after 5 seconds)`,

      subheading3: "Summary",
      content4: `- Asynchronous code runs in the background and comes to the main stack through the callback queue once completed.
- Web API handles asynchronous operations and pushes the callback function to the callback queue after the countdown.
- The Event Loop continuously checks the callback queue and pushes functions to the main stack when the main stack is empty.<br><br>`,
      imagee2: `images/async.png`,
      subheading4: "JavaScript Code Execution",
      content5: `JavaScript is a single-threaded language that executes code synchronously, meaning only one statement executes at a time. The JavaScript execution context and call stack play crucial roles.<br><br><br>
<b>Call Stack</b>: Manages function calls.<br><br><br>
<b>Execution Context</b>: When a function is called, a new execution context is created containing variables, functions, and the lexical environment.<br><br>`,
      subheading5: "Asynchronous Operations",
      content6: `JavaScript handles asynchronous operations using Web APIs, the callback queue, and the event loop.<br><br><br>
<b>Web APIs</b>: Handle setTimeout, HTTP requests, DOM events.<br><br>
<b>Callback Queue</b>: Holds asynchronous callbacks.<br><br>
<b>Event Loop</b>: Continuously checks the callback queue and pushes functions from the queue to the main stack when it is empty.`,
      subheading7: "Conclusion",
      content18: `JavaScript is a powerful language that effectively handles synchronous and asynchronous operations. Concepts like the execution context, call stack, Web APIs, callback queue, and event loop make JavaScript robust and responsive.<br><br>`,
    },
  },
  {
    topic: "Value Of this",
    subcontent: {
      subheadingg1: "Value Of this Keyword",
      subheadingg2: "Global Scope",
      contentt1: `
  When you use \`this\` in the global scope, it refers to the global object, which is \`window\` in the browser.

  Example:
  `,
      codee1: `
  console.log(this); // Output: Window object (in the browser)
  `,
      subheadingg3: "Function Scoped",
      contentt2: `
  If you use \`this\` within a function, it also refers to the global object unless the function is in strict mode.

  Example:
  `,
      codee2: `
  function abcd() {
    console.log(this); // Output: Window object (in the browser)
  }
  abcd();
  `,
      subheadingg4: "Method Scope",
      contentt3: `
  When \`this\` is used inside a method, it refers to the parent object of that method, as you have correctly stated.

  Example:
  `,
      codee3: `
  var obj = {
    name: "Anupam",
    method: function() {
      console.log(this, this.name); // Output: Object {name: "Anupam"} Anupam
    }
  };
  obj.method();
  `,
      subheadingg5: "Event Scope",
      contentt4: `
  When you use \`this\` inside an event handler, \`this\` typically refers to the element on which the event occurred.

  Example:
  `,
      codee4: `
  <button id="myButton">Click me</button>
  document.getElementById("myButton").onclick = function() {
    console.log(this); // Output: <button id="myButton">Click me</button>
  };
  `,
      subheadingg6: "In Arrow Functions",
      contentt5: `
  Arrow functions do not have their own \`this\` context. Instead, they inherit \`this\` from the surrounding lexical scope. In other words, the value of \`this\` inside an arrow function is determined by the enclosing non-arrow function where the arrow function is defined.

  Example:
  `,
      codee5: `
  let name = () => {
    console.log(this); // [object Window]
  };
  name();
  `,
      codee6: `
  const obj = {
    name: "Anupam",
    regularFunc: function() {
      console.log("Inside regularFunc:", this.name); // Output: Inside regularFunc: Anupam
    },
    arrowFunc: () => {
      console.log("Inside arrowFunc:", this.name); // Output: Inside arrowFunc: undefined
    }
  };

  obj.regularFunc(); // Inside regularFunc: Anupam
  obj.arrowFunc();   // Inside arrowFunc: undefined
  `,
      subheadingg7: "Strict Mode Behavior",
      contentt6: `
  In strict mode, the behavior of \`this\` is different compared to non-strict mode.
  <br><br><br>
  1. Global Scope:
  In strict mode, the value of \`this\` in the global scope is \`undefined\`, whereas in non-strict mode it refers to the global object (\`window\` in browsers).

  Example:
  `,
      codee7: `
  "use strict";
  console.log(this); // Output: undefined
  `,
      contentt7: `
  2. Function Scoped:
  In strict mode, \`this\` also has a value of \`undefined\` inside a function if there is no explicit context. In non-strict mode, it refers to the global object.

  Example:
  `,
      codee8: `
  "use strict";
  function abcd() {
    console.log(this); // Output: undefined
  }
  abcd();
  `,
      contentt8: `
  3. Method Scope:
  Inside a method, \`this\` refers to the parent object of the method, whether in strict or non-strict mode.

  Example:
  `,
      codee9: `
  "use strict";
  var obj = {
    name: "Anupam",
    method: function() {
      console.log(this, this.name); // Output: Object {name: "Anupam"} Anupam
    }
  };
  obj.method();
  `,
      contentt9: `
  4. Event Handlers:
  In event handlers, \`this\` typically refers to the element on which the event occurred, even in strict mode.

  Example:
  `,
      codee10: `
  <button id="myButton">Click me</button>
  "use strict";
  document.getElementById("myButton").onclick = function() {
    console.log(this); // Output: <button id="myButton">Click me</button>
  };
  `,
      contentt10: `
  5. Arrow Functions:
  In arrow functions, \`this\` inherits from the lexical scope, whether in strict or non-strict mode. In the global scope, its value is \`undefined\`.

  Example:
  `,
      codee11: `
  "use strict";
  const arrowFunc = () => {
    console.log(this); // Output: undefined
  };
  arrowFunc();
  `,
      subheadingg8: "Explicit Binding",
      contentt11: `
  Explicit binding is used in JavaScript to specifically bind \`this\` to an object. There are three methods to achieve this:
  `,
      subheadingg9: "call() Method",
      contentt12: `
  The \`call()\` method calls a function with a specified \`this\` value and optional arguments.

  Example:
  `,
      codee12: `
  const obj1 = { name: "Alice" };
  const obj2 = { name: "Bob" };

  function greet() {
    console.log("Hello, " + this.name);
  }

  greet.call(obj1); // Output: Hello, Alice
  greet.call(obj2); // Output: Hello, Bob
  `,
      subheadingg10: "apply() Method",
      contentt13: `
  The \`apply()\` method also calls a function with a specified \`this\` value, but arguments are provided as an array.

  Example:
  `,
      codee13: `
  const obj = { name: "Alice" };

  function greet(message) {
    console.log(message + ", " + this.name);
  }

  greet.apply(obj, ["Hello"]); // Output: Hello, Alice
  `,
      subheadingg11: "bind() Method",
      contentt14: `
  The \`bind()\` method creates a new function that binds \`this\` to a specified object. This function can be called anytime, and \`this\` will remain bound to the specified object.

  Example:
  `,
      codee14: `
  const obj = { name: "Alice" };

  function greet() {
    console.log("Hello, " + this.name);
  }

  const boundFunc = greet.bind(obj);
  boundFunc(); // Output: Hello, Alice
  `,
      contentt15: `
  Using these methods, you can specifically set the \`this\` value for a function, providing flexibility and control over the function's behavior. If you have any other queries, feel free to ask!
  `,
    },
  },
  {
    topic: "First-Class Functions in JavaScript",
    subcontent: {
      subheadingg1: "Introduction",
      contentt1: `
        In JavaScript, functions are called first-class citizens or first-class objects. This means that functions are treated as values. Functions can be stored in variables, passed as arguments to other functions, and returned from other functions.
      `,
      subheadingg2: "Key Characteristics of First-Class Functions<br><br>",
      subheadingg3: "Stored in Variables",
      contentt2: `
          Functions can be stored in variables or constants.

          Example:`,
      codee1: `
          const sayHello = function() {
              console.log("Hello!");
          };
          sayHello(); // Output: Hello!
        `,

      subheadingg4: "Passed as Arguments",
      contentt3: `
          Functions can be passed as arguments to other functions.
`,
      codee2: `
          function greet(callback) {
              callback();
          }

          function sayHello() {
              console.log("Hello!");
          }

          greet(sayHello); // Output: Hello!
        `,
      subheadingg5: "Returned from Other Functions",
      contentt4: `
          Functions can be returned from other functions.

          Example:
          `,
      codee3: `
          function createGreeting() {
              return function() {
                  console.log("Hello!");
              };
          }

          const greet = createGreeting();
          greet(); // Output: Hello!

        `,

      subheadingg6: "Stored in Data Structures",
      contentt5: `
          Functions can be stored in arrays and objects.
          <br><br>
          Example:
          `,
      codee4: `
          const array = [function() { console.log("Hello from array!"); }];
          array[0](); // Output: Hello from array!

          const obj = {
              greet: function() { console.log("Hello from object!"); }
          };
          obj.greet(); // Output: Hello from object!

        `,
      subheadingg7: "Example 1: Function Stored in a Variable",
      contentt6: `
          `,
      codee5: `
          const add = function(a, b) {
              return a + b;
          };

          console.log(add(2, 3)); // Output: 5

        `,

      subheadingg8: "Example 2: Function Passed as an Argument",
      contentt7: `
          `,
      codee6: `
          function operate(a, b, operation) {
              return operation(a, b);
          }

          const multiply = function(a, b) {
              return a * b;
          };

          console.log(operate(2, 3, multiply)); // Output: 6

        `,

      subheadingg9: "Example 3: Function Returned from Another Function",
      contentt8: `
          `,
      codee7: `
          function makeMultiplier(multiplier) {
              return function(x) {
                  return x * multiplier;
              };
          }

          const double = makeMultiplier(2);
          console.log(double(5)); // Output: 10

          const triple = makeMultiplier(3);
          console.log(triple(5)); // Output: 15

        `,

      subheadinggx: "Example 4: Function Stored in an Object",
      contentt9: `
          `,
      codee8: `
          const operations = {
              add: function(a, b) {
                  return a + b;
              },
              subtract: function(a, b) {
                  return a - b;
              }
          };

          console.log(operations.add(5, 3)); // Output: 8
          console.log(operations.subtract(5, 3)); // Output: 2

        `,

      subheadinggxi: "Conclusion",
      contenttx: `
        The concept of first-class functions in JavaScript makes code more flexible and reusable. Treating functions as values allows for higher-order programming, where functions can be passed as arguments, returned, and stored in data structures. It also helps in implementing functional programming techniques.
      `,
    },
  },
  {
    topic: "Callback Function",
    subcontent: {
      subheadingg1: "Callback Function",
      contentt1: `
      A callback function is a function that is passed as an argument to another function. When the other function executes, the callback function is called. The benefit of this is that you can write asynchronous code in a synchronous way.
    `,
      subheadingg2: "Synchronous Callback",
      contentt2: `
      A synchronous callback is one that is called immediately when invoked inside another function.

      Example:
    `,
      codee1: `
      function sum(a, b) {
          console.log(a + b);
      }

      function calculator(a, b, sumCallback) {
          sumCallback(a, b);
      }
    `,
      contentt3: `
      calculator(2, 3, sum); // Correct way<br><br>
      // Output: 5<br><br>

      // Incorrect way<br><br>
      // calculator(2, 3, sum()); // This would execute the sum function immediately and pass the result, not the function itself.
    <br><br>
      calculator(2, 3, (a, b) => { // This is also correct<br><br>
          console.log(a + b);<br><br>
      });<br><br>
      // Output: 5<br><br>
    `,
      subheadingg4: "Custom Loops and Methods using Callback<br><br>",
      subheadingg5: "for...of Loop",
      contentt4: `
      The for...of loop iterates over the elements of an array. To implement this ourselves, we write a custom function that calls the callback function for each element in the array.

      Example:
    `,
      codee3: `
      function customForOf(array, callback) {
          for (let i = 0; i < array.length; i++) {
              callback(array[i]);
          }
      }

      // Usage
      let fruits = ["apple", "banana", "cherry"];
      customForOf(fruits, function(fruit) {
          console.log(fruit);
      });
    `,
      subheadingg6: "for...in Loop",
      contentt5: `
      The for...in loop iterates over the indices of an array. To implement this ourselves, we write a custom function that calls the callback function for each index of the array.

      Example:
    `,
      codee4: `
      function customForIn(array, callback) {
          for (let index in array) {
              if (array.hasOwnProperty(index)) {
                  callback(index);
              }
          }
      }

      // Usage
      let fruits = ["apple", "banana", "cherry"];
      customForIn(fruits, function(index) {
          console.log(index); // prints index
          console.log(fruits[index]); // prints element at index
      });
    `,
      subheadingg8: "Using forEach Method",
      contentt7: `
      The \`forEach\` method in JavaScript is an array method that iterates over each element of the array and executes a callback function for each element. Let's first look at how to use this method and then implement our own \`forEach\` method.

      Example:
    `,
      codee6: `
      let fruits = ["apple", "banana", "cherry"];

      fruits.forEach(function(fruit, index, array) {
          console.log(fruit); // Element
          console.log(index); // Index
          console.log(array); // Array
      });
    `,
      subheadingg9: "Custom Implementation of forEach",
      contentt8: `
      Now we will implement the \`forEach\` method ourselves. We will create a custom function \`customForEach\` that will iterate over the array and call the callback function for each element.

      Example:
    `,
      codee7: `
      Array.prototype.customForEach = function(callback) {
          // 'this' refers to the array on which customForEach is called
          for (let i = 0; i < this.length; i++) {
              // Call the callback function with current element, index, and array
              callback(this[i], i, this);
          }
      };

      // Usage
      let fruits = ["apple", "banana", "cherry"];
      fruits.customForEach(function(fruit, index, array) {
          console.log(fruit); // Element
          console.log(index); // Index
          console.log(array); // Array
      });
    `,
      contentt9: `
      Explanation:<br><br>
      1. Function Definition: We define the \`Array.prototype.customForEach\` function which can be inherited by all arrays.
      <br><br>2. Iteration: We iterate over the array using a \`for\` loop.
      <br><br>3. Callback Execution: We call the callback function on each iteration, where:
      <br><br>   - \`this[i]\` refers to the current element.
         <br><br>- \`i\` refers to the current index.
        <br><br> - \`this\` refers to the entire array.
      <br><br><br>Example:
    `,
      codee8: `
      Array.prototype.customForEach = function(callback) {
          for (let i = 0; i < this.length; i++) {
              callback(this[i], i, this);
          }
      };

      let numbers = [1, 2, 3, 4, 5];

      numbers.customForEach(function(number, index, array) {
          console.log("Element: " + number);  // prints each element
          console.log("Index: " + index);     // prints each index
          console.log(array);                 // prints the whole array
      });
    `,
      contenttx: `
      This way we can create our own \`forEach\` method that works just like the built-in \`forEach\` method.
    `,
      subheadinggx: "Asynchronous Callback",
      contenttxi: `
      An asynchronous callback is one that is called after some delay or after an asynchronous operation completes.

      Example:
    `,
      codee9: `
      function getData(dataID) {
          setTimeout(function() {
              console.log("Data", dataID);
          }, 2000);
      }

      getData(1); // Output after 2 seconds: Data 1

      getData(1);
      getData(2);
      getData(3);
    `,
      contenttxii: `
      // Expected Output:<br><br>
      // After 2 seconds: Data 1<br><br>
      // After 2 seconds: Data 2<br><br>
      // After 2 seconds: Data 3<br><br>

      <br><br><br>
      In this example, 1, 2, and 3 should print after 2 seconds, but this won't happen because all three setTimeout functions are scheduled together and execute simultaneously after 2 seconds.
    `,
      subheadinggxii: "Callback Hell",
      contenttxiii: `
      Callback hell occurs when you have to chain multiple asynchronous operations one after another, making the code complicated and hard to read.

      Example of Callback Hell:
    `,
      codeex: `
      function getData(dataID, getNextData) {
          setTimeout(function() {
              console.log("Data", dataID);
              if (getNextData) {
                  getNextData();
              }
          }, 2000);
      }

      getData(1, () => {
          getData(2, () => {
              getData(3, () => {
                  // And so on...
              });
          });
      });
    `,
      contenttxiv: `
      Such code is called callback hell because it becomes very nested and complex.
    `,
      subheadinggxiv: "Proper Way of Using Callback Functions",
      contenttxv: `
      The proper way to use callback functions is to handle asynchronous operations in a way that keeps the code readable and maintainable.

      Example:
    `,
      codeexii: `
      function getData(dataID, callback) {
          setTimeout(function() {
              console.log("Data", dataID);
              if (callback) {
                  callback();
              }
          }, 2000);
      }

      getData(1, function() {
          getData(2, function() {
              getData(3, function() {
                  // More operations if needed
              });
          });
      });
    `,
      contentt32: `<br><br>
      Alternatively, using promises and async/await in modern JavaScript is another proper way that avoids callback hell.
    `,
    },
  },
  {
    topic: "Promise In JavaScript",
    subcontent: {
      subheadingg1: "Introduction to Promises",
      contentt1: `A Promise is an object that represents the result of an asynchronous operation. Its advantage is that you can write asynchronous code in a synchronous manner. Promises have three states: pending, fulfilled (resolved), and rejected.

    <br><br><br>Promise States:
    <br><br>1. Pending: Initial state, neither fulfilled nor rejected.
    <br><br>2. Fulfilled (Resolved): Operation completed successfully.
    <br><br>3. Rejected: Operation failed.<br><br>`,
      subheadingg2: "Promise Handlers",
      contentt2: `Inside a Promise, there are two handlers (resolve, reject), both of which are functions:

    <br><br><br>• Resolve Handler: This handler is the function used to fulfill or complete the promise. In this handler, we specify that the promise has been successfully completed and what the result is. Normally, in the resolve handler, we perform actions that represent success.
    <br><br>Syntax:
    resolve("Write anything you want to send to the receiver such as Data fetched successfully!");

    <br><br>• Reject Handler: This handler is the function used to reject the promise. In this handler, we specify why the promise failed and what the error is. When an error or exception occurs, the reject handler is called. We can specify error handling or alternative actions here.
    <br><br>Example:
    reject("Write anything you want to send to the receiver such as Error fetching data!");

    subheading3: Creating a Promise
    Example of creating a promise:`,
      codee1: `
    var myPromise = new Promise(function(resolve, reject) {
        // Asynchronous operation (like fetching data from an API)

        // Assume data fetched successfully
        var operationSuccessful = true;

        if (operationSuccessful) {
            // Resolve the promise with success message
            resolve("Data fetched successfully!");
        } else {
            // Reject the promise with error message
            reject("Error fetching data!");
        }
    });
    console.log(myPromise);`,
      contentt3: `
    Output: (You can see this output in your browser console)
    Promise {<fulfilled>: 'Data fetched successfully!'}
    [[Prototype]]: Promise
    [[PromiseState]]: fulfilled
    [[PromiseResult]]: Data fetched successfully!<br><br>`,
      subheadingg3: "Creating a Promise Function",
      contentt4: `Generally, we get promises through some API, but we can also create promises ourselves to clarify the concept. A Promise has two handlers: resolve and reject.

    Example:`,
      codee2: `
    function getData(dataID) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (dataID) {
                    console.log("Data " + dataID);
                    resolve("success");
                } else {
                    reject("You didn't pass the data ID");
                }
            }, 2000);
        });
    }`,
      contentt5: `This function returns a promise that resolves or rejects after 2 seconds.<br><br>`,
      subheadingg4: "Handling Promises",
      contentt6: `To handle promises, we use the .then() and .catch() methods:

    <br><br>1. promise.then():
    <br><br>The .then() method is called or executed only when the promise is successfully resolved (i.e., the resolve handler within the promise has been called); otherwise, whatever you write in the .then() method remains just code.
    When the promise is resolved, the .then() method's handler is called. In this handler, we specify what action to take when the promise is correctly completed.
    The .then() method also receives a resolved value, which is the value passed in the Promise's resolve handler. We can handle this value inside the .then() method.

    <br><br>2. promise.catch():
    <br><br>The .catch() method is called or executed only when the promise is successfully rejected (i.e., the reject handler within the promise has been called); otherwise, whatever you write in the .catch() method remains just code.
    When the promise is rejected, the .catch() method's handler is called. In this handler, we specify what action to take if the promise is rejected, such as error handling or alternative actions.
    The .catch() method also receives an error value, which is the error message passed in the Promise's reject handler. We can handle this value inside the .catch() method.

    Example:`,
      codee4: `
    let result = getData(123);
    result.then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log("Rejected", err);
    });
    `,
      contentt7: `
    In this example, if getData(123) is successfully resolved, the .then() block will execute. If rejected, the .catch() block will execute.<br><br>`,
      subheadingg5: "Promise Chaining",
      contentt8: `Promise chaining means performing multiple asynchronous operations in sequence. Each .then() block returns the next promise.

    Example:`,
      codee5: `
    function asyncFun1(dataID) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(dataID);
                resolve("success");
            }, 2000);
        });
    }
    function asyncFun2(dataID) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(dataID);
                resolve("success");
            }, 2000);
        });
    }

    // Using Promise Chaining
    asyncFun1(1).then((res) => {
        console.log("Fetched 1");
        return asyncFun2(2);
    }).then((res) => {
        console.log("Fetched 2");
    }).then(() => {
        return getData(3);
    }).then((res) => {
        console.log("Fetched 3");
    });
    `,
      contentt9: `
    In this example, asyncFun1(1) will execute first, followed by asyncFun2(2) and then getData(3) sequentially.<br><br>`,
      subheadingg6: "Callback Hell Example",
      contenttx: `Promises are used to avoid callback hell. Here's an example of callback hell:

    `,
      codee6: `
    function getData(dataID, getNextData) {
        setTimeout(function() {
            console.log("Data", dataID);
            if (getNextData) {
                getNextData();
            }
        }, 2000);
    }

    getData(1, () => {
        getData(2, () => {
            getData(3);
        });
    });
    `,
      subheadingg7: "Replacing with Promises",
      contentxi: `This can be replaced with promise chaining:

    `,
      codee7: `
    function getData(dataID) {
        return new Promise((resolve) => {
            setTimeout(function() {
                console.log("Data", dataID);
                resolve("success");
            }, 2000);
        });
    }

    getData(1).then((res) => {
        console.log("Fetched 1");
        return getData(2);
    }).then((res) => {
        console.log("Fetched 2");
        return getData(3);
    }).then((res) => {
        console.log("Fetched 3");
    });
    `,
      contentxiii: `
    By using promises in this way, we can make our code more readable and maintainable, and avoid callback hell.<br><br>`,
    },
  },
  {
    topic: "Fetch API And Async/Await ",
    subcontent: {
      subheadingg: `XMLHttpRequest`,
      contenti: `When you visit a website and want to fetch some data, such as from an API, you can use XMLHttpRequest (XHR). This allows us to fetch data asynchronously, meaning without reloading the page. <br><br>However, using XMLHttpRequest can be a bit complex in terms of syntax and error handling can also be a bit difficult.<br><br>
    Example:`,
      code: `var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/data', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error('XHR request failed with status:', xhr.status);
      }
    }
  };
  xhr.send();`,
      content: `<b>var xhr = new XMLHttpRequest();</b><br><br>
    This line creates an XMLHttpRequest object and stores it in the 'xhr' variable.<br><br><br>
    <b>xhr.open('GET', 'https://api.example.com/data', true);</b><br><br>
    This line configures the XMLHttpRequest object. Using the \`open()\` method, we need to specify the type of request (GET, POST, etc.), the URL to which the request is sent, and whether the request is asynchronous.<br><br><br>
    <b>xhr.onreadystatechange = function() {</b><br><br>
    This line sets an event handler function that is called when the state of the XMLHttpRequest changes.<br><br><br>
    <b>if (xhr.readyState === XMLHttpRequest.DONE) {</b><br><br>
    This line checks the current state. If the state of XMLHttpRequest is \`XMLHttpRequest.DONE\`, this condition is true, meaning the request is complete.<br><br><br>
    <b>if (xhr.status === 200) {</b><br><br>
    This line checks the HTTP status code. If the status code is 200, this condition is true, meaning the request was successful.<br><br><br>
    <b>var data = JSON.parse(xhr.responseText);</b><br><br>
    This line parses the response from the server into JSON format and stores it in the \`data\` variable.<br><br><br>
    <b>console.log(data);</b><br><br>
    The parsed JSON data is printed to the console.<br><br><br>
    <b>} else {</b><br><br>
    If the status code is not 200, this condition is true, meaning there is an error with the request.<br><br><br>
    <b>console.error('XHR request failed with status:', xhr.status);</b><br><br>
    The error is printed to the console.<br><br><br>
    <b>}<br>
  }<br>
};</b><br><br>
    End of the event handler function.<br><br><br>
    <b>xhr.send();</b><br><br>
    This line sends the actual request to the server.<br><br>`,
      subheadinggi: `fetchAPI`,
      contenttiii: `Fetch API is also a way to fetch data, but it is more modern and easier than XMLHttpRequest. It allows us to use Promises to fetch data, which makes the code cleaner and more readable.<br><br>
    Example:`,
      codeeii: `fetch('https://api.example.com/data')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Fetch error:', error);
});`,
      contentt4: `<b>fetch('https://api.example.com/data')</b><br><br>
    This line sends a network request through the \`fetch()\` function. The URL \`https://api.example.com/data\` is where we want to fetch data from.<br><br><br>
    <b>.then(response => {</b><br><br>
    This line handles a Promise. When the server response is received, the \`.then()\` method handles that response. The \`response\` parameter contains the server's response.<br><br><br>
    <b>if (!response.ok) {</b><br><br>
    throw new Error('Network response was not ok');
    This line checks whether the server response is valid or not. If the response status code is not between 200-299 (i.e., if the response is not 'ok'), an error is thrown.<br><br><br>
    <b>throw new Error('Network response was not ok');</b><br><br>
    An error is thrown if the response is not 'ok'.<br><br><br>
    <b>}<br>
    return response.json(); <br>
    })</b><br><br>
    This line parses the server response into JSON format. If the response is valid, the JSON data is passed to the next \`.then()\` block.<br><br><br>
    <b>then(data => {</b><br><br>
    This line handles another Promise. When JSON data is received, the \`.then()\` method handles that data. The \`data\` parameter contains the JSON data.<br><br><br>
    <b>console.log(data);<br>
  })</b><br><br>
    The JSON data is printed to the console.<br><br><br>
    <b>.catch(error => {</b><br><br>
    This line handles any errors that occur at any point in the Promise chain. The \`error\` parameter contains the error object.<br><br><br>
    <b>console.error('Fetch error:', error);<br>
  });</b><br><br>
    The error is printed to the console.<br><br>`,
      subheadingg3: `asyncAwait`,
      contentt5: `Async/Await is a JavaScript feature that makes it easier to write and read asynchronous code. The async keyword makes a function an async function, in which we can use the Await keyword to make the code execute line by line, which makes it feel synchronous.<br><br><br>
    Example:`,
      codee3: `async function fetchData() {
try {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error('Fetch error:', error);
}
}
fetchData();`,
      contenttivi: `<b>async function fetchData() {</b><br><br>
    This line defines an async function named \`fetchData\`. Inside an async function, we can use the Await keyword.<br><br><br>
    <b>try {</b><br><br>
    This line starts a try block. Inside the try block, we write code that will execute, and if any errors occur, we will catch them.<br><br><br>
    <b>const response = await fetch('https://api.example.com/data');</b><br><br>
    This line sends a network request through the \`fetch()\` function. The Await keyword makes us wait until the response is complete. After the response is complete, the \`response\` variable stores the response.<br><br><br>
    <b>if (!response.ok) {</b><br><br>
    This line checks whether the response is valid or not. If the response status code is not between 200-299 (i.e., if the response is not 'ok'), an error is thrown.<br><br><br>
    <b>throw new Error('Network response was not ok');</b><br><br>
    An error is thrown if the response is not 'ok'.<br><br><br>
    <b>}<br>
    const data = await response.json();</b><br><br>
    If the response is valid, we parse the JSON data. The Await keyword makes us wait until the JSON parsing is complete. Then, the parsed JSON data is stored in the \`data\` variable.<br><br><br>
    <b>console.log(data)</b><br><br>
    The JSON data is printed to the console.<br><br><br>
    <b>} catch (error) {</b><br><br>
    If any error occurs in the try block, it is caught. Here, the \`error\` variable contains the error object.<br><br><br>
    <b>console.error('Fetch error:', error);<br>
  });</b><br><br>
    The error is printed to the console.<br><br>
    <b>fetchData();</b><br>
    The function is called. This line executes the function and runs the code.<br><br>
    In this way, the entire code is used to fetch data, but it uses Async/Await instead of .then() and .catch().`,
    },
  },
];

window.twothree = twothree;
