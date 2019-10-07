//data from state gets pulled into here and mapped through, put into a list
//then passed into contentItem to recieve a visual interpretation
import React, { Fragment, useContext, useEffect } from "react";
import ContentContext from "../../context/content/contentContext";
import ContentItem from "./ContentItem";

const Contents = () => {
  //provides access to state
  const contentContext = useContext(ContentContext);
  //pulls out the array from state using destructuring
  const { contents, getContent } = contentContext;

  useEffect(() => {
    getContent();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {contents.map(content => (
        <ContentItem key={content.id} content={content} />
      ))}
    </Fragment>
  );
};

export default Contents;
