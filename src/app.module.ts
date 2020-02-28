import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleBModule } from './module-b/module-b.module';
import { ModuleCModule } from './module-c/module-c.module';

@Module({
  imports: [ModuleAModule, ModuleBModule, ModuleCModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
