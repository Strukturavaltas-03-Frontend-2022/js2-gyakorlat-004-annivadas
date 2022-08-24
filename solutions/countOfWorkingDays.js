const countOfWorkingDays = (date1 = new Date(), date2 = new Date()) => {
  if (date1 > date2) {
    throw new Error(`The first parameter is earlier date, than second!`)
  } else {
    let weekDays = 0;
    date2.getDay() == 0 || date2.getDay() == 6 ? {} : weekDays = 1;
    while (date2 > date1) {
      date1.getDay() == 0 || date1.getDay() == 6 ? {} : weekDays +=1;
      date1.setDate(date1.getDate() +1)
    }
    return weekDays
  }
}

export default countOfWorkingDays;




