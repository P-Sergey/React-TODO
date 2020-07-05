import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { id, onCheckboxClick } = this.props;
    return (
      <div>
        <input type="checkbox" id={id} onChange={onCheckboxClick} />
      </div>
    );
  }
}

export default Checkbox;
