const axios = require('axios');

const API_URL = process.env.QUIZ_API_URL

const fetchQuestions = async (amount = 10, category = '', difficulty = 'Any Difficulty', type = 'multiple') => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                amount,
                category,
                difficulty,
                type,
            },
        });

        return response.data.results;
    } catch (error) {
        throw new Error('Error fetching questions from Open Trivia Database');
    }
};

module.exports = {
    fetchQuestions,
};
