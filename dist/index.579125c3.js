"use strict"; //============================================================================================================================================//
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
 //============================================================================================================================================//
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
 //============================================================================================================================================//
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
 // const request = new XMLHttpRequest();
 // request.open("GET", "https://restcountries.com/v2/name/bangladesh");
 // request.send();
 // request.addEventListener("load", function () {
 //   const [data] = JSON.parse(this.responseText);
 //   console.log(data);
 // });
 //============================================================================================================================================//
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //============================================================================================================================================//
 // // Fetch API
 // // The Fetch API is a modern web API in JavaScript that provides an interface for making network requests to servers. It offers a more straightforward and flexible alternative to the older XMLHttpRequest object for handling HTTP requests. The Fetch API is based on Promises, which allows you to write asynchronous code in a more elegant and readable way. It provides a global fetch() function that returns a Promise, which resolves to the Response object representing the response to the request. //
 //============================================================================================================================================//
 // // Protocol
 // // In the context of computer networking and the internet, a protocol refers to a set of rules and conventions that govern how data is transmitted, received, and processed between devices or systems. Protocols are essential for enabling communication and data exchange in a standardized and predictable manner. //
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // Protocols define various aspects of communication, including:
 // // Data Format: Protocols specify the structure and format of data being transmitted. This ensures that both the sender and receiver understand how to interpret the information correctly. //
 // // Handshaking and Error Handling: Protocols often include mechanisms for establishing and terminating connections between devices (handshaking). They also define procedures for error detection, correction, and retransmission of data to ensure reliable communication. //
 // // Addressing and Routing: Protocols define how devices are addressed and how data is routed from the source to the destination over a network. //
 // // Flow Control: Protocols can implement flow control mechanisms to manage the rate of data transmission, preventing data overload and ensuring that data is processed at an acceptable pace. //
 // // Security and Encryption: Some protocols incorporate security features such as encryption and authentication to protect data from unauthorized access and tampering. //
 //============================================================================================================================================//
 // // HTTPS and HTTP
 // // HTTP (Hypertext Transfer Protocol) and HTTPS (Hypertext Transfer Protocol Secure) are two protocols used for communication on the internet. They serve as the foundation for how data is transferred between clients (such as web browsers) and servers (hosting websites or web applications). The primary difference between them lies in their level of security:
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // HTTP (Hypertext Transfer Protocol):
 // // HTTP is the standard protocol used for web communication.
 // // It operates over plain text, which means that the data exchanged between the client and server is not encrypted. //
 // // HTTP is vulnerable to various security threats, such as eavesdropping, man-in-the-middle attacks, and data tampering. //
 // // While HTTP is widely used for general websites and content that doesn't require high security, it is generally not recommended for transmitting sensitive information like passwords or credit card details. //
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // HTTPS (Hypertext Transfer Protocol Secure):
 // // HTTPS is an extension of HTTP that includes an additional layer of security through encryption. //
 // // It uses SSL (Secure Sockets Layer) or TLS (Transport Layer Security) protocols to encrypt data during transmission. //
 // // The encryption provided by HTTPS ensures that the data exchanged between the client and server remains confidential and cannot be easily intercepted or tampered with by malicious actors. //
 // // HTTPS is commonly used for websites that handle sensitive data, such as online banking, e-commerce, login portals, and any other scenario where data privacy and security are essential. //
 // // Modern web browsers often display a padlock icon in the address bar to indicate a secure HTTPS connection, which can help users identify trustworthy websites. //
 //============================================================================================================================================//
 // // Domene name
 // // A domain name is a human-readable address used to identify and access websites on the internet. It serves as a user-friendly substitute for the numerical IP addresses that computers use to locate and communicate with each other. Domain names make it easier for people to remember and access websites without needing to know the specific IP address associated with a particular server. //
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // A domain name is composed of two main parts:
 // // Domain Name Label: Each domain name is divided into multiple labels or segments, separated by dots. For example, in the domain name "www.example.com," there are three labels: "www," "example," and "com." //
 // // Top-Level Domain (TLD): The last label of a domain name is called the top-level domain (TLD). It represents the highest level of the domain hierarchy and is used to categorize websites based on their purpose, origin, or type. Some common TLDs include ".com," ".org," ".net," ".gov," ".edu," etc. //
 //============================================================================================================================================//
 // // DNS (Domain Name System)
 // // DNS (Domain Name System) is a decentralized hierarchical naming system used on the internet to map human-readable domain names to their corresponding IP addresses. It acts like a phonebook for the internet, allowing users to access websites and other resources using easy-to-remember domain names rather than numerical IP addresses. //
 // // When you type a domain name (e.g., www.example.com) into your web browser, the browser needs to know the IP address of the server hosting that website to establish a connection and retrieve the content. This is where the DNS comes into play: //
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // Domain Name Resolution: The DNS resolution process starts with your computer checking its local DNS cache to see if it has recently resolved the domain name. If the domain name is found in the cache, the corresponding IP address is retrieved, and the browser can proceed with the connection. //
 // // DNS Resolver: If the domain name is not found in the local cache, your computer sends a DNS resolution request to a DNS resolver. This resolver is usually provided by your Internet Service Provider (ISP) or a public DNS service like Google Public DNS or Cloudflare DNS. //
 // // Recursive Resolution: The DNS resolver starts the recursive resolution process by contacting the root DNS servers. These root servers are the starting point of the DNS hierarchy and maintain information about the authoritative name servers for each top-level domain (TLD) like .com, .org, .net, etc. //
 // // Authoritative DNS Servers: The root DNS servers respond to the resolver with the IP addresses of the TLD's authoritative name servers. The resolver then contacts the authoritative name server for the specific domain name (e.g., example.com). //
 // // DNS Response: The authoritative name server for example.com responds with the IP address of the domain, and this information is passed back through the recursive resolution process until it reaches the resolver. //
 // // Local Cache Update: The resolver caches the IP address of the domain name for a certain period of time, so future requests for the same domain can be resolved quickly without repeating the whole process. //
 // // Connecting to the Server: With the IP address obtained from DNS resolution, your web browser can now establish a connection to the server hosting the website and retrieve the requested content. //
 //============================================================================================================================================//
 // // IP address
 // // An IP address (Internet Protocol address) is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. IP addresses serve as a means of identifying and locating devices on a network, enabling data to be routed from one device to another over the internet.
 // // IP addresses consist of a series of four numbers, separated by periods (dots). Each number can range from 0 to 255, representing 8 bits of binary data. This format is known as IPv4 (Internet Protocol version 4) and is still widely used. An example of an IPv4 address is "192.168.0.1." //
 // // As the number of devices connected to the internet has increased exponentially, the available IPv4 addresses have become limited. To address this issue, a newer version of the IP protocol called IPv6 (Internet Protocol version 6) was developed. IPv6 uses a longer address format, consisting of eight groups of four hexadecimal digits, separated by colons. An example of an IPv6 address is "2001:0db8:85a3:0000:0000:8a2e:0370:7334." //
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // IP addresses can be public or private:
 // // Public IP Address: A public IP address is assigned to a device by the Internet Service Provider (ISP) and is unique across the entire internet. It allows the device to communicate with other devices on the internet and can be used to host servers accessible from anywhere on the web. //
 // // Private IP Address: A private IP address is used within a local network, such as a home or office network. These addresses are not globally unique and are typically assigned by the router or gateway within the local network. Private IP addresses cannot be directly accessed from the internet but are used for communication between devices within the same local network. //
 //============================================================================================================================================//
 // // DNS lookup
 // // DNS lookup, also known as DNS resolution, is the process of converting a human-readable domain name (like "www.example.com") into its corresponding IP address. This translation is necessary for devices to communicate with each other over the internet using numerical IP addresses rather than domain names. //
 // // When you enter a domain name in a web browser's address bar or try to access a website, your device needs to find the IP address associated with that domain so it can establish a connection to the server hosting the website.  //
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // The DNS lookup process involves several steps:
 // // Local DNS Cache: Your device first checks its local DNS cache to see if it has recently resolved the domain name. If the domain name is found in the cache and the cached information is still valid (not expired), the IP address is retrieved, and the process ends. //
 // // DNS Resolver: If the domain name is not found in the local cache or the cached information has expired, your device sends a DNS resolution request to a DNS resolver. The DNS resolver is typically provided by your Internet Service Provider (ISP) or a public DNS service. //
 // // Recursive Resolution: The DNS resolver starts the recursive resolution process by contacting the root DNS servers. These root servers are the starting point of the DNS hierarchy and maintain information about the authoritative name servers for each top-level domain (TLD) like .com, .org, .net, etc. //
 // // Authoritative DNS Servers: The root DNS servers respond to the resolver with the IP addresses of the TLD's authoritative name servers. The resolver then contacts the authoritative name server for the specific domain name (e.g., example.com). //
 // // DNS Response: The authoritative name server for example.com responds with the IP address of the domain, and this information is passed back through the recursive resolution process until it reaches the resolver. //
 // // Local Cache Update: The resolver caches the IP address of the domain name for a certain period of time, so future requests for the same domain can be resolved quickly without repeating the whole process. //
 // // Connecting to the Server: With the IP address obtained from DNS resolution, your web browser can now establish a connection to the server hosting the website and retrieve the requested content. //
 //============================================================================================================================================//
 // // TCP/IP socket connection
 // // A TCP/IP socket connection is a method of communication between two devices over a network using the Transmission Control Protocol (TCP) and Internet Protocol (IP). It enables data to be exchanged in a reliable, two-way, and stream-oriented manner. //
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // Here's how a TCP/IP socket connection works:
 // // Establishing a Connection:
 // // The process begins with one device acting as a server and waiting for incoming connections on a specific port. The other device acts as a client and initiates the connection. //
 // // The client sends a request to connect to the server using the server's IP address and the port number it is listening on. //
 // // The server, upon receiving the connection request, accepts it, creating a new socket dedicated to that specific client. //
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // Handshaking:
 // // Before data transfer begins, a three-way handshake takes place between the client and server to establish a reliable connection. This handshake ensures that both devices agree to the connection and are ready to exchange data. //
 // // The three steps in the handshake are: SYN (synchronize), SYN-ACK (synchronize acknowledgment), and ACK (acknowledgment). //
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // Data Transfer:
 // // Once the connection is established and the handshake is complete, data can be transmitted bidirectionally between the client and server.//
 // // Data is sent as a stream of bytes, and TCP ensures that the data is received accurately and in the correct order. If any packets are lost during transmission, TCP will automatically request retransmission of those packets. //
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // // Connection Termination:
 // // When either the client or server is finished with the data transfer, it initiates a connection termination process. //
 // // The termination process involves a four-way handshake to ensure that all remaining data is received and acknowledged before the connection is closed. //
 //============================================================================================================================================//
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //============================================================================================================================================//
 // // fetching data
 // // The Fetch API is a modern web API in JavaScript that provides an interface for making network requests to servers. It offers a more straightforward and flexible alternative to the older XMLHttpRequest object for handling HTTP requests. The Fetch API is based on Promises, which allows you to write asynchronous code in a more elegant and readable way. It provides a global fetch() function that returns a Promise, which resolves to the Response object representing the response to the request. //
 //============================================================================================================================================//
 // fetch("https://jsonplaceholder.typicode.com/posts")
 //   .then((response) => response.json())
 //   .then((data) => console.log(data))
 //   .catch((error) => console.log(error.message));
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 // const wrapper = document.querySelector(".wrapper");
 // class App {
 //   constructor() {
 //     this._fetchData();
 //   }
 //   _fetchData() {
 //     fetch("https://fakestoreapi.com/products-")
 //       .then((response) => {
 //         if (!response.ok)
 //           throw new Error(
 //             `Something Went Wrong! Error Code-${response.status}`
 //           );
 //         return response.json();
 //       })
 //       .then((data) => this._renderData(data))
 //       .catch((error) => this._renderError(error.message));
 //   }
 //   _renderData(products) {
 //     products.forEach((product) => {
 //       const html = `
 //       <p>${product.id}</p>
 //       <h1>${product.title}</h1>
 //       <p>${product.price.toLocaleString("bn-BD", {
 //         style: "currency",
 //         currency: "BDT",
 //       })}</p>`;
 //       wrapper.insertAdjacentHTML("beforeend", html);
 //     });
 //   }
 //   _renderError(error) {
 //     wrapper.insertAdjacentText("beforeend", error);
 //   }
 // }
 // const myApp = new App();
 //============================================================================================================================================//
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //============================================================================================================================================//
 // // Posting data
 // // In JavaScript, the POST method is commonly used to send data to a server. It is one of the HTTP methods used in web development to perform operations such as creating, updating, or submitting data to a specific URL or endpoint on the server. The POST method is often used when you want to add or update data on the server. //
 //============================================================================================================================================//
 // const btn = document.querySelector(".btn");
 // btn.addEventListener("click", function (e) {
 //   e.preventDefault();
 //   const userId = document.querySelector(".user-id").value;
 //   const title = document.querySelector(".title").value;
 //   const body = document.querySelector(".body").value;
 //   const data = { userId: userId, title: title, body: body };
 //   fetch("https://jsonplaceholder.typicode.com/posts", {
 //     method: "POST",
 //     headers: {
 //       "Content-type": "application/json",
 //     },
 //     body: JSON.stringify(data),
 //   })
 //     .then((response) => response.json())
 //     .then((data) => console.log(data));
 // });
 //============================================================================================================================================//
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //============================================================================================================================================//
 // // Fetching data asynchronously
 // // Fetching data asynchronously is a common task in web development, and it can be achieved using the fetch API in JavaScript. The fetch API provides a simple way to make network requests and handle asynchronous responses. //
 //============================================================================================================================================//
 // async function fetchData() {
 //   try {
 //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
 //     if (!res.ok) throw new Error("Something went wrong!");
 //     const data = await res.json();
 //     console.log(data);
 //   } catch (err) {
 //     console.log(err.message);
 //   }
 // }
 // fetchData();

//# sourceMappingURL=index.579125c3.js.map
