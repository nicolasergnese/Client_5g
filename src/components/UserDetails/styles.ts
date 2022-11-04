import { Card, DialogTitle, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { styled, experimental_sx as sx } from "@mui/system";

export const UserDetailsWrapper = styled(Card)(
    sx({
        borderRadius: '12px',
        boxShadow: '0',
        width: '80%',
        border: '1px solid #EBEBEB',
        margin: '64px auto'
    })
);

export const SshKeysTable = styled(DataGrid)(
    sx({
        border: 0,
        mx: '10px',
        mb: '25px',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        borderRadius: 0,
        "& .MuiDataGrid-row": {
            "&:first-of-type": {
                borderTop: '1px solid rgba(224, 224, 224, 1)',
            },
            "&:hover": {
                backgroundColor: '#FFF'
            }
        },
        "& .MuiDataGrid-cellContent": {
            overflow: 'auto',
            overflowWrap: 'break-word'
        },
        "& .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within": {
            outline: 'none!important'
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