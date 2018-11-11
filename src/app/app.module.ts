import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComponentsAndPropertyBindingComponent } from './components-and-property-binding/components-and-property-binding.component';
import { TypescriptDemoComponent } from './typescript-demo/typescript-demo.component';
import { ComponentapiInputOutputComponent } from './componentapi-input-output/componentapi-input-output.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { RoutingAndNavigationComponent } from './routing-and-navigation/routing-and-navigation.component';

const routes: Routes = [
  { path: 'directives', component: DirectivesDemoComponent },
  { path: 'routing', component: RoutingAndNavigationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentsAndPropertyBindingComponent,
    TypescriptDemoComponent,
    ComponentapiInputOutputComponent,
    DirectivesDemoComponent,
    RoutingAndNavigationComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
