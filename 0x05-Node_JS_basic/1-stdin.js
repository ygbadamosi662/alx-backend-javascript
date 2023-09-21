process.stdout.write('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const urName = process.stdin.read();

  if (urName) {
    process.stdout.write(`Your name is: ${urName}`);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
