import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { Trainer } from '../Trainer';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
})
export class TrainerListComponent implements OnInit {
  trainers: Trainer[] = [];
  selectedTrainer!: Trainer; 

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.getTrainers();
  }

  getTrainers(): void {
    this.trainerService.getTrainers().subscribe((trainers) => {
      this.trainers = trainers;
    });
  }

  onSelected(trainer: Trainer): void {
    this.selectedTrainer = trainer; 
  }
}


