import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  solucionaHoram(): string {
    return 'Home manual solucionada';
  }
}
