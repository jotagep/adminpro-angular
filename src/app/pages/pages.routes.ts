import { Routes, RouterModule } from '@angular/router';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

// Guards
import { AdminGuard } from '../services/service.index';

const pagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { titulo: 'Dashboard' }
  },
  {
    path: 'progress',
    component: ProgressComponent,
    data: { titulo: 'Inputs de progreso' }
  },
  {
    path: 'graficas1',
    component: Graficas1Component,
    data: { titulo: 'Graficas' }
  },
  {
    path: 'promesas',
    component: PromesasComponent,
    data: { titulo: 'Promesas' }
  },
  { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJS' } },
  {
    path: 'account-settings',
    component: AccountSettingsComponent,
    data: { titulo: 'Ajustes' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { titulo: 'Mi Perfil' }
  },
  {
    path: 'busqueda/:termino',
    component: BusquedaComponent,
    data: { titulo: 'Buscador' }
  },
  // Mantenimientos (ADMIN)
  {
    path: 'usuarios',
    component: UsuariosComponent,
    data: { titulo: 'Mantenimientos de Usuarios' },
    canActivate: [AdminGuard]
  },
  {
    path: 'hospitales',
    component: HospitalesComponent,
    data: { titulo: 'Mantenimientos de Hospitales' },
    canActivate: [AdminGuard]
  },
  {
    path: 'medicos',
    component: MedicosComponent,
    data: { titulo: 'Mantenimientos de Médicos' },
    canActivate: [AdminGuard]
  },
  {
    path: 'medico/:id',
    component: MedicoComponent,
    data: { titulo: 'Actualizar Médico' },
    canActivate: [AdminGuard]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
