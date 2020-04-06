import Parse from "parse";

const Follow = Parse.Object.extend("Follow");
const query = new Parse.Query(Follow);

export const saveFollow = toUser => {
  const follow = new Follow();
  follow.set("toUser", toUser);
  return follow.save();
};

export const isFollowed = async (fromUser, toUser) => {
  const query = new Parse.Query(Follow);
  query.equalTo("fromUser", fromUser);
  query.equalTo("toUser", toUser);
  const result = await query.count();

  return result > 0 ? true : false;
};

export const deleteFollow = async (fromUser, toUser) => {
  const query = new Parse.Query(Follow);
  query.equalTo("fromUser", fromUser);
  query.equalTo("toUser", toUser);
  const result = await query.first();

  return result.destroy();
};

export const getFollowersNumber = async toUser => {
  const query = new Parse.Query(Follow);
  query.equalTo("toUser", toUser);
  const result = await query.count();

  return result;
};

export const getFollowingNumber = async toUser => {
  const query = new Parse.Query(Follow);
  query.equalTo("fromUser", toUser);
  const result = await query.count();

  return result;
};

export default query;
