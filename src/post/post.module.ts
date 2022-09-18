import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import KnexPostRepository from '../repositories/KnexPostRepository';
import { PostController } from './post.controller';
import Post from './post.model';

@Module({
  imports: [ObjectionModule.forFeature([Post])],
  controllers: [PostController],
  providers: [{ provide: 'PostRepository', useClass: KnexPostRepository }],
})
export class PostModule {}
