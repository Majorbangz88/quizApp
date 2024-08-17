function getTypeMapping(type) {
    switch (type) {
        case 'Multiple Choice': return 'multiple';
        case 'True/False': return 'boolean';
        default: return 'null';
    }
}

module.exports = getTypeMapping;