import './Thecompiler.css'
import axios from 'axios'
import { useState } from 'react';

const TheCompiler = () => {
    const [code, setCode] = useState("");
    const [lang, setLang] = useState("");
    const [runtime, setRuntime] = useState("");
    const [res, setRes] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = async()=>{

        const payload = {
            "language" : lang,
            "code" : code
        }

        const output = await axios.post("http://localhost:5000/run", payload);

        console.log(output.data);

        // setErr(output.data.error)
        setRes(output.data.output)

        // console.log(code, lang, runtime)
    }

    const handlelang = (e)=>{
        setLang(e.target.value);
    }
    const handleruntime = (e)=>{
        setRuntime(e.target.value);
    }
  return (
    <div className='thecompiler'>
        <h2>Welcome to the <span >RunMeQuick</span> App</h2>
        <div className="head">
            <div className="ele">
                <label htmlFor="select-lang">Select Language </label>
                <select name="lang" value={lang} onChange={handlelang} id="">

                    <option >select one</option>
                    <option value="cpp">CPP</option>
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                    <option value="go">Go</option>
                </select>
            </div>
            <div className="ele">
                <label htmlFor="select-lang">Select Runtime(s) </label>
                <select name="runtime" id="" value={runtime} onChange={handleruntime}>
                    <option >select one</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="ele">
                <button onClick={handleSubmit} className=''>Submit</button>
            </div>
        </div>

        <div className="textfield">
            <textarea name="" id="" cols="" rows="" value={code} onChange={(e)=>{setCode(e.target.value)}}></textarea>
        </div>
        <div className="output">
            <p>Status : {err}</p>
            <p>Output : {res} </p>
        </div>
      
    </div>
  )
}

export default TheCompiler
