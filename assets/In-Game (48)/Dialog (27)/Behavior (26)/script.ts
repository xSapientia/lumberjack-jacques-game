class DialogBehavior extends Sup.Behavior {
  animatedText: AnimatedTextBehavior;

  private speaker = "";
  private portraitRenderer: Sup.SpriteRenderer;
  
  awake() {
    Game.dialogBehavior = this;
    
    this.portraitRenderer = this.actor.getChild("Portrait").spriteRenderer;
    this.animatedText = this.actor.getChild("Text").getBehavior(AnimatedTextBehavior);
  }
  
  show(speaker: string, text: string) {
    this.actor.setVisible(true);
    
    this.speaker = speaker;
    this.portraitRenderer.setSprite(`In-Game/Dialog/Portraits/${speaker}`);

    this.animatedText.setText(`${this.speaker.toUpperCase()}: ${text}`);
  }
  
  hide() {
    this.actor.setVisible(false);
    this.animatedText.clear();
  }
}
Sup.registerBehavior(DialogBehavior);