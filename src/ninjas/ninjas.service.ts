import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: '1', name: 'Ninja-1', weapon: 'stars' },
    { id: '2', name: 'Ninja-2', weapon: 'nunchuks' },
  ];
  getAll(weapon?: 'stars' | 'nunchuks') {
    if(weapon){
        return this.ninjas.filter(ninja=> ninja.weapon === weapon);
    }
    return this.ninjas;
  }
  getOne(id:string){
    const ninja=this.ninjas.find(ninja=> ninja.id === id);
    if(!ninja) throw new Error("Ninja not found");
     return ninja;
  }
  create(createNinjaDto: CreateNinjaDto) {
    const newNinja={
      ...createNinjaDto,
      id: Date.now().toString()
    }
    this.ninjas.push(newNinja);
    return newNinja;
  }
  updateOne(id: string, updateNinjaDto: UpdateNinjaDto){
     this.ninjas= this.ninjas.map((ninja)=>{
      if(ninja.id=== id){
        return {id, ...updateNinjaDto}
      }
     })
     return this.getOne(id)
  }
  deleteOne(id:string){
    const toBeRemoved= this.getOne(id);
    this.ninjas= this.ninjas.filter((ninja)=> ninja.id!==id)
    return toBeRemoved
  }
}
