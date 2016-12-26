import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }  from "./app.component";
import {NavigationComponent} from "./modules/common/navigation/navigation.component";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, NavigationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
