
import { ArrayMinSize, IsArray, ValidateNested } from "class-validator";
import { OrderItemDto } from "./index";
import { Type } from "class-transformer";

export class CreateOrderDto {

    // @IsNumber()
    // @IsPositive()
    // totalAmount: number;

    // @IsNumber()
    // @IsPositive()
    // totalItems: number;

    // @IsEnum(OrderStatusList, {
    //     message: `Possible status values are ${ OrderStatusList}`
    // })
    // @IsOptional()
    // status: OrderStatus = OrderStatus.PENDING;

    // @IsBoolean()
    // paid: boolean = false;
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true})
    @Type( () =>  OrderItemDto)
    items: OrderItemDto[];

}
