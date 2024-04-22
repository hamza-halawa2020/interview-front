import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PesronService {
  private apiUrl = environment.back;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}persons`);
  }

  addPerson(id: any) {
    return this.http.post(`${this.apiUrl}persons`, id);
  }
}
