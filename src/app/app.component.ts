import { Component } from '@angular/core';

export interface InputData {
  id: number,
  option: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public programmingLanguages: Array<any> = ["Javascript", "Typescript", "C++", "PHP", "C#", "Python"];
  public selected?: InputData;

  handler(value: InputData): void {
    this.selected = value;
  }
}
