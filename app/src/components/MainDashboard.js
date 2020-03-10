import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import InstallationCard from './InstallationCard';
import ApplicationTable from './ApplicationTable';
import SwitchTable from './SwitchTable';
import DeviceTable from './DeviceTable';
import AppInstallModal from './modals/AppInstallModal';
import OrgManager from './OrgManager';
import SnackBar from './SnackBar';
import RemoveItemModal from './modals/RemoveItemModal';
import DrawerComponent from './Drawer';
import { connect } from 'react-redux';
import createSocket from '../utils/Socket';
import { updateApps, updateDevices, updateSwitches, messageHandler, updateUsers } from '../actions/items';


const mapStateToProps = state => {
  return {
      isAuthed: state.isAuthed,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

class ConnectedDeviceManager extends Component {
  constructor(props) {
    super(props);

    this.toggleAction = this.toggleAction.bind(this);

    this.client = null;
    this.state = {
      activeActionTab: 0,
    };
  }

//   componentDidUpdate(prevProps) {
//     if (this.props.org != null && (prevProps.org != this.props.org)) {
//       Promise.all([
//         this.props.updateSwitches(this.props.org),
//         this.props.updateApps(this.props.org),
//         this.props.updateDevices(this.props.org),
//         this.props.updateUsers(this.props.org)
//       ])
//       if (this.client && this.client.isConnected) {
//         this.client.disconnect();
//       }
//       this.client = createSocket(this.props.org, (message) => this.props.messageHandler(message, this.props.org))
//     }
//   }

  toggleAction(event, tab) {
    if (this.state.activeActionTab !== tab) {
      this.setState({
        activeActionTab: tab
      });
    }
  }

  render() {
    if (!this.props.isAuthed){
      return (
        <div className="container" align='center'>
          <br />
          Please log in to start using the portal
        </div>
      );
    }
    const { activeActionTab } = this.state;
    return (
        <div className="container">
          <Grid container> 
            <div>
              <DrawerComponent 
                isAuthed={this.props.isAuthed}
              />
            </div>
            <Grid item xs={8} style={{padding: '10px'}}>
            <Tabs
              value={activeActionTab}
              onChange={this.toggleAction}
              indicatorColor="secondary"
              centered
            >
              <Tab label="Peer Groups" />
              <Tab label="Apps" />
              <Tab label="Devices" />
              <Tab label="Organization" />
            </Tabs>
            </Grid>
            <Grid item xs={4} style={{padding: '10px'}}></Grid>
          </Grid>
          <Grid container >
            <Grid item xs={8} style={{padding: '10px'}}>
              {activeActionTab === 0 && <SwitchTable />}
              {activeActionTab === 1 && <ApplicationTable />}
              {activeActionTab === 2 && <DeviceTable />}
              {activeActionTab === 3 && <OrgManager />}
              
            </Grid>
              <Grid item xs={4} style={{padding: '10px'}}>
                <InstallationCard org={this.state.organization} />
              </Grid>
          </Grid>
          <AppInstallModal />
          <RemoveItemModal />
          <SnackBar />
        </div>
    );
  }
}

const DeviceManager = connect(mapStateToProps, mapDispatchToProps)(ConnectedDeviceManager);

export default DeviceManager;