import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://rwmvcrnc:UHUg70ea2vdPt6h69IN9O0c4D9bFRUrr@shrimp.rmq.cloudamqp.com/rwmvcrnc'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

   app.listen();

 
}
bootstrap();
