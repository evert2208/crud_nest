import { PartialType } from '@nestjs/mapped-types';
import { CreateHeroesVillanoDto } from './create-heroes-villano.dto';

export class UpdateHeroesVillanoDto extends PartialType(CreateHeroesVillanoDto) {}
