import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeroesVillanosService } from './heroes-villanos.service';
import { CreateHeroesVillanoDto } from './dto/create-heroes-villano.dto';
import { UpdateHeroesVillanoDto } from './dto/update-heroes-villano.dto';

@Controller('heroes-villanos')
export class HeroesVillanosController {
  constructor(private readonly heroesVillanosService: HeroesVillanosService) {}

  @Post()
  create(@Body() createHeroesVillanoDto: CreateHeroesVillanoDto) {
    return this.heroesVillanosService.create(createHeroesVillanoDto);
  }

  @Get()
  findAll() {
    return this.heroesVillanosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.heroesVillanosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateHeroesVillanoDto: UpdateHeroesVillanoDto) {
    return this.heroesVillanosService.update(id, updateHeroesVillanoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.heroesVillanosService.remove(id);
  }
}
