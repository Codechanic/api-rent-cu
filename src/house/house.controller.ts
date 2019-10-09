import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards } from '@nestjs/common';

import { HouseService } from '../services/house.service';
import { AuthGuard } from '@nestjs/passport';
import { HomeStay } from '../model/homestay';

/**
 * House api endpoints
 */
@Controller('house')
export class HouseController {

  /**
   * Controller constructor
   * @param houseService Instance of HouseService
   */
  constructor(private readonly houseService: HouseService) {
  }

  /**
   * Api endpoint to retrieve all houses
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(): Promise<HomeStay[]> {

    /* return all houses retrieved using house service */
    return this.houseService.findAll();
  }

}
