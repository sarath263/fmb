export const BMI = ({bmi}) => {
    let render = "";
    if (bmi && bmi>10 && bmi<90) {
      render = (
        <>
          {"is "}
          <br />
          <span className="text-teal-500">
            <b>{bmi}</b>
          </span>
        </>
      );
    }
    return (<h3 className="h3 text-white mb-2">
        {"Your BMI "}
        <>{render}</>
      </h3>);
};
  
export const Explanation = ({cat}) => {
    let render = null;
    if(cat===false){
        return render;
    }
    if (cat < 0) {
        render = <>{"It seems you are having "}<br/><span className="text-yellow-600">{" Underweight"}</span></>;
    }else if (cat===0) {
        render = <><span className="text-teal-500">{"Awesome"}</span>{", Your Weight is matched with your Height. "}</>;
    }else if (cat== 1) {
        render = <>{"It seems you are having "}<br/><span className="text-yellow-600">{" Overweight"}</span></>;
    }else if (cat== 2) {
        render = <>{"It seems you are having "}<br/><span className="text-red-800">{" Obesity"}</span></>;
    }

    if (render) {
        render = <p className="text-purple-200 text-lg">{render}<br/><br/></p>;
    }
    return render;
};