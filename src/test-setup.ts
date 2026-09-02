import 'zone.js';
import 'zone.js/testing';
import '@angular/compiler';
import '../node_modules/@analogjs/vitest-angular/setup-vitest.js';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

HTMLCanvasElement.prototype.getContext ??= () => ({}) as CanvasRenderingContext2D;

getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
