export function getAppointmentsForDay(state, day) {
  const apptArr = [];
  for (let dayObj of state.days) {
    if (dayObj.name === day) {
      for (let appointmentID of dayObj.appointments) {
        apptArr.push(state.appointments[appointmentID]);
      }
    }
  }
  // console.log(apptArr)
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
  // console.log(apptArr)
  return InterviewersArr;
}

export function getInterview(state, interview) {
  const interviewerObj = state.interviewers;
  const resultsObj = {};
  // console.log('state', state)
  console.log('interview', interview); //interview { student: 'Archie Cohen', interviewer: 2 }

  if (!interview) {
    return null;
  }

  const interviewerID = interview.interviewer;
  console.log('interviewID', interviewerID);
  for (let key in interviewerObj) {
    if (Number(key) === interviewerID) {
      resultsObj.student = interview.student;
      resultsObj.interviewer = interviewerObj[key];
    }
  }

  return resultsObj;
}


//BETTER VERSION OF GETAPPTS
// export function getInterviewersForDay(state, day) {
// const foundDay = state.days.find((days) => days.name === day);
// if (state.days.length === 0 || foundDay === undefined) {
//   return [];
// }
// return foundDay.appointments.map((id) => state.appointments[id]);

// }