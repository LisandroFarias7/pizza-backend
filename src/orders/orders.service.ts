/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { ClientService } from 'src/client/client.service';
import { CreateOrderDto } from './dto/create-order.dto';



@Injectable()
export class OrdersService {

  constructor(@InjectRepository(Order) private orderRepository: Repository<Order>,
  private clientService: ClientService) { }

  async create(order: CreateOrderDto) {

    const newMenu = this.orderRepository.create(order);
    return await this.orderRepository.save(newMenu);

  }

  findAll() {
    return this.orderRepository.find()
  }

  async findOne(id: string) {
    return await this.orderRepository.findOne({
      where: {
        id
      }
    })
  }

  async update(id: string, updateOrderDto: Partial<Order>) {

    const order = await this.orderRepository.findOne({
      where: {
        id
      }
    });

    await this.orderRepository.update(id, updateOrderDto)
    return order;
  }

  remove(id: string) {
    return this.orderRepository.delete(id)
  }
}
