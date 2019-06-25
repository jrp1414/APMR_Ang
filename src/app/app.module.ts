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
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TdfExampleComponent } from './components/tdf-example/tdf-example.component';

// const routeConfig:Route[] = [
const routeConfig: Routes = [
  { path: "home", component: DashboardComponent },
  // { path: "products", component: ProductListComponent,canActivate:[AuthGuardService] , children:[
  {
    path: "products", component: ProductListComponent,canActivateChild:[], children: [
      // { path: ":id", component: ProductDetailsComponent,canActivate: [AuthGuardService] },
      // { path: ":id/edit", component: ProductEditComponent,canActivate: [AuthGuardService] }
      { path: ":id", component: ProductDetailsComponent },
      { path: ":id/edit", component: ProductEditComponent }
    ]
  },
  {path:"tdf",component:TdfExampleComponent},
  // { path: "products/:id", component: ProductDetailsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "**", redirectTo: "home" },
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
    ProductDetailsComponent,
    ProductEditComponent,
    TdfExampleComponent
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
