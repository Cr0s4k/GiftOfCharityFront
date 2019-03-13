import React from 'react'
import Grid from "@material-ui/core/Grid";
import {Icon} from "@material-ui/core";
import ReactPlayer from "react-player";
import Button from "../components/Button";
import Typography from "../components/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import API from "../../../services/API";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  button: {
    display: 'block',
    margin: '0 auto'
  },
  icon: {
    marginTop: 0,
    marginLeft: 6,
    top: 5,
    position: 'relative'
  }
});

class DonationStep1 extends React.Component {
  state = {
    file: null,
    loading: false,
    videoUrl: null
  };

  constructor(props) {
    super(props);
    this.uploadInRef = React.createRef();
  }


  videoToNull = () => {
    this.setState({videoUrl: null, loading: false})
  };

  displayVideo = (videoUrl) => {
    this.setState({
      loading: false,
      videoUrl: videoUrl
    });
  };

  handleUpload = async () => {
    const data = new FormData();
    data.append('file', this.state.file, this.state.file.name);
    let videoUrl;
    try {
      this.setState({loading: true})
      videoUrl = await API.uploadVideo(data);
      this.displayVideo(videoUrl);
    }
    catch (e) {
      console.log(e);
      this.videoToNull();
    }
  };

  handleSelectedFile = evt => {
    this.setState({
      file: evt.target.files[0],
      loading: false
    }, this.handleUpload);
  };

  handleUploadBtn = () => {
    this.uploadInRef.current.click()
  };

  render() {
    const {classes} = this.props;

    return (
      <>
        <Grid item sm={12} xs={12}>
          <Typography variant="h5" align="center" component='h2' gutterBottom>
            First of all choose a nice video you want to share with your friend!
          </Typography>
        </Grid>
        <Grid item sm={12}/>
        <Grid item sm={12} xs={12}>
          <div style={{width: '60%', margin: '0 auto'}}>
            <ReactPlayer url='https://firebasestorage.googleapis.com/v0/b/giftofcharity-ab752.appspot.com/o/videos%2FCongratulations!!!!.mp4?alt=media&amp;token=dc8a876a-2dc3-47c2-a5bd-478c38b6baf0'
                         hidden={this.state.videoUrl == null} controls width="100%" height="auto"/>
          </div>
          <input ref={this.uploadInRef} type="file" multiple={true} style={{display: "none"}} onChange={this.handleSelectedFile} accept="video/*"/>
          <div style={{textAlign: 'center'}} hidden={!this.state.loading}>
            <CircularProgress/>
          </div>
          <Button className={classes.button} variant="contained" color="primary" onClick={this.handleUploadBtn}>
            Upload
            <Icon className={classes.icon}>cloud_upload</Icon>
          </Button>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(DonationStep1);