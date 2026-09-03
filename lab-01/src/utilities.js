// Helper functions

function getRandomTemperature(min, max) {
    const range = max - min + 1;
    const randomNumber = Math.floor(Math.random() * range);
    return min + randomNumber;
}

function isNameValid(name) {
    if (typeof name !== 'string') {
        return false;
    }
    const trimmedName = name.trim();
    return trimmedName.length > 0;
}

function isTemperatureValid(value) {
    const number = Number(value);

    if (isNaN(number)) {
        return false;
    }
    return true;
}

module.exports = {
    getRandomTemperature: getRandomTemperature,
    isNameValid: isNameValid,
    isTemperatureValid: isTemperatureValid,
};