import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeriodicTable } from 'mendeleev';

@Component({
  selector: 'app-symbol-to-data',
  templateUrl: './symbol-to-data.component.html',
  styleUrls: ['./symbol-to-data.component.css'],
})
export class SymbolToDataComponent implements OnInit {
  @Input() AtomicNumber: number;
  @Output() submit = new EventEmitter();

  public block;

  public atom: any;
  public visible;
  public correct;

  public valueArr;
  public correctValArr: number[];

  public description = [
    'Liczba atomowa',
    'Masa atomowa',
    'Okres',
    'Grupa',
    'Liczba protonów',
    'Liczba neutronów',
    'Liczba elektronów',
    'Liczba nukleonów',
    'Liczba powłok',
  ];

  constructor() {}

  get AtomicMass(): number {
    return Math.floor(this.atom.mass + 0.5);
  }

  ngOnInit(): void {
    this.visible = Array(9).fill(false);
    this.correct = Array(9).fill(null);
    this.valueArr = Array(9);
    this.block = false;
    this.atom = PeriodicTable.getAtomic(this.AtomicNumber);
    const num = 3;
    const arr = [];
    while (arr.length < num) {
      const rand = Math.floor(Math.random() * 9);
      if (arr.includes(rand)) {
        continue;
      }
      arr.push(rand);
      this.visible[rand] = true;
    }

    this.correctValArr = [
      this.AtomicNumber,
      this.AtomicMass,
      this.atom.period,
      this.atom.group,
      this.AtomicNumber,
      this.AtomicMass - this.AtomicNumber,
      this.AtomicNumber,
      this.AtomicMass,
      this.atom.period,
    ];
  }

  onSubmit(): void {
    if (this.block) {
      return;
    }
    for (let i = 0; i < 9; i++) {
      if (this.visible[i] === false) {
        continue;
      }
      if (this.valueArr[i] == null) {
        alert('Uzupełnij wszystkie wartości!');
        return;
      }
    }
    this.block = true;
    let allOk = true;
    for (let i = 0; i < 9; i++) {
      if (this.visible[i] === false) {
        continue;
      }
      this.correct[i] =
        Number.parseInt(this.valueArr[i], 10) === this.correctValArr[i];
      if (!this.correct[i]) {
        allOk = false;
        this.valueArr[i] += ` -> ${this.correctValArr[i]}`;
      }
    }
    this.submit.emit(allOk);
  }

  reset(atomicNumber) {
    this.AtomicNumber = atomicNumber;
    this.ngOnInit();
  }
}
