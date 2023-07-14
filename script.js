import React from "react";
import './script.css';
class Script extends React.Component{
    render()
    {  
        const date=new Date();
        const hour =date.getHours();
        return(
            <div class="App">
                <i>{hour>=12?hour>=16?<h2>Good Evening.....!</h2>:<h2>Good Afternoon.....!</h2>:<h2>Good Morning.....!</h2>}</i>
            </div>
        );
    }
}
export default Script;