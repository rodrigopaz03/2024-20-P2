import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './Trainer';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private trainersUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/trainers.json';
  private trainerDetailBaseUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/';

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.trainersUrl);
  }

  getTrainerDetail(id: number): Observable<Trainer> {
    const url = `${this.trainerDetailBaseUrl}${id}/trainers.json`;
    return this.http.get<Trainer>(url);
  }

  
}

