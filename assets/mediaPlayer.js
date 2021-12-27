function MediaPlayer(config) {
  this.media = config.el;
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

export default MediaPlayer;


// Es Scope define el tiempo de vida de una varibale, nos ayuda a evitar reescribir el valos de la variable
// 1. Global Scope, 2. function scope, 3. block scope, 4. module scope
