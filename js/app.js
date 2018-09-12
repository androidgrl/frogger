const Enemy = function(x=0, y=60, speed=200) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x < 500) {
    this.x = this.x + (this.speed * dt);
  } else {
    this.x = -150;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function(x=200, y=300) {
  this.player = 'images/char-boy.png';
  this.x = x;
  this.y = y;
}

Player.prototype.update = function() {
}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
}

Player.prototype.handleInput = function(direction) {
  switch (direction) {
    case 'left':
      this.x -= 50;
      break;
    case 'up':
      this.y -= 50;
      break;
    case 'right':
      this.x += 50;
      break;
    case 'down':
      this.y += 50;
      break;
  }
}


const enemy1 = new Enemy();
const enemy2 = new Enemy(150, 180, 300);
const enemy3 = new Enemy(300, 140, 150)
const allEnemies = [enemy1, enemy2, enemy3];
const player = new Player();

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
