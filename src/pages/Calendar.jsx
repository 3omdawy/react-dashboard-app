import React from "react";
import Header from "../components/Header";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Calendar" category="Page" />
      <div className="card">
        <p>
          I did not find a free open-source library for a complete calendar with
          events (like the one in Google Calendar).
          <br />I think it makes more sense to use an iFrame of Google Calendar,
          with using
          <a href="https://developers.google.com/calendar/api/guides/overview">
            {" "}
            Google Calendar API{" "}
          </a>
          to make any updates
        </p>
      </div>
    </div>
  );
};

export default Calendar;
