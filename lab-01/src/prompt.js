// This is responsible for use interaction in the terminal

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const MENU_TEXT =
  '\n' +
  '\n' +
  'Smart Room Setup Assistant\n' +
  '\n' +
  '1. Add Room\n' +
  '2. Toggle Light\n' +
  '3. Set Temperature\n' +
  '4. Display Rooms\n' +
  '5. Turn Off All Lights\n' +
  '6. Exit\n' +
  '\n';

// Printing the menu of options
function showMenu() {
    console.log(MENU_TEXT);
}

function askMenuChoice(callback) {
    rl.question('Choose an option (1-6): ', function (answer) {
        callback(answer.trim());
    });
}

function askRoomName(actionText, callback) {
    rl.question('Enter room name to ' + actionText + ':', function (answer) {
        callback(answer.trim());
    });
}

function askTemperature(callback) {
    rl.question('Enter new temperature (°C): ', function (answer) {
        callback(answer.trim());
    });
}

// Printing room name, light status and temperature
function displayRooms(rooms) {
    if (rooms.length === 0) {
        console.log('No rooms have been added yet');
        return;
    }

    console.log('\nCurrent Rooms:');
    console.log('');

    for (let i = 0; i < rooms.length; i++) {
        const room = rooms[i];
        const lightStatus = room.lightOn ? 'ON' : 'OFF';
        console.log((i + 1) + '. ' + room.name + '|Light: ' + lightStatus + ' | Temp: ' + room.temperature + '°C');
    }

    console.log('');
}

function printMessage(message) {
    console.log(message);
}

function close (){
    rl.close();
}

module.exports = {
    showMenu: showMenu,
    askMenuChoice: askMenuChoice,
    askRoomName: askRoomName,
    askTemperature: askTemperature,
    displayRooms: displayRooms,
    printMessage: printMessage,
    close: close,
};