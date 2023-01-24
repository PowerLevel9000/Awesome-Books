import { DateTime } from './luxon.js';

const date = document.getElementById('date');
const setTimeDate = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  date.innerHTML = now;
};
window.setInterval(setTimeDate, 1000);