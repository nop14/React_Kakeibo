import React, { useEffect,useState,useRef } from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import './CustomTable.css'

// テーブルフッターのページネーションコンポーネント
// propとして親コンポーネント(テーブル)の行数、表示ページ番号、一ページ当たりの行数、ページ変更関数(handleChangePage)を受け取り
// 変更に応じてページ変更関数を叩く事で親コンポーネントを更新する
function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

// 型ヒント
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const CustomTable = (props) => {
    // Backendサーバーにurl指定してアクセスしてもらってきたデータを表示する
    // propsで受け取った別コンポーネントからの財源/支出/期間データに応じて
    // クライアント側で表示するデータの整形をする(サーバーに負荷を載せないため)
    // (ここでBackendに投げてデータ取得するより、他のコンポーネントと合わせてindex.jsで投げて
    // propsでそれぞれ表示する物を受け取るという形にした方が良いのでは...?)
    const url = "/users";
    let rows;
    if(props.rows==undefined){
        // props.rowsはfetchを使っているため、代入されるより先に
        // レンダリングが始まるのでそれを避けるための初期化
        rows = [{
                id: 1,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 2,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 3,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 4,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 5,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 6,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 7,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 8,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 9,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 10,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 11,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 12,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 13,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 14,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 15,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 16,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 17,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 18,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 19,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 20,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 21,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            },{
                id: 22,
                date: "2022/10/1",
                moneysource: "お財布",
                inout: "収入",
                cost: "2000"
            }
        ];
    }else{
        rows =props.rows;
    }

    // Pagenationに関するhook
    // https://mui.com/material-ui/react-table/
    const [page, setPage] = React.useState(0);  // 今見てるページが何ページ目か
    const [rowsPerPage, setRowsPerPage] = React.useState(5);    //一ページに何行表示するか
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0; // 最後のページの隙間を埋める空行の数

    // Table-contentsの高さを取得
    // https://qiita.com/akifumii/items/3927c8fb9b5a552086e8
    // rowsPerPageをレイアウトに合わせるため追加(清水)
    const elm = useRef(null);
    useEffect(() => {
        // 苦肉の策で二回実行
        let height = Number(elm.current.getBoundingClientRect().height);
        setRowsPerPage(Math.floor((height-120)/53));
        // TODO: ここの↑を何とかして綺麗に書き直す
        window.addEventListener("resize", () => {
            let height = Number(elm.current.getBoundingClientRect().height);
            setRowsPerPage(Math.floor((height-120)/53));
            setPage(0);
        });
    })

    // pageをnewPageに更新する処理
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // rowsPerPageを更新する処理
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // テーブルの値が変わった時にその値を親コンポーネントに送る処理
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
            <div className='Table-contents' ref={elm}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>MoneySource</TableCell>
                                <TableCell>InOut</TableCell>
                                <TableCell>Cost</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                            ).map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.date}</TableCell>
                                    <TableCell>{row.moneysource}</TableCell>
                                    <TableCell>{row.inout}</TableCell>
                                    <TableCell>{row.cost}</TableCell>
                                </TableRow>
                            ))}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                rowsPerPageOptions={[]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
            <div className='Table-footer'>
                <span className='Table-source'>元金</span>
                <span className='Table-current'>現在</span>
                <span className='Table-difference'>差額</span>

            </div>
        </div>
    );
}

export default CustomTable;