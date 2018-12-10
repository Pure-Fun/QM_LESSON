import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import 'moment/locale/zh-cn';
import { db, loadCollection } from '../database/index';
import Editor from './Editor';

moment.locale('zh-CN');

class Note extends Component {
  /* constructor(props) {
    super(props);
  } */
  state = {
    entity: this.props.entity,
    body: this.props.entity.body,
    updated: this.props.entity.meta.updated || this.props.entity.meta.created,
    open: false,
    destroyEntity: this.props.destroyEntity
  }
  updated() {
    return moment(this.state.updated).fromNow()
  }
  header() {
    return _.truncate(this.state.body, { length: 30}) || '新建笔记';
  }
  toggle = () => {
    this.setState((prevState) => {
      return {
        open: !prevState.open
      }
    })
  }
  word() {
    return this.state.body.length;
  }
  render() {
    return (
      <div className="item">
        <div className="meta">
          {this.updated()}
        </div>
        <div className="content">
          <div className="header"
          onClick={this.toggle}>
            {this.header()}
          </div>
        </div>
        <div className="extra">
          {
            this.state.open && 
            <Editor entity={this.state.entity} 
            updateEntity={this.updateEntity} />
          }
          {this.word() }字
          {
            this.state.open && 
            <i className="right floated trash outline icon" style={{"fontFamily": "icons"}} onClick={() => this.state.destroyEntity(this.state.entity)}></i>
          }
        </div>
      </div>
    );
  }
  updateEntity = (event) => {
    const _body = event.target.value
    this.setState({
      body: _body
    })
    loadCollection('notes')
      .then((collection) => {
        const entity = this.state.entity
        entity.body = _body
        collection.update(entity)
        db.saveDatabase();
      })
  }
}

export default Note;