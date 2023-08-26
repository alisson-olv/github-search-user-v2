const CalcDaysFromNow = (previousDate) => {
  const currentDate = new Date();
  const apiYear = parseInt(previousDate.substring(0, 4));
  const apiMonth = parseInt(previousDate.substring(5, 7)) - 1;
  const apiDay = parseInt(previousDate.substring(8, 10));

  const apiDateTime = new Date(apiYear, apiMonth, apiDay);
  const timeDifference = currentDate - apiDateTime;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

export default CalcDaysFromNow; 