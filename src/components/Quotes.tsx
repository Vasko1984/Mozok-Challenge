import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import { rootShouldForwardProp } from "@mui/material/styles/styled";
export interface QuoteDataProps {
  author: string;
  quote: string;
}

const Quotes = () => {
  const [rows, setRows] = useState<QuoteDataProps[] | []>([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("fetch");
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRows(data.quotes);
      });
  }, []);

  return (
    <>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 450 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Author</TableCell>
                <TableCell align="right">Quote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row?.author}</TableCell>
                  <TableCell align="right">{row?.quote}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="button">
        <Button variant="contained" onClick={() => navigate("/randomquotes")}>
          Random Quote
        </Button>
      </div>
    </>
  );
};

export default Quotes;
