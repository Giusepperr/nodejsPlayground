## file system in node
In a nutshell from the [tutorialspoint](https://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm):
> Node.js runs in a single-thread mode, but it uses an event-driven paradigm to handle concurrency. It also facilitates creation of child processes to leverage parallel processing on multi-core CPU based systems.
Child processes always have three streams child.stdin, child.stdout, and child.stderr which may be shared with the stdio streams of the parent process.

the code contains multiple example regarding the implementation of child processes

## Useful Resources:
Amazing article regarding child process [medium](https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a)

## Resources:
the code follows the [tutorialspoint](https://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm) examples
