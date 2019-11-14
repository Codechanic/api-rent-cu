import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Comment } from '../model/comment';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>
  ) {

  }

  /**
   * Find all comments
   */
  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  /**
   * Find comment by id
   * @param id
   */
  async find(id): Promise<Comment> {
    return this.commentRepository.findOne(id);
  }

  /**
   * Custom comment query
   * @param options
   */
  async findBy(options): Promise<Comment[]> {
    return this.commentRepository.find(options);
  }

  /**
   * Create a comment
   * @param comment
   */
  async create(comment): Promise<Comment> {
    return this.commentRepository.save(comment);
  }

  /**
   * Update a comment
   * @param comment
   */
  async update(comment): Promise<UpdateResult> {
    return this.commentRepository.update(comment.id, comment);
  }

  /**
   * delete a comment
   * @param id
   */
  async delete(id): Promise<DeleteResult> {
    return this.commentRepository.delete(id);
  }
}
