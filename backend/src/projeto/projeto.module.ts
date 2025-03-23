import { Module } from '@nestjs/common';
import { ProjetoProvider } from './projeto.provider';

@Module({
  providers: [ProjetoProvider]
})
export class ProjetoModule {}
