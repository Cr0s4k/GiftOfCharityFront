import React from 'react'
import {Button, Icon, Typography} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import API from "../../services/API"
import ReactPlayer from 'react-player'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

class DonationFormStep1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: {
                selectedFile: null,
                loaded: 0
            },
            progressBarHidden: true,
            videoUrl: null,
            dialogHidden: true
        };

        this.uploadInRef = React.createRef();
    }

    handleUploadBtn = () => {
        this.uploadInRef.current.click()
    };

    toggleDialog = () => {
        this.setState({dialogHidden: !this.state.dialogHidden})
    };

    toggleBar = () => {
        this.setState({progressBarHidden: !this.state.progressBardHidden})
    };

    videoToNull = () => {
        this.setState({videoUrl: null})
    };

    displayVideo = (videoUrl) => {
        this.setState({
            progressBarHidden: true,
            videoUrl: videoUrl
        }, () => {
            console.log("Step 1 finished ", videoUrl)
        });
    };

    handleUpload = async () => {
        const data = new FormData();
        data.append('file', this.state.file.selectedFile, this.state.file.selectedFile.name);
        let videoUrl;
        try {
            videoUrl = await API.uploadVideo(data, (loaded) => {
                this.setState({
                    file: {
                        ...this.state.file,
                        loaded: loaded
                    }
                })
            });
            this.displayVideo(videoUrl);
        }
        catch (e) {
            this.videoToNull();
            this.toggleBar();
            this.toggleDialog();
        }
    };

    handleSelectedFile = evt => {
        this.setState({
            file: {
                selectedFile: evt.target.files[0],
                loaded: 0
            },
            progressBarHidden: false
        }, this.handleUpload);
    };

    render() {
        return (
            <Grid container item justify="center" style={{display: this.props.hidden ? "none" : "flex"}}>
                <Grid item sm={5} xs={7}>
                    <Typography variant="h5" gutterBottom align="center">
                        <b>First of all choose a nice video you want to share with your friend! </b>
                        <Icon fontSize="large" style={{marginBottom: -7}}>mood</Icon>
                    </Typography>
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <ReactPlayer url={this.state.videoUrl} hidden={this.state.videoUrl == null} controls width="100%" height="auto"/>
                    <input ref={this.uploadInRef} type="file" multiple={true} style={{display: "none"}} onChange={this.handleSelectedFile} accept="video/*"/>
                    <LinearProgress variant="determinate" value={this.state.file.loaded} hidden={this.state.progressBarHidden} style={{height: 7}}/>
                    <div id="DonationFormS1BtnContainer">
                        <Button id={"uploadBtn"} variant="contained" color="primary" onClick={this.handleUploadBtn}>
                            Upload
                            <Icon style={{marginBottom: 0, marginLeft: 6}}>cloud_upload</Icon>
                        </Button>
                        <Button  variant="contained" color="primary" disabled={this.state.videoUrl == null} onClick={this.props.nextStepCallback}>
                            Next step
                            <Icon style={{marginBottom: 0, marginLeft: 6}}>navigate_next</Icon>
                        </Button>
                    </div>
                </Grid>
                <Grid item sm={12}/>

                <Dialog
                    open={!this.state.dialogHidden}
                    onClose={this.toggleDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Error!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Something went wrong uploading your video! Remember max size is 200MB.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.toggleDialog} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        );
    }
}

export default DonationFormStep1;