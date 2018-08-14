let pieces = [
  {
    id: '1',
    type: 'knight',
    location: [0,0],
  },
  {
    id: '2',
    type: 'rook',
    location: [4,0],
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

export function moveKnight(item, toX, toY) {
  pieces.forEach((p) => {
    if (p.id === item.id) {
      p.location = [toX, toY];
    }
  })
  emitChange();
}

export function canMoveKnight(item, toX, toY) {
  let piece = pieces.find(p => p.id === item.id)
  const [x, y] = piece.location;
  const dx = toX - x;
  const dy = toY - y;
  console.log(piece.type, x, y, toX, toY)
  switch (piece.type) {
    case 'knight':
      return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    case 'rook':
      return (toX === x && toY !== y) || (toX !== x && toY === y);
    default: return false;
  }

}
