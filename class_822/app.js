function sayHello(name) {
  console.log(`Hello ${name}!`);
}

const button = document.querySelector("button");
const user = {
  name: "Nathan",
  age: 22,
  occupation: "IT",
  getProperties: function () {
    console.log(
      `name: ${this.name}`,
      `age: ${this.age}`,
      `occupation: ${this.occupation}`
    );
  },
};

function keysAndValues(object) {
  return [Object.keys(object), Object.values(object)];
}

for (array of keysAndValues({ a: 1, b: 2, c: 3 })) {
  console.log(array);
}

button.addEventListener("click", () => {
  user.getProperties();
});
