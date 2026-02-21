"use client";

import { Box, Paper } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRowsProp,
} from "@mui/x-data-grid";
import { useState } from "react";
import { refetchProducts } from "../services/index.client";

interface ProductsTableProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  totalRows: number;
}

export default function ProductsTable({
  columns,
  rows,
  totalRows,
}: ProductsTableProps) {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(rows);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = async (newPage: number, newPerPage: number) => {
    const res = await refetchProducts(newPage + 1, newPerPage);

    if (res.status === 200) {
      setProducts(res.data.products);
    }
  };

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    const newPage = model.page;
    const newPageSize = model.pageSize;

    setPage(newPage);
    setRowsPerPage(newPageSize);
    handleChangePage(newPage, newPageSize);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Paper
        elevation={3}
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <DataGrid
          rows={products}
          columns={columns}
          rowCount={totalRows}
          initialState={{
            pagination: {
              paginationModel: { pageSize: rowsPerPage, page: page - 1 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          onPaginationModelChange={handlePaginationModelChange}
          checkboxSelection
          paginationMode="server"
          disableRowSelectionOnClick
          autoHeight
          sx={{
            border: 0,
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f5f5f5",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-root": {
              minWidth: "100%",
            },
          }}
        />
      </Paper>
    </Box>
  );
}
