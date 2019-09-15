import program from "commander";

program.name("mirai-t").usage("<string> [global options]");

program.version("0.0.1", "-v, --version");
program
  .option("-d, --debug", "output extra debugging")
  .option("-i, --interactive", "interactive mode")
  .option("-s, --source <language>", "source language")
  .option("-t, --target <language>", "target language");

program.on('option:debug', function () {
  console.log('Debug!');
  console.log(program.opts());
})
program.parse(process.argv);

if (program.source) console.log(`Sourece - ${program.source}`);
if (program.target) console.log(`Target - ${program.target}`);

function printWords(words : string[]) : string {
  const str = words.join(' ');
  return `${str}`;
}

console.log(printWords(program.args));

// maxlength="2000" がインプット側に設定されているが、超えた場合はこのようなレスポンスが返ってくる
// {"status":"failed","error_msg":"input string is too long."}

// {"status":"success","outputs":[{"output":"I have seen three pictures of the man. Ichiyo is a photograph of the man in his childhood, when it is presumed that he was around ten years old, and his child was surrounded by many women, (it is supposed to be his sisters, his sisters, and his cousins) standing by the pond in the garden in a striped hakama with a kama on it, tilting his head about 30 degrees to the left, and smiling ugly."}]}

// 改行は翻訳結果にも含まれている
// {"status":"success","outputs":[{"output":"I have seen three pictures of the man.\n\nIchiyo is a photograph of the man in his childhood, when it is presumed that he was around ten years old, and his child was surrounded by many women, (it is supposed to be his sisters, his sisters, and his cousins) standing by the pond in the garden in a striped hakama with a kama on it, tilting his head about 30 degrees to the left, and smiling ugly."}]}
