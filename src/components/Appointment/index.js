import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode";
// import useVisualMode from ".../../hooks/useVisualMode";


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  //return value from useVisualMode has three keys the mode, transition and back
  //good ol destructure to pull it out here
  //useVisualMode keeping track of web pages you visit like your browser, pushes a new webpage into your history
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && 
      <Empty 
      onAdd={() => transition(CREATE)} 
      />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
       {mode === CREATE && (
          <Form 
          interviewers={props.interviewers} //wil become {interviewers}
          onSave={props.onSave} //what do I put in here?
          onCancel={() => back(EMPTY)} 
          />
      )}
    </article>
  );

}