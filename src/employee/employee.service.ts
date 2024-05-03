import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {

  constructor(@InjectModel(Employee.name) private readonly employeeModel: Model<Employee>) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const createdEmployee = await this.employeeModel.create(createEmployeeDto);
    return createdEmployee;
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
