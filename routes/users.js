const { v4: uuidv4 } = require('uuid')
const express = require('express')
const router = express.Router()

//sisäiseen muistiin tallennus
let usersData = [
    {
        id: uuidv4(),
        firstName: "Timo",
        lastName: "Tatti",
         adress: "Tattitie 1",
        phoneNum: "12345"
    },
    {
        id: uuidv4(),
        firstName: "Jorma",
        lastName: "Teras",
         adress: "Teratie 2",
        phoneNum: "54321"
    }
];


// tämä vain testauskäyttöön
router.get('/', (req, res) => {
    res.json(usersData);
})

router.get('/:userId', (req, res) => {
    
    let foundIndex = usersData.findIndex(t => t.id === req.params.userId);
    
    if(foundIndex === -1){
        res.sendStatus(404);//not found
    }
    else {
        res.json(usersData[foundIndex]);
    }
    //res.sendStatus(200); //ok
    })
    router.delete('/:userId', (req,res) => {
      let foundIndex = usersData.findIndex(t => t.id === req.params.userId);
      if(foundIndex === -1){
          res.sendStatus(404);
      }
      else {
          usersData.splice(foundIndex, 1);
          res.sendStatus(202);
      }
      })
      router.post('/', (req, res) => {
          console.log(req.body);
      
          usersData.push({
              id: uuidv4(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              adress: req.body.adress,
              phoneNum: req.body.phoneNum
          });
          res.sendStatus(201);
      })
      router.put('/:userId', (req, res) => {
      let foundUser = usersData.find(t => t.id === req.params.userId);
          if(foundUser) {
              foundUser.firstName = req.body.firstName;
              foundUser.lastName = req.body.lastName;
              foundUser.adress = req.body.adress;
              foundUser.phoneNum = req.body.phoneNum;
              res.sendStatus(202);
          }
          else {
              res.sendStatus(404);
          }
      })
      module.exports = router;
      