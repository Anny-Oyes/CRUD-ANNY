import { Body, Controller, Get, Post, Patch, ParseUUIDPipe } from "@nestjs/common";
import { Delete, Param } from "@nestjs/common/decorators";
import { CreateComputerDto } from "./dto/computers.dto";
import { ComputerService } from "./computers.service";

@Controller('computers')

export class ComputerController {
    constructor (
        private readonly computerServiceRepo: ComputerService
    ){}
        @Post()
        create(@Body() computerDto: CreateComputerDto){
            return this.computerServiceRepo.create(computerDto);
    }

    @Get()
    findAll(){
        return this.computerServiceRepo.findAll();
    }

    @Get(':id')
    findOne(
        @Param('id', ParseUUIDPipe) id: string) {
            return this.computerServiceRepo.findOne(id);
        }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.computerServiceRepo.remove(id);
    }

    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateComputerDto: CreateComputerDto
    ){
      return this.computerServiceRepo.update(id, updateComputerDto);
    }
  }
