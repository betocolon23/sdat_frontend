import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
// import blue from '@material-ui/core/colors/blue';


export const THEME = createMuiTheme({
  palette: {
    primary: {main: grey[900], light: grey[100], contrastText: grey[400], },
    secondary: {main: '#FC5001'},
    action: {main: '#3d4443'},
    error: {main: red[500]}
  }
});