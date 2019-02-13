import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import './style.css'
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import {Icon} from "@material-ui/core";

class HomeProducts extends Component {
    constructor(props){
        super(props)
    }

    handleClick(product){
        document.location.href = `/item/${product.id}`
    }

    render() {
        return(
            <Grid container justify="center" id="container" spacing={0}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h4" gutterBottom>Choose a <b>gift</b>!</Typography>
                </Grid>
                <GridList cellHeight={300} spacing={0}>
                    {this.props.products && this.props.products.map((product, i) => (
                        <GridListTile key={i}>
                            <img src={product.imageURL} alt={product.name} />
                            <GridListTileBar
                                title={product.name}
                                subtitle={<span>Price: {product.price} €</span>}
                                actionIcon={
                                    <IconButton>
                                        <Icon onClick={() => this.handleClick(product)} fontSize="large"
                                              style={{color: "rgb(80, 180, 48)"}}>
                                            add_circle
                                        </Icon>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </Grid>
        )
    }
}

export default HomeProducts