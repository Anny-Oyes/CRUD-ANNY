import { IsString, IsNotEmpty, IsNumber, MinLength, IsOptional } from "class-validator";

export class CreateComputerDto {
    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsString()
    @IsOptional()
    @MinLength(20)
    description?: string;

    @IsString()
    @IsNotEmpty()
    components: string;

    @IsString()
    @IsNotEmpty()
    properties: string;

    @IsString()
    @IsOptional()
    color?: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

}
