import { Body, Controller, Get, Post, Patch, ParseUUIDPipe } from "@nestjs/common";
import { Delete, Param } from "@nestjs/common/decorators";
import { CreateCustomerDto } from "./dto/customers.dto";
import { CustomerService } from "./customers.service";

@Controller('customers')

export class CustomerController {
    constructor (
        private readonly customerServiceRepo: CustomerService
    ){}
        @Post()
        create(@Body() customerDto: CreateCustomerDto){
            return this.customerServiceRepo.create(customerDto);
    }

    @Get()
    findAll(){
        return this.customerServiceRepo.findAll();
    }

    @Get(':id')
    findOne(
        @Param('id', ParseUUIDPipe) id: string) {
            return this.customerServiceRepo.findOne(id);
        }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.customerServiceRepo.remove(id);
    }

    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateCustomerDto: CreateCustomerDto
    ){
      return this.customerServiceRepo.update(id, updateCustomerDto);
    }
  }
