/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ClientService {
  constructor(@InjectRepository(Client) private clientRepository: Repository<Client> ) {

  }

  create(createClientDto: CreateClientDto) {
    const newClient = this.clientRepository.create(createClientDto)
    return this.clientRepository.save(newClient);
  }

  getAll() {
    return this.clientRepository.find();
  }

  findOne(id: string) {
    return this.clientRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update({id}, updateClientDto);
  }

  remove(id: string) {
    this.clientRepository.delete(id);
  }
}
