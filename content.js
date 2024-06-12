const twothree = [
  {
    topic: "Introduction to JavaScript",
    subcontent: {
      subheading: "What is Javascript?",
      content: `
        1. JavaScript, web development ke liye essential programming language hai, jo websites ko interactive banata hai.</br>
        2. JavaScript "JS" ke naam se bhi jaana jaata hai, aur ye primarily user ke browser mein run hota hai, making it fast and efficient.</br>
        3. Isse animations, dynamic content, forms validation, aur cookies handling jaise features add kiya ja sakta hai, enhancing user experience.</br>
        4. JavaScript ki popularity ka reason hai uski versatility aur widespread support across all modern web browsers.</br>
        5. User-friendly interface banane ke liye, JavaScript ka istemal karte hue, websites ko dynamic aur engaging banaya ja sakta hai.</br>
        </br>
        What is Interactive?</br>
        Javascript se hum websites ko interactive banate hai.<br><br>
        Interactive ka matlab hota hai jab koi user kisi system ya application ke saath communicate karta hai aur us system ya application uske actions ka response deta hai. Jab aap kisi website par kuch click karte hain, kuch type karte hain, ya kisi button ko press karte hain aur website uske according react karti hai, tab woh website interactive kehlati hai. </br>
        Or ye sab hum javascript se karte hai. 
        `,
      subheading2: "History of Javascript?",
      content2: `
        JavaScript (JS) ki history web development ke liye bohot important hai. Yeh Netscape Communications Corporation ke engineer Brendan Eich ne 1995 mein banaya tha. Initially, iska naam Mocha tha, phir LiveScript aur baad mein JavaScript ho gaya.</br></br>

        JavaScript initially Netscape Navigator web browser ke liye develop kiya gaya tha. Lekin jaldi hi, Microsoft ne bhi iska support Internet Explorer mein shuru kiya. Isse, web developers ko ek common language mil gaya jisse wo dynamic web pages bana sake.</br></br>

        2009 mein, Google ne V8 JavaScript engine launch kiya, jo Chrome browser ke saath aaya. Ye engine JavaScript ko bahut tezi se run karne mein madad karta hai.</br></br>

        2015 mein, javascript me ek or important element add huha jo ki ECMAScript 2015 (ya ES6) ke roop mein ek naya version tha, jismein kai naye features aur improvements shaamil the, jaise ki let aur const 
        keywords, arrow functions, template literals, aur modules.</br></br>

        Aaj, JavaScript ek dominant programming language hai jo web development ke sabhi aspects ko cover karta hai. Iska istemal client-side scripting ke alawa server-side scripting mein bhi hota hai, jaise ki Node.js ke through. JavaScript ka ek bahut bada contribution web ke evolution mein raha hai, aur yeh aaj bhi ek one of the most widely used languages hai.</br>
      `,
      subheading3: "What is IP address?",
      content3: `
        IP address:</br>
        IP address (Internet Protocol address) ek unique numerical label hota hai jo har device ko identify karne ke liye use hota hai internet par. Har connected device, jaise ki computers, smartphones, tablets, aur servers, ko ek unique IP address assign kiya jata hai taaki wo internet par communicate kar sakein.</br></br>

        IP address, network communication ke liye bahut important hai. Jab aap kisi website ka URL enter karte hain apne web browser mein, browser DNS (Domain Name System) server se request karta hai domain name ke corresponding IP address ke liye. Phir DNS server us IP address ko browser ko provide karta hai aur browser us IP address ka use karta hai server tak pahunchne ke liye.</br></br>

        IP address do prakar ke hote hain:</br></br>

        IPv4 (Internet Protocol version 4):</br>
        IPv4 address 32-bit ka hota hai aur generally four decimal numbers (0-255) se separated by dots ke form mein hota hai, jaise ki 192.168.0.1.</br></br>

        IPv6 (Internet Protocol version 6):</br>
        IPv6 address 128-bit ka hota hai, jo IPv4 ke addresses ki scarcity ko address karne ke liye introduce kiya gaya hai.</br>
        IPv6 addresses hexadecimal digits (0-9 aur A-F) se separated by colons ke form mein hote hain, jaise ki 2001:0db8:85a3:0000:0000:8a2e:0370:7334. </br> 
      `,
      subheading4: "What is Data Packets?",
      content4: `
        Data packets yani (small units of data) hote hain jo data ko transmit karne ke liye use kiye jaate hain computer networks mein. Jab bhi data ko internet ya kisi local network mein send kiya jaata hai, wo data packets mein divide kiya jaata hai.</br></br>

        Har ek data packet mein kuch information hoti hai, jaise:</br></br>

        1. Source aur Destination Addresses: Sender aur receiver ke addresses jo communication ka endpoint bataate hain.</br>
           
        2. Data: Actual information ya message jo transmit kiya ja raha hai.</br>
           
        3. Packet Number: Har packet ko unique identifier diya jata hai taaki receiver unhe sequence mein arrange kar sake.</br>

        4. Header aur Footer Information: Additional information jaise ki error checking codes aur routing information.</br></br>

        Jab data packets transmit hote hain, routers aur other network devices unhe sahi destination tak guide karte hain. Receiver ke pass jab packets pahunchte hain, unhe assemble kiya jaata hai takki original data ko restore kiya ja sake. Data packets ki yeh technique communication mein reliability aur efficiency ko improve karti hai.
      `,
      subheading5: "How Internet Work?",
      image: "images/diagram.png",
      content5: `
      </br>
        1. URL Enter:</br>
           - Jab User apne browser mein kisi website ka URL enter karta hai, jaise ki "www.google.com".</br></br>

        2. DNS Lookup:</br>
           - Browser, URL mein diye gaye domain name ko IP address mein convert karne ke liye DNS (Domain Name System) server ko call karta hai.</br>
           - DNS server domain name ke corresponding IP address ko return karta hai.</br>
        Browser us IP address ka use karta hai server tak pahunchne ke liye. Server aapke browser se IP address ke through connected hota hai. Jab aapka request server tak pahunchta hai, to server aapke browser ko webpage ya requested content send karta hai.</br></br>

        3. Establishing Connection:</br>
           - Browser, IP address ke through server se connection establish karta hai.</br>
           Jab aap browser mein kisi website ka URL enter karte hain, tab browser HTTP (ya HTTPS) request generate karta hai. Is request mein server ko inform kiya jata hai ki user ka request aaya hai.</br></br>

        4. Server Response:</br>
           - Jab server user ke request ko receive karta hai, to uska server appropriate response generate karta hai. Response mein web page ka HTML code, saath mein CSS, JavaScript, aur other resources bhi hoti hain.</br></br>

        5. Data Transfer:</br>
           - Jab server response ko generate kar leta hai, usse multiple data packets mein divide karke user ke browser tak transmit kiya jata hai. Routers aur other network devices data packets ko sahi destination tak guide karte hain, taaki wo user ke device tak pahunch sakein.</br></br>

        6. Rendering Web Page:</br>
           Browser HTML code ko parse karke web page ko render karta hai. Iske baad, CSS styles apply kiye jaate hain, jisse webpage ka design aur appearance taiyar hota hai. Uske baad JavaScript code execute hota hai dynamic content aur functionality ke liye.</br></br>

        7. Displaying Content:</br>
           - Web page ka final version user ke device par display hota hai.
           - User web page ke content ko interact karke browse karta hai.</br>
      `,
      subheading6: "Javascript Versions?",
      content6: `
        JavaScript ke kai versions develop huye hain jaise ki:</br>

        1. JavaScript (Netscape): Original version jo Netscape Navigator browser ke saath launch hua tha 1995 mein.</br></br>

        2. JScript (Microsoft): Microsoft Internet Explorer browser ke liye ek implementation tha. Yeh JavaScript ke dialect ke saath compatible tha.</br></br>

        3. ECMAScript (ES1): ECMAScript ek standardized version of JavaScript hai jo ECMA International dwara maintain kiya jata hai. ES1, JavaScript ka pahla standardized version tha jo 1997 mein release hua.</br></br>

        4. ECMAScript 2 (ES2): 1998 mein release hua, ismein minor corrections aur amendments kiye gaye.</br></br>

        5. ECMAScript 3 (ES3): 1999 mein release hua, ismein kai improvements aur new features jaise ki regular expressions, try/catch exception handling, aur better error handling shaamil the.</br></br>

        6. ECMAScript 4 (ES4): Planned version tha jo kuch new features aur major changes laane ke liye propose kiya gaya tha, lekin eventually ise discard kiya gaya aur focus ES3 ke enhancements par kiya gaya.</br></br>
        
        7. ECMAScript 5 (ES5): 2009 mein release hua, ismein ECMAScript ka major rewrite aur modernization hua. Ismein strict mode, JSON support, aur Array methods jaise features shaamil the.</br></br>
        
        8. ECMAScript 6 (ES6 / ECMAScript 2015): 2015 mein release hua, ismein kai naye features aur improvements jaise ki let aur const keywords, arrow functions, template literals, aur classes shaamil the.</br></br>
        
        9. ECMAScript 2016 (ES7): 2016 mein release hua, ismein kuch minor updates aur features shaamil the jaise ki Array.includes() method.</br></br>
        
        10. ECMAScript 2017 (ES8): 2017 mein release hua, ismein async functions, Object.values/Object.entries methods, aur SharedArrayBuffer object jaise features shaamil the.</br></br>
        
        11. ECMAScript 2018 (ES9): 2018 mein release hua, ismein rest/spread operators, asynchronous iterators, aur Promise.prototype.finally() method jaise features shaamil the.</br></br>
        12. ECMAScript 2019 (ES10): 2019 mein release hua, ismein Array.prototype.flat() aur Array.prototype.flatMap() methods, Object.fromEntries() method, aur optional catch binding jaise features shaamil the.</br></br>
        13. ECMAScript 2020 (ES11): 2020 mein release hua, ismein nullish coalescing operator (??) aur optional chaining operator (?.) jaise features shaamil the.</br></br>
        Har version mein JavaScript language mein improvements, optimizations, aur new features introduce kiye gaye hain, jo developers ko better code likhne aur maintain karne mein madad karte hain.</br>
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
      subheading: `All About Varibales`,
      content1: `JavaScript mein teen tarah ke variables hote hain: var, let, and const.<br><br><br>
<b>Basic definition of variable:</b !important> Variable wo hota hai jiski value change ki jasakti hai even after assigning it. var or let keyword ka istemal karte hue hum variables declare karte hain.<br><br>
<b>Basic definition of constant:</b !important> Constant wo hota hai jiski value change nahi ki jasakti hai after assigning it. Const keyword ka istemal karke hum const declare and assign karte hain usi waqt kiu use baad me assign nahi kar sakte.<br><br><br>
Varibale Declaration:<br><br>
`,
      code: `
var a = 10;
var a = 12;  //Output: No error
a = 14;

let b = 10;
b = 12;
let b = 12;  //Output: SyntaxError: Identifier 'b' has already been declared

const pi =3.147; 
    `,
      content2: `
      <br><br>
  <h3>Hoisting in Javascript:</h3 !important><br><br>
Hoisting ek JavaScript concept hai jismein variables aur functions ke declarations ko code ke top par move kiya jaata hai, yani ki unka memory space allocate kiya jaata hai, lekin unka value assign nahi hota.<br><br><br>

(Concept: Jab hum ek variable ko declare karte hain lekin usse koi value assign nahi karte, tab JavaScript us variable ko undefined value assign karta hai by default)<br><br><br>

Isliye, jab aap ye code likhte hain:
    `,
      code2: `
console.log(a);
var a = 12;
output: undefined.  //When no value is assigned to the variable then the value of the variable is undefined.
`,
      content3: `JavaScript actually ise is tarah se interpret karta hai:`,
      code3: `
var a; // Declaration
console.log(a);
a = 12; // Initialization.
      `,
      content4: `
      Aur isiliye console mein "undefined" print hota hai. Ismein koi error nahi hota, kyunki variable a ka declaration hoisting ke karan upar move ho jaata hai, lekin value assignment ke time tak uska value undefined hota hai.<br><br>
<br><br>
<b>undefined</b !important> - Jis cheez ka existance hai but uska value nahi pata hai wo undefined huha.<br><br>
<b>not-defined</b !imortant> - Jis cheez ka existance hi nahi hai use wo not-defined hota hai.<br><br>
<b>Null-</b !important> ek explicit value hai jo ek variable ko assign kiya jaata hai jab usmein koi value nahi hai.<br><br>
      `,
      subheading2: `Variable Scopes:`,
      content5: `
<b>Global Scope:</b !important> Global variables wo hote hain jo program ke sabhi parts mein access karne ke liye available hote hain.<br><br>
<b>Function Scope:</b> Function ke andar declare kiye gaye variables function ke bahar access nahi kar sakte.<br><br>`,
      codee: `
function abcd(){
	for(var i=0; i<12; i++){
		console.log(i);
	}	
	console.log(i);
}
abcd();
//output:	1 2 3 4 5 6 7 8 9 10 11 12
`,
      contentt: `
<br><br>var function scoped hota hai: var variable apne parent function me kahi bhi istemal kiya jasakta hai, isiliye wo for loop ke bahar bhi chala <br><br>
Means var varibable ek function ke andar kahi bhi use kiya jaskta hai apne curly braces ke bahar bhi{ }. <br><br>
Example:<br><br>
      `,
      content6: `
      <b>Block or Braces Scoped:</b>	
let and const braces scoped hota hai -- let and const varibale apne braces ke bahar nahi chalega.<br><br> Agar hum upar var ko let se replace karde to variable braces ke bahar yani for loop ke bahar nahi chalega.<br><br>
Means let and const varibable ek shirf curly braces ke andar hi use kiye sakte hai uske bahar nahi.<br><br>
Example:<br><br>
`,
      codee2: `
function abcd(){
	for(let i=0; i<12; i++){
		console.log(i);
	}	
	console.log(i);
}
abcd();
//ReferenceError: i is not definedDifference betweeb Null and undefined:
`,
      content7: `
Null ek JavaScript value hai jo explicitly assigned ki jaati hai ek variable ko. Ye value signify karta hai ki variable mein koi value nahi hai, ya phir variable ki value intentionally absent hai.<br><br>
<br><br>
var keyword ke saath declare ki gayi variables adds itself to the window object that is bad thing because it exposes variable data and that's why let aur const keywords ka istemal prefer kiya jaata hai.<br><br><br>
let, const doesn't adds itself to the window object.<br><br>
(JavaScript mein, var keyword ke saath declare ki gayi variables automatically global object window ke properties ban jaati hain. Iska mtlb ye hota hai ki agar aap koi variable var ke saath declare karte hain, toh wo variable global namespace mein expose ho jaata hai aur window object ke ek property ban jaata hai)<br><br><br>
Yeh ek issue create kar sakta hai security aur debugging mein, kyunki kuchh unexpected results aayenge jab global variables ka accidental overwrite ho jaata hai. Isliye, modern JavaScript mein, let aur const keywords ka istemal prefer kiya jaata hai, kyunki ye automatically global object window mein nahi add hote hain.)<br><br><br>
Kuch key points null ke baare mein:<br><br><br>
<b>1.Explicit Assignment:</b>  Null ek explicit value hai jo ek variable ko assign kiya jata hai. Yeh signify karta hai ki developer ne variable ko kuch value dena nahi chahta hai.<br><br>
<b>2.Absence of Value:</b> Null ka use value ke absence ko represent karne ke liye hota hai. Jab koi variable ke liye koi value available nahi hoti hai, to null ka use kiya jaata hai.<br><br>
<b>3.Different from Undefined:</b> Null aur undefined mein farak hai. Undefined ka use hota hai jab ek variable ko declare kiya gaya hai lekin usmein koi value assign nahi ki gayi hai. Jabki null ka use hota hai jab variable ke paas koi value intentionally nahi hai.<br><br>
<b>4.Type of Null:</b> Null ek JavaScript data type hai, jo primitive data types mein se ek hai.<br><br><br>
For example:<br><br> `,
      codee3: `
var x = null;
console.log(x); // Output: null

      `,
      content8: `
Is example mein, variable x ko null assign kiya gaya hai, jisse yeh signify hota hai ki x variable mein koi value nahi hai.<br><br><br>
1.	Js me kai saare features hai par kuch features jo hum use karte hai wo features js language me nahi hai phir fir bhi hum ose use kar sakte hai.<br><br>
2.	Kyoki wo features window object ke features hote hai and JavaScript browser environment ke saath closely integrate hai, aur window object ek aise "box of features" hai jo browser ke dwara provide kiya jaata hai.<br><br>
3.	And js un features ko window object se le leta hai, jisse ki JavaScript code browser environment ke saath interact kar sake.<br><br>

      `,
    },
  },
  {
    topic: `Data Types in JavaScript`,
    subcontent: {
      subheading1: "Data Types in JavaScript",
      content1: `
      In JavaScript, there are several built-in data types, including:
    `,
      subheading2: "Primitive Data Types",
      content2: `
      These are the basic data types in JavaScript, and they include:<br><br>
      - Number: Represents numeric values, both integers and floating-point numbers.<br><br>
      - String: Represents textual data, enclosed within single (' ') or double (" ") quotes.<br><br>
      - Boolean: Represents a logical value, either true or false.<br><br>
      - Undefined: Represents a variable that has been declared but not assigned any value.<br><br>
      - Null: Represents the intentional absence of any object value.<br><br>
      - Symbol: Represents a unique identifier, introduced in ECMAScript 6 (ES6).<br><br>
    `,
      subheading3: "Non-primitive Data Types (Reference Types)",
      content3: `
      These are more complex data types that are comprised of collections of data or objects. They include:<br><br>
      - Object: Represents a collection of key-value pairs, also known as properties.<br><br>
      - Array: Represents a collection of elements, each identified by an index.<br><br>
      - Function: Represents a reusable block of code that can be invoked by name.<br><br>
      - Date: Represents a specific moment in time.<br><br>
      - RegExp: Represents a regular expression, used for pattern matching within strings.<br><br>
    `,
      subheading4: "Dynamic Typing",
      content4: `
      JavaScript ek dynamically-typed language hai, yani ki JavaScript mein variables kisi bhi data type ke values ko hold kar sakte hain, aur ek variable ka data type program ke execution ke dauraan badal sakta hai. 
    `,
      subheading5: "Primitive Values",
      content5: `
      Primitive values direct data ko represent karte hain aur unka copy karne par actual value copy hoti hai.
      Jab aap primitive value ko ek variable se dusre variable mein copy karte hain, to actual value copy hoti hai, aur dono variables alag memory locations ko refer karte hain.
    `,
      code1: `
      var a = 12;
      var b = a;
      console.log(b); // Output: 12
      b = b + 2;
      console.log(b); // Output: 14
    `,
      subheading6: "Reference Values",
      content6: `
      Reference values data ko indirectly represent karte hain, aur unka copy karne par reference (ya address) copy hota hai.
      <br><br>Jab aap ek reference value ko ek variable se dusre variable mein copy karte hain, to actual value nahi balki uska reference (ya address) copy hota hai, jisse dono variables ek hi object ya data ko point karte hain.
    `,
      code2: `
      var a = [12, 13];
      var b = a;
      b.pop();
      console.log(b); // Output: [12]
      console.log(a); // Output: [12]
    `,
      subheading7: "Notice!",
      content7: `
      Aisi koi bhi value jisko copy karne par real value copy nahi hoti, balki us value ka reference ya address copy hota hai use hum reference (address) type value kahte hain.<br><br> Aur jiska copy karne par real copy ho jaaye wo value primitive type value hoti hai.
    `,
      subheading8: `Examples
    `,
      subheading9: "1. Number",
      content9: `
      Represents numeric values, like integers or floating-point numbers.
    `,
      code3: `
      var x = 10; // Integer
      var y = 3.14; // Floating-point number
    `,
      subheading10: "2. String",
      content10: `
      Represents textual data, enclosed within single (' ') or double (" ") quotes.
    `,
      code4: `
      var message = "Hello, world!";
    `,
      subheading11: "3. Boolean",
      content11: `
      Represents a logical value, either true or false.
    `,
      code5: `
      var isRaining = true;
      var isSunny = false;
    `,
      subheading12: "4. Undefined",
      content12: `
      Represents a variable that has been declared but not assigned any value.
    `,
      code6: `
      var username; // Declared but not assigned
    `,
      subheading13: "5. Null",
      content13: `
      Represents the intentional absence of any object value.
    `,
      code7: `
      var product = null; // No product is selected
    `,
      subheading14: "6. Symbol",
      content14: `
      Represents a unique identifier, introduced in ECMAScript 6 (ES6).
    `,
      code8: `
      var id = Symbol("uniqueId");
    `,
      subheading15: "7. Object",
      content15: `
      Represents a collection of key-value pairs, also known as properties.
    `,
      code9: `
      var person = { name: "John", age: 30, city: "New York" };
    `,
      subheading16: "8. Array",
      content16: `
      Represents a collection of elements, each identified by an index.
    `,
      code10: `
      var numbers = [1, 2, 3, 4, 5];
    `,
      subheading17: "9. Function",
      content17: `
      Represents a reusable block of code that can be invoked by name.
    `,
      code11: `
      function greet(name) {
        console.log("Hello, " + name + "!");
      }
    `,
      subheading18: "10. Date",
      content18: `
      Represents a specific moment in time.
    `,
      code12: `
      var today = new Date();
    `,
      subheading19: "11. RegExp",
      content19: `
      Represents a regular expression, used for pattern matching within strings.
    `,
      code13: `
      var pattern = /hello/i; // Case-insensitive search for "hello"
    `,
      subheading20: "Conclusion",
      content20: `
      Understanding these data types and their usage is essential for writing effective JavaScript code.
    `,
    },
  },
  {
    topic: "Loops In JavaScript",
    subcontent: {
      subheading: "Loops In JavaScript",
      content: `JavaScript mein loops aur iterations ka use repetitive tasks ko perform karne ke liye hota hai. Yahaan hum commonly used loop statements jaise for, do...while, aur while statements ko discuss karenge.<br><br><br>
<h3>1. for Statement</h3 !important>
Syntax:<br><br>
for (initialization; condition; increment/decrement) {</b><br><br>
  // code block to be executed<br><br>
}<br><br>Example:<br><br>`,
      code: `
for (let i=0; i<5; i++) {</b><br><br>
  console.log(i);
    }`,
      content2: `<br><br>Working:</br>
1.	Initialization: let i = 0<br><br>
2.	Condition: i < 5<br><br>
3.	code Block: console.log("Iteration number: " + i)<br><br>
4.	Increment: i++<br><br>
•	Pehli baar loop execute hote waqt i ki value 0 hoti hai.<br><br>
•	Condition check hoti hai (0 < 5), jo true hai.<br><br>
•	code block execute hota hai, Iteration number: 0 print hota hai.<br><br>
•	Increment hota hai, i ki value 1 hoti hai.<br><br>
•	Yeh process tab tak repeat hota hai jab tak i < 5 condition false nahi hoti.<br><br>
`,
      content3: `<h3>2. do...while Statement</h3 !important>
Syntax:<br><br>
do {</b><br><br>
  // code block to be executed<br><br>
} while (condition);<br><br>
<br><br>
Example:<br><br>
`,
      code2: `
      let i = 0;
do {
  console.log("Iteration number: " + i);
  i++;
} while (i < 5);
`,
      content4: `Working:<br><br>
1.	Initialization: let i = 0<br><br>
2.	code Block: console.log("Iteration number: " + i) pehle execute hota hai.<br><br>
3.	Increment: i++<br><br>
4.	Condition: i < 5<br><br>
•	Pehli baar code block execute hota hai bina condition check kiye.<br><br>
•	Iteration number: 0 print hota hai.<br><br>
•	Increment hota hai, i ki value 1 hoti hai.<br><br>
•	Condition check hoti hai (1 < 5), jo true hai.<br><br>
•	Yeh process tab tak repeat hota hai jab tak i < 5 condition false nahi hoti.<br><br><br>
<h3>3. while Statement</h3 !important>
Syntax:<br><br>
while (condition) {</b><br><br>
  // code block to be executed<br><br>
}<br><br>
Example:<br><br>
`,
      code3: `let i = 0;
while (i < 5) {
  console.log("Iteration number: " + i);
  i++;
}
`,
      content5: `
Working:<br><br>
1.	Initialization: let i = 0<br><br>
2.	Condition: i < 5<br><br>
3.	code Block: console.log("Iteration number: " + i)<br><br>
4.	Increment: i++<br><br>
•	Pehli baar loop execute hote waqt i ki value 0 hoti hai.<br><br>
•	Condition check hoti hai (0 < 5), jo true hai.<br><br>
•	code block execute hota hai, Iteration number: 0 print hota hai.<br><br>
•	Increment hota hai, i ki value 1 hoti hai.<br><br>
•	Yeh process tab tak repeat hota hai jab tak i < 5 condition false nahi hota<br><br>
<br><br>
<br><br>
<h3>for...in Statement</h3 !important>
for...in statement ko use karke aap ek object ke properties ya ek array ke indices ko iterate kar sakte hain. Yeh loop object ke enumerable properties ke keys ko loop karta hai.<br><br>
<br><br>
Syntax:<br><br>
javascript<br><br>
for (variable in object) {</b><br><br>
  // code block to be executed<br><br>
}<br><br><br>

Example:
`,
      code4: `
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
`,
      content6: `Explanation:<br><br>
- key variable object ke keys ko represent karta hai.<br><br>
- Loopperson object ke har key ko iterate karta hai aur unki values ko print karta hai.<br><br><br>

Working:<br><br>
1. Loop person object ke har key ko iterate karta hai yani jitne keys hai utne baar loop chalega.<br><br>
2. key variable object ke current key ko represent karta hai.<br><br>
3. code block execute hota hai aur key ke corresponding value ko print karta hai.
<br><br><br>

<h3>for...of Statement</h3 !important>
for...of statement ko use karke aap iterable objects (arrays, strings, maps, sets, etc.) ke elements ko iterate karsakte hain.<br><br> Yeh loop iterable objects ke values ko directly loop karta hai.<br><br>
<br><br>
Syntax:<br><br>
for (variable of iterable) {</b><br><br>
// code block to be executed<br><br>
}<br><br><br>

Example:
`,
      code5: `
const arr = [10, 20, 30, 40, 50];

for (let value of arr) {
  console.log(value);
}
`,
      content7: `
      Explanation:<br><br>
- value variable array ke elements ko represent karta hai.<br><br>
- Loop arr array ke har element ko iterate karta hai aur unhe print karta hai.<br><br><br>
<h3>Working:</h3 !important>
1. Loop arr array ke har element ko iterate karta hai.<br><br>
2. value variable array ke current element ko represent karta hai.<br><br>
3. code block execute hota hai aur current value ko print karta hai.<br><br><br>

Summary of Differences<br><br><br>

1. for...in Statement:<br><br>
- Use to iterate over properties of an object or indices of an array.<br><br>
- Syntax: for (variable in object) { ... }<br><br>
- Example: Iterating over an object to get its properties.<br><br><br>

2. for...of Statement:<br><br>
- Use to iterate over values of an iterable object (like arrays, strings, maps, sets).<br><br>
- Syntax: for (variable of iterable) { ... }<br><br>
- Example: Iterating over an array to get its elements.<br><br>
<br><br>
In teeno loops (for, for...in, aur for...of) ka use karke aap apne JavaScript code mein different types of
iterations ko effectively handle kar sakte hain.<br><br>`,

      subheading2: `Break Statement`,
      content8: `break statement loop ko turant terminate kar deta ha<br><br>
Jab break statement execute hota hai, loop turant stop ho jata hai aur control loop ke baahar nikal kar next statement par shift ho jata hai.<br><br>
Syntax : break;<br><br>
Example: 
`,
      code6: `for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log("Iteration number: " + i);
}
`,
      content9: `Explanation:<br><br>
•	Loop i = 0 se start hota hai aur i < 10 tak chalta hai.<br><br>
•	Jab i ki value 5 hoti hai, break statement loop ko terminate kar deta hai.<br><br>
•	Output: Iteration 0 se 4 tak print hoti hai.<br><br>
`,
      subheading3: `continue Statement`,
      content10: `•	continue statement current iteration ko skip karke loop ke next iteration par jump kar jata hai. Jab continue statement execute hota hai, loop ka current ka code skip ho jata hai aur loop next iteration ke liye continue karta hai.<br><br>
Syntax : continue;<br><br><br>
Example: <br><br>
`,
      code7: `
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log("Iteration number: " + i);
}
`,
      content11: `
Explanation:<br><br>
•	Loop i = 0 se start hota hai aur i < 10 tak chalta hai.<br><br>
•	Jab i ki value 5 hoti hai, continue statement current iteration ko skip kar deta hai.<br><br>
•	Output: Iteration 0 se 4 aur 6 se 9 tak print hoti hai<br><br>
`,
      subheading4: `Labeled Statements`,
      content12: `•	Labeled statements ek identifier assign karne ka method hota hai kisi bhi statement ko, jo break aur continue statements ke saath use ho sakta hai. Yeh nested loops ko terminate ya skip karne ke liye useful hote hain.<br><br>
Syntax: label: statement.<br><br><br>
Example:<br><br>
`,
      code8: `
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log("i = " + i + ", j = " + j);
  }
}
`,
      content13: `
<h3>Explanation:</h3>
•	outerLoop label outer loop ko refer karta hai.<br><br>
•	Jab i === 1 aur j === 1 hota hai, break outerLoop; statement outer loop ko terminate kar deta hai.<br><br>
•	Output: 	<br><br>
i = 0, j = 0<br><br>
i = 0, j = 1<br><br>
i = 0, j = 2<br><br>
i = 1, j = 0<br><br>
In the End:<br><br>
•  break Statement:<br><br>
•	Loop ko turant terminate kar deta hai.<br><br>
•	Syntax: break;<br><br>
•	Example: for loop ko certain condition par terminate karna.<br><br>
<h3>• continue Statement:</h3>
•	Current iteration ko skip karke next iteration par jump karta hai.<br><br>
•	Syntax: continue;<br><br>
•	Example: for loop ke certain condition par current iteration ko skip karna.<br><br>
<h3>• Labeled Statements:</h3>
•	Statements ko label assign karne ke liye use hota hai, jo nested loops ko control karne mein madad karta hai.<br><br>
•	Syntax: label: statement<br><br>
•	Example: break aur continue statements ke saath labeled loops ka use.<br><br>
`,
    },
  },
  {
    topic: "Array In JavaScript",
    subcontent: {
      subheadingg1: "Array In JavaScript",
      contentt1: `
      JavaScript mein array ek ordered collection hoti hai jisme multiple values ko store kiya ja sakta hai. Javascript ke Arrays normal programming language se thodi alag hoti hai. JS me array ka use karte hue, hum ek hi variable ke andar alag-alag types ke data ko store kar sakte hain.
    `,
      codee1: `
      let arr = ["Hello", 1, 2, 3, true, false, "Enter any thing with proper synatx"];
      console.log(arr);
    `,
      outputt1: `
      Hello, 1, 2, 3, true, false, Enter any thing with proper synatx
    `,
      outputt2: `
      true
    `,
      contentt2: `
      Agar ye nahi samjh raha hai to thoda ruko ek dam normal hai nahi samjhna first time itna hard example. Lets start with simple.
      
      JavaScript mein array ek ordered collection hoti hai jisme multiple values ko store kiya ja sakta hai. Arrays ka use karte hue, hum ek hi variable ke andar alag-alag types ke data ko store kar sakte hain. Chaliye, arrays ko detail mein samjhte hain.
    `,
      subheadingg2: "Array Creation",
      contentt3: `
      Arrays ko create karne ke liye hum \`[ ]\` (square brackets) ka use karte hain. Array ko create karne ke kai tareeke hain:
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
      Array ke elements ko unke index ke through access kiya jata hai. Indexing 0 se start hoti hai.
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
      Array ke elements ko unke index ke through modify bhi kiya ja sakta hai, means unke current element ke value ko change karna ya delete karna.
    `,
      codee4: `
      let fruits = ["apple", "banana", "cherry"];

      // Modifying elements
      fruits[1] = "blueberry";

      console.log(fruits); // Output: ["apple", "blueberry", "cherry"]
    `,
      subheadingg5: "Array Methods",
      contentt6: `
      Arrays ke saath kaam karne ke liye JavaScript mein kai built-in methods hain. Kuch common methods hain:
    `,
      methods: [
        {
          methodName: "push()",
          description: "Array ke end mein new elements add karta hai.",
          code: `
          let fruits = ["apple", "banana"];
          fruits.push("cherry");
          console.log(fruits); // Output: ["apple", "banana", "cherry"]
        `,
        },
        {
          methodName: "pop()",
          description: "Array ke end se last element remove karta hai.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          fruits.pop();
          console.log(fruits); // Output: ["apple", "banana"]
        `,
        },
        {
          methodName: "shift()",
          description: "Array ke start se first element remove karta hai.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          fruits.shift();
          console.log(fruits); // Output: ["banana", "cherry"]
        `,
        },
        {
          methodName: "unshift()",
          description: "Array ke start mein new elements add karta hai.",
          code: `
          let fruits = ["banana", "cherry"];
          fruits.unshift("apple");
          console.log(fruits); // Output: ["apple", "banana", "cherry"]
        `,
        },
        {
          methodName: "length",
          description: "Array ki length return karta hai.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          console.log(fruits.length); // Output: 3
        `,
        },
        {
          methodName: "indexOf()",
          description: "Array mein kisi element ka index return karta hai.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          console.log(fruits.indexOf("banana")); // Output: 1
        `,
        },
        {
          methodName: "slice()",
          description:
            "Array ka ek naya shallow copy return karta hai, start aur end index ke beech.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          let newFruits = fruits.slice(1, 3);
          console.log(newFruits); // Output: ["banana", "cherry"]
        `,
        },
        {
          methodName: "splice()",
          description: "Array se elements ko remove aur/ya add karta hai.",
          code: `
          let fruits = ["apple", "banana", "cherry"];
          fruits.splice(1, 1, "blueberry");
          console.log(fruits); // Output: ["apple", "blueberry", "cherry"]
        `,
        },
      ],
      subheadingg6: "Iterating Over Arrays",
      contentt7: `
      Arrays ko iterate karne ke kai tareeke hain, jaise \`for\` loop, \`for...of\` loop, aur \`forEach\` method.
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
      \`for...of\` statement ko use karke aap iterable objects (arrays, strings, maps, sets, etc.) ke elements ko iterate kar sakte hain. Yeh loop iterable objects ke values ko directly loop karta hai.

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
      - \`value\` variable array ke elements ko represent karta hai.
      - Loop \`arr\` array ke har element ko iterate karta hai aur unhe print karta hai.

      Working:
      1. Loop \`arr\` array ke har element ko iterate karta hai.
      2. \`value\` variable array ke current element ko represent karta hai.
      3. Code block execute hota hai aur current \`value\` ko print karta hai.
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
      Arrays JavaScript mein bahut powerful aur flexible data structures hain jo ordered collection of elements ko store karne ke liye use hote hain. Array ke elements ko access, modify, aur manipulate karne ke kai built-in methods hain. Arrays ko effectively use karke aap apne JavaScript code ko aur powerful aur efficient bana sakte hain.
    `,
    },
  },
  {
    topic: "All About Object",
    subcontent: {
      subheadingg1: "All About Object",
      contentt1: `<h3>Object Creation</h3 !important><br><br>
      Object banane ka syntax \`{ }\` hota hai. Yes bas ye curly braces ko hi object bolte hai. <br><br>
      Object me hum variable and function bansakte hai but usko create karne ka tarika alaga hota hai.
    `,
      contentt2: `<h3>Object Keys and Values</h3 !important><br><br>
      Object ke andar jo variables hote hain unhe keys kaha jata hai. <br><br>Keys ke corresponding values ho sakte hain strings, numbers, booleans, arrays, objects, ya functions (jo methods kehlate hain)<br><br>
      Example:<br><br>
    {</b><br><br>
      keyname="stringvalue",<br><br>
      keyname2=9, //Numbers & Boolean values ko hum double quotes me nahi store karte "";<br><br>
      keyname3=true,<br><br>
    }.<br><br>
    `,
      contentt3: `<h3>Adding Methods</h3 !important><br><br>
      Js me functions ko hum keys ke ander assign karte hain. Aise functions ko hum methods kehte hain. <br><br>Methods ko hum normal function syntax ya arrow function syntax me define kar sakte hain.<br><br>
      Example:<br><br>keyname:function(){</b><br><br>
          console.log("This is method")<br><br>
      };<br><br>
    `,
      content4: `<h3>Accessing Properties and Methods</h3 !important><br><br>
      Object ke properties aur methods ko access karne ke liye dot notation (\`myObject.key1\`) ya bracket notation (\`myObject["key1"]\`) ka use hota hai.
      <br><br><br>
        <b>Example of Object with keys and methods:</b>
    `,
      code: `
      const person = {
        name: "John",
        age: 30,
        greet: function() {
          console.log("Hello, " + this.name);
        },
        updateAge(newAge) {
          this.age = newAge;
        }
      };

      // Accessing properties
      console.log(person.name); // Output: John
      console.log(person.age); // Output: 30

      // Calling methods
      person.greet(); // Output: Hello, John
      person.updateAge(31);
      console.log(person.age); // Output: 31
    `,
      contentt5: `
      Is example me:<br><br>

    \`name\` aur \`age\` keys hain.<br><br>
    \`greet\` aur \`updateAge\` methods hain jo \`person\` object ke andar define kiye gaye hain.<br><br><br>
Ise object-oriented programming (OOP) ka ek part bhi kaha ja sakta hai, jahan hum data aur functions ko encapsulate karke ek single unit me rakhte hain.
    `,
      contentt6: `
      JavaScript mein, object ek aisi entity hai jo properties (key-value pairs) aur methods (functions) ko store kar sakti hai. Objects real-world entities ko represent karte hain.
    `,
      code2: `
      var person = {
        name: "John",
        age: 30,
        greet: function() {
          console.log("Hello, " + this.name);
        }
      };

      console.log(person.name); // Output: John
      person.greet(); // Output: Hello, John
    `,
      subheadingg2: "Object Prototype",
      contentt7: `
      JavaScript mein har object ka ek prototype hota hai. Prototype bhi ek object hota hai jo baki sabhi objects ko properties aur methods inherit karne ki suvidha deta hai. JavaScript ke objects ko prototypal inheritance ka use karke properties aur methods inherit kar sakte hain. Prototype inheritance ka main fayda yeh hai ki aap code ko reusability aur organization ke liye use kar sakte hain.
    `,
      subheadingg3: "Example with Detailed Explanation",
      contenttt8: `
      1. Constructor Function:
    `,
      codee3: `
      function Person(name, age) {
        this.name = name;
        this.age = age;
      }
    `,
      contentt9: `
      Yahaan \`Person\` ek constructor function hai jo \`name\` aur \`age\` properties ko initialize karta hai. Constructor function ek template ki tarah kaam karta hai jisse naye objects banaye ja sakte hain.
    `,
      contentt10: `
      2. Adding Methods to Prototype:
    `,
      codee4: `
      Person.prototype.greet = function() {
        console.log("Hello, " + this.name);
      };
    `,
      contenttx: `
      Yahaan \`greet\` method \`Person\` ke prototype mein add kiya gaya hai. Iska matlab hai ki yeh method sabhi \`Person\` objects ke liye available hoga jo is constructor function se banaye gaye hain.
    `,
      contenttxi: `
      3. Creating Objects:
    `,
      codee5: `
      var john = new Person("John", 30);
      var jane = new Person("Jane", 25);
    `,
      contenttxii: `
      Yahaan \`john\` aur \`jane\` objects \`Person\` constructor function ka use karke banaye gaye hain. Yeh dono objects apne prototype se \`greet\` method inherit karte hain.
    `,
      contenttxiii: `
      4. Using the Inherited Method:
    `,
      codee6: `
      john.greet(); // Output: Hello, John
      jane.greet(); // Output: Hello, Jane
    `,
      contenttxiv: `
      Yahaan \`john\` aur \`jane\` objects apne prototype se inherited \`greet\` method ko call karte hain. \`greet\` method \`this.name\` ko use karta hai, jo ki respective object (\`john\` ya \`jane\`) ka \`name\` property hai.
    `,
      subheadingg4: "Extended Example with More Methods and Properties",
      contenttxv: `
      1. Constructor Function with Additional Methods:
    `,
      codee7: `
      function Person(name, age) {
        this.name = name;
        this.age = age;
      }

      Person.prototype.greet = function() {
        console.log("Hello, " + this.name);
      };

      Person.prototype.getAge = function() {
        console.log(this.name + " is " + this.age + " years old.");
      };
    `,
      contenttxvi: `
      Yahaan \`Person\` ke prototype mein \`greet\` ke saath-saath \`getAge\` method bhi add kiya gaya hai.
    `,
      contenttxvii: `
      2. Creating Objects and Using Methods:
    `,
      codee8: `
      var john = new Person("John", 30);
      var jane = new Person("Jane", 25);

      john.greet(); // Output: Hello, John
      jane.greet(); // Output: Hello, Jane

      john.getAge(); // Output: John is 30 years old.
      jane.getAge(); // Output: Jane is 25 years old.
    `,
      contentt14: `
      Yahaan \`john\` aur \`jane\` objects \`greet\` aur \`getAge\` methods ka use karte hain jo unhone apne prototype se inherit kiya hai.
    `,
      contentt15: `
      3. Adding Properties to Prototype:
    `,
      codee9: `
      Person.prototype.species = "Homo Sapiens";
    `,
      contentt16: `
      Yahaan \`species\` property \`Person\` ke prototype mein add ki gayi hai.
    `,
      contentt17: `
      4. Accessing Prototype Properties:
    `,
      codee9: `
      console.log(john.species); // Output: Homo Sapiens
      console.log(jane.species); // Output: Homo Sapiens
    `,
      contentt18: `
      Yahaan \`john\` aur \`jane\` objects \`species\` property ko access kar rahe hain jo unhone apne prototype se inherit kiya hai.
    `,
      subheadingg5: "Prototypal Inheritance",
      contentt19: `
      Prototypal inheritance ek process hai jismein ek object doosre object ke properties aur methods inherit karta hai. Isme prototype chain ka use hota hai.
    `,
      codee10: `
      var animal = {
        eats: true,
        walk: function() {
          console.log("Animal walks");
        }
      };

      var rabbit = {
        jumps: true
      };

      rabbit.__proto__ = animal; // rabbit inherits from animal

      console.log(rabbit.eats); // Output: true
      rabbit.walk(); // Output: Animal walks
    `,
      subheadingg6: "Summary",
      contentt20: `
      - Constructor Function: Template for creating objects.
      - Prototype: An object from which other objects inherit properties and methods.
      - Prototypal Inheritance: Allows objects to share properties and methods.
      - Example: Creating objects using constructor function and accessing prototype properties and methods.

      Is tarike se aap JavaScript mein object prototype aur prototypal inheritance ka use karke objects ko efficiently manage aur reuse kar sakte hain.
    `,
      subheadingg7: "Built-in Objects",
      contentt21: `
      JavaScript mein kuch built-in objects hote hain jo common functionalities provide karte hain. Inme kuch commonly used objects hain:<br><br>
      - Object<br><br>
      - Array<br><br>
      - String<br><br>
      - Number<br><br>
      - Boolean<br><br>
      - Date<br><br>
      - Math<br><br>
      - RegExp<br><br>
    `,
      subheadingg8: "typeof Operator",
      contentt22: `
      typeof operator ka use variable ya value ka data type check karne ke liye hota hai. Yeh ek string return karta hai jo data type ko represent karti hai.
    `,
      codee11: `
      console.log(typeof 123); // Output: number
      console.log(typeof "Hello"); // Output: string
      console.log(typeof true); // Output: boolean
      console.log(typeof {}); // Output: object
      console.log(typeof []); // Output: object (Arrays are also objects in JavaScript)
      console.log(typeof function(){}); // Output: function
      console.log(typeof undefined); // Output: undefined
      console.log(typeof null); // Output: object (This is a known quirk in JavaScript)
    `,
    },
  },
  {
    topic: "Array aur object destructuring",
    subcontent: {
      subheading: "Array aur object destructuring",
      content: `Array aur object destructuring JavaScript mein values ko arrays aur objects se extract karke unhe variables mein assign karne ka ek shorthanded method hai. Yeh feature code ko concise banata hai aur values ko easily access karne aur manipulate karne mein madad karta hai.<br><br><br>
      <b>Array Destructuring:</b><br><br>
Array destructuring mein hum ek array se values ko extract karke variables mein assign karte hain. Yeh kuch alag tariko se kiya ja sakta hai:<br><br><br>

 Basic Array Destructuring:
`,
      code: `
var a = [1, 2, 3];
var [a,b, c] = a; //a=1, b = 2, c = 3
console.log(b); // Output: 1
console.log(c); // Output: 2
`,
      content2: `<br><br><b>Values ko Skip Karna:</b>`,
      code2: `var a = [1, 2, 3];
var [b, , c] = a; // b = 1, c = 3
console.log(b); // Output: 1
console.log(c); // Output: 3
`,
      content3: `<br><br><b> Default Values:</b>`,
      code3: `
      var a = [1, 2];
var [b, c, d = 3] = a; // b = 1, c = 2, d = 3
console.log(b); // Output: 1
console.log(c); // Output: 2
console.log(d); // Output: 3
`,
      content4: `<br><br><b>Object Destructuring</b><br><br>
      Object destructuring mein hum ek object se properties ko extract karke variables mein assign karte hain. Yeh kuch alag tariko se kiya ja sakta hai:<br><br><br>

 <b>Basic Object Destructuring:</b>
`,
      code4: `var obj = { name: "Alice", age: 30 };
var { name, age } = obj; // name = "Alice", age = 30
console.log(name); // Output: "Alice"
console.log(age); // Output: 30
`,
      content5: `<br><br><b>
 Variables ko Rename Karna:
</b>`,
      code5: `
      var obj = { name: "Alice", age: 30 };
var { name: fullName, age: personAge } = obj; // fullName = "Alice", personAge = 30
console.log(fullName); // Output: "Alice"
console.log(personAge); // Output: 30
      `,
      content6: `<br><br><b>Default Values:</b>`,
      code6: `
      var obj = { name: "Alice" };
var { name, age = 25 } = obj; // name = "Alice", age = 25
console.log(name); // Output: "Alice"
console.log(age); // Output: 25
`,
    },
  },
  {
    topic: "Type Casting",
    subcontent: {
      subheading: "Type Casting",
      content: `Typecasting ka matlab hota hai ek data type ko doosre data type mein convert karna. JavaScript mein, typecasting do tarike se hota hai: implicit (automatic) aur explicit (manual).<br><br><br>
      <h3>Explicit Typecasting (Manual) or Type Conversion (Explicit Typecasting):</h3 !important>
      Developer khud data type ko convert karta hai using JavaScript functions.<br><br><br>
      Type conversion or Explicit Typecasting wo process hai jismein developer khud manually data type ko convert karta hai using built-in functions ya methods. Isko explicit typecasting bhi kaha jata hai.
      `,
      code: `
      var a = "123";
var b = Number(a); // String ko number mein convert karna
console.log(b); // Output: 123

var c = 456;
var d = String(c); // Number ko string mein convert karna
console.log(d); // Output: "456"
`,
      content2: `
      <br><br><h3>Implicit Typecasting (Automatic) or Coercion (Implicit Typecasting):</h3 !important>
JavaScript automatically data types ko convert kar deta hai jab zaroorat hoti hai<br><br><br>
Coercion or Implicit Typecasting wo process hai jismein JavaScript automatically (implicit) data type ko convert kar deta hai jab zaroorat hoti hai. JavaScript apne aap hi kuch operations ke dauran types ko badal deta hai.<br><br>
      `,
      code2: `
      var x = 5;
var y = "10";
var result = x + y; // Number ko string mein convert karke concatenate karta hai
console.log(result); // Output: "510"

var a = "5";
var b = 3;
var sum = a - b; // String ko number mein convert karke subtraction karta hai
console.log(sum); // Output: 2
`,
      content3: `<br><br><b>Examples of All Conversions Together: </b><br><br>`,
      code3: `
      // String to Number
var str = "456";
var num = Number(str);
console.log(num); // Output: 456

// Number to String
var num = 789;
var str = String(num);
console.log(str); // Output: "789"

// Boolean to Number
var bool = true;
var num = Number(bool);
console.log(num); // Output: 1

// Number to Boolean
var num = 0;
var bool = Boolean(num);
console.log(bool); // Output: false

// String to Integer
var str = "123abc";
var intNum = parseInt(str);
console.log(intNum); // Output: 123

// String to Float
var str = "123.45abc";
var floatNum = parseFloat(str);
console.log(floatNum); // Output: 123.45

      `,
    },
  },
  {
    topic: "Exception Handling",
    subcontent: {
      subheading: `Exception Handling in JavaScript`,
      content: `Exception handling JavaScript mein unexpected errors ko manage karne ka tarika hai. Yeh code ko execute karte waqt aayi hui errors ko handle karne ke liye try, catch, finally, aur throw statements ka use karta hai.<br><br><br>
      <b>throw Statement</b><br><br>
throw statement ka use kar ke aap custom errors ko generate kar sakte hain. Jab throw statement execute hota hai, to ek exception raise hoti hai aur program execution stop ho jata hai.<br><br><br>
<b>throw expression;</b>
`,
      code: `
      function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Error caught: " + error.message);
}
`,
      content2: `Explanation:<br><br>
•	Agar b ki value 0 hoti hai, to throw statement ek new Error object raise karta hai.<br><br>
•	try block ke andar function call kiya jata hai.<br><br>
•	catch block error ko catch karta hai aur error message ko print karta hai.<br><br>
<br><br><br>
<h3>try / catch / finally Statement</h3 !important><br><br>
try, catch, aur finally statements ka use kar ke aap error prone code ko handle kar sakte hain. Yeh statements allow karte hain ke error ko catch karke appropriate response diya jaye.<br><br>
syntax:<br><br>
try {</b><br><br>
  // code that may throw an error<br><br>
} catch (error) {</b><br><br>
  // code to handle the error<br><br>
} finally {</b><br><br>
  // code to be executed regardless of an error<br><br>
}<br><br>
<br><br><br>
JavaScript ek interpreted language hai jisme code line by line execute hota hai. Agar koi line me error hota hai, to uske baad ki lines execute nahi hoti. Isi situation ko handle karne ke liye hum try aur catch block ka use karte hain.<br><br><br>
<b>Without try and catch input:</b>
`,
      code2: `
console.log("hey");
console.log(hey);  // Yahaan error hoga kyunki "hey" defined nahi hai.
console.log("hey");
//Output:
//hey
//Uncaught ReferenceError: hey is not defined
`,
      content3: `<br><br>
Isme pehla console.log statement execute ho jata hai, lekin doosra statement me error hone ke karan tisra statement execute nahi hota<br><br><br>
<b>With try and catch input</b>
`,
      code3: `
console.log("hey");

try {
    console.log(hey);  // Yahaan error hone par catch block execute hoga.
} catch (err) {
    console.log(err);  // Error message print kiya jayega.
}

console.log("hey");
//Output:
//hey
//ReferenceError: hey is not defined
//Hey
`,
      content4: `
<br><br>Isme pehla console.log statement execute hota hai, phir try block me error hone ke karan catch block execute hota hai jo error message print karta hai. Uske baad ka console.log statement bhi execute hota hai.<br><br>
<b>Explanation:</b><br><br>
•	try block mein aisa code hota hai jo error throw kar sakta hai.<br><br>
•	catch block mein error ko handle karne ka code hota hai.<br><br>
•	finally block mein aisa code hota hai jo hamesha execute hota hai chahe error aaye ya nahi.<br><br><br>
<h3>Utilizing Error Objects</h3 !important><br><br>
Error objects detailed information provide karte hain error ke baare mein. Error objects ka use kar ke aap error ka type, message, aur stack trace ko access kar sakte hain.<br><br>
`,
      code4: `
      const error = newIError(message);
function customErrorHandling() {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("Name: " + error.name);
    console.log("Message: " + error.message);
    console.log("Stack: " + error.stack);
  }
}

customErrorHandling();

`,
      content5: `
<b>Explanation:</b><br><br>
•	throw new Error("Something went wrong!") ek new error throw karta hai.<br><br>
•	catch block error ko catch karta hai aur error object properties ko print karta hai.<br><br><br>
•	error.name error ka naam hota hai.<br><br>
•	error.message error ka message hota hai.<br><br>
•	error.stack stack trace provide karta hai jo error ke occurrence ko indicate karta hai.<br><br>
<br><br><br>
<h3>Summary of Exception Handling</h3 !imortant><br><br>
<b>1. throw Statement:</b>
•	Custom errors ko generate karta hai.<br><br>
•	Syntax: throw expression;<br><br>
•	Example: throw new Error("Division by zero is not allowed.");<br><br><br>
<b>2. try / catch / finally Statement:</b><br><br>
•	Errors ko handle karne ka tarika.<br><br>
•	Syntax:<br><br>
try {</b><br><br>
  // code that may throw an error<br><br>
} catch (error) {</b><br><br>
  // code to handle the error<br><br>
} finally {</b><br><br>
  // code to be executed regardless of an error<br><br>
}<br><br>
Example: Error prone code ko try block mein rakhna, catch block mein error handle karna, aur finally block mein cleanup code execute karna.<br><br><br>
<b>3.Utilizing Error Objects:</b><br><br>
•	Error objects detailed information provide karte hain errors ke baare mein.<br><br>
•	Syntax: const error = new Error(message);<br><br>
•	Example: Error object properties ko access karna aur print karna.<br><br>
`,
    },
  },
  {
    topic: "Functions In JavaScript",
    subcontent: {
      subheading: `Functions In JavaScript`,
      content: `<br><br>Functions JavaScript mein ek block of code hote hain jo ek specific task ko perform karne ke liye design kiye gaye hote hain. Functions ke andar declare kiye gaye variables aur functions sirf us function ke andar hi accessible hote hain.<br><br><br>
      <h3>Functions Declaration and Defination</h3 !imortant>
<b>1. Function Declaration</b><br><br>
Syntax:<br><br>
function functionName() {</b><br><br>
    console.log("Hello!");<br><br>
}<br><br>
//Function Call<br><br>
functionName();<br><br>
//Function Call<br><br>
//Functions ko call karne ke liye function ka naam aur circular brackets<b>()</b> use kiya jata hai:<br><br>
`,
      code: `
function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!

      `,
      content2: `
      <b>2. Function with Parameters</b><br><br>
Function ko call karte hain aur usme ek value provide karte hain, toh hum us value ko "argument" kehte hain. Aur jab hum function ko define karte hain, toh hum wahi value ko accept karne ke liye ek placeholder ya variable ko define karte hain, jise hum "parameter" kehte hain.<br><br>
`,
      code2: `
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
      `,
      content3: `<br><br>
      Is example mein, name ek parameter hai jo greet function ke andar define kiya gaya hai. Jab hum greet("Alice") ko call karte hain, toh "Alice" ek argument ke roop mein function ko pass kiya jata hai. Is tarah se, "Alice" argument function ke andar name parameter ke value ke roop mein receive hota hai, aur phir function us value ka use karke "Hello, Alice!" string ko generate karta hai.<br><br><br>
Isi tarah se, jab hum kisi function ko call karte hain, toh hum us function ke liye arguments provide karte hain, aur jab hum function ko define karte hain, toh hum uske liye parameters define karte hain jo un arguments ko receive karte hain.<br><br><br>
<b>3. Return Values</b><br><br>
Jab ek function kisi value ko generate karta hai aur use function ke bahar tak pahuchana chahta hai, toh hum return keyword ka istemal karte hain. Is keyword ke istemal se function execution stop ho jata hai aur control wapas us jagah par aata hai jahan se function ko call kiya gaya tha.<br><br>
`,
      code3: `
  function add(a, b) {
    return a + b;
}

var result = add(3, 5);
console.log(result); // Output:8 
      `,
      content4: `
      <br><br>Is example mein, add function a aur b ke values ko add karke ek result generate karta hai, aur fir us result ko return keyword se wapas bhejta hai. Jab hum add(3, 5) ko call karte hain, toh function 8 ko generate karta hai aur wapas us jagah par le jata hai jahan se call kiya gaya tha. Is tarah se, hum add function ka result result variable mein store kar sakte hain aur us result ko baad mein use kar sakte hain.<br><br><br>
return keyword ke istemal se, function execution ko khatam kar diya jata hai, aur function se wapas control us jagah par aata hai jahan se wo call hua tha.<br><br><br>
<b>4. Default Parameters</b><br><br>
Default parameters ka use kar ke aap function parameters ke liye default values define kar sakte hain. Agar function call karte waqt koi argument pass nahi hota, to default value use hoti hai.<br><br><br>
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
•	name parameter ke liye default value "Guest" define ki gayi hai.<br><br>
•	Jab function greet("Alice") call hota hai, to name ki value "Alice" hoti hai.<br><br>
•	Jab function greet() call hota hai bina kisi argument ke, to name ki default value "Guest" use hoti hai.
<br><br><br>
<b>5. Rest Parameters</b><br><br>
Rest parameters ka use kar ke aap function ko variable number of arguments pass kar sakte hain. Yeh arguments ek array ke roop mein function ko milte hain. Rest parameter ko define karte waqt parameter name se pehle ... (spread operator) lagaya jata hai.<br><br>
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
•	sum function rest parameter numbers ko define karta hai jo ek array hoti hai.<br><br>
•	Function ko pass kiye gaye saare arguments numbers array mein store hote hain.<br><br>
•	Loop ke through numbers array ke saare elements ko add karke total return hota ha<br><br>
<br><br><br>
<b>Combining Default and Rest Parameters</b><br><br>
Aap default aur rest parameters ko ek hi function mein use kar sakte hain. Default parameters ko pehle define karna hota hai aur rest parameters ko last mein.<br><br><br>
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
•	name parameter ke liye default value "Guest" define ki gayi hai.<br><br>
•	hobbies rest parameter variable number of arguments ko array ke roop mein store karta hai.<br><br>
•	Function introduce("Alice", "Reading", "Traveling") ko call karne par "Alice" name aur hobbies "Reading" aur "Traveling" print hoti hain.<br><br>
•	Function introduce() ko bina kisi argument ke call karne par default name "Guest" aur empty hobbies list print hoti hai.<br><br>
      `,
    },
  },
  {
    topic: "Pure aur impure function",
    subcontent: {
      subheading1: "Pure aur impure functions",
      content1: `Pure aur impure functions programming mein ek important concept hain, jo function ke behavior ko define karte hain.<br><br><br>

<br><br>Pure Function:</br><br><br>
- Ek function ko pure kaha jata hai agar ye do conditions ko satisfy karta hai:<br><br>
1. Deterministic: Ek pure function hamesha deterministic hota hai, matlab ye hamesha same input ke liye same output
produce karta hai.<br><br>
2. Side-effect free: Pure function kisi external state ko modify nahi karta hai, jaise global variables ya mutable
objects ko change nahi karta.<br><br><br>
Example of a pure function:`,

      code1: `
function add(a, b) {
return a + b;
}`,

      content2: `
Is function add() pure hai, kyun ki:<br><br>
- Har samay jab bhi same inputs diye jaye (jaise add(2, 3)), hamesha same output return karta hai.<br><br>
- Ismein koi external state modify nahi hoti.<br><br><br> <b>Impure Function</b>
<br><br>Impure function ek ya dono conditions ko violate karta hai jo pure function define karte hain. Yeh functions
side effects produce karte hain ya phir deterministic nahi hote.<br><br>`,

      code2: `Example of an impure function:

let result = 0;

function addToResult(num) {
result += num;
return result;
}`,
      content3: `
Is function addToResult() impure hai, kyun ki:<br><br>
- Ye external state (result variable) ko modify karta hai.<br><br>
- Is function ka output deterministic nahi hai, kyunki result ki value har function call ke baad change hoti hai.<br><br><br>

Impure functions ko use karte waqt aapko dhyan rakhna padta hai ki unke side effects se kaise deal karna hai, aur ye unpredictable behavior introduce kar sakte hain, especially in concurrent programming ya testing mein. Pure functions, on the other hand, predictable hote hain aur unka use maintainability aur testability ko improve karta hai.`,
    },
  },
  {
    topic: "Arrow Function",
    subcontent: {
      subheading: "Arrow Function",
      content: `Arrow functions JavaScript mein functions ko define karne ka ek concise tareeka hain. Ye ES6 (ECMAScript
2015) mein introduce hua tha. Arrow functions traditional function expressions ke ek alternative hain, jo kuch
situations mein code ko chhota aur readable banane mein madad karte hain.`,

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
Arrow functions ka use karne ka ek fayda ye hai ki ye concise syntax provide karte hain, jo ki code ko padhne mein aur
likhne mein asaan banata hai. Ye functions lexical this keyword ka use karte hain, matlab ye functions apne surrounding
context ka this keyword inherit karte hain, traditional functions ki tarah apna this context create nahi karte hain.<br><br><br>Example:<br><br>`,

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
Arrow functions mein this keyword global context ko refer karta hai, isliye object ke andar arrow function ka use karne par this object ko refer nahi karega. Is tarah ke cases mein, traditional function expressions ka use karna better hota hai.
<br><br><br>
Arrow functions ke kuch important characteristics aur limitations hain:
<br><br><br>
- No arguments object: Arrow functions mein arguments object nahi hota, lekin traditional functions mein hota hai.<br><br>
- Can't be used as constructors: Arrow functions ko new keyword ke saath use nahi kiya ja sakta hai. Ye constructors ke roop mein use nahi kiya ja sakta hai.
- No super keyword: Arrow functions mein super keyword ka use nahi kiya ja sakta hai.<br><br>
- No new.target: Arrow functions mein new.target property ka use nahi kiya ja sakta hai.<br><br>
<br><br>
Agar aapko kisi specific situation mein arrow functions ka use karne mein confusion hai ya koi aur sawaal ho, toh
poochiye!`,
    },
  },
  {
    topic: "IIFE",
    subcontent: {
      subheading4: "IIFE",
      content4: `Immediately Invoked Function Expressions (IIFEs) JavaScript mein ek common pattern hai jo ek function
expression ko define karta hai aur phir use immediately execute karta hai. Ye pattern primarily variable scoping ke liye
use hota hai, jisse global scope pollution avoid kiya ja sake.`,

      code6: `Syntax:
(function() {
// function body
})();
`,
      content7: `<br><br>
Yeh syntax ek function expression ko parentheses ke andar wrap karta hai, aur phir ek additional set of parentheses use karta hai, jisse function immediately invoke hota hai.
<br><br><br>
Example:<br><br>`,
      code7: `
(function() {
var message = "Hello, world!";
console.log(message);
})();
// Output: Hello, world!
`,
      content: `<br><br>Is example mein, ek IIFE define ki gayi hai jisme ek variable message initialize ki gayi hai aur phir console par print
kiya gaya hai. IIFE ki wajah se, message variable sirf IIFE ke scope mein hi hai, aur global scope mein nahi, jisse
global scope pollution avoid hoti hai.<br><br><br>

</b>IIFEs ka use primarily two main purposes ke liye hota hai:</b>
<br><br><br>
<b>1.Variable scoping:</b> IIFEs variables ko local scope mein limit karte hain, jisse global scope pollution avoid hoti hai.
Isse variables aur functions ke naam conflicts bhi avoid kiya ja sakta hai.
<br><br><br>
<b>2.Encapsulation:</b> IIFEs ek closure create karte hain, jisse variables aur functions ke access ko control kiya ja sakta
hai. Isse ek module-like behavior achieve kiya ja sakta hai, jisme specific functionality ko encapsulate kiya ja sakta
hai.<br><br><br>
Example:`,

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
Is example mein, ek counter object ko IIFE ke andar define kiya gaya hai jisme ek private variable count aur uske saath
increment, decrement aur getCount jaise public methods hain. IIFEs ke wajah se, count variable aur uske methods sirf
counter object ke scope mein hi hain, aur unhe bahar se access nahi kiya ja sakta hai.
<br><br><br>
IIFEs ka use variable scoping aur encapsulation ke liye bohot common hai, lekin ab ES6 ke aane ke baad, let aur const
keywords ke use se block-scoping achieve kiya ja sakta hai, jisse IIFEs ke jarurat kam ho gayi hai, lekin legacy code
aur specific use cases mein, IIFEs ka use abhi bhi hota hai. Agar aapko aur kuch samajhna hai ya koi aur sawaal ho, toh
poochiye!`,
    },
  },
  {
    topic: "Scope and Function Stack",
    subcontent: {
      subheading: "Scope",
      content: `Scope ka matlab hai ki variables, objects, aur functions ka accessibility (pahunch) code ke different parts mein kitni hai. JavaScript mein do main types ke scope hote hain:<br><br><br>

<b>Global Scope:</b>
<br><br>Jo variables kisi bhi function ke bahar declare kiye gaye hain, unka scope global hota hai. Ye variables code ke
kisi bhi part se access kiye ja sakte hain.<br><br>
<br><br><b>Local Scope:</b>
<br><br>Jo variables kisi function ke andar declare kiye gaye hain, unka scope local hota hai. Ye variables sirf us function
ke andar access kiye ja sakte hain.<br><br>`,

      subheadingg: "Function Stack",
      contentt: `Function Stack: Jab ek function call hota hai, to ek naya execution context create hota hai aur stack par
rakh diya jata hai. Function execute hone ke baad stack se nikal jata hai. Ye execution contexts ka stack ko call stack
kehte hain.<br><br><br>

Example:
`,
      codee1: `
function first() {
console.log('First function');
second();
console.log('First function again');
}

function second() {
console.log('Second function');
}

first();
`,
      content3: `
<br><br>Is example mein, first function second function ko call karta hai, jisse ek function calls ka stack ban jata
hai.<br><br>`,

      subheadingg2: "Browser Context API",
      contentt4: `Browser Context API allow karta hai browser ke contexts ko manage karne ke liye, jaise tabs, windows aur
memory management.<br><br><br>

<br><br><b>Window, Stack & Heap Memory</b><br><br>
<br><br>Jab hum koi calculation karte hain, toh beech-beech ke values jo final result nahi hoti, wo heap memory mein store
hoti hain.<br><br>`,

      contentt5: `<br><br>
Example: 1 + 2 + 3 + 4:<br><br><br>

- Heap Memory:<br><br>
- 1 + 2 results in 3<br><br>
- 3 + 3 results in 6<br><br>
- 6 + 4 results in 10<br><br>

<br><br>Heap memory mein ye intermediate values temporarily store hoti hain.<br><br>`,

      subheadingg3: "Execution Context",
      contentt6: `Function run hote hi ek execution context create hoti hai. Ye ek imaginary box jaisa hota hai jisme teen
cheezein hoti hain:<br><br>

<br><br>Variables:
<br><br>Jo variables function ke andar declare hote hain.
<br><br>Functions:
<br><br>Jo functions function ke andar declare hote hain.
<br><br>Lexical Environment:
<br><br>Ye batata hai ki function kin chizo ko access kar sakta hai aur kinhe nahi.<br><br><br>
<br><br>
Example:`,
      codee2: `
javascript
function abcd() {
var a = 12;
function def() {
var b = 12;
}
}`,
      contentt7: `
<br><br>Is example mein:<br><br>
<br><br>- Function <b>abcd</b> ke paas variable <b>a</b> ka access hai.<br><br>
<br><br>- Nested function <b>def</b> ke paas variable <b>b</b> ka access hai.<br><br>
<br><br>- <b>abcd</b> function <b>b</b> ko access nahi kar sakta kyunki <b>b</b> <b>def</b> function ke lexical environment mein
hai.<br><br>`,

      subheadingg4: "Lexical Environment",
      contentt11: `Lexical environment ek chart jaisa hota hai jo batata hai ki ek particular function kin cheezon ko access
kar sakta hai.<br><br><br>

- Child function apne parent function ke variables aur functions ko access kar sakta hai.<br><br>
- Parent function apne child function ke variables ko access nahi kar sakta.<br><br><br>

Example:<br><br>
`,
      codee5: `
function outer() {
var a = 10;
function inner() {
var b = 20;
console.log(a); // This will work
}
console.log(b); // This will not work
}`,
      contentt8: `

<br><br>Is example mein, child function <b>inner</b> apne parent function <b>outer</b> ke variable <b>a</b> ko access kar sakta hai, lekin parent function <b>outer</b> apne child function <b>inner</b> ke variable <b>b</b> ko access nahi kar sakta.<br><br>`,

      subheadingg10: "Summary",
      contentt10: `- Heap Memory: Intermediate values ko store karta hai during calculations.
- Execution Context: Function call hote hi create hota hai aur variables, functions, aur lexical environment ko contain
karta hai.<br><br>
- Lexical Environment: Scope aur scope chain define karta hai.<br><br>`,
    },
  },
  {
    topic: "Synchronous and Asynchronous Code",
    subcontent: {
      subheading: "Synchronous code",
      content: `Synchronous code sequentially execute hota hai, ek line complete hone ke baad hi next line execute hoti
hai. Isme koi asynchronous operation nahi hota jo delay kare.<br><br><br>
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
- JavaScript engine code ko read karta hai aur <b>console.log('Line 1')</b> ko main stack mein push karta hai.<br><br>
- Ye statement execute hota hai aur <b>Line 1</b> print hota hai.<br><br>
- Execution complete hone ke baad, ye statement main stack se pop hota hai.<br><br>
<br><br>
Main Stack: (empty)<br><br>
<br><br>
Output:<br><br>
Line 1<br><br>
<br><br>
2. Line 2: <b>console.log('Line 2');</b><br><br>
- Next, <b>console.log('Line 2')</b> main stack mein push hota hai.<br><br>
- Ye statement execute hota hai aur <b>Line 2</b> print hota hai.<br><br>
- Execution complete hone ke baad, ye statement main stack se pop hota hai.<br><br>
<br><br>
Main Stack: (empty) <br><br>
Output: <br><br>
Line 1 <br><br>
Line 2 <br><br>

3. Line 3: <b>console.log('Line 3');</b><br><br>
- <b>console.log('Line 3')</b> main stack mein push hota hai.<br><br>
- Ye statement execute hota hai aur <b>Line 3</b> print hota hai.<br><br>
- Execution complete hone ke baad, ye statement main stack se pop hota hai.<br><br>
<br><br><br>
Main Stack: (empty)<br><br>
Output:<br><br>
Line 1<br><br>
Line 2<br><br>
Line 3<br><br>
<br><br><br>

4. Line 4: <b>console.log('Line 4');</b><br><br>
- <b>console.log('Line 4')</b> main stack mein push hota hai.<br><br>
- Ye statement execute hota hai aur <b>Line 4</b> print hota hai.<br><br>
- Execution complete hone ke baad, ye statement main stack se pop hota hai.
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
      contentt3: `- Synchronous code: Sequentially, line by line execute hota hai.
- Main Stack: Har statement main stack mein push hota hai, execute hota hai, aur phir pop hota hai.
- Synchronous code mein koi delay nahi hota, har statement immediately execute hota hai.<br><br>`,

      imagee: "images/sync.png",
      subheadingg1: "Asynchronous JavaScript",
      contentt1: `Asynchronous JavaScript mein code line by line execute nahi hota. Kuch operations (jaise timers, network
requests) background mein chal sakte hain aur baad mein complete hone par result denge. Background mein operations chal
sakte hain, aur jab complete hote hain tab result dete hain.<br><br><br>

Hum 4 lines ka code lenge, jisme 2nd line asynchronous hogi jo 5 seconds baad execute hogi.<br><br><br>

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
- JavaScript engine code ko read karta hai aur <b>console.log('Line 1')</b> ko main stack mein push karta hai.<br><br>
- Ye statement execute hota hai aur <b>Line 1</b> print hota hai.<br><br>
- Execution complete hone ke baad, ye statement main stack se pop hota hai.<br><br>
<br><br>
Main Stack: (empty)<br><br>
<br><br>
Output:<br><br>
Line 1
<br><br><br>

2. Line 2: <b>setTimeout(() => { console.log('Line 2'); }, 5000);</b><br><br>
- <b>setTimeout</b> asynchronous function hai jo main stack mein push hota hai.<br><br>
- JavaScript engine <b>setTimeout</b> ko Web API ke hawale karta hai.<br><br>
- <b>setTimeout</b> background mein Web API se execute hota hai.<br><br>
- Web API countdown start karta hai 5000ms ke liye (5 seconds).<br><br>
- Main stack se <b>setTimeout</b> pop hota hai.
<br><br>
Main Stack: (empty)<br><br>
<br><br>
Output:
Line 1
<br><br><br>
3. Line 3: <b>console.log('Line 3');</b><br><br>
- JavaScript engine <b>console.log('Line 3')</b> ko main stack mein push karta hai.<br><br>
- Ye statement execute hota hai aur <b>Line 3</b> print hota hai.<br><br>
- Execution complete hone ke baad, ye statement main stack se pop hota hai.<br><br><br>

Main Stack: (empty)<br><br>

Output:<br><br>
Line 1<br><br>
Line 3<br><br>
<br><br><br>
4. Line 4: <b>console.log('Line 4');</b><br><br>
- JavaScript engine <b>console.log('Line 4')</b> ko main stack mein push karta hai.<br><br>
- Ye statement execute hota hai aur <b>Line 4</b> print hota hai.<br><br>
- Execution complete hone ke baad, ye statement main stack se pop hota hai.<br><br>
<br><br>
Main Stack: (empty)<br><br>
<br><br>
Output:<br><br>
Line 1<br><br>
Line 3<br><br>
Line 4<br><br>

<br><br><br>
5. After 5 seconds:<br><br>
- Web API setTimeout ke callback function ko Callback Queue mein push karta hai.<br><br>
- Event Loop check karta hai ki main stack empty hai.<br><br>
- Callback Queue se callback function (jo <b>console.log('Line 2')</b> hai) ko main stack mein push karta hai.<br><br>
- Ye statement execute hota hai aur <b>Line 2</b> print hota hai.<br><br>
- Execution complete hone ke baad, ye statement main stack se pop hota hai.<br><br>
<br><br>
Main Stack: (empty)
<br><br><br>
Output:<br><br>
Line 1<br><br>
Line 3<br><br>
Line 4<br><br>
Line 2 (after 5 seconds)`,

      subheading3: "Summary",
      content4: `- Asynchronous code background mein execute hota hai aur complete hone par callback queue ke through main
stack mein aata hai.<br><br>
- Web API asynchronous operations ko handle karta hai aur countdown ke baad callback function ko callback queue mein
push karta hai.<br><br>
- Event Loop callback queue ko continuously check karta hai aur main stack empty hone par callback queue ke functions ko
main stack mein push karta hai.<br><br>`,
      imagee2: `images/async.png`,
      subheading4: "JavaScript code Execution",
      content5: `JavaScript single-threaded language hai jo synchronously code execute karta hai, matlab ek samay par ek hi
statement execute hota hai. JavaScript ka execution context aur call stack important role play karte hain.<br><br><br>
<b>Call Stack</b>: Function calls ko manage karta hai.<br><br><br>
<b>Execution Context</b>: Jab function call hota hai, ek naya execution context create hota hai jo variables, functions
aur lexical environment ko contain karta hai.<br><br>`,
      subheading5: "Asynchronous Operations",
      content6: `JavaScript asynchronous operations ko handle karne ke liye Web APIs, callback queue aur event loop ka use
karta hai.<br><br><br>
<b>Web APIs</b>: setTimeout, HTTP requests, DOM events handle karte hain.<br><br>
<b>Callback Queue</b>: Asynchronous callbacks ko queue mein rakhta hai.<br><br>
<b>Event Loop</b>: Callback queue ko continuously check karta hai aur main stack empty hone par callback queue ke
functions ko main stack mein push karta hai.`,
      subheading7: "Conclusion",
      content18: `JavaScript ek powerful language hai jo synchronous aur asynchronous operations ko effectively handle kar
sakta hai. Execution context, call stack, Web APIs, callback queue aur event loop jaise concepts JavaScript ko robust
aur responsive banate hain.<br><br>`,
    },
  },
  {
    topic: "Value Of this",
    subcontent: {
      subheadingg1: "Value Of this Keyword",
      subheadingg2: "Global Scope",
      contentt1: `
      Jab aap \`this\` ko global scope mein use karte hain, toh woh global object ko refer karta hai, jo ki browser mein \`window\` hota hai.
      
      Example:
    `,
      codee1: `
      console.log(this); // Output: Window object (browser mein)
    `,
      subheadingg3: "Function Scoped",
      contentt2: `
      Agar aap ek function mein \`this\` ko use karte hain, toh woh bhi global object ko refer karta hai, agar woh function ek strict mode function nahi hai.
      
      Example:
    `,
      codee2: `
      function abcd() {
        console.log(this); // Output: Window object (browser mein)
      }
      abcd();
    `,
      subheadingg4: "Method Scope",
      contentt3: `
      Jab \`this\` ko ek method mein use kiya jata hai, toh woh method ke parent object ko refer karta hai, jaise aapne sahi tarah se kaha.
      
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
      Jab aap ek event handler ke andar \`this\` ka use karte hain, toh \`this\` typically us element ko refer karta hai jispe event occur hua hai.
      
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
      Arrow functions do not have their own \`this\` context. Instead, they inherit \`this\` from the surrounding lexical scope (Arrow functions mein, \`this\` ka value surrounding lexical scope se inherit hota hai). In other words, the value of \`this\` inside an arrow function is determined by the enclosing non-arrow function where the arrow function is defined.
      
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
      Strict mode ke andar, \`this\` ka behavior kuch alag hota hai compared to non-strict mode.
      <br><br><br>
      1. Global Scope:
      Strict mode mein, global scope mein \`this\` ka value \`undefined\` hota hai, jabki non-strict mode mein yeh global object (\`window\` in browsers) ko refer karta hai.

      Example:
    `,
      codee7: `
      "use strict";
      console.log(this); // Output: undefined
    `,
      contentt7: `
      2. Function Scoped:
      Strict mode mein, bina explicit context ke ek function ke andar \`this\` ka value bhi \`undefined\` hota hai. Non-strict mode mein, global object ko refer karta hai.
      
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
      Method ke andar, strict mode ya non-strict mode mein, \`this\` method ke parent object ko refer karta hai.
      
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
      Event handlers mein, strict mode ke andar bhi \`this\` typically us element ko refer karta hai jispe event occur hua hai.
      
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
      Arrow functions mein, strict mode ya non-strict mode mein, \`this\` lexical scope se inherit hota hai. Global scope mein, yeh value \`undefined\` hoti hai.
      
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
      Explicit binding JavaScript mein \`this\` ko specifically ek object se bind karne ke liye istemal hota hai. Yeh three methods provide karte hain:
    `,
      subheadingg9: "call() Method",
      contentt12: `
      \`call()\` method ek function ko call karta hai with a specified \`this\` value aur optional arguments.
      
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
      \`apply()\` method bhi ek function ko call karta hai with a specified \`this\` value, par arguments array ke roop mein provide kiya jata hai.
      
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
      \`bind()\` method ek new function create karta hai jo ek specified object se \`this\` ko bind karta hai. Iske baad, yeh function kabhi bhi call kiya ja sakta hai aur \`this\` value specified object par rahega.
      
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
      In methods ka istemal karke, aap function ka \`this\` value specifically set kar sakte hain jisse aap flexibility aur control gain karte hain function ke behavior par. Kabhi bhi agar aapko koi aur queries hain toh pooch sakte hain!
    `,
    },
  },
  {
    topic: "First-Class Functions in JavaScript",
    subcontent: {
      subheadingg1: "Introduction",
      contentt1: `
        JavaScript mein, functions ko first-class citizens ya first-class objects kaha jata hai. Iska matlab hai ki functions ko treat kiya jata hai as values. Functions ko variables mein store kiya ja sakta hai, as arguments kisi doosre function ko pass kiya ja sakta hai, aur kisi function se return bhi kiya ja sakta hai.
      `,
      subheadingg2: "Key Characteristics of First-Class Functions<br><br>",
      subheadingg3: "Stored in Variables",
      contentt2: `
          Functions ko variables ya constants mein store kiya ja sakta hai.

          Example:`,
      codee1: `
          const sayHello = function() {
              console.log("Hello!");
          };
          sayHello(); // Output: Hello!
        `,

      subheadingg4: "Passed as Arguments",
      contentt3: `
          Functions ko arguments ke roop mein doosre functions ko pass kiya ja sakta hai.
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
          Functions ko doosre functions se return kiya ja sakta hai.

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
          Functions ko arrays aur objects mein store kiya ja sakta hai.
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
        JavaScript mein first-class functions ka concept codee ko zyada flexible aur reusable banata hai. Functions ko values ki tarah treat karna allows for higher-order programming, jisme functions ko arguments ke roop mein pass karna, return karna, aur data structures mein store karna possible hota hai. Yeh functional programming techniques ko implement karne mein bhi help karta hai.
      `,
    },
  },
  {
    topic: "Callback Function",

    subcontent: {
      subheadingg1: "Callback Function",
      contentt1: `
        Callback function ek aisa function hota hai jo kisi dusre function ke andar as an argument pass hota hai. Jab dusra function execute hota hai, tab callback function ko call kiya jata hai. Iska fayda yeh hota hai ki aap asynchronous codee ko bhi synchronous tarike se likh sakte hain.
      `,

      subheadingg2: "Synchronous Callback",
      contentt2: `
        Synchronous callback wo hota hai jo immediately call ho jata hai jab dusre function ke andar usse call kiya jata hai.
        
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
          for...of loop array ke elements pe iterate karta hai. Isko khud se implement karne ke liye, hum ek custom function likhte hain jo callback function ko array ke har element ke liye call karega.
          
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
          for...in loop array ke indices pe iterate karta hai. Isko khud se implement karne ke liye, hum ek custom function likhte hain jo callback function ko array ke har index ke liye call karega.
          
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
      // // subheadingg7: "forEach Method",
      // // contentt6: `
      // //     forEach method array ke elements pe iterate karta hai aur callback function ko har element ke liye call karta hai. Isko khud se implement karne ke liye, hum ek custom function likhte hain jo callback function ko array ke har element ke liye call karega.

      // //     Example:
      // //     `,
      // // codee5: `
      // //     function customForEach(array, callback) {
      // //         for (let i = 0; i < array.length; i++) {
      // //             callback(array[i], i, array);
      // //         }
      // //     }

      // //     // Usage
      // //     let fruits = ["apple", "banana", "cherry"];
      // //     customForEach(fruits, function(fruit, index, array) {
      // //         console.log(fruit); // prints element
      // //         console.log(index); // prints index
      // //         console.log(array); // prints array
      // //     });

      //   `,
      subheadingg8: "Using forEach Method",
      contentt7: `
          \`forEach\` JavaScript mein ek array method hai jo array ke har element pe iterate karte hue, har element ke liye ek callback function ko execute karta hai. Chaliye, pehle is method ka use dekhte hain aur phir khud se \`forEach\` method ko implement karte hain.
          
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
          Ab hum \`forEach\` method ko khud se implement karte hain. Hum ek custom function \`customForEach\` banayenge jo array ko iterate karega aur har element ke liye callback function ko call karega.
          
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
          1. Function Definition: Hum \`Array.prototype.customForEach\` function define kar rahe hain jisse saare arrays inherit kar sakein.
          <br><br>2. Iteration: Hum array ko \`for\` loop se iterate kar rahe hain.
          <br><br>3. Callback Execution: Hum callback function ko har iteration me call kar rahe hain, jisme:
          <br><br>   - \`this[i]\` current element ko refer karta hai.
             <br><br>- \`i\` current index ko refer karta hai.
            <br><br> - \`this\` poore array ko refer karta hai.
          
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
          Iss tarah se hum khud ka \`forEach\` method bana sakte hain jo bilkul built-in \`forEach\` method ki tarah kaam karta hai.
        `,

      subheadinggx: "Asynchronous Callback",
      contenttxi: `
        Asynchronous callback wo hota hai jo kuch delay ke baad ya kisi asynchronous operation ke complete hone ke baad call hota hai.
        
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
        Is example me 2 seconds ke baad 1, 2, aur 3 print hone chahiye, lekin aisa nahi hoga kyunki teeno setTimeout functions ek sath schedule ho jate hain aur 2 seconds ke baad teeno ek sath execute hote hain.
      `,

      subheadinggxii: "Callback Hell",
      contenttxiii: `
        Callback hell tab hota hai jab aapko ek ke baad ek asynchronous operations chain karne hote hain, aur isse codee complicated aur hard to read ban jata hai.
        
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
        Is tarah ke codee ko callback hell kaha jata hai kyunki yeh bahut nested aur complex ho jata hai.
      `,

      subheadinggxiv: "Callback Functions ka Sahi Tarika",
      contenttxv: `
        Callback functions ka sahi tarika hai ki hum asynchronous operations ko ek tarike se handle karein jisse codee readable aur maintainable rahe.
        
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
        });`,
      contentt32: `<br><br>
        Ya fir, modern JavaScript mein promises aur async/await ka use karna ek aur sahi tarika hai jo callback hell se bachata hai.
      `,
    },
  },
  {
    topic: "Promise In JavaScript",
    subcontent: {
      subheadingg1: "Introduction to Promises",
      contentt1: `Promise ek object hai jo asynchronous operation ke result ko represent karta hai. Iska fayda yeh hai ki aap asynchronous code ko synchronous tarike se likh sakte hain. Promises ki teen states hoti hain: pending, fulfilled (resolved), aur rejected.
      
      <br><br><br>Promise States:
      <br><br>1. Pending: Initial state, neither fulfilled nor rejected.
      <br><br>2. Fulfilled (Resolved): Operation completed successfully.
      <br><br>3. Rejected: Operation failed.<br><br>`,
      subheadingg2: "Promise Handlers",
      contentt2: `Promise ke andar do handler hote hai (resolve, reject) dono hi kudme ek function hote hai:
      
      <br><br><br>• Resolve Handler: Ye handler wahi function hota hai jo promise ko fulfill ya complete karne ke liye use hota hai. Is handler mein hum specify karte hain ki promise successfully complete huyi hai aur kya result hai. Normally, resolve handler mein hum success ko represent karne wale kuch actions perform karte hain.
      <br><br>Syntax:
      resolve("Write anything you want to send to the receiver such as Data fetched successfully!");

      <br><br>• Reject Handler: Ye handler wahi function hota hai jo promise ko reject karne ke liye use hota hai. Is handler mein hum specify karte hain ki promise kyun fail huyi hai aur kya error hai. Jab koi error ya exception aati hai, tab reject handler ko call kiya jata hai. Isme hum error handling ya alternate actions specify kar sakte hain.
      <br><br>Example:
      reject("Write anything you want to send to the receiver such as Error fetching data!");
      
      subheading3: Creating a Promise
      Promise ko create karne ka example:`,
      codee1: `
      var myPromise = new Promise(function(resolve, reject) {
          // Asynchronous operation (like fetching data from an API)
          
          // Assume data fetched successfully
          var operationSuccessful = true;

          if (operationSuccessful) {
              // Resolve the promise with success message
              resolve(Data fetched successfully!);
          } else {
              // Reject the promise with error message
              reject(Error fetching data!);
          }
      });
      console.log(myPromise);`,

      contentt3: `
      Output: (You can see this output in your browser console)
      Promise {<fulfilled>: 'Data fetched successfully!'}
      [[Prototype]]: Promise
      [[PromiseState]]: fulfilled
      [[PromiseResult]]: Data fetched successfully!<br><br>`,

      subheadingg3: `Creating a Promise Function`,
      contentt4: `Generally, hume promises kisi API ke through milti hain, lekin hum khud bhi promises create kar sakte hain taaki concept clear ho sake. Promise ke andar do handlers hote hain: resolve aur reject.
      
      Example:`,
      codee2: `
      function getData(dataID) {
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  if (dataID) {
                      console.log(Data+ dataID);
                      resolve(success);
                  } else {
                      reject(You didn't Pass the data ID);
                  }
              }, 2000);    
          });
      }`,
      contentt5: ` Is function ko call karne pe ek promise return hota hai jo 2 seconds ke baad resolve ya reject hota hai.<br><br>`,

      subheadingg4: `Handling Promises`,
      contentt6: `Promises ko handle karne ke liye hum .then() aur .catch() methods ka use karte hain:
      
      <br><br>1. promise.then():
      <br><br>.then() method tabhi call ya execute hoga jab promise successfully resolve hota hai (means promise ke andar resolve handler call hochuka hai) otherwise wo .then() method me aap jo bhi likho wo ayese hi code me pada rahta hai.
      Jab promise resolve hoti hai, tab .then() method ke handler ko call kiya jata hai. Is handler mein hum specify karte hain ki promise ke sahi poora hone par kya action lena hai.
      .then() method ke saath ek resolved value bhi milti hai, jo Promise ke resolve handler mein pass ki gayi value hoti hai. Is value ko hum .then() method ke andar handle kar sakte hain.

      <br><br>2. promise.catch():
      <br><br>.catch() method tabhi call ya execute hoga jab promise successfully reject hota hai (means promise ke andar reject handler call hochuka hai) otherwise wo .catch() method me aap jo bhi likho wo ayese hi code me pada rahta hai.
      Jab promise resolve hoti hai, tab .then() method ke handler ko call kiya jata hai. Is handler mein hum specify karte hain ki promise ke reject hone par kya action lena hai, jaise error handling ya alternative actions.
      .catch() method ke saath ek error value bhi milti hai, jo Promise ke reject handler mein pass ki gayi error message hoti hai. Is value ko hum .catch() method ke andar handle kar sakte hain.
      
      Example:
`,
      codee4: `
      let result = getData(123);
      result.then((res) => {
          console.log(res);
      }).catch((err) => {
          console.log(Rejected, err);
      });
      `,
      contentt7: `
      Is example mein, agar getData(123) successfully resolve hota hai, to .then() block execute hoga. Agar reject hota hai, to .catch() block execute hoga.<br><br>`,

      subheadingg5: `Promise Chaining`,
      contentt8: `Promise chaining ka matlab hai multiple asynchronous operations ko sequence mein perform karna. Har .then() block next promise ko return karta hai.

      Example:`,
      codee5: `
      function asyncFun1(dataID) {
          return new Promise((resolve) => {
              setTimeout(() => {
                  console.log(dataID);
                  resolve(success);
              }, 2000);
          });
      }
      function asyncFun2(dataID) {
          return new Promise((resolve) => {
              setTimeout(() => {
                  console.log(dataID);
                  resolve(success);
              }, 2000);
          });
      }

      // Using Promise Chaining
      asyncFun1(1).then((res) => {
          console.log(Fetched 1);
          return asyncFun2(2);
      }).then((res) => {
          console.log(Fetched 2);
      }).then(() => {
          return getData(3);
      }).then((res) => {
          console.log(Fetched 3);
      });
    `,
      contentt9: `
      Is example mein, pehle asyncFun1(1) execute hoga, uske baad asyncFun2(2) aur phir getData(3) sequentially execute hote hain.<br><br>`,
      subheadingg6: `Callback Hell Example`,
      contenttx: `Callback hell ko avoid karne ke liye promises ka use karte hain. Pehle callback hell ka example:
      
      `,
      codee6: `
      function getData(dataID, getNextData) {
          setTimeout(function() {
              console.log(Data, dataID);
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

      subheadingg7: `Replacing with Promises`,
      contentxi: `Isse promise chaining se replace karte hain:

      `,
      codee7: `
      function getData(dataID) {
          return new Promise((resolve) => {
              setTimeout(function() {
                  console.log(Data, dataID);
                  resolve(success);
              }, 2000);
          });
      }

      getData(1).then((res) => {
          console.log(Fetched 1);
          return getData(2);
      }).then((res) => {
          console.log(Fetched 2);
          return getData(3);
      }).then((res) => {
          console.log(Fetched 3);
      });
      `,
      contentxiii: `
      Is tarah se promises ka use karke hum apne code ko zyada readable aur maintainable bana sakte hain aur callback hell se bach sakte hain.<br><br>`,
    },
  },
  {
    topic: "Fetch API And Async/Await ",
    subcontent: {
      subheadingg: `XMLHttpRequest`,
      contenti: `Jab aap kisi website pe jaate hain aur kuch data fetch karna chahte hain, jaise ki kisi API se, toh aap XMLHttpRequest (XHR) ka use kar sakte hain. Isse hum data asynchronsly fetch kar sakte hain, matlab ki page reload kiye bina. <br><br>Lekin, XMLHttpRequest ka use karne mein thoda jyada complex syntax hota hai aur error handling bhi thoda difficult ho sakta hai.<br><br>
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
      content: `

      <b>var xhr = new XMLHttpRequest();</b><br><br>
        Yeh line ek XMLHttpRequest object create kar rahi hai aur use 'xhr' variable mein store kar rahi hai.<br><br><br>
        <b>xhr.open('GET', 'https://api.example.com/data', true);</b><br><br>
        Yeh line XMLHttpRequest object ko configure kar rahi hai. \`open()\` method ka use karke humein specify karna padta hai ki hum kis type ka request bhej rahe hain (GET, POST, etc.), kis URL pe request bhej rahe hain, aur kya ye request asynchronous hai ya nahi.<br><br><br>

        <b>xhr.onreadystatechange = function() {</b><br><br>
        Yeh line ek event handler function set kar rahi hai, jo XMLHttpRequest ke state change hone par call hota hai.
<br><br><br>
        <b>if (xhr.readyState === XMLHttpRequest.DONE) {</b><br><br>
        Yeh line current state ko check kar rahi hai. Agar XMLHttpRequest ka state \`XMLHttpRequest.DONE\` hai, toh yeh condition true hoti hai, matlab ki request complete ho chuki hai.<br><br><br>

        <b>if (xhr.status === 200) {</b><br><br>
        Yeh line HTTP status code ko check kar rahi hai. Agar status code 200 hai, toh yeh condition true hoti hai, matlab ki request successful rahi hai.<br><br><br>
        
        <b>var data = JSON.parse(xhr.responseText);</b><br><br>
        Yeh line server se aaye hue response ko JSON format mein parse kar rahi hai aur \`data\` variable mein store kar rahi hai.<br><br><br>
        <b>console.log(data);</b><br><br>
        Parsed JSON data ko console mein print kiya ja raha hai.<br><br><br>

        <b>} else {</b><br><br>
        "Agar status code 200 nahi hai, toh yeh condition true hoti hai, matlab request me koi error hai.<br><br>
<br>
        <b>console.error('XHR request failed with status:', xhr.status);</b><br><br>
        Error ko console mein print kiya jata hai.<br><br><br>
       <b> }<br>
  }<br>
};</b><br><br>
        Event handler function ka end.<br><br><br>

        <b>xhr.send();</b><br><br>
        "Yeh line actual request ko server tak send kar rahi hai."<br><br>
      `,
      subheadinggi: `fetchAPI`,
      contenttiii: `Fetch API bhi data fetch karne ka ek tarika hai, lekin yeh XMLHttpRequest se modern aur easy hai. Ismein hum Promises ka use karke data fetch kar sakte hain, jo ki code ko clean aur readable banata hai.<br><br>
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
      contentt4: `
        <b>fetch('https://api.example.com/data')</b><br><br>
          "Yeh line ek network request bhej rahi hai \`fetch()\` function ke through. Yahan URL \`https://api.example.com/data\` hai jahan se hum data fetch karna chahte hain.<br><br><br>

           <b>.then(response => {</b><br><br>
          "Yeh line ek Promise ko handle kar rahi hai. Jab server se response milta hai, toh \`.then()\` method us response ko handle karta hai. Yahan \`response\` parameter mein server ka response aata hai.<br><br>
<br>
          <b>if (!response.ok) {</b><br><br>
      throw new Error('Network response was not ok');
        "Yeh line check kar rahi hai ki server ka response sahi hai ya nahi. Agar response ka status code 200-299 ke beech nahi hai (yaani agar response 'ok' nahi hai), toh ek error throw kiya jata hai.<br><br>
<br>
          <b>throw new Error('Network response was not ok');</b><br><br>
          "Error throw kiya jata hai agar response 'ok' nahi hai.<br><br><br>
<b>}<br>
        return response.json(); <br>
        })</b><br><br>
          "Yeh line server ka response ko JSON format mein parse kar rahi hai. Agar response sahi hai, toh hum JSON data ko next \`.then()\` block mein pass karte hain.<br><br><br>

          <b>then(data => {</b><br><br>
  
          "Yeh line ek aur Promise ko handle kar rahi hai. Jab JSON data milta hai, toh \`.then()\` method us data ko handle karta hai. Yahan \`data\` parameter mein JSON data aata hai.<br><br>
<br>
         <b>console.log(data);<br>
  })</b><br><br>
          "Yahan hum JSON data ko console mein print kar rahe hain.<br><br>
<br>
<b>.catch(error => {</b><br><br>
          "Yeh line Promise chain mein kisi bhi jagah agar koi error aata hai toh use handle karta hai. Yahan \`error\` parameter mein error object aata hai.<br><br><br>

<b>console.error('Fetch error:', error);<br>
  });</b><br><br>
          "Error ko console mein print kiya jata hai."<br><br>
        `,
      subheadingg3: `asyncAwait`,
      contentt5: `Async/Await ek feature hai JavaScript ka jisse hum asynchronous code ko likhne mein aur padhne mein aasani hoti hai. Async keyword ek function ko async function banata hai, jisme hum Await keyword ka use kar sakte hain, jisse wo code line by line execute hota hai, jo ki code ko synchronous lagane lagta hai.<br><br><br>
        Example: `,
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
      contenttivi: `
          <b>async function fetchData() {</b><br><br>
            "Yeh line ek async function define kar rahi hai, jiska naam \`fetchData\` hai. Async function ke andar hum Await keyword ka use kar sakte hain.<br><br><br>

            <b>try {</b><br><br>
            "Yeh line ek try block shuru kar rahi hai. Try block mein hum code likhte hain jo execute hoga, agar koi error aata hai toh hum use catch kar lenge.<br><br><br>

            <b>const response = await fetch('https://api.example.com/data');</b><br><br>
            "Yeh line ek network request bhej rahi hai \`fetch()\` function ke through. Await keyword se hum wait karte hain jab tak response complete nahi ho jaata. Response complete hone ke baad, \`response\` variable mein response store ho jaata hai.<br><br><br>
          <b>if (!response.ok) {</b><br><br>
            "Yeh line check kar rahi hai ki response sahi hai ya nahi. Agar response ka status code 200-299 ke beech nahi hai (yaani agar response 'ok' nahi hai), toh ek error throw kiya jata hai.<br><br><br>
            throw new Error('Network response was not ok');<br><br>
            "Error throw kiya jata hai agar response 'ok' nahi hai.<br><br><br>
<b>}<br>
            const data = await response.json();</b><br><br>
            Agar response sahi hai, toh hum JSON data ko parse kar rahe hain. Await keyword se hum wait karte hain jab tak JSON parsing complete nahi hota. Fir, parsed JSON data ko \`data\` variable mein store kar liya jata hai.<br><br><br>
            <b>console.log(data)</b><br><br>
            JSON data ko console mein print kiya jata hai.<br><br><br>

<b>} catch (error) {</b><br><br>
            Agar koi error aata hai try block mein, toh wo error catch kiya jata hai. Yahan, \`error\` variable mein error object stored hota hai.
            <br><br><br>
             console.error('Fetch error:', error):<br>
             }<br>
}<br>
             Function ka end.<br><br>

             <b>fetchData();</b><br>
             Function ko call kiya jata hai. Is line se function execute hota hai aur code run hota hai. 
<br><br>
Is tarah se, yeh pura code data fetch karne ke liye use hota hai, lekin isme Async/Await ka use kiya gaya hai naki .then() and .catch() ka.
            `,
    },
  },
];

window.twothree = twothree;
