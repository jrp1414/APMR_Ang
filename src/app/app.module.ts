import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

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
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpDeactivateGuardService } from './services/sign-up-deactivate-guard.service';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentNewComponent } from './students/student-new/student-new.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';

// const routeConfig:Route[] = [
const routeConfig: Routes = [
  { path: "home", component: DashboardComponent },
  // { path: "products", component: ProductListComponent,canActivate:[AuthGuardService] , children:[
  {
    path: "products", component: ProductListComponent, canActivateChild: [], children: [
      // { path: ":id", component: ProductDetailsComponent,canActivate: [AuthGuardService] },
      // { path: ":id/edit", component: ProductEditComponent,canActivate: [AuthGuardService] }
      { path: ":id", component: ProductDetailsComponent },
      { path: ":id/edit", component: ProductEditComponent }
    ]
  },
  { path: "tdf", component: TdfExampleComponent },
  { path: "signup", component: SignUpComponent, canDeactivate: [SignUpDeactivateGuardService] },
  {
    // path: "students", component: StudentsComponent,canActivate:[AuthGuardService],
    path: "students", component: StudentsComponent,
    children:[
      {path:"new",component:StudentNewComponent},
      {path:":id",component:StudentDetailsComponent},
      {path:":id/edit",component:StudentEditComponent}
    ]
  },
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
    TdfExampleComponent,
    SignUpComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentNewComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule
  ],
  providers: [LoggingService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
