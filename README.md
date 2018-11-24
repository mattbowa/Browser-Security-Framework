# python


I have always been fascinated by the web security, especially in regards to web browsers. Back in the good old days (not so long ago), I'd study the inner workings of a web browswer by injecting executable ( or shell) code into a browser's memory space then hooking and intercepting APIs of a particular interest.

As tedious as the process was, it worked! The process worked too because web browser allowed direct access to to it's memory, in C/C++, via extensions such as Browser Helper Objects (Internet Exploere) or Browser Extensions (Mozilla Firefox). These add-ons had APIs which exposed hooks that allowed direct access the Document Object Model (DOM) But with power comes abuse as malware writers used the unrestricted access for malicious itenstions On the other hand, Chrome was designed with limiting access to the program's internal. It managed to do by exposing alot of it's funtionality via JavaScript APIs, and with the increasing popularity of Chrome access to the browser's funtionality shifted from C/C++ to JavaScript.
With that said, modern versions of web browsers provide powerful APIs (via JavaScript) which can be leveraged to program browser security features using JavaScript
Background

This is a simple chrome extension that customize the browsing experience by injecting content scripts into web pages

The extension works on web technologies such as HTML and JavaScript, by manupilating the browser DOM interface to tailor the presented web content to an individual needs or preferences.

I developed this extension to ease the process of job searching by removing listing from job angencies. As a result, when browsing for jobs on SEEK I can only view jobs from companies as opposed to the duplicated listings from angencies.
