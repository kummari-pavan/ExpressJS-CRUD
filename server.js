const express = require("express");
const app =express();

app.use(express.json());

app.get('/',(req,res)=>{ //routing
    res.send("<h1>Hello India</h1>")
})

//designing api
const products=[
    {
        id:1,
        name:"iphone"
    },
    {
        id:2,
        name:"mi"
    },
    {
        id:3,
        name:"oppo"
    }

]

// Get all products
       //we can use api instead of products
app.get('/products',(req,res)=>{
    res.json(products)
})

// Get a specific product by id
//specific prod
app.get('/products/:id',(req,res)=>{
    const newData=products.filter(item=>item.id.toString() === req.params.id) //can use parseInt instead of toString
    if (filteredProducts.length === 0) {
        return res.status(404).send("Product not found");
    }
    return res.send(newData)
})

// Post method to add new product
app.post('/addproducts',(req,res)=>{
    const {id,name}=req.body;
    console.log(id,name);
    products.push({ id, name });
    return res.send("Data Stored")
})

// PUT method to update a product by id
app.put('/products/:id', (req, res) => {
    const product = products.find(item => item.id === parseInt(req.params.id));
    if (!product) return res.status(404).send("Product not found");

    const { name } = req.body;
    product.name = name;  // Update the name of the product

    res.send(`Product with id ${req.params.id} updated successfully`);
});

// DELETE method to remove a product by id
app.delete('/products/:id', (req, res) => {
    const index = products.findIndex(item => item.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send("Product not found");

    products.splice(index, 1);  // Remove the product from the array
    res.send(`Product with id ${req.params.id} deleted successfully`);
});

app.listen(5000,()=>console.log("server Running..."));