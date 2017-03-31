import React, { Component } from 'react';

export default class DataComponent extends Component {
  dataProps() {
    const extraProps = {};
    if (typeof this.props.data != 'undefined' && this.props.data && this.props.data.length>0) {
      this.props.data.map(d => {
        if (d.name && d.value) {
          extraProps["data-" + encodeURIComponent(d.name)] = d.value.replace(/'/g, '&quot;');
        }
      })
    }
    return extraProps;
  }
}