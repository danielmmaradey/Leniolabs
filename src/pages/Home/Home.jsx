// Module Dependencies
import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

// Module Components
import HeadContent from "../../components/HeadContent/HeadContent";
import Table from "../../components/Table/Table";
import Field from "../../components/Field/Field";
import ItemSlider from "../../components/ItemSlider/ItemSlider";

// Module reusable Functions
import { FilterTable } from "../../util/functions/Functions";

// Module Redux
import { connect } from "react-redux";
import { GetDataMembers } from "../../storage/actions/membersActons";

// Module Component
class Home extends Component {
  state = {
    search: "",
    filter: "",
    members: [],
    member: {},
    redirectToView: false,
    viewMoreFilter: false
  };

  componentDidMount() {
    let members = this.props.storeDataMembers.members.results[0].members;
    if (this.props.storeDataMembers) {
      if (members.length === 0) {
        this.props.GetDataMembers();
      }
    }
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

  _onChangeField = e => {
    this.setState({
      search: e.target.value
    });
  };

  _onChangeFieldFilters = e => {
    this.setState({
      filter: e.target.value
    });
  };

  _actionView = row => {
    this.setState({
      redirectToView: true,
      member: row
    });
  };

  _actionFilter = () => {
    this.setState({
      viewMoreFilter: !this.state.viewMoreFilter
    });
  };

  _componentTable = body => {
    const { search } = this.state;
    const head = [
      "ID",
      "Cspan",
      "Name",
      "Last Name",
      "Gender",
      "Party",
      "State",
      "Votes",
      "View more"
    ];
    const nameColums = [
      "id",
      "cspan_id",
      "first_name",
      "last_name",
      "gender",
      "party",
      "state",
      "total_votes",
      "btnview"
    ];

    if (search !== "") {
      body = FilterTable(body, search);
    }

    return (
      <Table
        head={head}
        body={body}
        nameColums={nameColums}
        btnView={this._actionView}
      />
    );
  };

  _componentItemSlider = members => {
    const foo = members[0];
    const keys = [];
    Object.keys(foo).forEach(function eachKey(key) {
      console.log(key);
      keys.push(key);
    });
    return (
      <div className="content-typfields">
        {keys &&
          keys.map((key, i) => (
            <Field
              key={i}
              enable={false}
              NamePlaceHolder="search value.."
              error=""
              data={this.state.input2}
              NameValue={"filter"}
              NameLabel={key}
              PrincipalClass="dv-input-table item-slider"
              onChangeField={e => this._onChangeFieldFilters(e)}
            />
          ))}
      </div>
    );
  };

  render() {
    const { members, member, redirectToView, viewMoreFilter } = this.state;

    const itemsSlider =
      members.length > 0 ? this._componentItemSlider(members) : null;

    const table =
      members.length > 0 ? (
        this._componentTable(members)
      ) : (
        <span>Cargando...</span>
      );

    if (redirectToView) {
      return (
        <Route
          something="foo"
          render={() => <Redirect to={{ pathname: "/member/" + member.id }} />}
        />
      );
    }

    return (
      <div id="home">
        <div className="container">
          <HeadContent
            icon="fa-home"
            title="Test Leniolabs"
            info="Evaluacion 3ra etapa entrevista"
            filter={true}
            actionFilter={this._actionFilter}
          >
            <Field
              enable={false}
              NamePlaceHolder="search value.."
              error=""
              data={this.state.input1}
              NameValue={"search"}
              NameLabel="Search: "
              PrincipalClass="dv-input-table"
              onChangeField={e => this._onChangeField(e)}
            />
          </HeadContent>
          <ItemSlider view={viewMoreFilter}>{itemsSlider}</ItemSlider>
          <div className="dv-container-s"></div>
          <div className="dv-container-p">
            <div className="tile">{table}</div>
          </div>
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
)(Home);
