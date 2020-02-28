import { forwardRef, Module } from '@nestjs/common';
import { ModuleAModule } from '../module-a/module-a.module';
import { ServiceCService } from './service-c/service-c.service';

@Module({
  imports: [
    forwardRef(() => ModuleAModule),
  ],
  providers: [ServiceCService],
  exports: [ServiceCService],
})
export class ModuleCModule {}
