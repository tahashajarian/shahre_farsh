function secondsToDhm(seconds) {
  seconds = Number(seconds);
  const day = Math.floor(seconds / (3600 * 24));
  const hour = Math.floor((seconds % (3600 * 24)) / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  return { day, hour, minute };
}

function convertToNumberIcon(number) {
  if (number < 10) {
    return `<span class="number number0"></span><span class="number number${number}"></span>`;
  } else {
    return `<span class="number number${Math.floor(
      number / 10
    )}"></span><span class="number number${Math.floor(number % 10)}"></span>`;
  }
}

const timeLeft = 1342514; // seconds
const counterDiv = document.querySelector("#counter");
const { day, hour, minute } = secondsToDhm(timeLeft);
console.log({ day, hour, minute });

const result = `<span class="days">${convertToNumberIcon(
  day
)}</span><span class="hours">${convertToNumberIcon(
  hour
)}</span><span class="number colon"></span><span class="minutes">${convertToNumberIcon(minute)}</span>`;

console.log(result);

counterDiv.innerHTML = result;
