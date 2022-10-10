import React, { useEffect,useState } from 'react'
import './Table.css'

const Table = () => {
    // Backendサーバーにurl指定してアクセスしてもらってきたデータを表示する
    // propsで受け取った別コンポーネントからの財源/支出/期間データに応じて
    // クライアント側で表示するデータの整形をする(サーバーに負荷を載せないため)
    // (ここでBackendに投げてデータ取得するより、他のコンポーネントと合わせてindex.jsで投げて
    // propsでそれぞれ表示する物を受け取るという形にした方が良いのでは...?)
    const url = "/users";
    const [cols, setCols] = useState([])

    useEffect(() => {
    fetch(url, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
        setCols(data);
        })
        .catch((err) => {
        console.log(err);
        console.log("err");
        });
    }, []);

    return (
        <div className='Table'>
            <div className='Table-header'>
                <select className='Table-moneysource'></select>
                <select className='Table-inout'></select>
                <div className='Table-span'>
                    <input type="date" className='Table-startdate'></input>
                    ~
                    <input type="date" className='Table-enddate'></input>
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
                        {cols.map(function(col) {
                            if(col.inout === "支出"){
                                return(
                                    <tr className='out_column'>
                                        <td>{col.date}</td><td>{col.moneysource}</td><td>{col.inout}</td><td>{col.cost}</td>
                                    </tr>
                                )
                            }else{
                                return(
                                    <tr className='in_column'>
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