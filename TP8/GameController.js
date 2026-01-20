class GameController { 

    constructor() {
        this.game = new Game();

        this.SERVER_TICK_RATE = 20;
        this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;

        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);

        const jsArenaPlayer = JSON.parse(localStorage.getItem("jsArenaPlayer"));
        console.log(jsArenaPlayer);
        this.pseudo = jsArenaPlayer.pseudo;
        this.serverUrl = jsArenaPlayer.serverUrl;
        this.skinPath = jsArenaPlayer.skinPath;

        this.inputs = {
            up: false,
            down: false,
            left: false,
            right: false,
            attack: false
        };

        this.socket = new WebSocket(this.serverUrl);
        this.initSocket();

        this.initInput();
    }

    initSocket() {
        this.socket.onopen = () => {
            console.log("Connected to server");

            this.socket.send(JSON.stringify({
                name: this.pseudo,
                skinPath: this.skinPath
            }));
        };

        this.socket.onmessage = (event) => {
            const snapshot = JSON.parse(event.data);
            this.game.state = snapshot;
        };
    }

    initInput() {
        window.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "z":
                case "ArrowUp":
                    this.inputs.up = true;
                    break;

                case "s":
                case "ArrowDown":
                    this.inputs.down = true;
                    break;

                case "q":
                case "ArrowLeft":
                    this.inputs.left = true;
                    break;

                case "d":
                case "ArrowRight":
                    this.inputs.right = true;
                    break;

                case " ":
                    this.inputs.attack = true;
                    break;
            }

            console.log("INPUTS :", this.inputs);
        });

        window.addEventListener("keyup", (event) => {
            switch (event.key) {
                case "z":
                case "ArrowUp":
                    this.inputs.up = false;
                    break;

                case "s":
                case "ArrowDown":
                    this.inputs.down = false;
                    break;

                case "q":
                case "ArrowLeft":
                    this.inputs.left = false;
                    break;

                case "d":
                case "ArrowRight":
                    this.inputs.right = false;
                    break;

                case " ":
                    this.inputs.attack = false;
                    break;
            }

            console.log("INPUTS :", this.inputs);
        });
    }

    loop(timestamp) {
        requestAnimationFrame(this.loop);
        console.group("État du jeu");
        console.log("Chronomètre:", this.game.timer);
        console.log("Jeu en cours:", this.game.isRunning);
        console.log("Jeu terminé:", this.game.isOver);
        console.log("Joueurs:", this.game.players);
        console.groupEnd();
    }
}

const myGame = new GameController();

console.log(myGame.pseudo);
console.log(myGame.serverUrl);
console.log(myGame.skinPath);
