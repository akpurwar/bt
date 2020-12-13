export class State {
    answer:string;
    questionId:number;
    userId:number;
    quizId:number;
    constructor(answer:string,userId:number,queId:number,quizId:number){
        this.answer = answer;
        this.questionId = queId;
        this.userId = userId;
        this.quizId = quizId;
        
    }
}
