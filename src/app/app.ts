import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

export const apiUrl = 'https://nestjs-blog-api-alen456.vercel.app/blogs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title ='angular-blog';

}
