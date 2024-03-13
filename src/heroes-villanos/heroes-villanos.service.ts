import { Injectable } from '@nestjs/common';
import { CreateHeroesVillanoDto } from './dto/create-heroes-villano.dto';
import { UpdateHeroesVillanoDto } from './dto/update-heroes-villano.dto';
import { InjectModel } from '@nestjs/sequelize';
import { HeroesVillanos } from './entities/heroes-villano.entity';

@Injectable()
export class HeroesVillanosService {

  constructor(
    @InjectModel(HeroesVillanos)
    private heroesVillanosModel: typeof HeroesVillanos,
  ) {}

  async create(createHeroesVillanoDto: CreateHeroesVillanoDto | any) {

    const data = new HeroesVillanos(createHeroesVillanoDto);
    try {
      await data.save();
      return {
        msg: 'Post Exitoso',
        data
      }
    } catch (error) {
      return {
        error
      }
    }
    
  }

  async findAll(): Promise<HeroesVillanos[]> {
    return await this.heroesVillanosModel.findAll();
  }

  findOne(id: number): Promise<HeroesVillanos|any> {
    return this.heroesVillanosModel.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateHeroesVillanoDto: UpdateHeroesVillanoDto) { 
    const data = await this.heroesVillanosModel.findByPk(id);
    try {
      if(!data){
        return {
          msg: "Registro no encontrado"
        }
      }

      await data.update(updateHeroesVillanoDto);
      return {
        msg: `Registro ${id} actualizado`,
        updateHeroesVillanoDto
      }
    } catch (error) {
      return {
        error
      }
    }
  }

  async remove(id: number) {
    const data = await this.heroesVillanosModel.findByPk(id);
    try {
      if(!data){
        return {
          msg: "Registro no encontrado"
        }
      }
      this.heroesVillanosModel.destroy({where: {id}});
      return {
        msg: `Registro ${id} eliminado`
       }
    } catch (error) {
      return {
        error
      }
    }

    
  }
}
