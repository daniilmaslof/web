export class AnimationStack {
  animationStack: string[];
  animationStateNow: string;
   get length(): number{
     return this.animationStack.length;
   }
     setNextAnimation (...animations: string[]) {
       if (this.animationStateNow === null && this.animationStack.length === 0) {
         this.animationStateNow = null;
         this.animationStateNow = animations.shift();
       }
    for (let i = 0; i < animations.length; i++) {
      this.animationStack.push(animations[i]);
    }
  }
  shiftAnimationStack() {
     console.log(this.animationStateNow);
    if (this.animationStack.length !== 0) {
      this.animationStateNow = this.animationStack.shift();
    } else {
      this.animationStateNow = null;
    }
  }
  constructor() {
    this.animationStack = [];
  }
}
