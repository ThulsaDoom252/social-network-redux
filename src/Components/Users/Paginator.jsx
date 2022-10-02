import React, {useState} from 'react';
import classNames from "classnames";

let  Paginator = (props) => {
   let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
   let pages = []  //50
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize) //5
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber =  (portionNumber - 1) * props.portionSize + 1 //0
    let rightPortionPageNumber =  portionNumber * props.portionSize  //11

    return (
        <div style={{"background-color":props.nightMode && props.nightModeColors["nightMode-container-block"], "color":props.nightMode && props.nightModeColors["nightMode-text-color"]}} className={"paginator-block"}>
            {portionNumber > 1 &&  <button className={props.nightMode ?  "paginator-left-button-nightMode paginator-left-button" : "paginator-left-button"} onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button> }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) =>
            {return <span className={classNames({[props.nightMode ? "paginator-selected-page-nightMode paginator-selected-page" : "paginator-selected-page"]: props.currentPage === p}, "paginator-page-number")}
                             key={p}
                             onClick={(e) => props.onPageChanged(p)}>{`..${p}..`}</span>
            })}
        {portionCount > portionNumber && <button  className={props.nightMode ?  "paginator-right-button-nightMode paginator-right-button" : "paginator-right-button"} onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    )
}

export default Paginator;