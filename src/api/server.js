const express = require("express");
const app = express();
const port = 3001;
const fs = require("fs");
const cors = require("cors");
var compiler = require("compilex");
var options = { stats: true }; //prints stats on console
compiler.init(options);
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
var envData = { OS: "windows", cmd: "g++", options: { timeout: 100000 } };

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/compilecode", async (req, res) => {
  const codepart = await req.body.code;
  const codelang = await req.body.type;
  const inputreq = await req.body.inputrq;
  const inputCode = await req.body.inputcode;
  // console.log(codepart + " " + codelang + " "   + inputreq);
  if (inputreq === false && codelang === "C++") {
    compiler.compileCPP(envData, codepart, function (data) {
      if (data.error) {
        res.json(data.error);
      } else {
        res.json(data.output);
          compiler.flush(function () {
            console.log("deleted");
          });
      }
    });
  } else if (inputreq === false && codelang === "Java") {
    compiler.compileJava(envData, codepart, function (data) {
      if (data.error) {
        res.json(data.error);
      } else {
        res.json(data.output);
      //     compiler.flush(function () {
      //       console.log("deleted");
      //     });
      fs.rm('temp', { recursive: true, force: true }, err => {
            if (err) {
              console.log(err);
            }
          
            console.log(`temp is deleted!`)
          })
        fs.mkdir('temp' , ()=>{
            console.log("temp maded");
        })
        }
    });
  } else if (inputreq === false && codelang === "Python") {
    compiler.compilePython(envData, codepart, function (data) {
      if (data.error) {
        res.json(data.error);
      } else {
        res.json(data.output);
          compiler.flush(function () {
            console.log("deleted");
          });
      }
    });
  }
  //   const dir = "temp/*";

  //   // delete directory recursively
  //   try {
  //     fs.rmdir(dir, { recursive: true });

  //     console.log(`${dir} is deleted!`);
  //   } catch (err) {
  //     console.error(`Error while deleting ${dir}.`);
  //   }
  //   compiler.flush(function () {
  //     console.log("deleted");
  //   });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
