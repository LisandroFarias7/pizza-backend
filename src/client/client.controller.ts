/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll() {
    return this.clientService.getUsers();
  }

  @Post()
    async registerUser(@Body() userData: Partial<Client>) {
    await this.clientService.createUser(userData);
  return console.log({message: 'Created Client Successfully'});
  
  }

  @Get(':id')
  getUser(id: string) {
    return this.clientService.getUser(id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
   this.clientService.deleteUser(id);
    return console.log({message: 'Deleted Order Successfully'});
  }
 
}
