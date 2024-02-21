import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, IsDate, IsDateString } from 'class-validator';


export class CreateTodoDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    category: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    isCompleted: boolean;
}
