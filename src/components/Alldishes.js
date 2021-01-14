import React from "react";
import axios from "axios";


export default function Call(){
axios.get("https://cdn.contentful.com/spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish").then((response)=>{console.log(response)})

    return(
        <div>test</div>
    )
}