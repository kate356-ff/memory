import './Grid.css';

import { useEffect, useState } from "react";
import { Card } from "../card/Card";
// import images from "./data.js"
import { images } from "../../data.js";


export function Grid() {

    return (
        <div className="grid"> 
            {images.map((item) => (
                <Card
                    key={item.id} 
                    url={item.url} 
                />
            ))}
        </div>
    );
}
