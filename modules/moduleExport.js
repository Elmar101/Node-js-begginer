let objName = "Node js";

const sum = (a, b) => {
  return a + b;
};

const Person = {
  name: "Node",
  info: "For server side library of js"
};

// exports.name = objName;
module.exports = {
  objName,
  sum,
  person: Person
}; 