import Parse from "parse";

const query = new Parse.Query(Parse.User);

export const getUserById = userId => {
  query.include("country");
  query.include("school");
  const user = query.get(userId);

  user.then(data => {
    console.log(data.attributes.country.attributes);
  });

  return user;
};

export default query;
