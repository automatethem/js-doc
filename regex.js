
const s = '[현대] 더 뉴아반떼MD 1.6 GDi 프리미엄';
console.log(s); // [현대] 더 뉴아반떼MD 1.6 GDi 프리미엄

// matchAll을 사용하여 정규표현식으로 매칭된 결과를 얻습니다.
const makerNames = s.matchAll(/\[(.+?)\]/g);
console.log(makerNames);

for (const makerName of makerNames) {
    console.log(makerName[0]); // 대괄호 포함
    console.log(makerName[1]);
}

/*
[현대] 더 뉴아반떼MD 1.6 GDi 프리미엄
Object [RegExp String Iterator] {}
[현대]
현대
*/


---

const s = '[현대] 더 뉴아반떼MD 1.6 GDi 프리미엄';
console.log(s); //[현대] 더 뉴아반떼MD 1.6 GDi 프리미엄

var makerNames = s.match(/\[(.+?)\]/g);
console.log(makerNames);
console.log(makerNames[0]);
for (const makerName of makerNames) {    
    console.log(makerName);
};
makerNames.forEach(makerName => {
    console.log(makerName);
});
    
    
makerNames = makerNames.map(m => m.replace(/[\[\]]/g, ''));
console.log(makerNames);
console.log(makerNames[0]);
for (const makerName of makerNames) {    
    console.log(makerName);
};
makerNames.forEach(makerName => {
    console.log(makerName);
});

/*
[현대] 더 뉴아반떼MD 1.6 GDi 프리미엄
[ '[현대]' ]
[현대]
[현대]
[현대]
[ '현대' ]
현대
현대
현대
*/
