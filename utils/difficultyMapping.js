function getDifficulty(difficulty) {
    switch (difficulty) {
        case 'Easy': return 'easy';
        case 'Medium' : return 'medium';
        case 'Hard': return 'hard';
        default: return null;
    }
}

module.exports = getDifficulty;