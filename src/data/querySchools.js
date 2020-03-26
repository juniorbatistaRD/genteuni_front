import Parse from "parse";

const School = Parse.Object.extend("School");
const query = new Parse.Query(School);

export default query;
