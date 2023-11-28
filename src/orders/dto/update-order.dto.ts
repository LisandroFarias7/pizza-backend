/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    cantidad: number;
    descripcion: string;
    clientId: string;
    imageUrl: string;
    precio: number;
    titulo: string;
}
