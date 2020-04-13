import React from "react";
import ReactHtmlParser from "react-html-parser";
import P from "./components/P";

const RenderHTML = ({ json }) => {
  const renderElement = (element, index) => {
    switch (element.type) {
      case "paragraph":
        return <P key={index}>{ReactHtmlParser(element.data.text)}</P>;
      case "code":
        return <code key={index}>{element.data.code}</code>;
      case "header":
        return <h1 key={index}> {element.data.text}</h1>;
      case "simpleImage":
        return (
          <img
            key={index}
            width="100%"
            alt={element.data.caption}
            src={element.data.url}
          />
        );
      case "embed":
        return (
          <iframe
            key={index}
            title={element.data.caption}
            height={element.data.height}
            width={element.data.width}
            src={element.data.embed}
          />
        );

      case "quote":
        return <q key={index}>{element.data.text}</q>;

      case "list":
        return (
          <ul key={index}>
            {element.data.items.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        );

      default:
        return <h1 key={index}>No found</h1>;
    }
    // console.log(element);
    // return <h1 key={index}>Element</h1>;
  };

  console.log(json);
  return (
    <div>
      {json.content.blocks.map((element, index) =>
        renderElement(element, index)
      )}
    </div>
  );
};

export default RenderHTML;
