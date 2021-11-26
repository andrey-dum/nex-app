// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';


// export default async function handler(req, res) {
  
//   const response = ( await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')).data;
//   res.status(200).json(response)


// }
export default function handler(req, res) {

  const requestOne = axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
  const requestTwo = axios.get('https://api.cryptonator.com/api/ticker/eth-usd')
  
  axios.all([requestOne, requestTwo]).then(axios.spread(({data: obj1}, {data: obj2}) => {
    // const responseOne = responses[0].data
    // const responseTwo = responses[1].data
    // const response = ( await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')).data;
  res.status(200).json({eth: obj2, btc: obj1})
  
})).catch(errors => {
  res.status(500).send("Oh uh, something went wrong");
})
  
  
}
// export default function handler(req, res) {
  
//   const data = (axios.get('https://api.cryptonator.com/api/ticker/btc-usd')).data;
//   res.status(200).json(data)
// }


// module.exports = async(req, res) => {
//     // const { id } = req.query;
//     const listofUsers = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;
//     // const singleUser = listofUsers.filter(item => {
//     //     if(item.id == id) return item
//     // });
//     // return res.json(singleUser[0])
//     return res.json(listofUsers)
// }