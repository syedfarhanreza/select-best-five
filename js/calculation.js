// SELECTION AREA START
function selectedPlayerList(selectButton, playerName) {
    document.getElementById(selectButton).addEventListener('click', function () {
        document.getElementById(selectButton).setAttribute('disabled', true)
        const nameTag = document.getElementById(playerName);
        const getName = nameTag.innerText;
        const listSection = document.getElementById("selected-list");
        const makeList = document.createElement('li');
        makeList.innerText = getName;
        if (listSection.childElementCount <= 4) {
            listSection.appendChild(makeList);

        }
        else {
            alert('You Can\'t Add')
        }

    })
}

const playerInfo1 = selectedPlayerList("select-btn-1", "player-name-1");
const playerInfo2 = selectedPlayerList("select-btn-2", "player-name-2");
const playerInfo3 = selectedPlayerList("select-btn-3", "player-name-3");
const playerInfo4 = selectedPlayerList("select-btn-4", "player-name-4");
const playerInfo5 = selectedPlayerList("select-btn-5", "player-name-5");
const playerInfo6 = selectedPlayerList("select-btn-6", "player-name-6");
const playerInfo7 = selectedPlayerList("select-btn-7", "player-name-7");
const playerInfo8 = selectedPlayerList("select-btn-8", "player-name-8");
const playerInfo9 = selectedPlayerList("select-btn-9", "player-name-9");

// SELECTION AREA END

// CALCULATION AREA START

// Common Function
function calculateCost(costFieldSection) {
    const costField = document.getElementById(costFieldSection);
    const costInString = costField.value;
    const cost = parseFloat(costInString);
    costField.value = '';
    return cost;

};
document.getElementById("calculateButton").addEventListener('click', function () {
    const playerCostField = document.getElementById("costOfPlayer");
    const PlayerCostString = playerCostField.value;
    const PlayerCost = parseFloat(PlayerCostString);
    playerCostField.value = '';

    const totalCostField = document.getElementById("totalPlayerCost");
    const totalCostString = totalCostField.innerText;
    const totalCost = parseFloat(totalCostString);

    const totalPlayers = document.getElementById("selected-list");
    const PlayerNumber = totalPlayers.childElementCount;

    const newTotalCost = (PlayerCost * PlayerNumber) + totalCost;
    totalCostField.innerText = newTotalCost;
});



document.getElementById("costOfTotal").addEventListener('click', function () {
    const managerCost = calculateCost("costOfManager");
    const coachCost = calculateCost("costOfCoach");


    const totalCostField = document.getElementById("totalPlayerCost");
    const totalCostInString = totalCostField.innerText;
    const totalCost = parseFloat(totalCostInString);

    const overallCostField = document.getElementById("totalCost");
    const overallCostInString = overallCostField.innerText;
    const overallCost = parseFloat(overallCostInString);

    const finalCost = managerCost + coachCost + totalCost;
    overallCostField.innerText = finalCost;
});
// CALCULATION AREA END