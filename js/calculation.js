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


