# Node.js Server Unresponsiveness

This repository demonstrates a common Node.js issue: server unresponsiveness caused by a long-running synchronous operation within the request handler.  When a request is received, the server performs a computationally intensive task, blocking the event loop and preventing it from handling further requests.  The solution showcases how to fix this by using asynchronous operations.