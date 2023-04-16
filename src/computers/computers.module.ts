import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Computer } from "./entities/computers.entity";
import { ComputerService } from "./computers.service";
import { ComputerController } from "./computers.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Computer])],
    controllers: [ComputerController],
    providers: [ComputerService],
})

export class ComputersModule{}