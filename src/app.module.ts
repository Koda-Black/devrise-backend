import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [NinjasModule, UsersModule, BlogModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
