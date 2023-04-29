import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { FooterComponent } from '../component/footer/footer.component';
// import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatTooltipModule,
  ],exports:[
    NgbModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class SharedModule { }
