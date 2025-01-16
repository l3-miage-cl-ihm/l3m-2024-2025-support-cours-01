import { Component, computed, effect, output, signal } from '@angular/core';
import { College } from '../../data/college.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtre-college',
  imports: [
    FormsModule
  ],
  templateUrl: './filtre-college.component.html',
  styleUrl: './filtre-college.component.scss'
})
export class FiltreCollegeComponent {
  readonly filterFct = output<(college: College) => boolean>();

  protected readonly str           = signal<string>('');
  protected readonly nbMinStudents = signal<number>(0);

  private readonly strLowerCase = computed(
    () => this.str().toLowerCase()
  )

  private readonly _emitFilterFct = effect(
    () => {
      this.filterFct.emit(
        (college: College) => college.denomination_principale.toLowerCase().includes(this.strLowerCase())
          && college.nombre_eleves_total >= this.nbMinStudents()
      );
    }
  );

}
