import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComponentsAndPropertyBindingComponent } from './components-and-property-binding/components-and-property-binding.component';
import { TypescriptDemoComponent } from './typescript-demo/typescript-demo.component';
import { ComponentapiInputOutputComponent } from './componentapi-input-output/componentapi-input-output.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { RoutingAndNavigationComponent } from './routing-and-navigation/routing-and-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsAndPropertyBindingComponent,
    TypescriptDemoComponent,
    ComponentapiInputOutputComponent,
    DirectivesDemoComponent,
    RoutingAndNavigationComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
