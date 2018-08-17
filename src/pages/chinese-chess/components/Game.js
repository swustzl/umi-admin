let pieces = [
  {
    id: 'r1',
    type: 'rook',
    camp: 'red',
    label: '车',
    location: [0,0],
  },
  {
    id: 'r2',
    type: 'knight',
    camp: 'red',
    label: '马',
    location: [1,0],
  },
  {
    id: 'r3',
    type: 'elephant',
    camp: 'red',
    label: '象',
    location: [2,0],
  },
  {
    id: 'r4',
    type: 'queen',
    camp: 'red',
    label: '后',
    location: [3,0],
  },
  {
    id: 'r5',
    type: 'king',
    camp: 'red',
    label: '王',
    location: [4,0],
  },
  {
    id: 'r6',
    type: 'elephant',
    camp: 'red',
    label: '象',
    location: [5,0],
  },
  {
    id: 'r7',
    type: 'knight',
    camp: 'red',
    label: '马',
    location: [6,0],
  },
  {
    id: 'r8',
    type: 'rook',
    camp: 'red',
    label: '车',
    location: [7,0],
  },
  {
    id: 'r9',
    type: 'pawns',
    camp: 'red',
    label: '兵',
    location: [0,1],
  },
  {
    id: 'r10',
    type: 'pawns',
    camp: 'red',
    label: '兵',
    location: [1,1],
  },
  {
    id: 'r11',
    type: 'pawns',
    camp: 'red',
    label: '兵',
    location: [2,1],
  },
  {
    id: 'r12',
    type: 'pawns',
    camp: 'red',
    label: '兵',
    location: [3,1],
  },
  {
    id: 'r13',
    type: 'pawns',
    camp: 'red',
    label: '兵',
    location: [4,1],
  },
  {
    id: 'r14',
    type: 'pawns',
    camp: 'red',
    label: '兵',
    location: [5,1],
  },
  {
    id: 'r15',
    type: 'pawns',
    camp: 'red',
    label: '兵',
    location: [6,1],
  },
  {
    id: 'r16',
    type: 'pawns',
    camp: 'red',
    label: '兵',
    location: [7,1],
  },
  {
    id: 'b1',
    type: 'rook',
    camp: 'blue',
    label: '车',
    location: [0,7],
  },
  {
    id: 'b2',
    type: 'knight',
    camp: 'blue',
    label: '马',
    location: [1,7],
  },
  {
    id: 'b3',
    type: 'elephant',
    camp: 'blue',
    label: '象',
    location: [2,7],
  },
  {
    id: 'b4',
    type: 'queen',
    camp: 'blue',
    label: '后',
    location: [3,7],
  },
  {
    id: 'b5',
    type: 'king',
    camp: 'blue',
    label: '王',
    location: [4,7],
  },
  {
    id: 'b6',
    type: 'elephant',
    camp: 'blue',
    label: '象',
    location: [5,7],
  },
  {
    id: 'b7',
    type: 'knight',
    camp: 'blue',
    label: '马',
    location: [6,7],
  },
  {
    id: 'b8',
    type: 'rook',
    camp: 'blue',
    label: '车',
    location: [7,7],
  },
  {
    id: 'b9',
    type: 'pawns',
    camp: 'blue',
    label: '兵',
    location: [0,6],
  },
  {
    id: 'b10',
    type: 'pawns',
    camp: 'blue',
    label: '兵',
    location: [1,6],
  },
  {
    id: 'b11',
    type: 'pawns',
    camp: 'blue',
    label: '兵',
    location: [2,6],
  },
  {
    id: 'b12',
    type: 'pawns',
    camp: 'blue',
    label: '兵',
    location: [3,6],
  },
  {
    id: 'b13',
    type: 'pawns',
    camp: 'blue',
    label: '兵',
    location: [4,6],
  },
  {
    id: 'b14',
    type: 'pawns',
    camp: 'blue',
    label: '兵',
    location: [5,6],
  },
  {
    id: 'b15',
    type: 'pawns',
    camp: 'blue',
    label: '兵',
    location: [6,6],
  },
  {
    id: 'b16',
    type: 'pawns',
    camp: 'blue',
    label: '兵',
    location: [7,6],
  },
];
let observer = null;

function emitChange() {
  observer(pieces);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }
  observer = o;
  emitChange();
}

export function movePiece(item, toX, toY) {
  //let piece = pieces.find(p => p.id === item.id)
  let toPiece = pieces.find(p => p.location[0] === toX && p.location[1] === toY)
  if (toPiece) {
    pieces = pieces.filter(p => p.id !== toPiece.id)
  }
  pieces.forEach((p) => {
    if (p.id === item.id) {
      p.location = [toX, toY];
    }
  })
  emitChange();
}

export function canMovePiece(item, toX, toY) {
  let piece = pieces.find(p => p.id === item.id)
  let toPiece = pieces.find(p => p.location[0] === toX && p.location[1] === toY)
  const [x, y] = piece.location;
  const dx = toX - x;
  const dy = toY - y;
  switch (piece.type) {
    case 'rook': {
      return (!toPiece || toPiece.camp !== piece.camp)
        && ((toX === x && toY > y && !pieces.some(p => p.location[0] === x && p.location[1] > y && p.location[1] < toY))
          || (toX === x && toY < y && !pieces.some(p => p.location[0] === x && p.location[1] > toY && p.location[1] < y))
          || (toX > x && toY === y && !pieces.some(p => p.location[1] === y && p.location[0] > x && p.location[0] < toX))
          || (toX < x && toY === y && !pieces.some(p => p.location[1] === y && p.location[0] > toX && p.location[0] < x)));
    }
    case 'knight': {
      return (!toPiece || toPiece.camp !== piece.camp)
        && ((Math.abs(dx) === 2 && Math.abs(dy) === 1 ) || (Math.abs(dx) === 1 && Math.abs(dy) === 2));
    }
    case 'elephant': {
      return (!toPiece || toPiece.camp !== piece.camp)
        && Math.abs(dx) === Math.abs(dy)
        && ((dx < 0 && dy < 0 && !pieces.some(p => Math.abs(toX - p.location[0]) === Math.abs(toY - p.location[1]) && toX - p.location[0] < 0 && toY - p.location[1] < 0 && Math.abs(toX - p.location[0]) < Math.abs(dx)))
          || (dx < 0 && dy > 0 && !pieces.some(p => Math.abs(toX - p.location[0]) === Math.abs(toY - p.location[1]) && toX - p.location[0] < 0 && toY - p.location[1] > 0 && Math.abs(toX - p.location[0]) < Math.abs(dx)))
          || (dx > 0 && dy < 0 && !pieces.some(p => Math.abs(toX - p.location[0]) === Math.abs(toY - p.location[1]) && toX - p.location[0] > 0 && toY - p.location[1] < 0 && Math.abs(toX - p.location[0]) < Math.abs(dx)))
          || (dx > 0 && dy > 0 && !pieces.some(p => Math.abs(toX - p.location[0]) === Math.abs(toY - p.location[1]) && toX - p.location[0] > 0 && toY - p.location[1] > 0 && Math.abs(toX - p.location[0]) < Math.abs(dx))));
    }
    case 'queen': {
      return (!toPiece || toPiece.camp !== piece.camp)
        && (
          ((toX === x && toY > y && !pieces.some(p => p.location[0] === x && p.location[1] > y && p.location[1] < toY))
            || (toX === x && toY < y && !pieces.some(p => p.location[0] === x && p.location[1] > toY && p.location[1] < y))
            || (toX > x && toY === y && !pieces.some(p => p.location[1] === y && p.location[0] > x && p.location[0] < toX))
            || (toX < x && toY === y && !pieces.some(p => p.location[1] === y && p.location[0] > toX && p.location[0] < x)))
          || (Math.abs(dx) === Math.abs(dy)
            && ((dx < 0 && dy < 0 && !pieces.some(p => Math.abs(toX - p.location[0]) === Math.abs(toY - p.location[1]) && toX - p.location[0] < 0 && toY - p.location[1] < 0 && Math.abs(toX - p.location[0]) < Math.abs(dx)))
              || (dx < 0 && dy > 0 && !pieces.some(p => Math.abs(toX - p.location[0]) === Math.abs(toY - p.location[1]) && toX - p.location[0] < 0 && toY - p.location[1] > 0 && Math.abs(toX - p.location[0]) < Math.abs(dx)))
              || (dx > 0 && dy < 0 && !pieces.some(p => Math.abs(toX - p.location[0]) === Math.abs(toY - p.location[1]) && toX - p.location[0] > 0 && toY - p.location[1] < 0 && Math.abs(toX - p.location[0]) < Math.abs(dx)))
              || (dx > 0 && dy > 0 && !pieces.some(p => Math.abs(toX - p.location[0]) === Math.abs(toY - p.location[1]) && toX - p.location[0] > 0 && toY - p.location[1] > 0 && Math.abs(toX - p.location[0]) < Math.abs(dx)))
            )
          )
        );
    }
    case 'king': {
      return (!toPiece || toPiece.camp !== piece.camp)
        && Math.abs(dx) < 2 && Math.abs(dy) < 2;
    }
    case 'pawns': {
      if (piece.camp === 'red') {
        if (!toPiece && toX === x && toY > y && (y === 1 && toY - y <= 2 && !pieces.some(p => p.location[0] === x && p.location[1] > y && p.location[1] < toY) || toY - y < 2)) {
          return true
        }
        if (toPiece && toPiece.camp !== piece.camp && Math.abs(toX - x) === 1 && toY - y === 1) {
          return true
        }
      } else {
        if (!toPiece && toX === x && toY < y && (y === 6 && y - toY <= 2 && !pieces.some(p => p.location[0] === x && p.location[1] > toY && p.location[1] < y) || y - toY < 2)) {
          return true
        }
        if (toPiece && toPiece.camp !== piece.camp && Math.abs(toX - x) === 1 && toY - y === -1) {
          return true
        }
      }
      return false
    }
    default: return false;
  }
}
