import {  Tab } from "@mui/material";
import { useState } from "react";
import SignUp from "./SignUp/SignUp";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export function UserTypeSelector() {

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center  ">
            <div className=" border border-blue-100 hover:border-blue-400 rounded-[10px]">
        <TabContext value={value} >
            <div className="flex justify-center border-b">
                <TabList onChange={handleChange}>
                    <Tab label="Merchant" value='1' />
                    <Tab label="User" value='2' />
                </TabList>
            </div>
            <TabPanel value='1'><SignUp key={"merchant"} isMerchant={true} /></TabPanel>
            <TabPanel value='2'><SignUp key="user" isMerchant={false} /></TabPanel>
        </TabContext>
        </div>
        </div>
    )
}