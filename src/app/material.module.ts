import { NgModule } from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule, MatButtonModule, MatDatepickerModule, MatCheckboxModule, MatRadioModule, MatCardModule, MatStepperModule, MatToolbarModule, MatDialogModule, MatSnackBarModule, MatDividerModule, MatTooltipModule, MatIconModule, MatAutocompleteModule, MatExpansionModule, MatChipsModule} from '@angular/material';

@NgModule({
    imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatSliderModule, MatCardModule, MatStepperModule, MatToolbarModule, MatDialogModule, MatSnackBarModule, MatDividerModule, MatTooltipModule, MatIconModule, MatAutocompleteModule, MatExpansionModule, MatChipsModule],
    exports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatSliderModule, MatCardModule, MatStepperModule, MatToolbarModule, MatDialogModule, MatSnackBarModule, MatDividerModule, MatTooltipModule, MatIconModule, MatAutocompleteModule, MatExpansionModule, MatChipsModule]
})

export class MaterialModule {}