var randomGame = {
    num: Math.floor(Math.random() * 100 + 1),
    count: 0,
    start: function() {
        count = 0;
        return ("게임을 시작합니다.");
    },
    say: function(guess) {
        this.count++;
        while (this.count < 6) {
            if (guess === this.num) {
                return ("정답!");
            } else if (guess > this.num) {
                return ("다운!");
            } else {
                return ("업!");
            }
        }
        if (this.count === 6) {
            return ("게임종료");
        }
    }
};

randomGame.start();
randomGame.say();

var randomGame = {

  MESSAGE : {
      START: '게임을 시작합니다.',
      UP: '업!',
      DOWN:'다운',
      END:'게임 종료',
      CORRECT: '정답!'
  },
  randomNumber: null,  // No One, Nothing.
  limit : 0,
  start: function () {
    this.limit = 6;
    this.randomNumber = Math.floor(Math.random() * 100 + 1);
    this.display(this.MESSAGE.START);
  },
  say: function(number){
    // 게임이 끝나거나 시작되지 않았으면 종료 처리.
    if(!this.limit) return this.end(); // 남아있지 않으면 초기에 끝내버리기.

    // 숫자를 비교하고 정답이면 정답! 종료!
    if(number === this.randomNumber) {
      this.display(this.MESSAGE.CORRECT);
      this.end();
      return;
    }
    this.limit--;
    if (number > this.randomNumber){
      this.display(this.MESSAGE.DOWN);
    } else {
      this.display(this.MESSAGE.UP);
    }
    if(!this.limit) this.end();
    // 정답이면 정답이라고 외치고 종료!
    // 정답이 아니면 limit--;

  },
  display: function(msg){
    console.log(msg);
  },
  end: function(){
    this.display(this.MESSAGE.END);
    this.limit = 0;
  }
};


this.display(number > this.randomNumber ? this.MESSAGE.DOWN : this.MESSAGE.UP);
this.display(this.MESSAGE[number > this.randomNumber ? 'DOWN' : 'UP' ]);




// 예제

var randomGame = (function randomGame(){


  var MESSAGE = {
      START: '게임을 시작합니다.',
      UP: '업!',
      DOWN:'다운',
      END:'게임 종료',
      CORRECT: '정답!'
  };
  var randomNumber = null;  // No One, Nothing.
  var limit = 0;

  function display(msg){
    console.log(msg);
  }
  function end(){
    display(MESSAGE.END);
    limit = 0;
  }

  return {
    start: function () {
      limit = 6;
      randomNumber = Math.floor(Math.random() * 100 + 1);
      display(MESSAGE.START);
    },
    say: function(number){
      // 게임이 끝나거나 시작되지 않았으면 종료 처리.
      if(!limit) return end(); // 남아있지 않으면 초기에 끝내버리기.

      // 숫자를 비교하고 정답이면 정답! 종료!
      if(number === randomNumber) {
        display(MESSAGE.CORRECT);
        end();
        return;
      }
      limit--;
      if (number > randomNumber){
        display(MESSAGE.DOWN);
      } else {
        display(MESSAGE.UP);
      }
      if(!limit) end();
      // 정답이면 정답이라고 외치고 종료!
      // 정답이 아니면 limit--;

    }
  };

}());
