import React, {useState} from 'react';
import {Star} from "./Star";

type RatingPropsType = {}

export const Rating: React.FC<RatingPropsType> = (props) => {
        let [valueStar, setValueStar] = useState(0)
        return (
            <div>
                <Star selected={valueStar > 0} value={1} setValueStar={setValueStar}/>
                <Star selected={valueStar > 1} value={2} setValueStar={setValueStar}/>
                <Star selected={valueStar > 2} value={3} setValueStar={setValueStar}/>
                <Star selected={valueStar > 3} value={4} setValueStar={setValueStar}/>
                <Star selected={valueStar > 4} value={5} setValueStar={setValueStar}/>
            </div>
        );
    }
;

