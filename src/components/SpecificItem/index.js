import React from 'react'
import Grid from "@material-ui/core/Grid";
import './style.css'
import Typography from "@material-ui/core/Typography";
import {withRouter} from "react-router";
import GreenBtn from "../GreenBtn";

class SpecificItem extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.history.push(`/item/${this.props.item.id}/buy`)
    }

    render() {
        return (
            <Grid container id="specificItemGrid">
                <Grid item xs={12} sm={5}>
                    <div>
                        <img src={this.props.item.imageUrl} id="specificItemImage" alt="Charity project"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={7} id="specificItemGridRight">
                    <Typography variant="h4" gutterBottom>
                        <b>{this.props.item.name}</b>
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {this.props.item.description}
                    </Typography>
                    <GreenBtn
                        variant="contained"
                        color="primary"
                        id="specificItemBtn"
                        size="large"
                        onClick={this.handleClick}>
                        Give away
                    </GreenBtn>
                </Grid>
            </Grid>
        );
    }
}

export default withRouter(SpecificItem);
