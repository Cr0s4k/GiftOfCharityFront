import React from 'react'
import Grid from "@material-ui/core/Grid";
import './style.css'

class SpecificItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Grid container id="specificItemGrid">
                <Grid item>
                    {/*<img src={this.props.item.imageURL}/>*/}
                    <p>{JSON.stringify(this.props.item)}</p>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
        );
    }
}

export default SpecificItem;
