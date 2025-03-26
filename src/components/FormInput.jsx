import React from "react";
import { Stack, Box, Typography, TextField, Fab } from "@mui/material"
import IconArrow from "../assets/icon-arrow.svg"
import {useForm} from "react-hook-form"
import DateObject from "react-date-object"

const FormInput = ({info}) => {
    
    const {register, handleSubmit, formState:{errors}} = useForm();
    let date = new DateObject();

    return (
        <Stack component={"form"} gap={2} onSubmit={handleSubmit(info)}>
            <Stack flexDirection={"row"} gap={2}>
                <Box>
                    <Typography 
                    className={!!errors?.day ? "form-fonts form-fonts-error" : "form-fonts"}
                    >
                        Dia
                    </Typography>

                    <TextField 
                    type={"number"} 
                    placeholder={"DD"} 
                    color={"secondary"}
                    {...register("day", {
                        required: "Campo obrigatório",
                        validate: {
                            validateDay: (value) => {
                                return (value <= 31 && value >= 0) || "Dia inválido";
                            },
                         },
                     })}
                    error = {!!errors?.day}
                    helperText={!!errors?.day ? errors?.day.message : null} />
                </Box>

                <Box>
                    <Typography
                    className={!!errors?.month ? "form-fonts form-fonts-error" : "form-fonts"}
                    >
                        Mês
                    </Typography>
                    <TextField 
                    type={"number"} 
                    placeholder={"MM"} 
                    color={"secondary"}
                    {...register("month", {
                        required: "Campo obrigatório",
                        validate: {
                            validateMonth: (value) => {
                                return (value <= 12 && value >= 0) || "Mês inválido";
                             },
                         },
                     })}
                     error = {!!errors?.month}
                     helperText={!!errors?.month ? errors?.month.message : null}
                    />
                </Box>

                <Box>
                    <Typography
                    className={!!errors?.year ? "form-fonts form-fonts-error" : "form-fonts"}
                    >
                        Ano
                    </Typography>

                    <TextField 
                    type={"number"} 
                    placeholder={"YYYY"} 
                    color={"secondary"}
                    {...register("year", {
                        required: "Campo obrigatório",
                        validate: {
                            validateYear: (value) => {
                                return (value <= date.year && value >= 0) || "Ano inválido";
                             },
                        },
                    })}
                    error = {!!errors?.year}
                    helperText={!!errors?.year ? errors?.year.message : null}
                    />
                </Box>

            </Stack>

            <Stack flexDirection={"row"} alignItems={"center"}>
                <Box 
                width={"100%"} 
                border={".5px solid hsl(0, 0%, 86%)"}/>
                <Fab 
                className={"sub-btn"} 
                type={"submit"} 
                size={"large"}
                sx={{position: "relative",
                    left:{lg:'50px', md:'30px', sm:'-30px', xs:'-150px'},
                }}
                >
                    <img src={IconArrow} alt={"Submit Button"}/>
                </Fab>
            </Stack>

        </Stack>
    );
};

export default FormInput