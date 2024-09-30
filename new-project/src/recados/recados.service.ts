import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Este é um recado de teste',
      de: 'Joana',
      para: 'João',
      lido: false,
      data: new Date(),
    },
  ];

  throwNotFoundError() {
    throw new NotFoundException('Recado não encontrado');
  }

  findAll() {
    return this.recados;
  }

  findOne(id: number) {
    const recado = this.recados.find(item => item.id === +id);

    if (recado) return recado;

    this.throwNotFoundError();
  }

  create(createRecadoDto: CreateRecadoDto) {
    this.lastId++;
    const id = this.lastId;
    const newRecado = {
      id,
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };
    this.recados.push(newRecado);

    return newRecado;
  }

  update(id: string, updateRecadoDto: UpdateRecadoDto) {
    const index = this.recados.findIndex(item => item.id === +id);

    if (index < 0) {
      this.throwNotFoundError();
    }

    if (index >= 0) {
      const recadoExistente = this.recados[index];

      this.recados[index] = {
        ...recadoExistente,
        ...updateRecadoDto,
      };
    }
  }

  remove(id: number) {
    const index = this.recados.findIndex(item => item.id === id);

    if (index < 0) {
      this.throwNotFoundError();
    }

    const recado = this.recados[index];

    this.recados.splice(index, 1);

    return recado;
  }
}
