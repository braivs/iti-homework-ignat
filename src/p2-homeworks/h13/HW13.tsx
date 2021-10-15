import React, {useState} from "react";
import s from "./HW13.module.css";
import Button from '@material-ui/core/Button';
import {API} from "./api/request-api";
import {useDispatch, useSelector} from "react-redux";
import {requestTC} from "./bll/hw13-reducer";
import {Checkbox, TextField} from "@material-ui/core";
import {AppStoreType} from "../h10/bll/store";

function HW13() {

    const dispatch = useDispatch()
    const [checked, setIsChecked] = useState(true)

    const handleSubmit = () => {
        dispatch(requestTC(checked))
    }
    const handleCheckbox = () => {
        checked ? setIsChecked(false) : setIsChecked(true)
    }
    let infoText = useSelector<AppStoreType, string>(state => state.hw13.info)
    let errorText = useSelector<AppStoreType, string>(state => state.hw13.errorText)

    return (
        <div>
            <div>homework 13</div>
            <div className={s.container}>
                <Checkbox color={"primary"} checked={checked} onChange={handleCheckbox}/>
                <Button variant={'contained'} color={"primary"} onClick={handleSubmit}>Send request</Button>
                <div>
                    <div><TextField label={'info'} value={infoText} fullWidth/></div>
                    <div><TextField label={'errorText'} value={errorText} fullWidth/></div>
                </div>

            </div>
        </div>
    );
}

export default HW13;
