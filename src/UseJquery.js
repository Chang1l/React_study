import React from "react";
import $ from "jquery";

function UseJquery(){
    function input_alert(){
        let input_val=$('#inputId').val();
        $("#conBox").text(input_val);
        // alert(input_val);

    }
    return(
        <div>
            <input id="inputId" name="inputName" />
            <button id="buttonId" onClick={e=>input_alert(e)} >
            Jquery Button  </button><br/>
            <div id="conBox"></div>
        </div>
    )
}

export default UseJquery;