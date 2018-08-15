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
    location: [0,1],
  },
  {
    id: 'r3',
    type: 'elephant',
    camp: 'red',
    label: '象',
    location: [0,2],
  },
  {
    id: 'r4',
    type: 'king',
    camp: 'red',
    label: '王',
    location: [0,3],
  },
  {
    id: 'r5',
    type: 'queen',
    camp: 'red',
    label: '后',
    location: [0,4],
  },
  {
    id: 'r6',
    type: 'elephant',
    camp: 'red',
    label: '象',
    location: [0,5],
  },
  {
    id: 'r7',
    type: 'knight',
    camp: 'red',
    label: '马',
    location: [0,6],
  },
  {
    id: 'r8',
    type: 'rook',
    camp: 'red',
    label: '车',
    location: [0,7],
  },
  {
    id: 'b1',
    type: 'rook',
    camp: 'blue',
    label: '车',
    location: [7,0],
  },
  {
    id: 'b2',
    type: 'knight',
    camp: 'blue',
    label: '马',
    location: [7,1],
  },
  {
    id: 'b3',
    type: 'elephant',
    camp: 'blue',
    label: '象',
    location: [7,2],
  },
  {
    id: 'b4',
    type: 'king',
    camp: 'blue',
    label: '王',
    location: [7,3],
  },
  {
    id: 'b5',
    type: 'queen',
    camp: 'blue',
    label: '后',
    location: [7,4],
  },
  {
    id: 'b6',
    type: 'elephant',
    camp: 'blue',
    label: '象',
    location: [7,5],
  },
  {
    id: 'b7',
    type: 'knight',
    camp: 'blue',
    label: '马',
    location: [7,6],
  },
  {
    id: 'b8',
    type: 'rook',
    camp: 'blue',
    label: '车',
    location: [7,7],
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
  pieces.forEach((p) => {
    if (p.id === item.id) {
      p.location = [toX, toY];
    }
  })
  emitChange();
}

export function canMovePiece(item, toX, toY) {
  let piece = pieces.find(p => p.id === item.id)
  const [x, y] = piece.location;
  const dx = toX - x;
  const dy = toY - y;
  switch (piece.type) {
    case 'knight': {
      return (dx === -2 && Math.abs(dy) === 1 && !pieces.some(p => p.location[0] === x-1 && p.location[1] === y))
        || (dx === 2 && Math.abs(dy) === 1 && !pieces.some(p => p.location[0] === x+1 && p.location[1] === y))
        || (Math.abs(dx) === 1 && dy === -2 && !pieces.some(p => p.location[0] === x && p.location[1] === y-1))
        || (Math.abs(dx) === 1 && dy === 2 && !pieces.some(p => p.location[0] === x && p.location[1] === y+1));
    }
    case 'rook': {
      return (toX === x && toY > y && !pieces.some(p => p.location[0] === x && p.location[1] > y && p.location[1] < toY))
        || (toX === x && toY < y && !pieces.some(p => p.location[0] === x && p.location[1] > toY && p.location[1] < y))
        || (toX > x && toY === y && !pieces.some(p => p.location[1] === y && p.location[0] > x && p.location[0] < toX))
        || (toX < x && toY === y && !pieces.some(p => p.location[1] === y && p.location[0] > toX && p.location[0] < x));
    }
    default: return false;
  }

}
