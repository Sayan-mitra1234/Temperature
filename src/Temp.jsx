import React,{useState} from "react";
import './App.css'
function Temp(){
    const [tempValue,setTempValue]=useState(10);
    const [tempcolor,setTempcolor]=useState("cold");
    const [img,setImg]=useState("image1")
    const increasetemp=()=>{
        if(tempValue===40) return

        const newtemp=tempValue+1;
        setTempValue(newtemp);
        if(newtemp>=0 && newtemp<=20){
            setTempcolor("cold")
            setImg("image1")
        }
        if(newtemp>=20 && newtemp<=30){
            setTempcolor("hot")
            setImg("image2")
        }
        else if(newtemp>30){
            setTempcolor("hotest")
            setImg("image3")
        }
    }

    const decreasetemp=()=>{
        if(tempValue===-10) return
        const newtemp=tempValue-1;
        setTempValue(newtemp);
        if(newtemp<20 && newtemp>=0){
            setTempcolor("cold")
            setImg("image1")
        }
        else if(newtemp<0){
            setTempcolor("coldest")
            setImg("image4")
        }

    }

    return(
        <>
            <div className={`app-container ${img}`} >
                <div className="temperature-display-container">
                    <div className={`temperature-display ${tempcolor}`}>
                            {tempValue} °C
                    </div>
                </div>
                <div className="button-container">
                        <button onClick={increasetemp}>+</button>
                        <button onClick={decreasetemp}>-</button>
                </div>
            </div>
            
        </>
    )
}

export default Temp