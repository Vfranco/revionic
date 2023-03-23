import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClickOutSideDirective } from "./directive/clickoutside.directive";
import { DropdownComponent } from "./dropdown.component";

@NgModule({
  imports: [CommonModule],
  declarations: [DropdownComponent, ClickOutSideDirective],
  exports: [DropdownComponent]
})
export class DropdownModule { }
