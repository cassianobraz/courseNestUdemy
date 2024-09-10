import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

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
  @Get()
  findAll() {
    return 'This action returns all recados';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} recado`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }
}
