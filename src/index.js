import './style.css';
import { loadPageSkeleton } from './load-page-skeleton';
import { showHome } from './show-home.js'
import { addButtonEventListeners, returnAllButtons, createPageButtonEventListeners } from './button-properties';

loadPageSkeleton();
showHome();
addButtonEventListeners(returnAllButtons());
createPageButtonEventListeners(returnAllButtons());