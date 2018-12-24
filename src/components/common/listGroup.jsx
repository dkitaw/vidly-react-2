import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({
  items,
  selectedItem,
  textProperty,
  valueProperty,
  onItemSelect
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItem: PropTypes.object,
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string,
  onItemSelect: PropTypes.func.isRequired
};

export default ListGroup;
