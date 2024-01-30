import { Injectable } from '@nestjs/common';

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
     return this.ninjas.find(ninja=> ninja.id === id);
  }
  updateOne(){
    
  }
}
