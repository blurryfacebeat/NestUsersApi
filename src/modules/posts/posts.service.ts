import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PostsModel } from './posts.model';
import { FilesService } from '../files/files.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostsModel) private postRepository: typeof PostsModel,
    private filesService: FilesService,
  ) {}

  async createPost(dto: CreatePostDto, image: string) {
    const fileName = await this.filesService.createFile(image);
    return await this.postRepository.create({ ...dto, image: fileName });
  }
}
