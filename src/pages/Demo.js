import React,{useState} from 'react'

const Demo = () => {



    const [state, setState] = useState({
        value:"siddharth"
    })
//    const handleChange=((e)=>{
//         setState({value: e.target.value});
//       alert(state.value);
//       })

function handleChange(e) {
    setState({value: e.target.value});
  alert(state.value);
  }

    
     const handleSubmit=((e)=>{
        alert('An essay was submitted: ' + state.value);
        e.preventDefault();
      })

    return (
        <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={state.value} onChange={handleChange}>            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default Demo
