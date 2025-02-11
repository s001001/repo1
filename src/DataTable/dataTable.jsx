import React, { useEffect, useMemo, useState } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable
} from "material-react-table";

const API_URL = "https://67a48138c0ac39787a1b786a.mockapi.io/api/v1/demo";

export default function MyDataTable() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const result = await response.json();
                setData(result); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const columns = useMemo(
        () => [
            {
                accessorKey: "name", 
                header: "Name",
                muiTableHeadCellProps: { sx: { color: "green" } }, 
                Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> 
            },
            {
                accessorFn: (row) => row.email,
                id: "email", 
                header: "Email",
                Header: <i style={{ color: "red" }}>Email</i>
            },
            {
                accessorFn: (row) => row.password,
                id: "password", 
                header: "Password",
                Header: <i style={{ color: "Orange" }}>Password</i>
            },
            {
                accessorFn: (row) => row.mobile,
                id: "mobile", 
                header: "Mobile",
                Header: <i style={{ color: "Blue" }}>Mobile</i>
            }
        ],
        []
    );

    const table = useMaterialReactTable({
        data,
        columns
    });

    return <MaterialReactTable table={table} />;
}




