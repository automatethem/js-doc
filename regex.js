const s = '[현대] 더 뉴아반떼MD 1.6 GDi 프리미엄';
console.log(s); //[현대] 더 뉴아반떼MD 1.6 GDi 프리미엄

var makerNames = s.match(/\[(.+?)\]/g);
console.log(makerNames);
console.log(makerNames[0]);
makerNames.forEach(makerName => {
    console.log(makerName);
});

makerNames = makerNames.map(m => m.replace(/[\[\]]/g, ''));
console.log(makerNames);
console.log(makerNames[0]);
makerNames.forEach(makerName => {
    console.log(makerName);
});

/*
[현대] 더 뉴아반떼MD 1.6 GDi 프리미엄
[ '[현대]' ]
[현대]
[현대]
[ '현대' ]
현대
현대
*/
