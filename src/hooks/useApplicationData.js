import { useState, useEffect } from "react";
import axios from "../../node_modules/axios";

export default function useApplicationData(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });


  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);

  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const url = `/api/appointments/${id}`;
    return axios.put(url, appointment)
      .then(() => {
        const foundDay = state.days.find(howToFindDay);
        const spotsRemaining = calcSpotsRemaining(appointments, foundDay);
        const newDayObj = { ...foundDay, spots: spotsRemaining };
        const dayIndex = state.days.findIndex(howToFindDay);
        const copyOGStateDays = [...state.days];
        copyOGStateDays[dayIndex] = newDayObj;
        setState({
          ...state,
          appointments,
          days: copyOGStateDays 
        });
      });

  }
  function calcSpotsRemaining(appointments, foundDay) {
    let spots = 0;
    for (const appointmentID of foundDay.appointments) {
      if (!appointments[appointmentID].interview) {
        spots += 1;
      }
    }
    return spots;
  }
  const howToFindDay = (currentDay) => {
    return currentDay.name === state.day;
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const foundDay = state.days.find(howToFindDay);
        const spotsRemaining = calcSpotsRemaining(appointments, foundDay);
        const newDayObj = { ...foundDay, spots: spotsRemaining };
        const dayIndex = state.days.findIndex(howToFindDay);
        const copyOGStateDays = [...state.days];
        copyOGStateDays[dayIndex] = newDayObj;
        setState({
          ...state,
          appointments,
          days: copyOGStateDays
        });
      });
  };
  return { state, setDay, bookInterview, cancelInterview };
}
