import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-headarmeni',
  standalone: false,
  
  templateUrl: './headarmeni.component.html',
  styleUrl: './headarmeni.component.css'
})
export class HeadarmeniComponent {
  @HostListener('click', ['$event'])
onClick(event: Event): void {
  event.preventDefault();
  const targetElement = event.target as HTMLElement;
  if (targetElement.id === 'sidebarToggle' || targetElement.closest('#sidebarToggle')) {
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', JSON.stringify(document.body.classList.contains('sb-sidenav-toggled')));
  }
  if (targetElement.id === 'navbarDropdown' || targetElement.closest('#navbarDropdown')) {
    const dropdownMenu = document.querySelector('ul[aria-labelledby="navbarDropdown"]');
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('show');
    }
  }
}
}
