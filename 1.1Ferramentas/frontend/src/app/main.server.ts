import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { config } from './app.config.server';
import { App } from './app';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
