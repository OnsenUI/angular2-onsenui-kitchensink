import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {OnsenModule} from 'angular2-onsenui';

import {routing, appRoutingProviders}      from './app.routing';
import {KitchenSink}                       from './app/kitchen-sink';
import {Tabbar}                            from './app/components/tabbar/tabbar';
import {Home}                              from './app/components/home/home';
import {PullHook}                          from './app/components/home/demos/pull-hook';
import {LazyRepeat}                        from './app/components/home/demos/lazy-repeat';
import {Splitter}                          from './app/components/home/demos/splitter';
import {Fab}                               from './app/components/home/demos/fab';
import {SpeedDial}                         from './app/components/home/demos/speed-dial';
import {Animations, TempPage}              from './app/components/animations/animations';
import {Forms}                             from './app/components/forms/forms';
import {Dialogs, TempDialog, TempPopover}  from './app/components/dialogs/dialogs';

// enableProdMode()

@NgModule({
    imports: [
        BrowserModule,
        OnsenModule,
        HttpModule,
        RouterModule,
        routing,
    ],
    declarations: [
        KitchenSink,
        Tabbar,
        Home,
        PullHook,
        LazyRepeat,
        Splitter,
        Fab,
        SpeedDial,
        Animations,
        TempPage,
        Forms,
        Dialogs,
        TempDialog,
        TempPopover,
    ],
    entryComponents: [
        PullHook,
        LazyRepeat,
        Splitter,
        Fab,
        SpeedDial,
        TempPage,
        TempDialog,
        TempPopover,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        appRoutingProviders,
    ],
    bootstrap: [
        KitchenSink,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
