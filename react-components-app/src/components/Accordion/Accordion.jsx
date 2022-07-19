import { useState, useRef } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import './accordion.css';

export default function Accordion({ data }) {
  return (
    <div className="accordion-section">
      {Array.isArray(data) &&
        data.map((d) => <AccordionItem
          title={d.title}
          content={d.content}
        />)
      }
    </div>
  );
}

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string
    })
  ),
}

const AccordionItem = ({ title, content }) => {

  const [isActive, setIsActive] = useState(false);
  const contentElem = useRef(null );

  return (
    <div className="accordion-item">
      <div
        className={classNames("accordion-title", { active: isActive })}
        onClick={(e) => setIsActive(!isActive)}
        role="button"
      >
        <div className="title">{title}</div>
        <div className="icon">{isActive ? <BsChevronDown /> : <BsChevronUp />}</div>
      </div>
      <div
        className={classNames("accordion-content", { active: isActive })}
        ref={contentElem}
        style={{
          height: isActive ? contentElem.current.scrollheight : '0px'
        }}
      >{content}</div>
    </div>
  );
};