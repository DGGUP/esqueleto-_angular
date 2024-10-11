import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RegistroComponent } from './componentes/registro/registro.component';

export const routes: Routes = [

{
    path:" ",
    component: InicioComponent
},

{
    path:"contactanos",
    component: ContactoComponent
},

{
    path:"registrate",
    component: RegistroComponent
},

];
