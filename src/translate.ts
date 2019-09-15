import { LANGUAGES } from "./languages";

export function translate(json: string): object {
  console.log(convertTextToJaText(json));
  return {
    status: "success",
    outputs: [
      {
        output:
          "I have seen three pictures of the man.\n\nIchiyo is a photograph of the man in his childhood, when it is presumed that he was around ten years old, and his child was surrounded by many women, (it is supposed to be his sisters, his sisters, and his cousins) standing by the pond in the garden in a striped hakama with a kama on it, tilting his head about 30 degrees to the left, and smiling ugly."
      }
    ]
  };
}

function convertTextToJaText(json: string) {
  const source = LANGUAGES.find(lang => {
    return (
      lang.text === JSON.parse(json).source ||
      lang.id === JSON.parse(json).source
    );
  })!.jaText;
  const target = LANGUAGES.find(lang => {
    return (
      lang.text === JSON.parse(json).target ||
      lang.id === JSON.parse(json).target
    );
  })!.jaText;
  return { source, target, text: JSON.parse(json).text };
}
// maxlength="2000" がインプット側に設定されているが、超えた場合はこのようなレスポンスが返ってくる
// {"status":"failed","error_msg":"input string is too long."}

// {"status":"success","outputs":[{"output":"I have seen three pictures of the man. Ichiyo is a photograph of the man in his childhood, when it is presumed that he was around ten years old, and his child was surrounded by many women, (it is supposed to be his sisters, his sisters, and his cousins) standing by the pond in the garden in a striped hakama with a kama on it, tilting his head about 30 degrees to the left, and smiling ugly."}]}

// 改行は翻訳結果にも含まれている
// {"status":"success","outputs":[{"output":"I have seen three pictures of the man.\n\nIchiyo is a photograph of the man in his childhood, when it is presumed that he was around ten years old, and his child was surrounded by many women, (it is supposed to be his sisters, his sisters, and his cousins) standing by the pond in the garden in a striped hakama with a kama on it, tilting his head about 30 degrees to the left, and smiling ugly."}]}
