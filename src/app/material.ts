import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatToolbarModule

    ],

    exports: [
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatToolbarModule

    ]
}) 

export class MyMaterialModule{

}