import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { RouterModule } from '@angular/router';
import { HeroesComponent }  from './heroes.component';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroesComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ]
})
export class AppModule { }
