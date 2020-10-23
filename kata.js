const _ = require('lodash');
const { DateTime } = require('luxon');

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
  let timestamp = DateTime.fromISO(new Date().toISOString()).toString();
  updateUser.timeline = [...updateUser.timeline, {msg, timestamp}];

  return updateUser;
}

module.exports = {
  hello,
  newUser,
  postMessage
};
