import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:Open2020@localhost:27017',{
    autoCreate: true
  }), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
