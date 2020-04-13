import { Component, OnInit, ViewChild } from '@angular/core';
import { SymbolToDataComponent } from '../symbol-to-data/symbol-to-data.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  success = [];
  isStarted = false;
  showButton = false;
  i = 0;
  atomicNumbers = [];
  atomicNumber: number;
  @ViewChild(SymbolToDataComponent) atomic: SymbolToDataComponent;

  constructor() {}

  ngOnInit(): void {
    while (this.atomicNumbers.length < 20) {
      const r = 1 + Math.floor(Math.random() * 20);
      if (this.atomicNumbers.includes(r)) {
        continue;
      }
      this.atomicNumbers.push(r);
    }
    while (this.atomicNumbers.length < 60) {
      const r = 1 + Math.floor(Math.random() * 60);
      this.atomicNumbers.push(r);
    }
    this.atomicNumber = this.atomicNumbers[0];
  }

  onSubmit(event): void {
    this.success.push(event);
    this.showButton = true;
  }

  next(): void {
    this.i += 1;
    this.atomicNumber = this.atomicNumbers[this.i];
    this.atomic.reset(this.atomicNumber);
    this.showButton = false;
  }
}
