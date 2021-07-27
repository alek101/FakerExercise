const niz = ['jabuka', "kruska", "sljiva"];
const obj = {};

for(let voce of niz)
{
  console.log({voce});
  obj[voce]=voce;
}

console.log(obj);