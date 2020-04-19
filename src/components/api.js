/*fetch option object can be liket this. * are default value.
{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
 */
var func = {
  basic_request(
    url,
    options = {
      method: "GET"
    }
  ) {
    fetch(url, options)
      .then(res => res.json())
      .then(res => {
        let isSuccess = res.isSuccess;
        let errorCode = res.errorCode;
        let errorMessage = res.errorMessage;
        let timeStamp = msToTime(res.timestamp);
        let data = res.data;

        if (isSuccess !== true) {
          // eslint-disable-next-line no-console
          console.log("[" + errorCode + "]" + timeStamp + " : " + errorMessage);
          return errorCode;
        } else {
          return data;
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
};

function msToTime(duration) {
  let seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

export default func;
