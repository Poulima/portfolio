import React from 'react';

const EachSection = (props) => {
  const itemId = props.option.id;
  const selectedItem = props.selectedItem;
  return (
    <li data-id={props.option.id} className={selectedItem === itemId ? 'active listItem' : 'listItem'}>
      {props.option.title}
    </li>
  );

}

export default EachSection;
