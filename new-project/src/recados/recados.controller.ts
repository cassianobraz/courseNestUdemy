import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll() {
    return 'This action returns all recados';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} recado`;
  }

  @Post()
  create() {
    return 'This action adds a new recado';
  }
}
