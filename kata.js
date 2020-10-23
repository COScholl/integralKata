const _ = require('lodash');
const { DateTime } = require('luxon');

const hello = () => "hello world!";

/**
 * create a new user with properties `name`, `screenName`
 * and set defaultValues for other properties `followers`, `following`, and `timeline`
 * @param  {[type]} name       [description]
 * @param  {[type]} screenName [description]
 * @return {[type]}            [description]
 */
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

/**
 * post a message to personal timeline
 * @param  {[type]} user [description]
 * @param  {[type]} msg  [description]
 * @return {[type]}      [description]
 */
const postMessage = (user, msg) => {
  let updateUser = _.cloneDeep(user);
  let timestamp = DateTime.fromISO(new Date().toISOString()).toString();
  updateUser.timeline = [...updateUser.timeline, {msg, timestamp}];

  return updateUser;
}

/**
 * Add other users to `following` property
 * @param  {[type]} user     [description]
 * @param  {[type]} toFollow [description]
 * @return {[type]}          [description]
 */
const subscribeToUser = (user, toFollow) => {

});

/**
 * get followers' timelines and self timeline, sort by timestamp and diff
 * timestamps from current moment in minutes
 * @param  {[type]} followers [description]
 * @param  {[type]} user      [description]
 * @return {[type]}           [description]
 */
const viewFeed = (followers, user) => {

})


module.exports = {
  hello,
  newUser,
  postMessage,
  subscribeToUser,
  viewFeed
};
