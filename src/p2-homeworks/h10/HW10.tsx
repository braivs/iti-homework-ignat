import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from '../../img/preloader.svg'
import s from './HW10.module.scss'

function HW10() {
  const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
  const dispatch = useDispatch()

  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 1000)
    console.log("loading...");
  };

  return (
    <div>
      <hr/>
      homeworks 10
      <div className={s.mainContainer}>
        {/*should work (должно работать)*/}
        {loading
          ? (
            <div><img className={s.preloader} src={preloader} alt=""/></div>
          ) : (
            <div>
              <SuperButton onClick={setLoading}>set loading...</SuperButton>
            </div>
          )
        }
      </div>
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  );
}

export default HW10;
