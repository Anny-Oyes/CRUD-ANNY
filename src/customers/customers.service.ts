import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCustomerDto } from "./dto/customers.dto";
import { Customer } from "./entities/customer.entity";

@Injectable()

export class CustomerService {
    constructor (
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>
    ) {}

    async create(customerDto: CreateCustomerDto) {
        const customer = this.customerRepository.create(customerDto);
        await this.customerRepository.save(customer);

        return customer;
    }

    findAll(){
        return this.customerRepository.find();
    }

    findOne(id: string) {
        return this.customerRepository.findOneBy({id});
    }

    async remove(id: string){
        const customer = await this.findOne(id);
        await this.customerRepository.remove(customer);
        return 'El cliente ha sido eliminado de la base de datos'
    }

    async update(id: string, cambio: CreateCustomerDto) {
        const findCustomer = await this.findOne(id);
        const updatedCustomer = await this.customerRepository.merge(
          findCustomer,
          cambio,
        );
    
        return this.customerRepository.save(updatedCustomer);
      }
    }