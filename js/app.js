const Enemy = function(x=0, y=60, speed=200) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = speed;
};

Enemy.prototype.update = function(dt) {
  if (this.x < 500) {
    this.x = this.x + (this.speed * dt);
  } else {
    this.x = -150;
  }
  let xCross = (player.x - this.x <= 80) && (player.x - this.x >= -60);
  let yCross = (player.y - this.y <= 75) && (player.y - this.y >= -55);
  if (xCross && yCross) {
    player.x = 200;
    player.y = 400;
  }
};

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const Player = function(x=200, y=400) {
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
      if (this.x) {
        this.x -= 50;
      }
      break;
    case 'up':
      if (this.y === 50) {
        this.y = 400;
        this.x = 200;
      } else {
        this.y -= 50;
      }
      break;
    case 'right':
      if (this.x < 400) {
        this.x += 50;
      }
      break;
    case 'down':
      if (this.y < 400) {
       this.y += 50;
      }
      break;
  }
}

const enemy1 = new Enemy();
const enemy2 = new Enemy(170, 200, 50);
const enemy3 = new Enemy(300, 140, 100)
const allEnemies = [enemy2, enemy3];
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
