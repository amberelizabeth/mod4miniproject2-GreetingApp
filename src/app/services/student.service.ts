import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentName : string = "Amber Wetherill";
  constructor() { }
}
