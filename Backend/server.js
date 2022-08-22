import  Express  from "express";

const app =Express();

const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`Server run sucsessfully at http://localhost:${port}`)
}); 