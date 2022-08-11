import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode:true
    });
    //this.state.editMode = true;
    //this.forceUpdate();
  }

  deactivateEditMode = () => {
    this.setState({
      editMode:false
    });
    //this.state.editMode = false;
    //this.forceUpdate();
  }

  render() {
    return (
      <>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
        </div>
        }
      </>
    )
  }
}

export default ProfileStatus;