import Parse from "parse";

const query = new Parse.Query(Parse.User);

export const getUserById = userId => {
  query.include("Country");
  const user = query.get(userId);

  return user;
};

export default query;