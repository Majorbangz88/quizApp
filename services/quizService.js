const axios = require('axios');
const getRouteNumber = require('../utils/categoryMapping');

const fetchQuestions = async (amount = 20, category = '', difficulty = 'medium', type = 'multiple') => {
    try {
        const categoryID = getRouteNumber(category);
        const URL = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty.toLowerCase()}&type=${type}`
        console.log(URL)
        const response =
            await axios.get(URL);

        console.log(response.data)
        return response.data.results;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    fetchQuestions,
};
