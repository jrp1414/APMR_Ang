import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from "@angular/router";

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
import { BasicHighlightDirective } from "./directives/basic-highlight.directive";
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { TempThumbnailComponent } from './components/temp-thumbnail/temp-thumbnail.component';
import { LoggingService } from './services/logging.service';
import { ProductService } from './services/product.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

// const routeConfig:Route[] = [
const routeConfig: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductDetailsComponent },
  { path: "", redirectTo: "home", pathMatch:"full" },
  { path: "**", redirectTo: "home" },
];


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
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempThumbnailComponent,
    DashboardComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [LoggingService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
