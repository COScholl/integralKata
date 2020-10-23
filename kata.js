 const _ = require('lodash');



const hello = () => "hello world!";

const newUser = (name, screenName) => {
  const user = {
    name: `${name}`,
    screenName: `${screenName}`,
    follwers: [],
    following: [],
    timeline: [],
  }

  return user;
};

const postMessage = (user, msg) => {
  let updateUser = _.cloneDeep(user);
  updateUser.timeline = [...updateUser.timeline, msg];

  return updateUser;
}

module.exports = {
  hello,
  newUser,
  postMessage
};
