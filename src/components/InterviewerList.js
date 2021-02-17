import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const interviewerList = props.interviewers.map(interviewer => (
    <InterviewerListItem

      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.interviewer === interviewer.id}
      setInterviewer={(event) => props.setInterviewer(interviewer.id)}
    />
  ));

  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">
        Interviewer
      </h4>
      <ul
        setInterviewer
        className="interviewers__list">
        {interviewerList}
      </ul>
    </section>
  );
};