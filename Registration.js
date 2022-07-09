import { useState } from "react"
let Registration = () =>
{
    var [a,setA] = useState("");
    var [g,setG] = useState("");
    var [c1,setC1] = useState("");
    var [c2,setC2] = useState("");
    var [c3,setC3] = useState("");
    var [l, setL] = useState("");
    var [v, setV] = useState("");
    var [z,setZ] = useState("");
    let Name  = (e) =>
    {
       setA(e.target.value);
    }
    let GENDER =  (e) =>
    {
        setG(e.target.value);
    }
    
    let course1 = (e) =>
    {
        if(e.target.checked)
        {
           setC1(e.target.value);
        }
        else
        {
            setC1("");
        }
    }
    let course2 = (e) =>
    {
        if(e.target.checked)
        {
           setC2(e.target.value);
        }
        else
        {
            setC2("");
        }
    }
    let course3 = (e) =>
    {
        if(e.target.checked)
        {
           setC3(e.target.value);
        }
        else
        {
            setC3("");
        }
    }
    let Language = (e) =>
    {
        var s = "";
        for(var i=0; i<e.target.length; i++)
        {
            
            if(e.target.options[i].selected)
            {
                s = s + e.target.options[i].value + " ";
            }
        }
        setL(s);
    }
    let Country = (e) =>
    {
        setV(e.target.value);
    }
    let Display = (e) =>
    {
        //z=a+" "+g+" "+c1+" "+c2+" "+c3+" "+l+" "+v;
        z=`Name:- ${a} Gender:-${g} Course:-${c1} ${c2} ${c3} Language:-${l} Country:-${v}`
        setZ(z);
    }
return(
    <div>
        <form>
        <input type="text" onChange={(e)=>Name(e)}/><br/><br/>
        Gender :-<input type="radio" value="MALE" name="GENDER" onClick={ (e) => GENDER (e) } />Male
            <input type="radio" value="FEMALE" name="GENDER" onClick={ (e) => GENDER (e) } />Female
            <br/><br/>
            SELECT COURSE
            <br/>
            <input type="checkbox" value="java" name="Branch1" onClick={ (e) =>course1 (e) } />JAVA
            <br/>
            <input type="checkbox" value="React" name="Branch2" onClick={ (e) =>course2 (e) } />REACT
            <br/>
            <input type="checkbox" value="Python" name="Branch3" onClick={ (e) =>course3 (e) } />PYTHON
            <br/><br/>
            <select onChange={ (e) => Language (e) } multiple>
                <option value="">SELECT LANGUAGE</option>
                <option value="Hindi">HINDI</option>
                <option value="English">ENGLISH</option>
                <option value="Other">OTHER</option>
                </select><br/><br/>
            <select onClick={ (e) => Country (e) }>
                <option value="">SELECT COUNTRY</option>
                <option value="India">INDIA</option>
                <option value="USA">USA</option>
                <option value="Nepal">NEPAL</option>
                </select>
            <input type="button" value="Check" onClick = { (e) => Display (e) } /><br/>
        </form>
         <h2>{z}</h2>
    </div>

   )
}
export default Registration;
