import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch-preven',
  templateUrl: './switch-preven.component.html',
  styleUrls: ['./switch-preven.component.css']
})
export class SwitchPrevenComponent {

  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;

  @Output() switchChange = new EventEmitter<boolean>();

  toggleSwitch(): void {
    this.checked = !this.checked;
    this.switchChange.emit(this.checked);
  }
}
