import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-simple-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  formData = {
    name: ''
  };

  onSubmit() {
    // Hier können Sie die Logik zum Speichern der Daten oder zur weiteren Verarbeitung hinzufügen
    console.log('Daten gespeichert:', this.formData);
  }
}
