import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { KpiCardComponent } from './kpi-card/kpi-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartModule } from 'angular-highcharts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropDownInputComponent } from './drop-down-input/drop-down-input.component';
import {MatSelectModule} from '@angular/material/select';
import {NgFor} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { ApplyButtonComponent } from './apply-button/apply-button.component';
import {MatButtonModule} from '@angular/material/button';
// import { MaterialTableComponent } from './material-table/material-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DashboardPageComponent,
    KpiCardComponent,
    DoughnutChartComponent,
    TextInputComponent,
    DropDownInputComponent,
    ApplyButtonComponent,
    // MaterialTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    MatGridListModule,
    ChartModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgFor,
    MatButtonModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    StoreModule.forFeature('newFeature', reducers)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
