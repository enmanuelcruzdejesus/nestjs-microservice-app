import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    TypeOrmModule.forFeature([Product] ),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://rwmvcrnc:UHUg70ea2vdPt6h69IN9O0c4D9bFRUrr@shrimp.rmq.cloudamqp.com/rwmvcrnc'],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports : [ProductService]
})
export class ProductModule {}
