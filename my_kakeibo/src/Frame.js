import React, { useState,useEffect } from "react";
import Graph from "./Graph/Graph"
import Table from "./Table/Table"
import "./Frame.css"

function Frame() {
    const url = "/users";
    const [cols, setCols] = useState();
    const [money_source, setMoneySource] = useState();
    const [in_out, setInOut] = useState();
    const [start_date, setStartDate] = useState();
    const [end_date, setEndDate] = useState();
    // ここでURLを変数に応じて生成してGET処理をbackendに送る
    useEffect(() => {
    fetch(url, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        setCols(data);
        })
        .catch((err) => {
        console.log(err);
        console.log("err");
        });
    }, []);



    return(
        <div id="wrapper">
            <header>
                <h1>家計簿</h1>
            </header>
            <hr />
            <main>
                <div id="left_column">
                    <div id="graph1">
                        <React.StrictMode>
                            <Graph id="1" />
                        </React.StrictMode>
                    </div>
                    <hr />
                    <div id="graph2">
                        <React.StrictMode>
                            <Graph id="2" />
                        </React.StrictMode>
                    </div>
                </div>
                <div id="right_column">
                    <div id="table">
                        <React.StrictMode>
                            <Table
                                setMoneySource={setMoneySource}
                                setInOut={setInOut}
                                setStartDate={setStartDate}
                                setEndDate={setEndDate}
                                cols={cols}
                            />
                        </React.StrictMode>
                    </div>
                </div>
            </main> 
            <hr />
            <footer>
            
            </footer>
        </div>
    )
}

export default Frame;