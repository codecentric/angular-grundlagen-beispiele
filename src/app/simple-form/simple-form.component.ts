import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {

  formData = {
    name: ''
  };

  onSubmit() {
    // Hier können Sie die Logik zum Speichern der Daten oder zur weiteren Verarbeitung hinzufügen
    console.log('Daten gespeichert:', this.formData);
  }
}
