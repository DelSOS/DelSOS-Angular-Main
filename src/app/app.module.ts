import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomepageComponent } from './delsos/homepage/homepage.component';
import { NavigationBarComponent } from './delsos/components/navigation-bar/navigation-bar.component';
import { SignInComponent } from './delsos/sign-in/sign-in.component';
import { RegisterComponent } from './delsos/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PersonalInfoComponent } from './delsos/register/personal-info/personal-info.component';
import { LoginInfoComponent } from './delsos/register/login-info/login-info.component';
import { BankInfoComponent } from './delsos/register/bank-info/bank-info.component';
import { FooTerComponent } from './delsos/components/foo-ter/foo-ter.component';
import { HttpClientModule } from '@angular/common/http';
import { NotifComponent } from './delsos/components/notif/notif.component';
import { LoadingComponent } from './delsos/components/loading/loading.component';
import { NotFoundPageComponent } from './delsos/components/not-found-page/not-found-page.component';
import {ToastrModule} from 'ngx-toastr';
import { ShopperProfileComponent } from './delsos/shopper-profile/shopper-profile.component';
import { ComponentsComponent } from './components/components.component';
import { AuthentificationInterceptorProvider } from './interceptors/auth.interceptor';
import { NgbdModalBasic } from './delsos/components/modal/modal.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { StoreProfileComponent } from './delsos/store-profile/store-profile.component';
import { InfoItemComponent } from './delsos/store-profile/info-item/info-item/info-item.component';
import { StoreRegisterComponent } from './delsos/store-register/register.component';
import { CommonModule } from '@angular/common';
import { DeliveryCardShopperComponent } from './delsos/components/delivery-card-shopper/delivery-card-shopper.component';
import { UpdatePasswordModelComponent } from './delsos/components/update-password-model/update-password-model.component';
import { StoreProfileModalComponent } from './delsos/store-profile/modal/modal.component';
import { TrackModalComponent } from './shared/track-modal/track-modal.component';
import { DeliveriesCatalogComponent } from './delsos/deliveries-catalog/deliveries-catalog.component';
import { JwtService } from './shared/Services/JWTService.service';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomepageComponent,
        NavigationBarComponent,
        SignInComponent,
        RegisterComponent,
        FooterComponent,
        PersonalInfoComponent,
        LoginInfoComponent,
        ShopperProfileComponent,
        BankInfoComponent,
        FooTerComponent,
        NotifComponent,
        LoadingComponent,
        NotFoundPageComponent,
        NgbdModalBasic,
        StoreProfileComponent,
        InfoItemComponent,
        StoreRegisterComponent,
        DeliveryCardShopperComponent,
        UpdatePasswordModelComponent,

        StoreProfileModalComponent,

        TrackModalComponent,

        DeliveriesCatalogComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        ToastrModule.forRoot(),
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 300,
        
          }) // ToastrModule added

    ],
    providers: [AuthentificationInterceptorProvider,JwtService],
    bootstrap: [AppComponent]
})
export class AppModule { }
