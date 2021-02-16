//item takes 4 props:
//
// name:     String     the name of the day
// spots:    Number     the number of spots remaining
// selected: Boolean    true or false declaring that this day is selected
// setDay:   Function   accepts the name of the day eg. "Monday", "Tuesday"
import React from "react";
import classNames from "classnames";
export default function InterviewerListItem(props) {
  // const InterviewerClass = classNames("interviewers__item", {
  //   "interviewers__item--selected": props.selected 
  // });
  return (
    <li className={InterviewerClass}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {props.name}
</li>
)
};

