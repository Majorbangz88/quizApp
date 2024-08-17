const axios = require('axios');
const getRouteNumber = require('../utils/categoryMapping');

const API_URL = process.env.QUIZ_API_URL

const fetchQuestions = async (amount = 20, category = '', difficulty = 'Any Difficulty', type = 'multiple') => {
    try {
        const categoryID = getRouteNumber(category);

        const response = await axios.get(API_URL, {
            params: {
                amount,
                category: categoryID,
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
