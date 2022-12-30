import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css'],
})
export class ChessboardComponent {
  onClickKnight(e: any) {
    let position: string = e.path[1].id;
    let horisontalLine: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let verticalLine: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
    // horisontalLine.forEach((item) => {
    //   if (item == position[0]) {
    //     console.log(item + 1);
    //   }
    // });
    let posibleMovesList: string[] = [];
    function posibleMoves(option: string) {
      let box = document.getElementById(option);
      // console.log(option);
      // console.log(box);
      box?.classList.add('active');
      posibleMovesList.push(option);
    }
    for (let i = 0; i < horisontalLine.length; i++) {
      // console.log(horisontalLine[i]);
      if (horisontalLine[i] == position[0]) {
        let firstOption = horisontalLine[i + 1] + (Number(position[1]) + 2);
        if (Number(firstOption[1]) > 1) {
          posibleMoves(firstOption);
        }

        let secondOption = horisontalLine[i - 1] + (Number(position[1]) + 2);
        if (Number(secondOption[1]) > 1) {
          posibleMoves(secondOption);
        }

        let thirdOption = horisontalLine[i + 1] + (Number(position[1]) - 2);
        if (Number(thirdOption[1]) > 1) {
          posibleMoves(thirdOption);
        }

        let fourthOption = horisontalLine[i - 1] + (Number(position[1]) - 2);
        if (Number(fourthOption[1]) > 1) {
          posibleMoves(fourthOption);
        }

        let fifthOption = horisontalLine[i + 2] + (Number(position[1]) - 1);
        if (Number(fifthOption[1]) > 1) {
          posibleMoves(fifthOption);
        }

        let sixthOption = horisontalLine[i + 2] + (Number(position[1]) + 1);
        if (Number(sixthOption[1]) > 1) {
          posibleMoves(sixthOption);
        }

        let seventhOption = horisontalLine[i - 2] + (Number(position[1]) - 1);
        if (Number(seventhOption[1]) > 1) {
          posibleMoves(seventhOption);
        }

        let eighthOption = horisontalLine[i - 2] + (Number(position[1]) + 1);
        if (Number(eighthOption[1]) > 1) {
          posibleMoves(eighthOption);
        }
      }
    }
    function addOnClick() {
      posibleMovesList.forEach((item) => {
        let box = document.getElementById(item);
        box?.addEventListener('click', handleClick);
        function handleClick() {
          box?.insertAdjacentHTML(
            'beforeend',
            '<div _ngcontent-vkb-c16="" class="knight">&#9816;</div>'
            // '<div class="knight" (click)="onClickKnight($event)">&#9816;</div>'
          );
          box?.removeEventListener('click', handleClick);
          posibleMovesList.forEach((itemm) => {
            let boxx = document.getElementById(itemm);
            boxx?.removeEventListener('click', handleClick);
            boxx?.classList.remove('active');
          });
        }
      });
    }
    addOnClick();
    // console.log(position);
  }
}
