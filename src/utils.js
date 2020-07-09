export const sortAndFilterType = {
  SORT_PRICE_UP: 'SORT_PRICE_UP',
  SORT_PRICE_DOWN: 'SORT_PRICE_DOWN',
  SORT_BY_TIME_DURATION: 'SORT_BY_TIME_DURATION',
  FILTER_NO_TRANSFER: 'FILTER_NO_TRANSFER'
}
export const MONTH = [ "",
  "январь", "февраль", "март",
  "апрель", "май", "июнь", "июль",
  "август", "сентябрь", "октябрь",
  "ноябрь", "декабрь"
];
export const DAYS = ["вс","пн","вт","ср","чт","пт","сб"]

export const formatDate = (date) =>{
  const arrayDate = date.split('')
  const time = `${arrayDate[11]}${arrayDate[12]}:${arrayDate[14]}${arrayDate[15]}`
  const month =  `${MONTH[arrayDate[6]]}`
  const day = new Date(date).getDay() < 10 ? '0'+ new Date(date).getDay() : new Date(date).getDay();
  const daysOfTheWeek = DAYS[new Date(date).getDay()]
  return `${time} ${day} ${month} ${daysOfTheWeek}`
}

export const formatTime = (t) => {
  let time = t;
  var h = time / 60 ^ 0;

  if (h) {
    const m = time % 60;
    m <10 ? '0+m' : m;
    time = h + ' ч ' + m + ' мин';

  } else {
    time = time + ' мин';
  }
return time;
}

export const filter = (data,type) => {
  switch (type) {
    case sortAndFilterType.SORT_PRICE_UP:
      return data.slice().sort((a,b) => a.flight.price.total.amount-b.flight.price.total.amount)
    case sortAndFilterType.SORT_PRICE_DOWN:
      return data.slice().sort((a,b) => b.flight.price.total.amount-a.flight.price.total.amount)
    case sortAndFilterType.SORT_BY_TIME_DURATION:
      return data.slice().sort((a,b) => a.flight.legs[0].duration-b.flight.legs[0].duration)
    case sortAndFilterType.FILTER_NO_TRANSFER:
      return data.slice().filter((it)=>it.flight.legs[0].segments.length === 1)
    default: return data
  }
}
