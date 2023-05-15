const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 8080;
let ID = undefined;

const fakeData = [
    {
        id: 1,
        productName: 'iPhone 13',
        brandName: 'Apple',
        price: 1800,
        stockCount: 20,
        isDiscounted: true
    },
    {
        id: 2,
        productName: 'Galaxy S21',
        brandName: 'Samsung',
        price: 1500,
        stockCount: 15,
        isDiscounted: false
    },
    {
        id: 3,
        productName: 'Pixel 6',
        brandName: 'Google',
        price: 1300,
        stockCount: 10,
        isDiscounted: true
    },
    {
        id: 4,
        productName: 'OnePlus 9',
        brandName: 'OnePlus',
        price: 1200,
        stockCount: 12,
        isDiscounted: false
    }
];
if (fakeData.length == 0) {
    ID = 1;
}
else {
    let maxID = fakeData.sort((a, b) => b.id - a.id)[0].id;
    ID = ++maxID;
}

//get all products
app.get("/products", (req, res) => {
    if (fakeData.length === 0) {
        res.status(204).send("no content");
        return;
    } else {
        res.status(200).send(fakeData);
        return;
    }
});
//get product by id
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const singleData = fakeData.find((data) => data.id === parseInt(id));

    if (singleData === undefined) {
        res.status(204).send("data not found 204");
        return;
    } else {
        res.status(200).send(singleData);
        return;
    }
});

//delete product by id
app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    const data = fakeData.find((data) => data.id === parseInt(id));
    if (data === undefined) {
        res.status(404).send("no such product found!");
        return;
    } else {
        const idx = fakeData.indexOf(data);
        fakeData.splice(idx, 1);
        res.status(202).send("product deleted successfully!");
    }
});

//post product
app.post("/products", (req, res) => {
    const newProduct = {
        id: ID,
        productName: req.body.productName,
        brandName: req.body.brandName,
        price: req.body.price,
        stockCount: req.body.stockCount,
        isDiscounted: req.body.isDiscounted
    }
    fakeData.push(newProduct);
    ID++;
    res.status(201).send("data posted successfully");
});

app.listen(PORT, () => {
    console.log(`First Node App running on port ${PORT}`);
});