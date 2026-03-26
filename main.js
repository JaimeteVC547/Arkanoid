const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#000',
  scene: {
    create: create
  }
};

new Phaser.Game(config);

function create() {
  this.add.text(300, 250, 'Arkanoid');
}