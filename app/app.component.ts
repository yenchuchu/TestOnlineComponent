import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [ DataService ]
})
export class AppComponent implements OnInit { 
	 title = 'Test English online';
	 questions: Object[];
	 correct: number;
	constructor(private dataService: DataService) {
		
  	}

  	ngOnInit() {
  		this.dataService.getQuestion().then(res => {
			this.questions = res;
		});
  	}


  saveStatus(question: Object, choice:String) {
    question['choice'] = choice;
  }

  check() {
    this.correct = 0;
    for (let i = 0; i < this.questions.length; i ++){
      if(this.questions[i]['choice'] == this.questions[i]['answer']){
        this.correct++;
        //Xem cau tra loi dung hay sai
        this.questions[i]['status'] = "correct";
      }else{
        this.questions[i]['status'] = "incorrect";
      }
    }
  }
}
