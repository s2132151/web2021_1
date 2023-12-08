const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
select id,name,date,country,position from groups;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' | ' + data.name + ' | ' + data.company + ' | ' + data.date + ' | ' + data.comment );
		}
	});
});
