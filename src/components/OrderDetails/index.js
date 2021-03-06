import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOrderDetails } from "./../../redux/Orders/orders.actions";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const columns = [
  { id: "productThumbnail", label: "" },
  { id: "productName", label: "Name" },
  { id: "productPrice", label: "Price" },
  { id: "quantity", label: "quantity" },
];
const styles = {
  fontSize: "16px",
  width: "10%",
};
const formatText = (columnName, columnValue) => {
  switch (columnName) {
    case "productPrice":
      return `$${columnValue}`;
    case "productThumbnail":
      return <img src={columnValue} width={250} />;
    default:
      return columnValue;
  }
};

const OrderDetails = ({ order }) => {
  const orderItems = order && order.orderItems;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setOrderDetails({}));
    };
  }, []);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col, i) => {
              return (
                <TableCell key={i} style={styles}>
                  {col.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(orderItems) &&
            orderItems.length > 0 &&
            orderItems.map((row, i) => {
              return (
                <TableRow key={i}>
                  {columns.map((col, i) => {
                    const columnName = col.id;
                    const columnValue = row[columnName];

                    return (
                      <TableCell key={i} style={styles}>
                        {formatText(columnName, columnValue)}
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

export default OrderDetails;
