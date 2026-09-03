// This is our main file that shows the menu and allows the user to pick an option. It will also connects the rooms.js and the prompt.js

const rooms = require('./rooms');
const prompt = require('./prompt');

function handleAddRoom(){
    prompt.askRoomName('add', function(name) {
        const message = rooms.addRoom(name);
        prompt.printMessage(message);
        showMenuAndAsk();
    });
}

function handleToggleLight(){
    prompt.askRoomName('toggle the light in', function (name) {
        const message = rooms.toggleLight(name);
        prompt.printMessage(message);
        showMenuAndAsk();
    });
}

function handleSetTemperature(){
    prompt.askRoomName('set the temperature for', function (name) {
        const room = rooms.findRoomByName(name);

        // We only ask for a temperature if a room exists
        if (!room) {
            prompt.printMessage('No room name "' + name + '" was found.');
            showMenuAndAsk();
            return;
        }
        
        prompt.askTemperature(function (temperature) {
            const message = rooms.setTemperature(name, temperature);
            prompt.printMessage(message);
            showMenuAndAsk();
        });
    });
}

function handleDisplayRooms() {
    prompt.displayRooms(rooms.getAllRooms());
    showMenuAndAsk();
}

function handleTurnOffAllLights() {
    const message = rooms.turnOffAllLights();
    prompt.printMessage(message);
    showMenuAndAsk();
}

// We show the menu and wait for the user's choice, then run matching action.
function showMenuAndAsk() {
    prompt.showMenu();

    prompt.askMenuChoice(function (choice) {
        if (choice === '1') {
            handleAddRoom();
        } else if (choice === '2') {
            handleToggleLight();
        } else if (choice === '3') {
            handleSetTemperature();
        } else if (choice === '4') {
            handleDisplayRooms();
        } else if (choice === '5') {
            handleTurnOffAllLights();
        } else if (choice === '6') {
            prompt.printMessage('Goodbye!')
            prompt.close()
        } else {
            prompt.printMessage('Invalid choice. Please enter a number from 1 to 6.');
            showMenuAndAsk();
        }    
    });
}

//Start the program.
showMenuAndAsk();