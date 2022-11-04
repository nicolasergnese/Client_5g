import React, { useState } from 'react';

import { Dialog, IconButton, DialogContent, DialogActions, Button, Typography, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { ModalTitleWrapper, ModalTextFieldTitle } from './styles';

type Props = {
    details: any;
    setDetails: (details: any) => void;
    openUpload: boolean;
    setOpenUpload: (openUpload: boolean) => void
};

const UploadKeyModal: React.FC<Props> = ({ details, setDetails, openUpload, setOpenUpload }) => {

    const [name, setName] = useState<string>('');
    const [key, setKey] = useState<string>('');
    const [isValid, setIsValid] = useState(<></>);

    const handleUploadKey = () => {
        if (name === '' || key === '') {
            setIsValid(<Typography sx={{ color: '#D34747', backgroundColor: 'rgba(247,134,134,.3)', margin: '0 24px 28px', textAlign: 'center' }}>Data must be added in order to submit</Typography>)
        } else {
            setIsValid(<></>);
            setDetails({...details, sshKeys: [...details.sshKeys, { id: `key${details.sshKeys.length + 1}`, name: name, key: key}]})
            setOpenUpload(false)
        }
    }

    return (
        <Dialog
            onClose={() => setOpenUpload(false)}
            open={openUpload}
            sx={{
                "& .MuiPaper-root": {
                    width: {
                        xs: '100%',
                        sm: '80%'
                    },
                    borderRadius: '12px'
                }
            }}
        >
            <ModalTitleWrapper>
                Upload New Public Key
                <IconButton onClick={() => setOpenUpload(false)}>
                    <CloseIcon />
                </IconButton>
            </ModalTitleWrapper>
            <DialogContent>
                <ModalTextFieldTitle>Key Name</ModalTextFieldTitle>
                <TextField size="small" onChange={e => setName(e.target.value)} sx={{ mb: '10px' }} />
                <ModalTextFieldTitle>Upload File</ModalTextFieldTitle>
                <TextField size="small" multiline rows={3} onChange={e => setKey(e.target.value)} sx={{ width: '100%' }} />
            </DialogContent>
            <DialogActions sx={{ p: '32px 24px', justifyContent: 'flex-start', gap: '8px' }}>
                <Button sx={{ p: '5px 32px' }} color="primary" disableElevation variant="contained" onClick={handleUploadKey}>Upload</Button>
                <Button sx={{ p: '5px 32px' }} disableElevation variant="contained" color="secondary" onClick={() => setOpenUpload(false)}>Cancel</Button>
            </DialogActions>
            {isValid}
        </Dialog>
    )
};

export default UploadKeyModal;