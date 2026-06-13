const express=require('express')
const app=express()

function gcd(a,b){
 while(b)[a,b]=[b,a%b]
 return a
}

app.get('/rupsha619_gmail_com',(req,res)=>{
 let x=+req.query.x
 let y=+req.query.y

 if(
  !Number.isInteger(x)||
  !Number.isInteger(y)||
  x<=0||y<=0
 ){
  return res.send('NaN')
 }

 res.send(String(x/gcd(x,y)*y))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('running')
})