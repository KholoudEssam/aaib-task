import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReportBoxComponent } from './components/report-box/report-box.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
    declarations: [AppComponent, ReportBoxComponent, ReportsComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
