//go look at array methods, is there a function builtin for this?, find
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
}

export function getInterview(state, interview) {
  if(interview === null) {
    return null;
  }
  let finalResult = {
    student: interview.student, 
    interviewer: state.interviewers[interview.interviewer]
  };
  return finalResult;
}
    
  


// export function getAppointmentsForDay(state, day) {
//   const filteredDays = state.days.find((dayObj) => dayObj.name === day);
//   const apptArray = [];

//   if (state.appointments && filteredDays) {
//     filteredDays.appointments.forEach((appId) =>
//       apptArray.push(state.appointments[appId])
//     );
//   }
//   return apptArray;
// }