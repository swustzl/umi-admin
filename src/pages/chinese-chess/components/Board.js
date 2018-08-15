import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare';
import Piece from './Piece';

@DragDropContext(HTML5Backend)
export default class Board extends Component {
  static propTypes = {
    pieces: PropTypes.array,
  };

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x, y) {
    for (let i = 0; i < this.props.pieces.length; i++) {
      let piece = this.props.pieces[i]
      const [px, py] = piece.location
      if (x === px && y === py) {
        return <Piece {...piece} />;
      }
    }
  }
  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {squares}
      </div>
    );
  }
}
