import React from 'react'
import './Table.css'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {moneysource: "0", inout: "0", start_date: "", end_date: ""};
        this.moneysouse_options = [
            {value: "0", label: "総計"},
            {value: "1", label: "銀行1"},
            {value: "2", label: "銀行2"},
        ];
        this.inout_options = [
            {value: "0", label: "収支"},
            {value: "1", label: "収入"},
            {value: "2", label: "総計"},
        ];

    }
    render(){
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
                        <tr className='Table-fixedheader'>
                            <th>Date</th><th>MoneySource</th><th>InOut</th><th>Costs</th>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        <tr>
                            <td>2022/01/01</td><td>お財布</td><td>収入</td><td>20000</td>
                        </tr>
                        
                        <tr className='Table-fixedfooter'>
                            <th>計</th><th>お財布</th><th>収入</th><th>120000</th>
                        </tr>
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
}

export default Table;