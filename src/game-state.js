class GameState {
  constructor() {
    this.ball = {
      x: 28,
      y: 15
    };
  }

  step() {
    this.ball.x = this.ball.x + 0.1;
  }

  toJson() {
    return {
      b: this.ball
    };
  }
}

module.exports = GameState;
