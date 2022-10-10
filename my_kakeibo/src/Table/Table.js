import React, { useEffect,useState } from 'react'
import './Table.css'

const Table = (props) => {
    // Backendサーバーにurl指定してアクセスしてもらってきたデータを表示する
    // propsで受け取った別コンポーネントからの財源/支出/期間データに応じて
    // クライアント側で表示するデータの整形をする(サーバーに負荷を載せないため)
    // (ここでBackendに投げてデータ取得するより、他のコンポーネントと合わせてindex.jsで投げて
    // propsでそれぞれ表示する物を受け取るという形にした方が良いのでは...?)
    console.log(props.cols)
    const url = "/users";
    let cols;
    if(props.cols==undefined){
        // props.colsはfetchを使っているため、代入されるより先に
        // レンダリングが始まるのでそれを避けるための初期化
        cols = [{
            date: "2022/10/1",
            moneysource: "お財布",
            inout: "収入",
            cost: "2000"
          }];
    }else{
        cols =props.cols;
    }

    function handleMoneySourceChange(event) {
        props.setMoneySource(event.target.value);
    }
    function handleInoutChange(event) {
        props.setInout(event.target.value);
    }
    function handleStartDateChange(event) {
        props.setStartDate(event.target.value);
    }
    function handleEndDateChange(event) {
        props.setEndDate(event.target.value)
    }

    return (
        <div className='Table'>
            <div className='Table-header'>
                {/* 親コンポーネントのset〇〇を呼び出して親にデータを渡す */}
                {/* http://www.code-magagine.com/?p=13251 */}
                <select className='Table-moneysource' onChange={handleMoneySourceChange}></select>
                <select className='Table-inout' onChange={handleInoutChange}></select>
                <div className='Table-span'>
                    <input type="date" className='Table-startdate' onChange={handleStartDateChange}></input>
                    ~
                    <input type="date" className='Table-enddate' onChange={handleEndDateChange}></input>
                </div>
            </div>
            <div className='Table-contents'>
                <table>
                    <thead className='Table-fixedheader'>
                        <tr>
                            <th>Date</th><th>MoneySource</th><th>InOut</th><th>Costs</th>
                        </tr>
                    </thead>
                        <tbody>
                        {cols.map(function(col, index) {
                            if(col.inout === "支出"){
                                return(
                                    <tr className='out_column' key={index}>
                                        <td>{col.date}</td><td>{col.moneysource}</td><td>{col.inout}</td><td>{col.cost}</td>
                                    </tr>
                                )
                            }else{
                                return(
                                    <tr className='in_column' key={index}>
                                        <td>{col.date}</td><td>{col.moneysource}</td><td>{col.inout}</td><td>{col.cost}</td>
                                    </tr>
                                )
                            }
                            
                        })}
                    </tbody>
                    <thead className='Table-fixedfooter'>
                        <tr>
                            <th>計</th><th>お財布</th><th>収入</th><th>120000</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className='Table-footer'>
                <span className='Table-source'>元金</span>
                <span className='Table-current'>現在</span>
                <span className='Table-difference'>差額</span>

            </div>
        </div>
    );
}

export default Table;