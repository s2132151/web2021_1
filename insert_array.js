const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('main.db');

let sql2 = [
`insert into BTS ("name","names","birth","country","position","comment2") values ("BTS","キム・ソクジン","1992年12月4日、30歳","韓国","サブボーカル","大統領と会った際に用意周到に準備しサインをもらった");`,
  `insert into BTS ("name","names","birth","country","position","comment2") values ("BTS","ミン・ユンギ(シュガ)","1993年3月9日、30歳","韓国","リードラッパー","クールで静かな平和主義者でとてもやさしい");`,
  `insert into BTS ("name","names","birth","country","position","comment2") values ("BTS","チョン・ホソク","1994年2月18日、29歳","韓国","メインダンサー、リードラッパー","ホラー・恐怖・びっくり系の全てがとても苦手でリアクションが大きい");`,
  `insert into BTS ("name","names","birth","country","position","comment2") values ("BTS","キム・ナムジュン","1994年9月12日、29歳","韓国","リーダー、メインラッパー","すぐにいろいろなものを破壊してしまう");`,
  `insert into BTS ("name","names","birth","country","position","comment2") values ("BTS","パク・ジミン","1995年10月13日、28歳","韓国","リードボーカル・リードダンサー","笑うと椅子から転げ落ちてしまう");`,
  `insert into BTS ("name","names","birth","country","position","comment2") values ("BTS","キム・テヒョン(V)","1995年12月30日、27歳","韓国","サブボーカル、リードダンサー","天然な発言がとても多い");`,
  `insert into BTS ("name","names","birth","country","position","comment2") values ("BTS","チョン・ジョングク","1997年9月1日、26歳","韓国","メインボーカル、リードダンサー","マネージャーに持ち上げられるまで起きないことがある");`,
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