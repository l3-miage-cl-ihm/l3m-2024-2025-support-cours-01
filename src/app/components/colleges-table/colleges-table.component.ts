import { Component, computed, input, InputSignal, model, ModelSignal, output, OutputEmitterRef } from '@angular/core';
import { College } from '../../data/college.interface';

@Component({
  selector: 'app-colleges-table',
  imports: [],
  templateUrl: './colleges-table.component.html',
  styleUrl: './colleges-table.component.scss'
})
export class CollegesTableComponent {
  readonly data      = input.required<readonly College[]>();
  readonly nbPerPage = input<number>(10);
  readonly page = model<number>(0);

  private readonly displayFromIndex = computed<number>(
    () => this.page() * this.nbPerPage()
  );
  protected readonly displayedData = computed<readonly College[]>(
    () => this.data().slice(this.displayFromIndex(), this.displayFromIndex() + this.nbPerPage())
  )

  private nbPages() {
    return Math.ceil(this.data().length / this.nbPerPage());
  }  
  
  protected previousPage() {
    this.page.update( p => Math.max(0, p - 1) )
  }

  protected nextPage() {
    this.page.update( p => Math.min(this.nbPages() - 1, p + 1) )
  }
}
