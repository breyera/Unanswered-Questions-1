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

module.exports = { isAncient, isMedieval, isModern, isContemporary };
