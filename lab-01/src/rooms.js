// This file store a list of rooms and the actions we can take like adding a room, toggling lights, and changing the temperature
const utilities = require('./utilities');

// An array holding every room we have added
const rooms = [];

// FIinding a room with a matching name regardless of whether the user uses lower or upper case
function findRoomByName(name) {
for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].name.toLowerCase() === name.trim().toLowerCase()) {
            return rooms[i]; 
         }
    }
    return undefined;
}

// Adding a new room with the given name
function addRoom(name) {
    if (!utilities.isNameValid(name)) {
        return 'Room name cannot be empty.';
    }

    const trimmedName = name.trim();
    const existingRoom = findRoomByName(trimmedName);

    if (existingRoom) {
    return 'A room named "' + trimmedName + '" already exists.';
    }

    const newRoom = {
    name: trimmedName,
    lightOn:false,
    temperature: utilities.getRandomTemperature(18, 26),
    };

    rooms.push(newRoom);
    return 'Room "' + trimmedName + '" added.';
}

// Switching room light on and off
function toggleLight(name) {
    const room = findRoomByName(name);

    if (!room) {
        return 'No room named "' + name + '" was found.';
    }

    room.lightOn = !room.lightOn;

    if (room.lightOn) {
        return 'Light in "' + room.name + '" is now ON.';
    } else {
        return 'Light in "' + room.name +'" is now OFF.';
    }
}

// Changing the temperature of a room
function setTemperature(name, newTemperature) {
    const room = findRoomByName(name);

    if (!room) {
        return 'No room named "' + name + '" was found.';
    }

    if (!utilities.isTemperatureValid(newTemperature)) {
        return 'Temperature msut be a number between 10°C and 32°C.';
    }

    room.temperature = Number(newTemperature);
    return 'Temperature in "' + name + '" set to ' + room.temperature + '°C.';
}

// Turning off every room's light at once
function turnOffAllLights() {
    for (let i = 0; i < rooms.length; i++) {
        rooms[i].lightOn = false;
    }
    return 'All lights have been turned off.';
}

// The full list of rooms
function getAllRooms() {
    return rooms;
}

module.exports = {
    addRoom: addRoom,
    toggleLight: toggleLight,
    setTemperature: setTemperature,
    turnOffAllLights: turnOffAllLights,
    getAllRooms: getAllRooms,
    findRoomByName: findRoomByName,
};