import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@core';

@Controller('tecnologias')
export class TecnologiaController {

    @Get()
    async obterTodas(): Promise<Tecnologia[]> {
        return [
            {
                id:1,
                nome: "Javascript",
                descricao: "descricao",
                imagem: "imagem",
                destaque: true
            }
        ]

    }
}
