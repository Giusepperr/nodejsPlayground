// __filename represents the filename of the code executed
console.log(__filename);

// __dirname represents the name of the directory that the currently executing script is
console.log(__dirname);

//setTimeout (callback, milliseconds) global functio used to run callback after at least some time in milliseconds.

function printHello(){
  console.log("Hello World");
}
//Now call above function after 2 milliseconds
t = setTimeout(printHello, 2000);

// clearTimeout( obj) The clearTimeout(t) global function is used to stop a timer that was previously created with setTimeout(). Here t is the timer returned by the setTimeout() function.
clearTimeout(t);

// The setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days.

// Now call above function after 2 seconds
b = setInterval(printHello, 2000);

//clearInterval(t) to clear the interval set with setInterval()

clearInterval(b);

/*Console
Used to print information on stdout and stderr.

  Process
Used to get information on current process. Provides multiple events related to process activities.*/
