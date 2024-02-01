import { IsEnum, IsNotEmpty,IsString } from "class-validator";

export class CreateNinjaDto {

    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEnum(['stars','nunchuks' ], {message:" Use correct weapon"})
    weapon: 'stars'| "nunchuks"
}



