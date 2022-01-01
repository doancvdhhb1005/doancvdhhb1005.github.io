var Todos=require('../models/connect');
var getData=function(res){
    Todos.find(function(err,todos){
        if(err){
            res.status(500).json(err);
        }
        else{res.json(todos);}
    })
}
module.exports=function(app){
    app.get('/api/findall',function(req,res){
       getData(res);
    });
    app.post('/api/create',function(req,res){
        var data={text:req.body.text,isDone:req.body.isDone};
        
        Todos.create(data,function(err,rs){
            if(err)
            {throw err;}
            else
            {getData(res);}
        })
    });
    app.put('/api/update',function(req,res){
        if(!req.body._id){
            res.status(500).send('ID is required!');
        }
        else{
           
            Todos.update({_id:req.body._id},{text:req.body.text,isDone:req.body.isDone},
                (err,data)=>{
                    if(err){
                        res.status(500).send('Error!');
                    }
                    else{
                        getData(res);
                    }
                })
        }
    })
    // app.delete('/api/delete/:_id',function(req,res){
    
    //         Todos.remove({_id:req.params._id},function(err,data){
    //             if(err){
    //                 res.status(500).send('ID is required');
    //             }
    //             else{
    //                 getData(res);
    //             }
    //         });
    // })
    
}