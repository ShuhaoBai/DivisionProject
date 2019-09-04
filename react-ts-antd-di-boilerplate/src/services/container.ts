// Note that this import MUST go before the inversify import
import 'reflect-metadata';
import { createInjection } from 'react-injection';
import { Container } from 'inversify';
import { ThemeService, ThemeServiceKey } from 'services/interfaces/ThemeService';
import ThemeServiceImpl from '@extensions/services/ThemeServiceImpl';

// Create the Container
const appContainer = new Container();

// Bind service implementations to their respective keys
appContainer.bind<ThemeService>(ThemeServiceKey).to(ThemeServiceImpl);

const { InjectionProvider, injectComponent, useInject } = createInjection();

export { InjectionProvider, injectComponent, useInject, appContainer };

export interface ServiceProps {
    themeService: ThemeService;
};

export const serviceKeys = { 
    themeService: ThemeServiceKey 
}