import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { House } from '../model/house.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { HomeStay } from '../model/homestay';

/**
 * House handling service
 */
@Injectable()
export class HouseService {

  /**
   * Service constructor
   * @param houseRepository Instance of TypeORM's repository service
   */
  constructor(
    @InjectRepository(HomeStay)
    private readonly houseRepository: Repository<HomeStay>) {
  }

  /**
   * Find all houses
   */
  async findAll(): Promise<HomeStay[]> {

    /* return all houses, including their relationship with Manager */
    return await this.houseRepository.find();
  }
}
