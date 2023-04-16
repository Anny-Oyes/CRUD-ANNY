import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateComputerDto } from "./dto/computers.dto";
import { Computer } from "./entities/computers.entity";

@Injectable()

export class ComputerService {
    constructor (
        @InjectRepository(Computer)
        private readonly computerRepository: Repository<Computer>
    ) {}

    async create(computerDto: CreateComputerDto) {
        const computer = this.computerRepository.create(computerDto);
        await this.computerRepository.save(computer);

        return computer;
    }

    findAll(){
        return this.computerRepository.find();
    }

    findOne(id: string) {
        return this.computerRepository.findOneBy({id});
    }

    async remove(id: string){
        const computer = await this.findOne(id);
        await this.computerRepository.remove(computer);
        return 'Computadora eliminada sastifactoriamente'
    }

    async update(id: string, cambio: CreateComputerDto) {
        const findComputer = await this.findOne(id);
        const updatedComputer = await this.computerRepository.merge(
          findComputer,
          cambio,
        );
    
        return this.computerRepository.save(updatedComputer);
      }
    }