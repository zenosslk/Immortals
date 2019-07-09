// 35. 下面这些值哪些是假值 ?
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
// A: 0, '', undefined
// B: 0, new Number(0), '', new Boolean(false), undefined
// C: 0, '', new Boolean(false), undefined
// D: 所有都是假值