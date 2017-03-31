import React, { Component } from 'react';

export default class DataComponent extends Component {
  dataProps(dataProps) {
    const extraProps = {};
    if (typeof dataProps != 'undefined' && dataProps && dataProps.length>0) {
      dataProps.map(d => {
        if (d.name && d.value) {
          extraProps["data-" + encodeURIComponent(d.name)] = d.value.replace(/'/g, '&quot;');
        }
      })
    }
    return extraProps;
  }
}