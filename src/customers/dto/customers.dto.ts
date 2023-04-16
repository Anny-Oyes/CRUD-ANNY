import { IsString, IsNotEmpty, IsNumber, MinLength, IsOptional } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsString()
    @IsOptional()
    lastName?: string;

    @IsString()
    @IsOptional()
    direction?: string;

    @IsString()
    @IsNotEmpty()
    cell: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsNotEmpty()
    paymentType: string;

}
