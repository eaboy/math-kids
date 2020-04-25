import { Component, OnInit, Input } from '@angular/core';
import { IconList, ColorList } from './icon-list';
import { OperationsService, Operation } from 'src/app/operations.service';

@Component({
  selector: 'app-visual-help',
  templateUrl: './visual-help.component.html',
  styleUrls: ['./visual-help.component.scss']
})
export class VisualHelpComponent implements OnInit {

  @Input() operation: Operation;

  firstGroup: number[];
  secondGroup: number[];

  icon: string;
  colorStyleFirstIcon: string;
  colorStyleSecondIcon: string;

  constructor(private operationsService: OperationsService) { }

  ngOnInit(): void {
    const iconIndex: number = this.operationsService.getRandomNumber(IconList.length, 0);
    const colorFirstIndex: number = this.operationsService.getRandomNumber(ColorList.length, 0);
    let colorSecondIndex: number = this.operationsService.getRandomNumber(ColorList.length, 0);
    while (colorSecondIndex === colorFirstIndex) {
      colorSecondIndex = this.operationsService.getRandomNumber(ColorList.length, 0);
    }
    this.icon = 'fa-' + IconList[iconIndex];
    this.colorStyleFirstIcon = ColorList[colorFirstIndex];
    this.colorStyleSecondIcon = ColorList[colorSecondIndex];
    this.firstGroup = [...Array(this.operation.firstNumber).keys()];
    this.secondGroup = [...Array(this.operation.secondNumber).keys()];
  }

}
