import React, { Component } from "react";
import SearchModel from "./SearchModel";
import SearchMake from "./SearchMake";
import { Link } from "react-router-dom";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { makeId: 0 };
    this.onMakeSelect = this.onMakeSelect.bind(this);
    this.onModelSelect = this.onModelSelect.bind(this);
  }

  onMakeSelect(event) {
    this.setState({ makeId: Number.parseInt(event.target.value, 10) });
  }

  onModelSelect(event) {
    this.setState({ modelId: Number.parseInt(event.target.value, 10) });
  }

  render() {
    return (
      <div>
        <h1>Browse Catalog</h1>
        <div className="search-container">
          <SearchMake
            onMakeSelect={this.onMakeSelect}
            makeId={this.state.makeId}
          />
          <SearchModel
            onModelSelect={this.onModelSelect}
            makeId={this.state.makeId}
            modelId={this.state.modelId}
          />
          <div className="button-group">
            {this.state.modelId ? (
              <Link to={`/make/model/${this.state.modelId}`}>
                <button className="search-button">Details</button>
              </Link>
            ) : (
              <button disabled className="search-button disabled">
                Details
              </button>
            )}
            <Link to={`/`}>
              <button className="search-button">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchContainer;
