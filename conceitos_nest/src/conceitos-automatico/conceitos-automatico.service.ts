import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  solucionaHoram(): string {
    return 'Home automático solucionada';
  }
}
