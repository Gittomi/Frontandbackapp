const { v4: uuidv4 } = require('uuid')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');

//post queryä varten
router.use(bodyParser.urlencoded({extended: true}));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


//sisäiseen muistiin tallennus
let productsData = [
   {
    id:uuidv4(),
    thumbnail:"https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg",
    name: "Seagate Portable 2TB External Hard Drive Portable HDD USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
    priceWhole: "59",
    pricePart:"99",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail: "https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg",
    name: "Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime",
    priceWhole: "66",
    pricePart:"64",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail:"https://m.media-amazon.com/images/I/71MIvKxxSvL._AC_SL1500_.jpg",
    name: "Roku Ultra | Streaming Device HD/4K/HDR/Dolby Vision with Dolby Atmos, Bluetooth Streaming, and Roku Voice Remote with Headphone",
    priceWhole: "68",
    pricePart:"99",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail:"https://m.media-amazon.com/images/I/71960JgD-CL._AC_SL1500_.jpg",
    name: "Brother Genuine Cartridge TN760 High Yield Black Toner,1 Pack",
    priceWhole: "76",
    pricePart: "46",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail:"https://m.media-amazon.com/images/I/61qALmGqKGL._AC_SL1500_.jpg",
    name: "Dell USB 3.0 Ultra HD/4K Triple Display Docking Station (D3100), Black",
    priceWhole: "128",
    pricePart: "98",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail: "https://m.media-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg",
    name: "TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server",
    priceWhole: "53",
    pricePart: "99",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail:"https://m.media-amazon.com/images/I/71f59MLDivL._AC_SL1500_.jpg",
    name: "Original HP 64XL Tri-color High-yield Ink Cartridge | Works with HP ENVY Inspire 7950e; ENVY Photo 6200, 7100, 7800; Tango Series | Eligible",
    priceWhole: "45",
    pricePart: "89",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail:"https://m.media-amazon.com/images/I/81rg-38AdJL._AC_SL1500_.jpg",
    name: "Crucial MX500 1TB 3D NAND SATA 2.5 Inch Internal SSD, up to 560MB/s - CT1000MX500SSD1",
    priceWhole: "89",
    pricePart: "99",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail:"https://m.media-amazon.com/images/I/911ujeCkGfL._AC_SL1500_.jpg",
    name: "Samsung Electronics 870 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-77E500B/AM)",
    priceWhole: "71",
    pricePart: "99",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail:"https://m.media-amazon.com/images/I/71syJu6DJvL._AC_SL1500_.jpg",
    name: "Canon PG-240 XL / CL-241 XL Amazon Pack",
    priceWhole: "53",
    pricePart: "99",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail:"https://m.media-amazon.com/images/I/71oPdIcALXL._AC_SL1500_.jpg",
    name:"HUANUO Dual Monitor Stand, Adjustable Spring Monitor Desk Mount Swivel Vesa Bracket with C Clamp/Grommet Mounting Base",
    priceWhole: "69",
    pricePart:"99",
    shipsTo: "Ships to Finland"
  },
  {
    id:uuidv4(),
    thumbnail: "https://m.media-amazon.com/images/I/81sYr0sEbML._AC_SL1500_.jpg",
    name: "SK hynix Gold S31 1TB SATA Gen3 2.5 inch Internal SSD | SSD 1TB | Up to 560MB/S | Solid State Drive | Compact 2.5\" SSD Form Factor SK",
    priceWhole: "119",
    pricePart:"32",
    shipsTo: ""
  }];
productsData.exports = productsData;

router.get('/', (req, res) => {
    
    res.json(productsData);
})
// get tuotteiden etsimiseen
router.get('/search', (req, res) => {
    
    const name = req.query.name;
    const price = req.query.price

     let searchParams = {
         'name':name,
         'price':price
          
     };
    
     let filterProdsbyName = productsData.filter(product => product.prodName.toLowerCase().includes(searchParams.name));
     let filterProdsbyPrice = productsData.filter(product => product.manufacturer.toLowerCase().includes(searchParams.price));
     
     let filteredAll = [];


     if(filterProdsbyName.length > 0) {
        filteredAll=filteredAll.concat(filterProdsbyName);
        
             if(filterProdsbyPrice.length > 0) {
         filteredAll=filteredAll.concat(filterProdsbyPrice);
        
    
         
        }}
        filteredAll = filteredAll.filter((element, index)=> { return filteredAll.indexOf(element)===index;})
    res.json(filteredAll);
})
   
     
router.get('/:productId', (req, res) => {
    
    let foundIndex = productsData.findIndex(t => t.id === req.params.productId);
    
    if(foundIndex === -1){
        res.sendStatus(404);//not found
    }
    else {
        res.json(productsData[foundIndex]);
    }
    //res.sendStatus(200); //ok
    })
    router.delete('/:productId', (req,res) => {
      let foundIndex = productsData.findIndex(t => t.id === req.params.productId);
      if(foundIndex === -1){
          res.sendStatus(404);
      }
      else {
        productsData.splice(foundIndex, 1);
          res.sendStatus(202);
      }
      })
      router.post('/', (req, res) => {
        
        console.log(req.body);
          
          productsData.push({
              id: uuidv4(),
              thumbnail: req.body.thumbnail,
              name: req.body.name,
              priceWhole: req.body.priceWhole,
              pricePart: req.body.pricePart,
              shipsTo: "Ships to "+req.body.shipsTo
              
          });
          res.redirect(302, '..'); 
         
        
          
          
          
          
         
      }) /*etsii ainakin nimen perusteella samalla periaatteella menis kuin tuo gettinä tehty.
      router.post('/search', (req, res) => {
             
        const name = req.body.name;
        const manufacturer = req.body.manufacturer;
        const category = req.body.category;
                
               let findProducts = productsData.filter(product =>product.prodName.toLowerCase().includes(name.toLowerCase()));
        
               res.send(findProducts);
               
            
        }); */

      router.put('/:productId', (req, res) => {
      let foundProduct = productsData.find(t => t.id === req.params.productId);
          if(foundProduct) {
                  foundProduct.thumbnail = req.params.thumbnail;
                 foundProduct.name = req.body.name;
                foundProduct.priceWhole = req.body.priceWhole;
                 foundProduct.pricePart = req.body.pricePart;
                foundProduct.shipsTo = req.body.shipsTo;
              res.sendStatus(202);
          }
          else {
              res.sendStatus(404);
          }
      })
     module.exports = router
      
     