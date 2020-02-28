import { forwardRef, Module } from '@nestjs/common';
import { ModuleCModule } from '../module-c/module-c.module';
import { ServiceBService } from './service-b/service-b.service';

@Module({
  imports: [
    forwardRef(() => ModuleCModule),
  ],
  providers: [ServiceBService],
  exports: [ServiceBService],
})
export class ModuleBModule {}
