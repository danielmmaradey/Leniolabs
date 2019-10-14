// Module Dependencies
import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

// Module Components
import HeadContent from "../../components/HeadContent/HeadContent";
import ItemContent from "../../components/ItemContent/ItemContent";

// Module Redux
import { connect } from "react-redux";
import { GetDataMembers } from "../../storage/actions/membersActons";

// Module main Component
class Member extends Component {
  state = {
    memberId: "",
    redirectToHome: false,
    members: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ memberId: id });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let members = nextProps.storeDataMembers.members.results[0].members;
    if (members) {
      return {
        members
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  redirectToHome = () => {
    this.setState({
      redirectToHome: true
    });
  };

  // Action to redirect Home
  _actionReply = () => {
    this.setState({ redirectToHome: true });
  };

  // Component Member
  _componentMember = (members, memberId) => {
    const filterMember = members.filter(member => member.id === memberId);
    const json = filterMember[0];
    const member = json ? json : null;
    return (
      <div className="tile">
        <ItemContent member={member} />
      </div>
    );
  };

  render() {
    const { memberId, members, redirectToHome } = this.state;
    const componentMember = this._componentMember(members, memberId);
    if (redirectToHome) {
      return (
        <Route
          something="foo"
          render={() => <Redirect to={{ pathname: "/" }} />}
        />
      );
    }

    return (
      <div id="member">
        <div className="container">
          <HeadContent
            icon="fa-users"
            title="Member"
            info={`Member id: ${memberId}`}
            reply={true}
            actionReply={this._actionReply}
          />
          <div className="dv-container-p">{componentMember}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  storeDataMembers: state.members
});

const mapDispatchtoProps = {
  GetDataMembers
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Member);
