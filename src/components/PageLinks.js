import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parenClass, itemClass }) => {
  return (
    <ul className={parenClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
