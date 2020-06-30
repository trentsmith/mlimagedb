const express = require('express');
const alasql = require('alasql');
alasql("CREATE TABLE imagedb (item STRING, code STRING, piece STRING )");

const app = express();
db =[];

app.get('/', (req, res) => {
 alasql("INSERT INTO imagedb VALUES ('i','c','p')");
alasql("INSERT INTO imagedb VALUES ('i','c1','p1')");
 res.send("test")
  
});
app.get('/getAllusers', (req, res) => {

a= alasql("select * from imagedb");

 res.send(a)
  
});
app.get('/image/:i', (req, res) => {
 items= alasql("select * from imagedb where item = '"+req.params.i2+"'");
/*for( i = 0; i<users.length;i++)
{
  if(users[i].u == req.params.u&&users[i].p==req.params.p)
  {
    res.send(users[i])  
    break;
  }
}*/
  console.log(items);
 res.send(items); 
});

app.get('/insert/item/:i/:p/:name', (req, res) => {

 alasql("INSERT INTO updb VALUES ('"+req.params.u+"','"+req.params.p+"')");
res.send("success")

  
});
/////////////////
app.get('/getAlltokens', (req, res) => {

a= alasql("select * from tokdb");
 res.send(a)
  
});
app.get('/token/:u/:token', (req, res) => {
 users= alasql("select * from updb where u = '"+req.params.u+"' AND p ='"+req.params.token+"'");
/*for( i = 0; i<users.length;i++)
{
  if(users[i].u == req.params.u&&users[i].token==req.params.token)
  {
    res.send(users[i])  
    break;
  }
}
*/AnimationEffect
 res.send("Does not Exist"); 
});


app.listen(3000, () => {
  console.log('server started');
});