# python


I have always been fascinated by the web security, especially in regards to web browsers.

Coming from a C/C++ background, I'd study the inner workings of a web browswer by injecting executable ( or shell) code into a browser's memory space then hooking and intercepting APIs of particular interest.

As tedious as the process was it worked! The reason being was that web browser allowed direct access to to it's memory, in C/C++, via extensions such as Browser Helper Objects (Internet Exploere) or Browser Extensions (Mozilla Firefox). 

These add-ons had APIs which exposed hooks that allowed direct access the Document Object Model (DOM).

But with power comes abuse, as malware writers used the unrestricted access for malicious itenstions

On the other hand, Chrome was designed with limited access to the program's internals. It managed to do by exposing alot of it's funtionality via JavaScript APIs.

With the increasing popularity of Chrome access to the browser's funtionality shifted from C/C++ to JavaScript.

With that said, modern versions of web browsers provide powerful APIs (via JavaScript) which can be leveraged to program browser security features using JavaScript.

The idea behing this project is to use documented APIs to inject JavaScript in browser for the purpose of manupilating the DOM.

The project is a work in progress as I've finally managed to get some free time 'coding time'. 

Please feel free to contact me for any questions or if you're willing to contribute.

