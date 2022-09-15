const express = require("express");
const app = express();
const socket = require("socket.io");
const Web3 = require('web3');
const mongoose = require("mongoose");
const cors = require("cors");
const web3 = new Web3('http://127.0.0.1:7545');


const account0 = "0x330252e75e4fF6649Bd14247C3014A1FF7Dcfb32";
const account1 = "0x77F8aDcd57cCf0d52b1Cbb0dcC72e5273828dB16";
const account2 = "0xE2CF271926AA45e41a97eAd02717A00fE19e7099";
const account3 = "0xa20F86f8418e4A7b8f99c52A2ccaD19aE3cA3602";



app.use(express.json());
app.use(cors());

const PORT = 5000;

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.dkdpkah.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/api/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/list", (req, res) => {
  res.json([
    {
      name: "cow1",
      age: 1,
      weight: 100,
    },
    {
      name: "cow2",
      age: 2,
      weight: 200,
    },
  ]);
});

app.post("/api/temp", (req, res) => {
  console.log(req.body);

  res.send("ok");
});


app.post('/api/ethereum', async (req, res) => {
        const {to,from,unit} = req.body;
        let tokenfrom,tokento;
        if (to==='a0'){
            tokento = account0;
            console.log(tokento)
        }
        else if (to=='a1'){
            
            tokento=account1;
            console.log(tokento)
        }
        else if (to==='a2'){
        
            tokento = account2;
            console.log(tokento)
        }
        else if (to==='a3'){
            
            tokento=account3;
            console.log(tokento)
        }
        

        if(from==='a0'){
            tokenfrom = account0;
        }
        else if(from==='a1'){
            tokenfrom=account1;
        }
        else if(from==='a2'){
            tokenfrom=account2;
        }
        else if(from==='a3'){
            tokenfrom = account3;
        }


        if(unit<3){
            let transferValue=3-unit;
            transferValue*=1;
            web3.eth.sendTransaction({from:tokenfrom,to:tokento,value: web3.utils.toWei(`${transferValue}`,'ether')});
        }

        res.json({result:"success"})
        console.log(req.body)
}
)


app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
