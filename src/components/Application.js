import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "components/DayList";
import Appointment from "components/Appointment"
import {getAppointmentsForDay, getInterview} from "helpers/selectors"
import "components/Application.scss";


export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const setDay = day => setState({...state, day});
  // const setDays = days => setState(prev => ({...prev, days}));

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((values) => {
      console.log(values)
      setState(prev => ({...prev, days: values[0].data, appointments: values[1].data, interviewers: values[2].data }))
    })
  }, []);
//   const dailyAppointments = getAppointmentsForDay(state, state.day);
//   const appointment = dailyAppointments.map(appointment => (
//     <Appointment
//       key={appointment.id}
//       {...appointment}/>
// ))
const appointments = getAppointmentsForDay(state, state.day);
const schedule = appointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);

  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
    />
  );
});

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}