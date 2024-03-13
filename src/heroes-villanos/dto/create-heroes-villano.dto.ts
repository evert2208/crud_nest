import { IsNotEmpty, IsString, MinLength, ValidateNested, IsArray, IsNumber, IsObject, IsOptional,} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateHeroesVillanoDto {

    @IsNumber()
    @IsOptional()
    id: number;

    @IsNotEmpty()
    @IsString()
    readonly nombre: string;

    @IsNotEmpty()
    @IsString()
    readonly tipo: string;

    
    @IsString()
    @IsOptional()
     img?: string;

    
    @IsArray()
    // @ValidateNested({ each: true })
    @Type(()=> poderesDto)
    poderes: poderesDto[];
    
    @IsString()
    user_id: string;
   
}


export class poderesDto {
    @IsString()
    poder: string;
}