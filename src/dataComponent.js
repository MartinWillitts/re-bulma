import React, { Component } from 'react';

export default class DataComponent extends Component {
  dataProps(dataProps) {
    const extraProps = {};
    if (typeof dataProps != 'undefined' && dataProps && dataProps.length>0) {
      dataProps.map(d => {
        extraProps["data-" + encodeURIComponent(d.name)] = encodeURIComponent(d.value);
      })
    }
    return extraProps;
  }
}