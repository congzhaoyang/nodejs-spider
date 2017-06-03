var express = require('express');
var app = express();
var request = require('request');
const cheerio = require('cheerio');

app.get('/', function(req, res){
  request('http://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=%E6%9D%A8%E5%B9%82/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //console.log('body:', body); // Print the HTML for the Google homepage. 
    $ = cheerio.load(body); //当前的$是拿到了整个body的前端选择器
    res.json({
      'Classnum': $('ul li').length
      //'content': $('.menuContent span').text(),
      //'Classnum': 
    });
    //res.send('.menuConten .item a span').html();
  });
  //res.send('hello world');
});

app.listen(3000);