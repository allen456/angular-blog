import { Routes } from '@angular/router';
import { Post } from './post.component';
import { Home } from './home.component';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'post/:id', component: Post },
];
