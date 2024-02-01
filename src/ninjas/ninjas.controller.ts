import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

// behind the scenes, insted of below we use constructor and @enjectable

// const service= new NinjasService();
// const controller= new NinjasController(service);
// controller.getOne()

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly service: NinjasService) {}
  // GET /ninjas?type=fast ---> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchuks') {
    return this.service.getAll(weapon);
  }
  // GET /ninjas/:id ---> {}
  @Get(':id')
  getNinja(@Param('id') id: string) {
    try{
      return this.service.getOne(id);
    }
    catch(error){
            throw new NotFoundException()
    }
   
  }

  // POST /ninjas -> {}
  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.service.create(createNinjaDto);
  }

  //PUT /ninjas/:id-> {}
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNingaDto: UpdateNinjaDto) {
    return this.service.updateOne(id, updateNingaDto);
  }

  // DELETE /ninjas/:id->{}

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.service.deleteOne(id);
  }
}
