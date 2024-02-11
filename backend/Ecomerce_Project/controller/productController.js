const productService = require('../service/productService');


let getAllProducts = async function (req, res, next){

    res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
    
    try {
        console.log("getAllPlayer => ",req);
        let product = await productService.getAllProducts();
        if(!product) throw Error('No Player');
        console.log("data => ",product)
        await res.status(200).json(product);
    }
    catch (e){
        await res.status(400).json({msg : e});
    }

}

let newProduct = async function (req, res, next){
    try {

        let body = req.body;
        console.log("body => ",body);
        let product = await productService.newProduct(body);
        if(!product) throw Error('No product');
        console.log("data => ",product)
        await res.status(200).json(product);
    }
    catch (e){
        await res.status(400).json({msg : e});
    }

}

let updateProduct = async function (req, res, next){
    try {

        let productId = req.params['productId'];
        let body = req.body;
        console.log("body => ",productId);
        let product = await productService.updateProduct(productId , body);
        if(!product) throw Error('No product');
        console.log("data => ",product)
        await res.status(200).json(product);
    }
    catch (e){
        await res.status(400).json({msg : e});
    }

}

module.exports = {
    getAllProducts,
    newProduct,
    updateProduct,
}
