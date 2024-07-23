import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  step = signal(0);
  applyForm = new FormGroup({
    birthday: new FormControl('')
  })

  nextStep() {
    this.step.set(this.step() + 1);
  }

  prevStep() {
    if (this.step() >= 1) {
      this.step.set(this.step() - 1);
    }
  }

  submitForm() {
    console.log('Form result: ', this.applyForm.value)
    console.log(this.step())
  }
}
