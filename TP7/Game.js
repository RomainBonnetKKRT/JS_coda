const backendData = {
    isRunning: true,
    isOver: false,
    timer: 190.6,
    players: {
        "3cd71bbb-6a6b-4d4e-80e3-107130328a27": {
            name: "blabla",
            skinPath: "./spritesheets/3.png",
            position: [0.56, 0.18],
            lvl: 1,
            hp: 100,
            maxHp: 100,
            hpRegenRate: 10,
            speed: 0.2,
            direction: 3,
            isAttacking: false,
            isWalking: false,
            isDying: false,
            attackCooldown: 1,
            currentAttackCooldown: 0
        },
        "28ead291-fcea-4b41-a596-d3c876c49a53": {
            name: "bloublou",
            skinPath: "./spritesheets/4.png",
            position: [0.44, 0.19],
            lvl: 1,
            hp: 100,
            maxHp: 100,
            hpRegenRate: 10,
            speed: 0.2,
            direction: 0,
            isAttacking: false,
            isWalking: false,
            isDying: false,
            attackCooldown: 1,
            currentAttackCooldown: 0
        }
    }
};

class Game {
    constructor() {
        this.isRunning = false;
        this.isOver = false;
        this.timer = 0;

        this.players = {};
    }

    update(gameStateFromServer) {
        console.log("=== UPDATE GAME ===");

        this.isRunning = gameStateFromServer.isRunning;
        this.isOver = gameStateFromServer.isOver;
        this.timer = gameStateFromServer.timer;

        const serverPlayers = gameStateFromServer.players;

        for (let playerId in serverPlayers) {
            const serverPlayerData = serverPlayers[playerId];

            if (!this.players[playerId]) {
                console.log("Ajout du joueur :", playerId);

                this.players[playerId] = new Player(
                    playerId,
                    serverPlayerData.name,
                    serverPlayerData.skinPath,
                    serverPlayerData.position
                );
            }

            this.players[playerId].update(serverPlayerData);
        }

        for (let playerId in this.players) {
            if (!serverPlayers[playerId]) {
                console.log("Suppression du joueur :", playerId);
                delete this.players[playerId];
            }
        }

        console.log("État actuel du jeu :", this);
    }
}

const game = new Game();

console.log("----- TEST 1 : Chargement initial -----");
game.update(backendData);

console.log("----- TEST 2 : Update stats joueur -----");
backendData.players["3cd71bbb-6a6b-4d4e-80e3-107130328a27"].hp = 50;
backendData.players["3cd71bbb-6a6b-4d4e-80e3-107130328a27"].isWalking = true;
game.update(backendData);

console.log("----- TEST 3 : Ajout joueur -----");
backendData.players["NEW_PLAYER_ID"] = {
    name: "nouveau",
    skinPath: "./spritesheets/1.png",
    position: [0.1, 0.2],
    lvl: 1,
    hp: 100,
    maxHp: 100,
    hpRegenRate: 10,
    speed: 0.2,
    direction: 2,
    isAttacking: false,
    isWalking: true,
    isDying: false,
    attackCooldown: 1,
    currentAttackCooldown: 0
};
game.update(backendData);

console.log("----- TEST 4 : Suppression joueur -----");
delete backendData.players["28ead291-fcea-4b41-a596-d3c876c49a53"];
game.update(backendData);
