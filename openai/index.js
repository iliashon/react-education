const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI();

// async function main() {
//     const completion = await openai.chat.completions.create({
//         messages: [{ role: "system", content: "You are a helpful assistant." }],
//         model: "gpt-3.5-turbo",
//     });

//     console.log(completion.choices[0]);
// }

// main();

async function main() {
    const image = await openai.images.generate({
        prompt: "Сделай фон для поста в инстаграм",
        n: 1,
        size: "1024x1024",
    });

    console.log(image.data);
}
main();

// console.log(openai);
