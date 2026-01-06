import { DataService } from './data.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
})
export class Home {
  private dataService = inject(DataService);
  posts$ = this.dataService.getPosts();
}
