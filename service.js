const { Configuration, OpenAIApi } = require("openai");
// const XLSX = require('xlsx')

const configuration = new Configuration({
    organization: 'org-4KJ2HUgZVrmZF8pUjXIPVCnf',
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);


exports.translate = async (req, res) => {
    try {
        const text = req.body.text
        const lang = req.query.lang

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Translate this into 1. ${lang}:\n\n${text}\n\n1.`,
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        res.send(response.data.choices)

    } catch (error) {
        res.send(error.message)
    }
};

exports.summary = async (req, res) => {
    try {
        const text = req.body.text      
        const response = await openai.createCompletion({  //Creates a completion for the provided prompt and parameters 
            model: "text-davinci-003",
            prompt: `Summarize this for a second-grade student:\n\n${text}`, // passing text as params(prompt) dynamically
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        res.send(response.data.choices)  // Sending an response of the data 

    } catch (error) {
        res.send(error.message)     // if try block fails then it will throw an error
    }
};

exports.sentiment = async (req, res) => {
try {
    const text = req.body.text
    const response = await openai.createCompletion({  //Creates a completion for the provided prompt and parameters
        model: "text-davinci-003",
        prompt: `Classify the sentiment in these tweets:\n${text}`, // passing text as params(prompt) dynamically
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });

    res.send(response.data.choices)  // Sending an response of the data 

} catch (error) {
    res.send(error.message)  // if try block fails then it will throw an error
}
};
