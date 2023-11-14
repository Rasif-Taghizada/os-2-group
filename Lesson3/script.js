const a = 'word';
const b = false;
const c = true;
const d = 0
const e = 1
const f = 2
const g = null

console.log(a || b);
console.log(c || a);
console.log(b || a);
console.log(e || f);
console.log(f || e);
console.log(d || g);
console.log(g || d);
console.log(a && c);
console.log(c && a); 