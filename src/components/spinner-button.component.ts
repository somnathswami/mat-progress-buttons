import { Component, Input } from '@angular/core';
import { ButtonOpts } from './button-options.interface';

@Component({
  selector: 'spinner-button',
  template: `
    <button mat-button 
      [color]="options.buttonColor"     
      [class.active]="options.active"
      [class.fullWidth]="options.fullWidth"
      [class.mat-raised-button]="options.raised"
      [disabled]="options.active">
        <mat-icon *ngIf='options.icon && !options.active'>{{options.icon}}</mat-icon>
        <span *ngIf="!options.active">{{ options.text }}</span>
        
        <span *ngIf="options.active">{{ options.spinnerText }}</span>

        <mat-spinner class="spinner" 
          [diameter]="options.spinnerSize"
          [color]="options.spinnerColor" 
          [mode]="options.mode"
          [value]="options.value"
          *ngIf="options.active">
        </mat-spinner>

    </button>
  `,
  styles: [`
    button /deep/ .mat-button-wrapper {
      display:flex; 
      align-items: center;
      justify-content: center;
    }
    button.active {cursor: not-allowed}
    .spinner {
      margin-top: 8px;
      margin-left: 5px;
    }
    .fullWidth {
      width: 100%;
    }
  `]
})
export class SpinnerButton {
  @Input() options: ButtonOpts;
}
