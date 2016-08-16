/**
 * Created by Administrator on 2016/8/16.
 */
var express=require('express');
var app=express();
app.post('/',function (req,res) {
    var body=req.body;
    console.log(body);
})
app.listen(10000);