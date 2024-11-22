import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];
  selected: boolean = false;
  selectedTrainer!: Trainer;

  constructor(private trainerService: TrainerService) {}

  ngOnInit() {
    this.trainerService.getTrainers().subscribe((data) => {
      this.trainers = data;
    });
  }

  onSelected(trainer: Trainer) {
    this.selected = true;
    this.selectedTrainer = trainer; 
  }
}


