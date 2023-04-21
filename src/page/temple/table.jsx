import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function BasicTable(props) {
  console.log(props.datalist);
  const rows = props.datalist
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 120 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>邮件主题</TableCell>
            <TableCell align="right">收件人</TableCell>
            <TableCell align="right">附件</TableCell>
            <TableCell align="right">发件人</TableCell>
            <TableCell align="right">内容</TableCell>
            <TableCell align="right">发送时间</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.send_email}</TableCell>
              <TableCell align="right">{row.url}</TableCell>
              <TableCell align="right">{row.to_email}</TableCell>
              <TableCell align="right">{row.message}</TableCell>
              <TableCell align="right">{row.sendtime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}