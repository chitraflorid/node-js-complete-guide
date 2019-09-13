# Node.js&mdash;The Complete Guide  

## Section V, Assignment 2:

### Time to Practice&mdash;Express.js

The purpose of this assignment is to review the concepts covered thus far in
Section V up to and including elementary usage of the Express.js third party
framework. Included in this assignment are demonstrations of the simplification
of HTTP request handling, and finally the beginnings of routing to different URLs.

***

## Requirements

1. Create a npm project and install Express.js (nodemon if you want).

1. Create an Express.js app which funnels the request through 2 middleware
functions that log something to the console and return one response.

1. Handle requests to "/" and "/users" such that each request only has one
handler/middleware that does something with it (e.g. send dummy response).
