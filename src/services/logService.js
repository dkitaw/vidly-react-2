const init = () => {
  console.log("Init logger service");
};

const error = error => {
  console.error(error);
};

const info = message => {
  console.log(message);
};

export default {
  init,
  error,
  info
};
