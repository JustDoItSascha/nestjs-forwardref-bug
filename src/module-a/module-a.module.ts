import { forwardRef, Module } from '@nestjs/common';
import { ModuleCModule } from '../module-c/module-c.module';
import { ServiceAService } from './service-a/service-a.service';

@Module({
  imports: [
      forwardRef(() => ModuleCModule),
  ],
  providers: [ServiceAService],
  exports: [ServiceAService]
})
export class ModuleAModule {}
