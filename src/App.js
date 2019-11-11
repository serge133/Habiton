import React from 'react';
import Layout from './Components/Layout/Layout';
import { connect } from 'react-redux';

const App = props => {
  return (
    <Layout>
      
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    checkRedux: state.reducerOne.test
  };
};

export default connect(mapStateToProps)(App);
