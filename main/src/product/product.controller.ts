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

    @EventPattern('product_created')
    async productCreated (data: any){
        await this.productService.create({
            id: data.id,
            title: data.title,
            image: data.image,
            likes: data.likes
        });

    }

    @EventPattern('product_updated')
    async productUpdated(data: any){
        await this.productService.update(data.id,{
            id: data.id,
            title: data.title,
            image: data.image,
            likes: data.likes
        });

    }

    @EventPattern('product_deleted')
    async productDeleted(id: number){
    
        this.productService.delete(id);
    }
}
