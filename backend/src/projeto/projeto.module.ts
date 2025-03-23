import { Module } from '@nestjs/common';
import { ProjetoProvider } from './projeto.provider';
import { ProjetoController } from './projeto.controller';

@Module({
  providers: [ProjetoProvider],
  controllers: [ProjetoController]
})
export class ProjetoModule {}
