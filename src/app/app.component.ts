import { Component, computed, inject, signal } from '@angular/core';
import { DataProcessService } from './services/data-process.service';
import { CollegesTableComponent } from './components/colleges-table/colleges-table.component';
import { FormsModule } from '@angular/forms';
import { College } from './data/college.interface';
import { FiltreCollegeComponent } from './components/filtre-college/filtre-college.component';
@Component({
    selector: 'app-root',
    imports: [
      CollegesTableComponent,
      FiltreCollegeComponent,
      FormsModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly dataProcessSrv = inject(DataProcessService);
  protected readonly colleges = this.dataProcessSrv.colleges;

  protected readonly nbPerPage = signal<number>(10);

  /**
   * Filtres
   */
  protected readonly filter = signal<(college: College) => boolean>(
    () => true
  );

  protected readonly filteredColleges = computed<readonly College[]>(
    () => {
      console.log('filtering colleges', this.filter());
      return this.colleges().filter(this.filter())
    }
  );
}
