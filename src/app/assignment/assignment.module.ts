import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatExpansionModule } from '@angular/material/expansion';

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LoadingComponent } from '../loading'
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { AssignmentComponent } from './assignment.component';
import { AssignmentRoutingModule } from './assignment.routig.module'



@NgModule({
  declarations: [
    LoadingComponent,
    HeaderComponent,
    AssignmentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatAutocompleteModule,
    ScrollingModule,
    AssignmentRoutingModule

  ],
  bootstrap: [AssignmentComponent]
})
export class AssignmentModule { }
