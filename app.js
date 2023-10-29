const exprees = require ("express")
const path = require ("path");
const app = exprees ()

app.get ("/", (req, res)=> {
    //res.send ("Hello word!");
    res.sendFile(path.join(__dirname + "/luis.html")); 
})

app.listen(3000, ()=> {
    console.log ("server listening on port",3000);
} )
