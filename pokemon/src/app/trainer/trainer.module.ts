import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { PokemonModule } from '../pokemon/pokemon.module';
import { TrainerService } from './trainer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, PokemonModule, HttpClientModule],
  declarations: [TrainerListComponent, TrainerDetailComponent],
  providers: [TrainerService],
  exports: [TrainerListComponent],
})
export class TrainerModule {}

