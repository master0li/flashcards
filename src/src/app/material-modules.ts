
import { NgModule } from '@angular/core';

import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [FlexLayoutModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule],
  exports: [FlexLayoutModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule],
})

export class MaterialModules {
}

