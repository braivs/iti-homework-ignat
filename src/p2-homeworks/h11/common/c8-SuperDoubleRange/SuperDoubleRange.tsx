import React, {ChangeEvent} from "react";
import {Slider, Typography} from "@material-ui/core";
import s from './SuperDoubleRange.module.scss'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    min?: number
    max?: number
    step?: number
    disable?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disable
    }
) => {

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // onChange && onChange(e); // сохраняем старую функциональность

    onChangeRange && onChangeRange(value);
  }


  const [valueTmp, setValueTmp] = React.useState<number[]>([20, 37]);

  const handleChange = (event: any, newValue: number | number[]) => {
    // setValueTmp(newValue as number[]);
    onChangeRange && onChangeRange(newValue as [number, number]);
  };


  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <div className={s.box}>
      <Slider
        className={s.doubleSlider}
        value={[value[0], value[1]]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

export default SuperDoubleRange;
