/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ClientService {
  constructor(@InjectRepository(Client) private clientRepository: Repository<Client> ) {

  }


  async createUser(userData: Partial<Client>): Promise<Client> {
    
    
    const newUser = this.clientRepository.create(userData);
    return await this.clientRepository.save(newUser);
  }

  async getUsers(): Promise<Client[]>{
    return await this.clientRepository.find()
  }

  async getUser(id: string) {
    return await this.clientRepository.findOneBy({
      id
    })
  }

  async deleteUser(id: string) {
    return await this.clientRepository.delete({id})
  }
}
