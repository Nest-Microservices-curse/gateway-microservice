import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_SERVICE, envs } from 'src/config';
import { env } from 'process';
@Module({
  imports: [
    ClientsModule.register([
      { name: PRODUCT_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.productMicroserviceHost,
          port: envs.productMicroservicePort
        }
       },
    ]),
  ],
  controllers: [ProductsController],

})
export class ProductsModule {}
