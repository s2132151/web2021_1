const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql2 = [
  `insert into ITZY ("name","birth","country","position","comment") values ("宮脇　咲良","1998年3月19日、25歳","日本","メインダンサー","三度目のアイドルグループのデビューをした");`,
  `insert into ITZY ("name","birth","country","position","comment") values ("キム・チェウォン"," 2000年8月1日、23歳","韓国","リーダー","口の横の口角でナイキができる");`,
  `insert into ITZY ("name","birth","country","position","comment") values ("ホ・ユンジン","2001年10月8日、22歳","アメリカ","メインボーカル","オペラを昔やっていて発声がとても綺麗");`,
  `insert into ITZY ("name","birth","country","position","comment") values ("中村　一葉","2003年8月9日、20歳","日本","メインラッパー","筋トレにとてもストイックで腹筋が割れている");`,
  `insert into ITZY ("name","birth","country","position","comment") values ("ホン・ウンチェ","2006年11月19日、17歳","韓国","メインダンサー","人見知りだが人によってはとても懐く");`,
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