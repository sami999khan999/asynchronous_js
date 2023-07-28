"use strict";
//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//
// Synchronous JS -
// Asynchronous JS -
// AJAX -
// API -
// AJAX call -
//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//
// // Synchronous JS
// // In synchronous JavaScript, tasks are executed one after the other in a sequential manner. Each task must complete before the next one begins. When a synchronous task is running, it blocks the execution of other tasks, including the main thread, until it completes. //
//============================================================================================================================================//
// console.log("Start");
// console.log("Step1");
// console.log("Step2");
// console.log("End");
//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//
// // Asynchronous JS
// // In asynchronous JavaScript, tasks are executed independently of each other, without waiting for the previous task to finish. Asynchronous operations are typically used for tasks that might take some time to complete, such as reading files, making API requests, or waiting for user input. Asynchronous tasks are often initiated and then left to run in the background while other code continues executing. When an asynchronous task is completed, a callback function, a promise, or an async/await mechanism is used to handle the result. //
//============================================================================================================================================//
// console.log("Start");
// setTimeout(() => {
//   console.log("Asynchronous Task");
// }, 3000);
// console.log("End");
//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//
// // AJAX
// // AJAX (Asynchronous JavaScript and XML) is a technique used in web development to send and receive data from a web server asynchronously, without requiring a page reload. It allows you to update parts of a web page dynamically, making web applications more interactive and responsive. //
// // The name "AJAX" is a bit outdated because modern web applications often use JSON (JavaScript Object Notation) rather than XML for data interchange. However, the term "AJAX" is still widely used to describe this general approach. //
// // Key components of AJAX:
// // Asynchronous: AJAX requests are executed asynchronously, meaning they don't block the main thread of the web page. This allows other tasks to continue executing while waiting for the server's response. //
// // XMLHttpRequest (XHR): The XMLHttpRequest object is a core part of AJAX. It is used to make HTTP requests to the server and receive data asynchronously. //
// // Server Interaction: AJAX allows you to send data to the server and receive responses without reloading the entire web page. This enables partial updates of web page content. //
// // JSON (or XML) for Data Exchange: Although AJAX stands for Asynchronous JavaScript and XML, JSON has become the more popular data format for data exchange between the client and server due to its simplicity and ease of use with JavaScript. //
//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//
// // API
// // API stands for "Application Programming Interface." It is a set of rules, protocols, and tools that allow different software applications to communicate and interact with each other. APIs define the methods and data formats that applications can use to request and exchange information. //
// // In the context of web development, APIs are commonly used to enable communication between different web services or between a web service and a client application (such as a web browser or a mobile app). APIs provide a standardized way for developers to access specific functionalities or data from external services, without requiring them to understand the internal implementation details of those services. //
// // Key points about APIs:
// // Abstraction: APIs act as an abstraction layer, hiding the complexity of the underlying system or service. They provide a simplified interface for developers to interact with the service. //
// // Interoperability: APIs facilitate interoperability, allowing applications developed on different platforms or using different programming languages to communicate and work together. //
// // RESTful APIs: The most common type of web API is a RESTful API (Representational State Transfer). RESTful APIs are designed around the principles of the HTTP protocol and use standard HTTP methods (such as GET, POST, PUT, DELETE) to perform actions on resources identified by URLs. //
// // JSON and XML: APIs typically use data formats like JSON (JavaScript Object Notation) or XML (eXtensible Markup Language) for data exchange. JSON has become the most popular format due to its simplicity and ease of use with JavaScript. //
// // API Documentation: API providers offer documentation that describes the available endpoints, request parameters, response formats, and authentication methods. This documentation helps developers understand how to use the API effectively. //
//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//
// // AJAX call
// // An AJAX (Asynchronous JavaScript and XML) call is a technique used in web development to make asynchronous HTTP requests from a web page to a server or an API. It allows you to retrieve data, send data, or perform actions on the server without having to reload the entire web page. AJAX calls are typically used to fetch data in the background and update parts of a web page dynamically. //
//============================================================================================================================================//
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/bangladesh");
request.send();
request.addEventListener("load", function() {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
});

//# sourceMappingURL=index.579125c3.js.map
