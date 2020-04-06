import Parse from "parse";

const Gift = Parse.Object.extend("Gift");
const query = new Parse.Query(Gift);

export const saveGift = (toUser, giftOption) => {
  const gift = new Gift();
  gift.set("toUser", toUser);
  gift.set("gift", giftOption);
  return gift.save();
};

export default query;
