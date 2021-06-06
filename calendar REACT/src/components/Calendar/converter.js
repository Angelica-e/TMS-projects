import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Input, Select, Button} from 'antd';
import 'antd/dist/antd.css';

const CURRENCY = ['USD', 'EUR', 'BYN'];

function Converter() {
    const [firstInputValue, setFirstInputValue] = useState('');
    const [firstSelectValue, setFirstSelectValue] = useState(CURRENCY[1]);
    const [secondInputValue, setSecondInputValue] = useState('');
    const [secondSelectValue, setSecondSelectValue] = useState(CURRENCY[0]);
    const [firstToSecond, setFirstToSecond] = useState(0);
    const [secondToFirst, setSecondToFirst] = useState(0);

    const handleFirstInputChange = (e) => {
        setFirstInputValue(isNaN(+e.target.value) ? 0 : e.target.value);
        setSecondInputValue(
            isNaN(+e.target.value) ? 0 : (e.target.value * firstToSecond).toFixed(4)
        )
    };


const handleSecondInputChange = (e) => {
    setSecondInputValue(isNaN(+e.target.value) ? 0 : e.target.value);
    setFirstInputValue(
        isNaN(+e.target.value) ? 0 : (e.target.value * secondToFirst).toFixed(4)
    );
};

const handleFirstSelectChange = (e) => {
    setFirstSelectValue(e);
};

const handleSecondSelectChange = (e) => {
    setSecondSelectValue(e);
};

const handleCurrencySwap = (first, second) => {
    setFirstSelectValue(second);
    setSecondSelectValue(first);
};

useEffect(() => {
    axios
    .get(
        `https://free.currconv.com/api/v7/convert?q=${firstSelectValue}_${secondSelectValue},${secondSelectValue}_${firstSelectValue}&compact=ultra&apiKey=5aaff9612ce4ba3b69a6`
    )
    .then((res) => {
        setFirstToSecond(res.data[`${firstSelectValue}_${secondSelectValue}`]);
        setSecondToFirst(res.data[`${secondSelectValue}_${firstSelectValue}`]);
        setSecondInputValue(
            (
                +firstInputValue *
                res.data[`${firstSelectValue}_${secondSelectValue}`]
            ).toFixed(4)
            );
    });
}, [firstSelectValue, secondSelectValue]);



return (
    <div class='converter-wrap'>
        <div>
            <div>
                <Input value={firstInputValue} onChange={handleFirstInputChange} />
                <Select 
                onChange={handleFirstSelectChange}
                value={CURRENCY.find((item) => item === firstSelectValue)}
                >
                    {CURRENCY.map((item, index) => {
                        return (
                            <Select.Option key={index} value={item}>
                                {item}
                                </Select.Option>
                        );
                    })}
                    </Select>
                    </div>
                    <Button
                    type='primary'
                    onClick={() =>
                    handleCurrencySwap(firstSelectValue, secondSelectValue)
                }
                >
                    ↔
                </Button>
                <div>
                    <Input value={secondInputValue} onChange={handleSecondInputChange} />
                    <Select
                    onChange={handleSecondSelectChange}
                    value={CURRENCY.find((item) => item === secondSelectValue)}
                    >
                        {CURRENCY.map((item, index) => {
                            return (
                                <Select.Option key={index} value={item}>
                                    {item}
                                    </Select.Option>
                            );
                        })}
                        </Select>
                        </div>
                        </div>
        
                        </div>
);
                    };
                    export default Converter;
                    
                            