export class Card {
    Question: string = '';
    Answer: string = '';

    constructor(question?: string, answer?: string) {
        this.Question = question;
        this.Answer = answer;
    }

}
