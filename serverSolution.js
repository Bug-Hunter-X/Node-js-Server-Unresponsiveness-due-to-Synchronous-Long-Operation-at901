const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation using promises and async/await
  const longRunningOperation = async () => {
    let count = 0; 
    for (let i = 0; i < 1000000000; i++) { 
      count += i; 
    }
    return count;
  };

  longRunningOperation().then(result => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello World! Result: ${result}`);
  }).catch(err => {
    console.error('Error during operation:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});