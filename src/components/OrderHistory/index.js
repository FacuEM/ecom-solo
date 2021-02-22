import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";

const columns = [
  { id: "orderCreatedDate", label: "Order Date" },
  { id: "documentID", label: "Order ID" },
  { id: "orderTotal", label: "Amount" },
];
const styles = {
  fontSize: "16px",
  cursor: "pointer",
  width: "10%",
};
const formatText = (columnName, columnValue) => {
  switch (columnName) {
    case "orderTotal":
      return `$${columnValue}`;
    case "orderCreatedDate":
      return moment(columnValue.nano).format("DD/MM/YYYY");
    default:
      return columnValue;
  }
};

const OrderHistory = ({ orders }) => {
  const history = useHistory();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, i) => {
              const { label } = column;
              return (
                <TableCell key={i} style={styles}>
                  {label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(orders) &&
            orders.length > 0 &&
            orders.map((row, i) => {
              const { documentID } = row;

              return (
                <TableRow
                  key={i}
                  onClick={() => history.push(`/order/${documentID}`)}
                >
                  {columns.map((column, i) => {
                    const columnName = column.id;
                    const columnValue = row[columnName];
                    const formattedText = formatText(columnName, columnValue);
                    return (
                      <TableCell key={i} style={styles}>
                        {formattedText}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderHistory;
