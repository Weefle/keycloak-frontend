import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() totalResults: number = 0;
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  pages?: number[];

  getPages(): number[] {
    const maxVisiblePages = 5; // nombre maximal de numéros de page affichés
    const currentPage = this.currentPage;
    const totalPages = this.totalPages;
    const pages: number[] = [];
  
    // Si le nombre de pages est inférieur ou égal à maxVisiblePages, on affiche tous les numéros
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Sinon, on détermine les numéros de page à afficher autour de la page courante
      let start = Math.max(2, currentPage - 2);
      let end = Math.min(totalPages - 1, currentPage + 2);
  
      // Si la page courante est trop proche du début, on décale la fin pour afficher maxVisiblePages pages
      if (start === 2) {
        end = Math.min(totalPages - 1, start + maxVisiblePages - 2);
      }
  
      // Si la page courante est trop proche de la fin, on décale le début pour afficher maxVisiblePages pages
      if (end === totalPages - 1) {
        start = Math.max(2, end - maxVisiblePages + 2);
      }
  
      // Ajout des numéros de page
      pages.push(1);
      /*if (start > 2) {
        pages.push(-1); // marqueur pour indiquer qu'il y a des pages cachées
      }*/
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      /*if (end < totalPages - 1) {
        pages.push(-1); // marqueur pour indiquer qu'il y a des pages cachées
      }
      pages.push(totalPages);*/
    }
  
    return pages;
  }
  

ngOnChanges() {
  this.pages = [];
  for (let i = 1; i <= this.totalPages; i++) {
    this.pages.push(i);
  }
}

setCurrentPage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }
}

}
