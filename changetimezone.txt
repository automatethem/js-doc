//https://github.com/automatethem-product-chat/solution-telegram-chat-client-app/tree/main/doc#hosting-doc-aws-timezone
//sudo timedatectl set-timezone Etc/UTC
////sudo timedatectl set-timezone Asia/Seoul

const today = new Date();

console.log(today);
console.log(today.toLocaleString());
console.log(today.toISOString())
console.log();

process.env.TZ = 'Asia/Seoul';

console.log(today);
console.log(today.toLocaleString());
console.log(today.toISOString())
console.log();

today.setHours(0, 0, 0, 0);
console.log(today);
console.log(today.toLocaleString());
console.log(today.toISOString())

/*
2024-03-16T07:07:10.400Z
3/16/2024, 7:07:10 AM
2024-03-16T07:07:10.400Z

2024-03-16T07:07:10.400Z
3/16/2024, 4:07:10 PM
2024-03-16T07:07:10.400Z

2024-03-15T15:00:00.000Z
3/16/2024, 12:00:00 AM
2024-03-15T15:00:00.000Z
*/
