import {React, useState} from "react"
import Result from "./Result"
import FormInput from "./FormInput"
import { Stack } from "@mui/material"
import DateObject from "react-date-object"

const Logic = () => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    let date = new DateObject();
    const info = (info) => {
        if(date.day - info.day < 0) {
            let day = 30-(info.day - date.day);
            let month = 12 - (info.month - date.month+1);
            if(date.year == info.year){
                let year = 0;
                setYear(year);
            }
            else {
                let year = date.year - info.year - 1;
                setYear(year);
            }
            setDay(day);
            setMonth(month);
        }
        else if(date.month.number - info.month < 0) {
            let day = date.day - info.day;
            let month = 12 - (info.month - date.month.number);
            if(date.year == info.year){
                let year = 0;
                setYear(year);
            }
            else {
                let year = date.year - info.year - 1;
                setYear(year);
            }
            setDay(day);
            setMonth(month);
        }
        else {
            let day = date.day - info.day;
            let month = date.month.number - info.month;
            if(date.year == info.year){
                let year = 0;
                setYear(year);
            }
            else {
                let year = date.year - info.year;
                setYear(year);
            }
            setDay(day);
            setMonth(month);
        }
    }

    return (
        <Stack
        bgcolor="hsl(0, 0%, 100%)"
        maxWidth="500px"
        sx={{
            borderRadius: "20px",
            borderBottomRightRadius: "150px", 
            paddingInline: {lg:"80px", md:"55px", sm:"25px", xs:"15px"}, 
            paddingBlock: "30px",
            marginInline: "15px"
        }}
        >
            <FormInput info={info}/>
            <Result 
            day={day} 
            month={month} 
            year={year}
            />
        </Stack>
    )
}

export default Logic