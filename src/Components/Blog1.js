import React from 'react'
import { useState } from 'react'
import axios from 'axios'
// function createNewElement() {
//     // First create a DIV element.
// 	var txtNewInputBox = document.createElement('div');

//     // Then add the content (a new input box) of the element.
// 	txtNewInputBox.innerHTML = "<input type='text' id='newInputBox'>";

//     // Finally put it where it is supposed to appear.
// 	document.getElementById("newElementId").appendChild(txtNewInputBox);
// }
export default function Blog1() {
    const [data, setData] = useState({
        to: "",
        subject: "",
        content: ""
    })
    const handleSubmit =  () => {
        
        axios.post('https://bulk-email-tool.herokuapp.com/sendprocess',data)
            .then(res => {
                alert(res.data)
            })
            .catch(err => {
                alert(err)
            });

    };
    const handleChange = ({ currentTarget: input }) => {

        setData({ ...data, [input.name]: input.value });

    };
    return (
        <div>
            <div className="card" style={{ "marginTop": "50px", "width": "900px", "marginLeft": "280px" }}>
                <div className="card-header" style={{ "padding": "15px", "backgroundColor": "#000000", "color": "#ffffff", "fontSize": "18px" }}>
                    Bulk Email Tool
                </div>
                <div className="card-body">
                    <div className="form-outline">
                        <label className="form-label" for="form12">From</label>
                        <input type="text" id="form12" value="shankarprogrammer24@gmail.com" className="form-control" />

                        <label className="form-label" for="form12"  style={{ "marginTop": "20px" }}>To</label>
                        <input type="text" id="form12" name="to" value={data.to} onChange={handleChange} className="form-control" />
                        {/* <div id="dynamicCheck">
                            <button type="button" onClick={createNewElement}>
                                Create
                                </button>
                        </div> */}
                        <label className="form-label" for="form12" onChange={handleChange} style={{ "marginTop": "20px" }}>Subject</label>
                        <input type="text" id="form12" name="subject" value={data.subject} onChange={handleChange} className="form-control" />

                        <div className="form-group" style={{ "marginTop": "20px" }}>
                            <label for="exampleFormControlTextarea1" onChange={handleChange} style={{ "marginBottom": "12px" }}>Content</label>
                            <textarea className="form-control" name="content" value={data.content} onChange={handleChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <button type="button" className="btn" onClick={handleSubmit} style={{ "marginTop": "22px", "width": "850px", "marginBottom": "15px", "backgroundColor": "#000000", "color": "#ffffff" }}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
