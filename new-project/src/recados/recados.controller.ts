import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

/**
 * CRUD
 * Create -> POST -> Cria um recado
 * Read -> GET -> Retorna todos os recados
 * Read -> GET -> Retorna um recado
 * Update -> PATCH / PUT -> Atualiza um recado
 * Delete -> DELETE -> Deleta um recado
 *
 * Definições de PATCH e PUT:
 * PATCH -> Atualiza parte de um recurso já existente
 * PUT -> Atualiza completamente todos os parâmetros
 */

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @Get()
  findAll() {
    return this.recadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recadosService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.recadosService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.recadosService.update(id, body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosService.remove(id);
  }
}
