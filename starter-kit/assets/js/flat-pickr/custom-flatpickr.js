// Custom-flatpickr JS

// 1. Default Date
flatpickr("input[type=datetime-local]", {});

// 2.Human Friendly
flatpickr("input[type=human-friendly]", {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
});

//3. min-max value
flatpickr("input[type=min-max]", {
  dateFormat: "d.m.Y",
  maxDate: "15.12.2017",
});

// 4. disabled-date
flatpickr("input[type=disabled-date]", {
  disable: ["2025-01-30", "2025-02-21", "2025-03-08", new Date(2025, 4, 9)],
  dateFormat: "Y-m-d",
});

//5. multiple-date
flatpickr("input[type=multiple-date]", {
  mode: "multiple",
  dateFormat: "Y-m-d",
});

// 6. Customizing the Conjunction
flatpickr("input[type=customize-date]", {
  mode: "multiple",
  dateFormat: "Y-m-d",
  conjunction: " :: ",
});

// 7.Range-date
flatpickr("input[type=range-date]", {
  mode: "range",
});

// 8. Disabled Range
flatpickr("input[type=preloading-date]", {
  mode: "multiple",
  dateFormat: "Y-m-d",
  defaultDate: ["2016-10-20", "2016-11-04"],
});

// Time-picker

//9.Time-picker
flatpickr("input[type=time-picker]", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
});

// 10. 24-hour Time Picker
flatpickr("input[type=twenty-four-hour]", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
});

// 11. Time Picker W/Limits
flatpickr("input[type=limit-time]", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  minTime: "16:00",
  maxTime: "22:30",
});

// 12. Preloading Time
flatpickr("input[type=preloading-time]", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  defaultDate: "13:45",
});

// 13. DateTimePicker with Limited Time Range[min-time]
flatpickr("input[type=limit-time-range]", {
  enableTime: true,
  minTime: "09:00",
});

// 14. DateTimePicker with Limited Time Range[min/max-time]
flatpickr("input[type=limit-min-max-range]", {
  enableTime: true,
  minTime: "16:00",
  maxTime: "22:00",
});

// 15. Date With Time
flatpickr("input[type=datetime-local1]", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
});

// 16. monthSelectPlugin

//By-default-  Inline Calender
flatpickr("input[type=inline-calender]", {
  inline: true,
});
