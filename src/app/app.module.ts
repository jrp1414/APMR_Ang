import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import {
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    StructDirectivesComponent,
    ProductThumbnailComponent
} from "./components/component.index";

import { ShortenPipe } from "./pipes/shorten.pipe";
import { ConvertToPipe } from './pipes/convert-to.pipe';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import {BasicHighlightDirective} from "./directives/basic-highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    StructDirectivesComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    ConvertToPipe,
    FilterProductPipe,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
