import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathComponent } from './math/math.component';
import { MisteryComponent } from './mistery/mistery.component';
import { WordsComponent } from './words/words.component';
import { TableComponent } from './table/table.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    MisteryComponent,
    WordsComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NzTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
