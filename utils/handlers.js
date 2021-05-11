const getDaysSinceMayTenth = () => {
    const mayTenth = new Date(2021, 5 - 1, 10);
    console.log(mayTenth);
    const today = new Date();
    console.log(today);
    const diff = Math.round((today - mayTenth) / (1000 * 60 * 60 * 24));
    console.log(diff);
    return diff;
};

module.exports = { getDaysSinceMayTenth };
