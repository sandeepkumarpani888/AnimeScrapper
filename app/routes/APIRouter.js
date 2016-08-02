var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio=require('cheerio');

router.use(function (req,res,next){
	// Not implemented
	next();
});

router.route('/animeEpisode')
	.get(function (req,res) {
		var url='http://animeshow.tv/Absolute-Duo/';
		console.log(url);
		request({url:url,proxy:"http://10.3.100.207:8080"}, function (error,respones,html){
			if(!error){
				console.log('no error');
				var  $ =cheerio.load(html);
				$('.episodes_list_result').each(function (i,element){
					var data=$(this);
					var name=data.children().first().text();
					console.log(name);
				})
			}
			else{
				console.log(error+' lellol');
			}
		});
	});

module.exports=router;