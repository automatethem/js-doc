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

---

const s = '[현대] 더 뉴아반떼MD 1.6 GDi 프리미엄';
console.log(s); // [현대] 더 뉴아반떼MD 1.6 GDi 프리미엄

// matchAll을 사용하여 정규표현식으로 매칭된 결과를 얻습니다.
const regex = /\[(.+?)\]/g;
const matchAllResults = s.matchAll(regex);
console.log(matchAllResults);

for (const match of matchAllResults) {
    console.log(match[0]); // 대괄호 포함
    console.log(match[1]);
}

/*
[현대] 더 뉴아반떼MD 1.6 GDi 프리미엄
Object [RegExp String Iterator] {}
[현대]
현대
*/
