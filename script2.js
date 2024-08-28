function rollDice() {
    // Generate a random number between 1 and 6
    const diceValue = Math.floor(Math.random() * 6) + 1;
    const dice = document.getElementById("dice");

    // Display the appropriate dice face
    switch (diceValue) {
        case 1:
            dice.textContent = '⚀'; // Dice face 1
            break;
        case 2:
            dice.textContent = '⚁'; // Dice face 2
            break;
        case 3:
            dice.textContent = '⚂'; // Dice face 3
            break;
        case 4:
            dice.textContent = '⚃'; // Dice face 4
            break;
        case 5:
            dice.textContent = '⚄'; // Dice face 5
            break;
        case 6:
            dice.textContent = '⚅'; // Dice face 6
            break;
    }
}