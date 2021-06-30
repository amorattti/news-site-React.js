import Contact from './components/contact';
import Home from './components/home';
import PostComponent from './components/posts';

export const routes = [
  {
    path: "/article/:id",
    component: PostComponent,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/",
    component: Home,
  }
];