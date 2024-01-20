import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Products') private readonly productModel: Model<ProductDocument>){

    }

    async all(): Promise<Product[]>{
        return this.productModel.find().exec();
    }

    async create(data): Promise<Product> {
        return new this.productModel(data).save();
    }

    findOne(id: number): Promise<Product>{
        return this.productModel.findById(id);
    }

    update(id: number, data: any):Promise<Product>{
        return this.productModel.findOneAndUpdate({id}, data);
    }


   async  delete(id: number): Promise<number> {
         this.productModel.deleteOne({id});
         return id;
    }
    
}
