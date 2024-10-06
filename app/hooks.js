import { useEffect, useState } from "react";
import {  useSelector } from "./lib/gState";
const useHooks = () => {
  const [bmi,setState] = useSelector(s=>s.bmi);
  const [category] = useSelector(s=>s.category);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const setCat = (category)=>setState({category});
  const [better, setBetter] = useState({
    idle: 0,
    needed: 0,
  });
  const setBmi = (bmi)=>setState({bmi});

  const calcBmi = () => {
    if (!height || !weight) {
      return "";
    }
    let h2 = height / 100;
    h2 = h2 * h2;
    let currentBmi = (Math.round((weight / h2) * 10) / 10).toFixed(1);
    let isValidBmi=false;
    if (currentBmi && parseFloat(currentBmi)>8 && parseFloat(currentBmi)<90) {
      isValidBmi=true;
    }
    setState({bmi:currentBmi,isValidBmi});
    calculateCat(currentBmi);
  };

  const calculateCat = (bmi) => {
    let cat = false;
    if (bmi < 10 || bmi > 90) {
      setCat(false);
      return;
    }
    if (bmi && bmi < 18.5) {
      cat = -1;
    } else if (18.5 <= bmi && bmi <= 24.9) {
      cat = 0;
    } else if (25 <= bmi && bmi <= 29.9) {
      cat = 1;
    } else if (30 <= bmi) {
      cat = 2;
    }
    setCat(cat);
    calcBetter(cat);
  };

  const calcBetter = (cat) => {
    let nextBetter = 0;
    switch (cat) {
      case -1:
        nextBetter = 18.4;
        break;
      case 1:
        nextBetter = 24.9;
        break;
      case 2:
        nextBetter = 24.9;
        break;
      default:
        nextBetter = 0;
    }
    if (nextBetter) {
      let h2 = height / 100;
      h2 = h2 * h2;
      nextBetter = nextBetter * h2;
      
      setBetter({
        idle: (Math.round(nextBetter  * 10) / 10).toFixed(1),
        needed: (Math.round((nextBetter - weight) * 10) / 10).toFixed(1),
      });
    } else {
        setBetter({
            idle: 0,
            needed: 0,
          });
    }
  };

  useEffect(() => {
    calcBmi();
  }, [height, weight]);

  return {
    height,
    setHeight,
    weight,
    setWeight,
    bmi,
    setBmi,
    category,
    better
  };
};
export default useHooks;
