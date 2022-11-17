import React, { useState } from 'react';

import { Dialog, IconButton, DialogContent, DialogActions, Button, Typography, TextField, FormControl, Select, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { ModalTitleWrapper, ModalTextFieldTitle } from './styles';

const NewNetAppModal = ({ netApps, setNetApps, openCreate, setOpenCreate }) => {

    const [netApp, setNetApp] = useState({
        name: '',
        description: '',
        visibility: 'public'
    });
    const [isValid, setIsValid] = useState(<></>);

    const handleChange = (e, key) => {
        let newNetApp = Object.assign({}, netApp);
        newNetApp[key] = e.target.value;
        setNetApp(newNetApp)
    };

    const handleCreateNetApp = () => {
        if (netApp.name === '' || netApp.description === '') {
            setIsValid(<Typography sx={{ color: '#D34747', backgroundColor: 'rgba(247,134,134,.3)', margin: '0 24px 28px', textAlign: 'center' }}>Data must be added in order to submit</Typography>)
        } else {
            setIsValid(<></>);
            setNetApps([{
                id: netApps.length + 1,
                name: netApp.name,
                description: netApp.description,
                createdDate: new Date().toDateString(),
                visibility: netApp.visibility,
                descriptorLink: ''}, ...netApps])
            setOpenCreate(false)
        }
    }

    return (
        <Dialog
            onClose={() => setOpenCreate(false)}
            open={openCreate}
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
                Create NetApp
                <IconButton onClick={() => setOpenCreate(false)}>
                    <CloseIcon />
                </IconButton>
            </ModalTitleWrapper>
            <DialogContent>
                <ModalTextFieldTitle>NetApp Name</ModalTextFieldTitle>
                <TextField size="small" onChange={e => handleChange(e, 'name')} sx={{ mb: '10px' }} />
                <ModalTextFieldTitle>NetApp Description</ModalTextFieldTitle>
                <TextField size="small" multiline rows={3} onChange={e => handleChange(e, 'description')} sx={{ width: '100%', mb: '10px' }} />
                <ModalTextFieldTitle>Visibility</ModalTextFieldTitle>
                <FormControl fullWidth>
                    <Select
                        value={netApp.visibility}
                        onChange={e => handleChange(e, 'visibility')}
                    >
                        <MenuItem value="public">Public</MenuItem>
                        <MenuItem value="private">Private</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions sx={{ p: '32px 24px', justifyContent: 'flex-start', gap: '8px' }}>
                <Button sx={{ p: '5px 32px' }} color="primary" disableElevation variant="contained" onClick={handleCreateNetApp}>Create</Button>
                <Button sx={{ p: '5px 32px' }} disableElevation variant="contained" color="secondary" onClick={() => setOpenCreate(false)}>Cancel</Button>
            </DialogActions>
            {isValid}
        </Dialog>
    )
};

export default NewNetAppModal;