import React from 'react';
import { Modal } from 'antd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const getItems = (count) => Array.from({length: count}, (v, k) => k).map(k => ({
  id: `item-${k}`,
  content: `item ${k}`,
  flag: k%2 === 0
}));
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (draggableStyle, isDragging) => ({
  userSelect: 'none',
  padding: '10px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  background: isDragging ? 'lightgreen' : '#ffffff',

  ...draggableStyle,
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
});
export default class DndColumnField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: getItems(10),
    };
  }
  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }
  onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }

    const data = reorder(this.state.data,
      result.source.index, result.destination.index);
    console.log(data);
    this.setState({
      data,
    });
    // this.props.setParentState && this.props.setParentState({ items: [...items] })
  };
  show = () => {
    this.setState({ visible: true });
  };
  hide = () => {
    this.setState({ visible: false });
  };
  render() {
    const { data = [] } = this.state;
    return (
      <Modal
        visible={this.state.visible}
        onOk={this.hide}
        onCancel={this.hide}
      >
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable1">
            {(_provided, _snapshot) => (
              <div
                ref={_provided.innerRef}
                style={getListStyle(_snapshot.isDraggingOver)}
                {..._provided.droppableProps}
              >
                {data.filter(d => d.flag).map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div>
                        <div
                          ref={provided.innerRef}
                          style={getItemStyle(
                            provided.draggableStyle,
                            snapshot.isDragging,
                          )}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.content}
                        </div>
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
                ))}
                {_provided.placeholder}
              </div>
            )}
          </Droppable>
          <div style={{margin: '5px'}} />
          <Droppable droppableId="droppable2">
            {(_provided, _snapshot) => (
              <div
                ref={_provided.innerRef}
                style={getListStyle(_snapshot.isDraggingOver)}
                {..._provided.droppableProps}
              >
                {data.filter(d => !d.flag).map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div>
                        <div
                          ref={provided.innerRef}
                          style={getItemStyle(
                            provided.draggableStyle,
                            snapshot.isDragging,
                          )}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.content}
                        </div>
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
                ))}
                {_provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Modal>
    );
  }
}
