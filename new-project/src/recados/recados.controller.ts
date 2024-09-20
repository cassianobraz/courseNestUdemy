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
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

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

//! DTO - Data Transfer Object -> Objeto de transferência de dados
//! objeto simples -> validar dados / Transformar dados

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
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recadosService.create(createRecadoDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecadoDto: UpdateRecadoDto) {
    return this.recadosService.update(id, updateRecadoDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosService.remove(id);
  }
}
