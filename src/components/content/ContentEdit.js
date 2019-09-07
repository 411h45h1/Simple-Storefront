import React, { useState, useContext } from "react";
import ContentContext from "../../context/content/contentContext";

const ContentEdit = () => {
  const contentContext = useContext(ContentContext);

  const [content, setContent] = useState({
    name: "",
    colour: "",
    size: "",
    quantity: ""
  });

  const { name, colour, size, quantity } = content;
  const onChange = e =>
    setContent({ ...content, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    contentContext.addContent(content);
    setContent({
      name: "",
      colour: "",
      size: "",
      quantity: ""
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Item</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Colour"
        name="colour"
        value={colour}
        onChange={onChange}
      />
      s
      <input
        type="checkbox"
        name="size"
        value={"s"}
        onChange={onChange}
        checked={size === "s"}
      />
      m
      <input
        type="checkbox"
        name="size"
        value={"m"}
        onChange={onChange}
        checked={size === "m"}
      />
      l
      <input
        type="checkbox"
        name="size"
        value={"l"}
        onChange={onChange}
        checked={size === "l"}
      />
      xl
      <input
        type="checkbox"
        name="size"
        value={"xl"}
        onChange={onChange}
        checked={size === "xl"}
      />
      <input
        type="text"
        placeholder="Quantity"
        name="quantity"
        value={quantity}
        onChange={onChange}
      />
      <div>
        <input type="submit" value="Add Content" />
      </div>
    </form>
  );
};

export default ContentEdit;
