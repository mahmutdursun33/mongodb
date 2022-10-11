const express=require('express');
const PRODUCT = require('../models/PRODUCT');
const router=express.Router();

router.get('/',(req,res)=>{
    PRODUCT.find()
    .then((products)=>{
        res.json(products);
    })
    .catch(err=>{
        res.json(err);
    })
});

router.get('/:id',(req,res)=>{
    res.send(`fetch product ${req.params.id}`)
})
router.post('/',(req,res)=>{
    const product=new PRODUCT({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    })
    product.save()
    res.json(product)
    res.send('create product')

})
router.put('/:id',(req,res)=>{
    PRODUCT.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    })
    .then((product)=>{
        res.json(product)
    })
    .catch(err=>{
        res.json(err);
    })

})
router.delete('/:id',(req,res)=>{
    PRODUCT.findByIdAndDelete(req.params.id)
    .then(product=>{
        res.json(product)
    })
    .catch(err=>{
        res.json(err)
    })
})

module.exports=router;

const products=[
    {
    id:'string',
    name:"product 1",
    price:"number",
    description:"product 1 description"
    },
];

