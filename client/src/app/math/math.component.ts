import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss'],
})
export class MathComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isQuizStarted: boolean = false;
  toggleQuiz() {
    this.isQuizStarted = !this.isQuizStarted;
    if (this.isQuizStarted) return this.startTimer();
    return clearInterval(this.interval);
  }
  timeLeft: number = 60;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }
  firstNumber: number = this.getRandomInt(9);
  secondNumber: number = this.getRandomInt(9);
  mathSymbol: any = ['+', '-'];
  randomMathSymbol: any = this.mathSymbol[Math.floor(Math.random() * 2)];
  answer: any = this.checkAnswer();
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  checkAnswer() {
    if (this.randomMathSymbol === '+')
      return this.firstNumber + this.secondNumber;
    return this.firstNumber - this.secondNumber;
  }
}
