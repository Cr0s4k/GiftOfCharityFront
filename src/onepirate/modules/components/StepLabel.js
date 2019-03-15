import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiStepLabel from '@material-ui/core/StepLabel';

const styles = theme => ({
    stepLabel: {
      fontSize: theme.typography.fontSize + 5,
      fontFamily: theme.typography.fontFamilySecondary,
    },
    iconCompleted: {
      color: `${theme.palette.secondary.main} !important`
    }
});

function StepLabel(props) {
  const {classes, ...other} = props;

  return (
    <MuiStepLabel
      StepIconProps={{
        classes: {
          completed: classes.iconCompleted,
        }
      }}
      classes={{
        label: classes.stepLabel
      }}
      {...other}
    />);
}

export default withStyles(styles)(StepLabel);
