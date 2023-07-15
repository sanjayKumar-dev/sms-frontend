import { NgModule } from '@angular/core'
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SmsSidenavComponent } from './sms/pages/sms-sidenav/sms-sidenav.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatIconRegistry } from "@angular/material/icon"
import {MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './sms/pages/header/header.component';
import { FooterComponent } from './sms/pages/footer/footer.component';
import { WelcomeComponent } from './sms/components/welcome/welcome.component'

@NgModule({
  declarations: [
    AppComponent,
    SmsSidenavComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      const icons: Array<string> = ['logo']
      icons.forEach( (icon) => {
        this.matIconRegistry.addSvgIcon(
          icon,
          this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/image/${icon}.svg`)
        )
      })
    }
}
