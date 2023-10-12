// const express = require('express')
// const phones = require('./phones.json')
// const app = express()
// const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!!!!2023')
// })

// app.get('/phones/:id', (req, res) => {
//     res.send(phones);
//   })

// app.get('/phones', (req, res) => {
//     const id = parseInt(req.params.id);
//     console.log('i need data for id: ', id);
//     const phone = phones.find(phone => phone.id === id) || {};
//     res.send(phone);
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const cors = require('cors')
const express = require('express');

const phones = require('./phones.json');
const app = express();
const port = 5000;
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!!!!2023');
});

app.get('/phones/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log('I need data for id: ', id);
  const phone = phones.find(phone => phone.id === id);

  if (phone) {
    res.send(phone);
  } else {
    res.status(404).send('Phone not found');
  }
});

app.get('/phones', (req, res) => {
  res.send(phones);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
