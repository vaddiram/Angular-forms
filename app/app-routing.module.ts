import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path:'',component:XyzComponent
  },
  {
    path:'xyz',component:XyzComponent
  },
  {
    path:'edit',component:EditComponent
  },
  {
    path:'add',component:AddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
