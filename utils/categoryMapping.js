function getRouteNumber(category) {
    switch (category) {
        case "General Knowledge": return 9;
        case "Entertainment: Books": return 10;
        case "Entertainment: Film": return 11;
        case "Entertainment: Music": return 12;
        case "Science & Nature": return 17;
        case "Science: Computers": return 18;
        case "Science: Mathematics": return 19;
        case "Sports": return 21;
        case "Politics": return 24;
        case "Science: Gadgets": return 30;
        default: return 9;
    }
}

module.exports = getRouteNumber;
