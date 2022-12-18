const express = require('express')
const app = express()
const port = process.env.PORT || 5000
app.use(express.json());
const uniqid = require('uniqid') ;
require('./data/mongoose.js')
const Users = require('./models/users.schema.js')
const Accounts = require('./models/accounts.schema.js')
// להוסיף סכמה במודלס
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello bank')
})

app.get('/users', (req, res) => {
  User.find({}).then((users) => {
    res.send(users)
}).catch((e) => {
    res.status(500).send("could not find users")
})
  })

  app.get('/accounts', (req, res) => { 
    Accounts.find({}).then((accounts) => {
      res.send(accounts)
  }).catch((e) => {
      res.status(500).send("could not find accounts")
  })
  })

  app.post('/users', (req, res) => { 
const user = new User(req.body)
users.push(user)
console.log(users);
user.save().then(() => {
  res.status(201).send(user)
}).catch((e) => { 
  res.status(400).send("could not create new account")
})
  })


  app.get('/accounts/:accountId', (req, res) => { 
    const _id = req.params.id
    // לבדוק אם מקבלים אידי מהמונגו כ_id
    Account.findById(_id).then((account) => {
   if (!account) {
    return res.status(404).send("account not exist")
   }
    res.send(account)
   }).catch((e) => {
    res.status(500).send("account not fount")
    })
  })

  app.get('/user/:userid', (req, res) => { 
    const _id = req.params.userid
    User.findById(_id).then((user) => {
      if (!user) {
       return res.status(404).send("user not exist")
      }
      res.status(201).send(user)
      }).catch((e) => {
       res.status(500).send("user not fount")
       })
     })


  app.post('/accounts', (req, res) => { 
   // check about if id:"_id"
   const account = new Account(req.body)
   account.save().then(() => {
        res.status(201).send(account)
        accounts.push(account)
    }).catch((e) => { 
        res.status(400).send("could not create new account")
    })
})
  //  tocheck
  app.post('/account/deposit',(req,res) => {
    const accountid = req.body.id
    const currAccount = Account.findById(_id).then((account) => {
      if (!account) {
          return res.status(404).send("account not exist")
      }
      currAccount.cash+=req.body.amount;
      res.status(201).send(account)
      
  }).catch((e) => {
      res.status(500).send("could not deposit")
    }) 
  })

 app.put('/account/addcredit',(req,res) => {
    // const accounts = JSON.parse(contents)
    // const accountId = req.body.id
    const _id = req.params.id
    const currAccount = Account.findById(_id).then((account) => {
      if (!account) {
          return res.status(404).send("account not exist")
      }
      currAccount.credit+=req.body.addcredit
      res.status(201).send(account)
      
  }).catch((e) => {
      res.status(500).send("could not addcredit")
    }) 
   }
)

app.put('/account/decremente',(req,res) => { 
    const _id = req.params.id
    const currAccount = Account.findById(_id).then((account) => {
      if (!account) {
          return res.status(404).send("account not exist")
      }
      currAccount.credit-=req.body.decrementecredit
      res.status(201).send(account)
      
  }).catch((e) => {
      res.status(500).send("could not addcredit")
    }) 
   }
)

app.post('/account/transfer',(req,res) => { 
const _id = req.params.id
const reciverAccountId = req.body.reciverid
const currAccount = accounts.findById(_id)
const futureReciverAccount = accounts.findById(reciverAccountId) 
const giverCredit = currAccount.credit
const reciverAccount = futureReciverAccount.cash
const transferReq = req.body.transfer
   {
    if (transferReq<giverCredit){currAccount.credit-=req.body.transfer,
        reciverAccount.cash+=req.body.transfer}
   else
throw "cannot transfer,there is not enough cash in the giver account,please load it and try again"
     }
   })

