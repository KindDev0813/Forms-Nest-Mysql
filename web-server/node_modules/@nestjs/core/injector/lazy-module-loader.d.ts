import { DynamicModule, Type } from '@nestjs/common';
import { DependenciesScanner } from '../scanner';
import { ModuleCompiler } from './compiler';
import { InstanceLoader } from './instance-loader';
import { LazyModuleLoaderLoadOptions } from './lazy-module-loader-options.interface';
import { ModuleRef } from './module-ref';
import { ModulesContainer } from './modules-container';
export declare class LazyModuleLoader {
    private readonly dependenciesScanner;
    private readonly instanceLoader;
    private readonly moduleCompiler;
    private readonly modulesContainer;
    constructor(dependenciesScanner: DependenciesScanner, instanceLoader: InstanceLoader, moduleCompiler: ModuleCompiler, modulesContainer: ModulesContainer);
    load(loaderFn: () => Promise<Type<unknown> | DynamicModule> | Type<unknown> | DynamicModule, loadOpts?: LazyModuleLoaderLoadOptions): Promise<ModuleRef>;
    private registerLoggerConfiguration;
    private createLazyModulesContainer;
    private getTargetModuleRef;
}
