const isCorrectPeriod = (philosopher, period) => {
    if (philosopher.period === period) {
        return true;
    }
    return false;
};

const isAncient = (philosopher) => {
    return isCorrectPeriod(philosopher, 'Ancient');
};

const isMedieval = (philosopher) => {
    return isCorrectPeriod(philosopher, 'Medieval');
};

const isModern = (philosopher) => {
    return isCorrectPeriod(philosopher, 'Modern');
};

const isContemporary = (philosopher) => {
    return isCorrectPeriod(philosopher, 'Contemporary');
};

module.exports = { isAncient, isMedieval, isModern, isContemporary };
