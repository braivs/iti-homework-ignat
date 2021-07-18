import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {colorAC} from "../h11/bll/colorThemeReducer";


function HW12() {
  // const theme = 'some'; // useSelector
  const theme = useSelector<AppStoreType, string>(state => state.colorTheme.color)
  const dispatch = useDispatch()
  // useDispatch, onChangeCallback
  const themes = ['dark', 'red', 'some', 'orange', 'pink']
  const onChangeCallback = (color: string) => {
    dispatch(colorAC(color))

  }

  return (
    <div className={s[theme]}>
      <hr/>
      <span className={s[theme + 'Text']}>
                homeworks 12
            </span>

      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}
      <div>
        <SuperRadio
          name={'radio'}
          options={themes}
          value={theme}
          onChangeOption={onChangeCallback}
        />
      </div>
      <hr/>
    </div>
  );
}

export default HW12;
