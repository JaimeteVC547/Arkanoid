const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        create: create
    }
};

const game = new Phaser.Game(config);

function create() {
    console.log("Phaser iniciado");
}