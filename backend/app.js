const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"      
    );
    next();
}


);
app.post('/api/posts', (req,res, next)=>{
    const post=req.body;
    console.log(post);
    res.status(201).json({
        message:'Post added successfully 1'
    })
})
    


app.use('/api/posts', (req,res, next)=>{
const posts=[
{
    'id':"bfksdbafdk",
    'title':"first title",
    'content':"second content"
},
{
    'id':"hfbhjabjas",
    'title':"sec title",
    'content':"second content"
}
];
 res.status(200).json(
   { message:'Successful!',
    posts:posts
}
);
}

);



module.exports=app;