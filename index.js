console.log("3" + 4 + 5);

// Break
var a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length);

// Break
let obj = {
  x: 2,
  getX: function () {
    setTimeout(() => console.log("a"), 0);
    new Promise((res) => res(1)).then((v) => console.log(v));
    setTimeout(() => console.log("b"), 0);
  },
};
obj.getX();
