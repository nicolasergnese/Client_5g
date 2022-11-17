import { Card, DialogTitle, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { styled, experimental_sx as sx } from "@mui/system";

export const NetAppsWrapper = styled(Card)(
    sx({
        borderRadius: '12px',
        boxShadow: '0',
        width: '80%',
        border: '1px solid #EBEBEB',
        margin: '64px auto'
    })
);

export const NetAppsTable = styled(DataGrid)(
    sx({
        border: 0,
        m: '10px 0 10px 10px',
        borderTop: '1px solid rgba(224, 224, 224, 1)',
        borderRadius: 0,
        "& .MuiDataGrid-row": {
            "&:first-of-type": {
                borderTop: '1px solid rgba(224, 224, 224, 1)',
            },
            "&:hover": {
                backgroundColor: '#FFF'
            }
        },
        "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: '700'
        },
        "& .MuiDataGrid-columnSeparator": {
            display: 'none!important'
        },
        "& .MuiDataGrid-cellContent": {
            overflow: 'auto',
            overflowWrap: 'break-word'
        },
        "& .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within": {
            outline: 'none!important'
        },
        "& .MuiDataGrid-footerContainer": {
            justifyContent: 'center'
        },
        "& .MuiPaginationItem-root": {
            mt: '25px',
            p: '0 16px',
            borderRadius: '8px',
            background: '#b9d5fd',
            color: '#071739',
            "&:hover": {
                background: '#709fdc',
                color: '#071739'
            }
        },
        "& .Mui-selected": {
            background: '#071739!important',
            color: '#FFF'
        }
    })
);

export const ModalTitleWrapper = styled(DialogTitle)(
    sx({
        color: '#444',
        fontWeight: 700,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    })
);

export const ModalTextFieldTitle = styled(Typography)(
    sx({
        color: '#444',
        fontSize: '.75rem',
        mb: '5px'
    })
);