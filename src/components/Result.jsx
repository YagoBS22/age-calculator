import React from "react";
import { Stack, Typography } from "@mui/material";

const Result = ({day, month, year}) => {
    return (
        <Stack gap={2}>
            <Typography className="result-fonts" variant="h1">
                <span style={{color:"hsl(259, 100%, 65%)" }}>
                    {day === "" ? "--" : day}
                </span>
                Dias
            </Typography>

            <Typography className="result-fonts" variant="h1">
                <span style={{color:"hsl(259, 100%, 65%)" }}>
                    {month === "" ? "--" : month}
                </span>
                Meses
            </Typography>

            <Typography className="result-fonts" variant="h1">
                <span style={{color:"hsl(259, 100%, 65%)" }}>
                    {year === "" ? "--" : year}
                </span>
                Anos
            </Typography>
        </Stack>
    );
};

export default Result