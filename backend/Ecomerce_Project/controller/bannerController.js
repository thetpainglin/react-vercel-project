const bannerService = require('../service/bannerService');


let getAllBanner = async function (req, res, next){

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
        console.log("get all banner => ",req);
        let banner = await bannerService.getAllBanner();
        if(!banner) throw Error('No banner');
        console.log("data => ",banner)
         await res.status(200).json(banner);
    }
    catch (e){
        await res.status(400).json({msg : e});
    }

}

let newBanner = async function (req, res, next){
    try {

        let body = req.body;
        console.log("new banner => ",body);
        let banner = await bannerService.newBanner(body);
        if(!banner) throw Error('No banner');
        console.log("data => ",banner)
         await res.status(200).json(banner);
    }
    catch (e){
        await res.status(400).json({msg : e});
    }

}


module.exports = {
    getAllBanner,
    newBanner,
}
