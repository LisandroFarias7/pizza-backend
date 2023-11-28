/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'order'})
export class Order {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    titulo: string

    @Column()
    descripcion: string

    @Column()
    client_id: string;

    @Column()
    precio: number;

    @Column()
    imageUrl: string;

    @Column()
    cantidad: number;

    // @ManyToOne(() => Client, (client) => client.orders)
    // client: Client;
}
