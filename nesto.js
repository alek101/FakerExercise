const niz = ['jabuka', "kruska", "sljiva"];
const obj = {};

for(let voce of niz)
{
  console.log({voce});
  obj[voce]=voce;
}

console.log(obj);

const test = function (...roles){ console.log(roles)};

test('admin','user');