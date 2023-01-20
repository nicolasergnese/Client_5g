import { Box, Typography, Select, MenuItem, FormControl, InputLabel, Divider, TextField } from "@mui/material";
import { useState } from "react";

// import { useNavigate } from 'react-router-dom';

export default function NetAppDetail() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    let json= {
        "netapp": {
          "im-version": "0.0.1",
          "name": "Netapp_test",
          "description": "Write your description here",
          "provider": "Smart5Grid Partner",
          "version": "0.0.0",
          "service-format": "helm",
          "services": [
            {
              "id": "service1",
              "package": "charts/service1-0.0.0.tgz",
              "values": "namespace: simple-netapp-service1-overwrite\n",
              "images": [
                "images/nginx_latest.tar.gz",
                "images/curl_latest.tar.gz"
              ],
              "sap": [
                {
                  "id": "service1-access-point-web"
                },
                {
                  "id": "service1-access-point-metrics"
                }
              ]
            },
            {
              "id": "service2",
              "package": "charts/service2-0.0.0.tgz",
              "values": "service1: service1.simple-netapp-service1-overwrite:8001\n",
              "images": [
                "images/curl_latest.tar.gz"
              ]
            }
          ],
          "monitoring-endpoint": {
            "service-ref": "service1",
            "sap-ref": null,
            "url": null
          },
          "external-endpoints": [
            {
              "name": null,
              "service-ref": "service1",
              "sap-ref": "service1-access-point-web"
            }
          ],
          "SLOs": [
            {
              "name": null,
              "expression": null,
              "metric": null,
              "threshold": null,
              "threshold-type": null,
              "action": {
                "target-ref": {
                  "target-service-ref": "service2_nsd"
                },
                "action-step": null
              },
              "granularity": null,
              "cycles": null
            }
          ]
        }
      };
    const [data, setData]= useState(json)
    // const print = (o) => {
    //     var str='';
    //     var cont=0;
    //     for(var p in o){
    //         if(typeof o[p] == 'string'){
    //             //cont++;
    //             str+= p + ': ' + o[p]+',\t\n\t';
                
    //         }else{
    //             cont++
    //             for (let index = 0; index<cont; index++) {
    //                 str+='\t'
    //                 console.log(cont)
    //             }
    //             str+= p + ': {\n' + print(o[p]) + '}';
                
    //         }
    //     }
    
    //     return str;
    // }

    return (
        <Box
            sx={{
                marginBottom: '64px'
            }}

        >
            <Box sx={{ display: 'flex', gap: '25px' }}>
                <Box sx={{ marginTop: "15px" }}>
                    <Typography fontWeight={700} fontSize="large" color="primary">demo_netapp</Typography>
                </Box>
                <Box>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>

                        <InputLabel id="demo-select-small">Descriptor</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Descriptor"
                            autoWidth
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>descriptor_version_4</MenuItem>
                            <MenuItem value={20}>descriptor_version_5</MenuItem>
                            <MenuItem value={30}>descriptor_version_1</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ ml: "450px" }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} >

                        <InputLabel id="demo-select-small">Select_Action</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Select_Action"
                            autoWidth
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Upload Descriptor</MenuItem>
                            <MenuItem value={20}>Edit</MenuItem>
                            <MenuItem value={30}>Fork</MenuItem>
                            <MenuItem value={40}>Sync from repo</MenuItem>
                            <MenuItem value={50}>Download</MenuItem>
                            <MenuItem value={60}>Delete</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

            </Box>
            <Box sx={{ p: '20px 30px', display: 'flex', gap: '100px' }}>
                <Box>
                    <Typography fontWeight={700} color="primary">Name</Typography>
                    <Typography fontWeight={700} color="primary">ID</Typography>
                    <Typography fontWeight={700} color="primary">Description</Typography>
                    <Typography fontWeight={700} color="primary">Visibility</Typography>
                    <Typography fontWeight={700} color="primary">Created</Typography>
                    <Typography fontWeight={700} color="primary">Descriptior Link</Typography>
                </Box>
                <Box>
                    <Typography color="primary">demo_netapp</Typography>
                    <Typography color="primary">2</Typography>
                    <Typography color="primary">demo app create</Typography>
                    <Typography color="primary">Public</Typography>
                    <Typography color="primary">18 Sept 2022</Typography>
                    <Typography color="primary">https://repo.s5g.gos.y-cloud.eu/demo_netapp</Typography>
                </Box>
            </Box>
            <Divider
                sx={{
                    margin: 'auto',
                    background: '#071739',
                    width: '100%',
                    mb: '38px'
                }}
            />
            <Box sx={{ display: 'flex', gap: '25px' }}>
                <Box sx={{ marginTop: "15px" }}>
                    <Typography fontWeight={700} fontSize="large" color="primary">Descriptor</Typography>
                </Box>
               
            </Box>
            <Box sx={{p:'20px 80px'}}>
            <TextField
                id="filled-multiline-static"
                label="Descriptor"
                value={JSON.stringify(data, null, 2)}
                multiline
                maxRows={10}
                variant="filled"
                fullWidth
                />
            </Box>
        </Box>
    )
};