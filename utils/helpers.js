const isCorrectPeriod = (philosopher, period) => {
    if (philosopher.period.toLowerCase() === period.toLowerCase()) {
        return true;
    }
    return false;
};

const isAncient = (philosopher) => {
    return isCorrectPeriod(philosopher, 'ancient');
};

const isMedieval = (philosopher) => {
    return isCorrectPeriod(philosopher, 'medieval');
};

const isModern = (philosopher) => {
    return isCorrectPeriod(philosopher, 'modern');
};

const isContemporary = (philosopher) => {
    return isCorrectPeriod(philosopher, 'contemporary');
};

const percent = (num1, num2) => {
    const res =  Math.round((1000 * num1) / (num1 + num2)) / 10;
    return res?res:0;
};

module.exports = { isAncient, isMedieval, isModern, isContemporary, percent };
