import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';
import { ParseIntPipe } from '@nestjs/common';
import { Response } from 'express';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @ApiCreatedResponse({ description: "The record has been successfully created. Object as response", type: Todo })
  @ApiBadRequestResponse({ description: "Invalid values" })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(createTodoDto);
  }

  @ApiOkResponse({ description: "The records have been successfully retrieved. Array of objects as response", type: Todo, isArray: true})
  @Get()
  findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @ApiOkResponse({ description: "The record has been successfully retrieved. Object as response", type: Todo })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): Promise<Todo> {
    return this.todosService.findOne(+id);
  }

  @ApiOkResponse({ description: "The record has been successfully updated. Object as response", type: Todo })
  @ApiNotFoundResponse({ description: "The record has not been found" })
  @ApiBadRequestResponse({ description: "Invalid values" })
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todosService.update(+id, updateTodoDto);
  }

  @ApiNoContentResponse({ description: "The record has been successfully deleted" })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string, @Res() res: Response) {
    await this.todosService.remove(+id);
    return res.sendStatus(204);
  }
}
