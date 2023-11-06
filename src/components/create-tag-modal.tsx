import React, { Component } from "react";

class Dashboard extends Component {
    constructor(props: {} | Readonly<{}>) {
      super(props);
      this.state = {
        show: false
      };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  }
  
  export default Dashboard