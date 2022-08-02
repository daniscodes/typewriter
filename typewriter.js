const sentence = "hello this is your computer speaking";
let x = 0
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, x);
  x += 50

}