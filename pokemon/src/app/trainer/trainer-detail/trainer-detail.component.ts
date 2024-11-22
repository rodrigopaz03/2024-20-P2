import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../trainer.service';
import { Trainer } from '../Trainer';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer; 

  constructor(private route: ActivatedRoute, private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.getTrainerDetail();
  }

  getTrainerDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.trainerService.getTrainerDetail(id).subscribe((trainer) => (this.trainerDetail = trainer));
  }
}


