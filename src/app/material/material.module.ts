import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from '@angular/material/slider';

const MaterialComponents = [MatButtonModule, MatSliderModule]

@NgModule({
    declarations: [],
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule {
}
