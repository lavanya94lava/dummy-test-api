const Product = require("../../models/product");

module.exports.createProduct = async function(req,res){
    try{
        const product = await Product.create({
            name:req.body.name,
            quantity:req.body.quantity
        });
        return res.json( 200,{
            data:{
                product:product
            }
        });
    }
    catch(err){
        return res.json(400,{
            data:{
                message:"Error in creating product"
            }
        });
    }
    
}


module.exports.getProducts = async function(req, res){
    
    let products  = await Product.find({})
    .sort('-createdAt');
 
    return res.json(200,{
        data:{
            products:products
        }
            
    });
}


module.exports.destroy = async function (req, res) {
    try {
        let product = await Product.findById(req.params.id);
            product.remove();
        return res.json(200,{
            message:"Congrats!!Product Deleted"
        });
        
    }catch (err) {
        console.log("Error while deleting the product",err);
        return res.json(500,{
                message:"Internal server error"
        });
    }

}

module.exports.update_quantity = function(req,res){

    try {
        Product.findOneAndUpdate({_id:req.params.id},
            {$set:{quantity:req.params.number}},function(err,product){
                if(err){
                    console.log("Cannot update the product");
                }
                return res.json(200,{
                    data:{
                        product:product,
                    },
                    message:"Congtats!!! Product Updated Successfully"
                });

            }
            );
        
    }catch (err) {
        console.log("Error!! cant update the product",err);
        return res.json(500,{
                message:"Internal server error"
        });
    }
}