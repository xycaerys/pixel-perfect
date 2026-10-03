// One-off Monday opening. Hidden automatically once the day has passed (Sydney time).
export const mondayOpening = {
  day: "Monday, 5 October",
  hours: "4:00 PM - 12:00 AM",
  until: new Date("2026-10-06T00:00:00+11:00"),
};

export const showMondayOpening = () => Date.now() < mondayOpening.until.getTime();
