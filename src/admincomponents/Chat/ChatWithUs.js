import React from "react"
import { useState } from "react"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import "./ChatWithUs.css"
const ChatWithUs = () => {
    const [open, setOpen] = useState(false)

    return (

        <div>

            <Button variant="outline" onClick={() => setOpen(true)}><label>Chat</label></Button>
            <Dialog className="chatDialogBox"
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Chat"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        offline chat
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id="btn" onClick={()=>setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>

)

}
export default ChatWithUs;
