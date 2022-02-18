import React from "react";
import Tile from "./Tile";
import Button from "@mui/material/Button";
import Axios from "axios";
import Stack from '@mui/material/Stack';

const Dashboard = () => {
  const [entries, setEntries] = React.useState([]);
  const [change, setChange] = React.useState(0);
  const [numericalData, setNumberical] = React.useState([]);
  const [addData, setAddData] = React.useState();
  const [flag, setFlag] = React.useState(true);

  let ans = [];

  const calculateMean = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
      sum = sum + element;
    });
    console.log(sum);
    ans.push({value: sum / arr.length, label: 'Mean'});
    // return sum / arr.length;
  };
  const getStandardDeviation = (arr) => {
    const n = arr.length;
    const mean = arr.reduce((a, b) => a + b) / n;
    let val = Math.sqrt(
      arr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
    );
    // console.log(val);

    ans.push({value: val, label: 'Standard Deviation'});
  };

  const calculateMedian = (arr) => {
    const { length } = arr;
  
    arr.sort((a, b) => a - b);
    let val;
    if (length % 2 === 0) {
      val =  (arr[length / 2 - 1] + arr[length / 2]) / 2;
    }
    else {
        val = arr[(length - 1) / 2];

    }
    
    ans.push(
        {value: val, label: 'Median'}
      );
  };
    
  const calculateMode = (arr) => {
    const mode = {};
    let max = 0,
      count = 0;

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];

      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }

      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
    ans.push({value:max, label: 'Mode'});
    return max;
  };
  const handleChange = () => {
    setEntries(ans);
    setChange(change + 1);
    setFlag(true);
    ans = [];
  };
  console.log(entries)
const handleSubmit = () => {

}
  React.useEffect(async () => {
    let data = [];
    if(flag) {
      const d = await Axios.get("http://localhost:5000/change");
      data = d.data.randomNumbers;
    }
    data.push(addData)

    setNumberical(data);
    calculateMean(data);
    calculateMedian(data);
    calculateMode(data);
    getStandardDeviation(data);
    setEntries(ans);
    setFlag(false);
  }, [change]);

  return (
    <div>
        <Stack direction="row">
      {entries.map((en, ind) => (
        <>
          <Tile value={en.value} heading={en.label} />
        </>
    
      ))}
      Data - 
      {numericalData.map(num => num + "   ")}
      </Stack>
      <input value ={addData} onChange={(e)=>setAddData(e.target.value)} />
      <Button onClick={()=>{setChange(change+1)}}>Submit data</Button>
      <Button onClick={handleChange}>Change data</Button>
    </div>
  );
};

export default Dashboard;
