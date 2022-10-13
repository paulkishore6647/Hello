const app=require("express")();
const PORT=process.env.PORT || 3000;
app.get("",(req,res)=>{
    res.send("Rey sravan ga gurey bochu vesukoni vachstvu clge denike ra...charan sir guddlo finger pettu ra");
});
app.listen(PORT, ()=>{
    console.log('app up at port ${PORT}');
});
