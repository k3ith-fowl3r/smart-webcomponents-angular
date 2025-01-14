import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.controlType = options['controlType'] || 'textbox';
  }
}