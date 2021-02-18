export function getAppointmentsForDay(state, day) {
  const apptArr = [];
  for (let dayObj of state.days) {
    if (dayObj.name === day) {
      for (let appointmentID of dayObj.appointments) {
        apptArr.push(state.appointments[appointmentID]);
      }
    }
  }
  console.log(apptArr)
  return apptArr
};

export function getInterview(state, interview) {
  if(interview === null) {
    return null;
  }
  let finalResult = {
    student: interview.student, 
    interviewer: state.interviewers[interview.interviewer]
  };
  return finalResult;
};

export function getInterviewersForDay(state, day) {
  const InterviewersArr = [];
  for (let dayObj of state.days) {
    if (dayObj.name === day) {
      for (let interviewerID of dayObj.interviewers) {
        InterviewersArr.push(state.interviewers[interviewerID]);
      }
    }
  }
  return InterviewersArr;
};