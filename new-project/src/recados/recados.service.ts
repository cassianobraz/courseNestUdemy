import { Injectable } from '@nestjs/common';
import { Recado } from './entities/recado.entity';

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

  findAll() {
    return this.recados;
  }

  findOne(id: string) {
    return this.recados.find(item => item.id === +id);
  }

  create(body: any) {
    this.lastId++;
    const id = this.lastId;
    const newRecado: Recado = {
      id,
      ...body,
    };
    this.recados.push(newRecado);

    return newRecado;
  }

  update(id: string, body: any) {
    const index = this.recados.findIndex(item => item.id === +id);

    if (index >= 0) {
      const recadoExistente = this.recados[index];

      this.recados[index] = {
        ...recadoExistente,
        ...body,
      };
    }
  }

  remove(id: string) {
    const index = this.recados.findIndex(item => item.id === +id);
    if (index >= 0) {
      this.recados.splice(index, 1);
    }
  }
}
