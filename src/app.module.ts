import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleCModule } from './module-c/module-c.module';

@Module({
  imports: [ModuleAModule, ModuleCModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
