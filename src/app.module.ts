import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [NinjasModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
