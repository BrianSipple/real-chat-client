import Ember from 'ember';

const { Component, inject: { service } } = Ember;


export default Component.extend({
  SessionService: service('session'),
});
