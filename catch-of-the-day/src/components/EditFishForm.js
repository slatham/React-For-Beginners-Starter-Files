import React from "react";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  handleDelete = () => {
    this.props.deleteFish(this.props.index);
  };
  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={price}
        />
        <select name="status" onChange={this.handleChange} value={status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={desc} />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={image}
        />
        <button onClick={this.handleDelete}>Remove Fish</button>
      </div>
    );
  }
}
export default EditFishForm;
