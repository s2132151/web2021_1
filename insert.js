const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
insert into BTS ("name","birth","country","position","comment") values ("ははが","2021年9月1日","韓国","メインボーカル","マネージャーに持ち上げられるまで起きないことがある");
`


db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを追加しました" );
	});
});
