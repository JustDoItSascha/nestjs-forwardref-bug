import { forwardRef, Module } from '@nestjs/common';
import { ModuleBModule } from '../module-b/module-b.module';
import { ServiceAService } from './service-a/service-a.service';

@Module({
  imports: [
      forwardRef(() => ModuleBModule),
  ],
  providers: [ServiceAService],
  exports: [ServiceAService]
})
export class ModuleAModule {}
