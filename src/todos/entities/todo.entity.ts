import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  category: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  date: Date;

  @ApiProperty()
  @Column({ default: false })
  isCompleted: boolean;
}