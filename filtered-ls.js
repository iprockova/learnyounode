var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, list){
	for(var i = 0; i < list.length; i++){
		var fileName = list[i];
		if(path.extname(fileName).replace('.', '') == process.argv[3]){
			console.log(fileName);
		}
	}
});
