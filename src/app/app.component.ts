import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./Pages/inicio/inicio.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, InicioComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'proyecto-clase';

  nombre : string = "Nicolas Zamora Calderon";

  edad : number = 5;

}
