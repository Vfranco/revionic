import { Component, EventEmitter, Input, Output } from "@angular/core";
import { textByDefault } from "./enums/default.enum";
import { OutputData } from "./types/output-data";

@Component({
  selector: "dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent {
  @Input() items: Array<any> = []
  @Output() selectedOption = new EventEmitter<OutputData>()

  public toggleContainer: boolean = true;
  public selectedValue: string = textByDefault.DEFAULT;

  public get defaultValue(): any {
    return textByDefault
  }

  public toggle(): void {
    this.toggleContainer = !this.toggleContainer
  }

  public selectOption(item: any, identifier: number): void {
    this.selectedValue = item;
    this.selectedOption.emit({ id: identifier, option: item });
  }

  public closeOptions(event: any): void {
    this.toggleContainer = true;
  }
}
