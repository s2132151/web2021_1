const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql2 = [
  `insert into groups("name","company","date","comment") values ("BTS","HYBE","2013年6月13日","社会的偏見から自分たちの音楽を守り抜く");`,
  `insert into groups ("name","company","date","comment") values ("TWICE","JTPエンターテインメント","2015年10月20日","いい音楽で一度、素敵なパフォーマンスで二度魅了させる");`,
  `insert into groups ("name","company","date","comment") values ("BLACKPINK","YGエンターテインメント","2016年8月8日","美しいもの(現存する女性らしさ)がすべてではない");`,
  `insert into groups ("name","company","date","comment") values ("STRAYKIDS","JYPエンターテインメント","2018年3月25日","従来の型にはまらない、自由な姿でそれぞれの魅力を持って活動する");`,
  `insert into groups("name","company","date","comment") values ("(G)I-DLE","CUBEエンターテインメント","2018年5月2日","個性のある女の子たちの集まり");`,
  `insert into groups ("name","company","date","comment") values ("ITZY","JYPエンターテインメント","2019年2月12日","美しいもの(すべての魅力を持っている");`,
  `insert into groups ("name","company","date","comment") values ("LE SSERAFIM","HYBE","2022年5月2日","世の中の視線に動揺せず、恐れずに前に進む");`
  ]

for( let sql of sql2 ) {
db.serialize( () => {
  db.run( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    console.log( "データを追加しました" );
  });
});
};