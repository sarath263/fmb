import "../app/css/smile.css"
import { useSelector } from "@/app/lib/gState";
export const BMI = ({bmi}) => {
  const [category] = useSelector(s=>s.category);
  let mood="happy";
  if (category==-1) {
    mood = "hmmm";
  } else if (category == 0) {
    mood = "happy";
  } else if (category == 1) {
    mood = "hmmm";
  } else if (category == 2) {
    mood = "angry";
  }
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
    return (<span><Smile mood={mood}/><h3 className="h3 text-white mb-2">
        {"Your BMI "}
        <>{render}</>
      </h3></span>);
};
const Smile=({mood="happy"})=>{
  
  return <div className="content">
    {mood=="happy" && <div className="emoji happy small"><div className="face"><div className="eye left"></div> <div className="eye right"></div> <div className="mouth"></div></div></div>}
    
    {mood=="hmmm" && <div className="emoji neutral small"><div className="face"><div className="eye left"></div> <div className="eye right"></div> <div className="mouth"></div></div></div>}
    
    {mood=="angry" && <div className="emoji sad small"><div className="face"><div className="eye left"></div> <div className="eye right"></div> <div className="mouth"></div></div></div>}
  </div>
}
  
export const Explanation = ({cat,better}) => {
    let render = null;
    if(cat===false){
        return render;
    }
    let idle=parseInt(better.idle);
    let needed=parseFloat(better.needed);

    if(needed<0){
      needed=Math.ceil(needed*-1);
    }else if(needed>0){
      needed=Math.ceil(needed);
    }else{
      needed=0;
    }
    if (cat < 0) {
        render = <>{"It seems you are having "}<br/><span className="text-yellow-600">{" Underweight"}</span><span className="text-teal-500">{". You may increase your weight by "}</span><br/>{needed+" kilograms."}
        </>;
    }else if (cat===0) {
        render = <><span className="text-teal-500">{"Awesome"}</span>{", Your Weight is matched with your Height. "}</>;
    }else if (cat== 1) {
        render = <>{"It seems you are having "}<br/><span className="text-yellow-600">{" Overweight"}</span><span className="text-teal-500">{". You may decrease your weight by "}</span><br/>{needed+" kilograms."}</>;
    }else if (cat== 2) {
        render = <>{"It seems you are having "}<br/><span className="text-red-800">{" Obesity"}</span><span className="text-yellow-600">{". You need to decrease your weight by "}</span><br/>{needed+" kilograms."}</>;
    }

    if (render) {
        render = <p className="text-purple-200 text-lg">{render}<br/><br/></p>;
    }
    return render;
};