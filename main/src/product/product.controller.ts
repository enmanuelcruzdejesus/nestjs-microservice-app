import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('product')
export class ProductController {


    constructor(private productService: ProductService){

    }

    @Get('all')
    async all(){
        return this.productService.all();
    }

    @EventPattern('hello')
    async hello (data: string){
        console.log(data);
    }
}
