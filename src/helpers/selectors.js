export function getAppointmentsForDay(state, day) {
  const apptArr = [];
  for (let dayObj of state.days) {
    if (dayObj.name === day) {
      for (let appointmentID of dayObj.appointments) {
        apptArr.push(state.appointments[appointmentID]);
      }
    }
  }
  return apptArr;
}

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
}

export function getInterview(state, interview) {
  const interviewerObj = state.interviewers;
  const resultsObj = {};

  if (!interview) {
    return null;
  }

  const interviewerID = interview.interviewer;
  for (let key in interviewerObj) {
    if (Number(key) === interviewerID) {
      resultsObj.student = interview.student;
      resultsObj.interviewer = interviewerObj[key];
    }
  }

  return resultsObj;
}

