import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchModule } from './search/search.module';
import { SearchStartComponent } from './search-start/search-start.component';
import { CreateModule } from './create/create.module';
import { UserModule } from './user/user.module';

const appRoutes: Routes = [
      { path : 'top',
        component: WelcomeComponent
      },
      { path : 'search',
        component: SearchStartComponent
      },
       { path: '',
        redirectTo: '/top',
        pathMatch: 'full'
       } 
       //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot( appRoutes,
			    {enableTracing: true }),
      SearchModule,
      CreateModule,
      UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
