import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadConditions } from '../redux/actions/conditionsActions'
import Head from 'next/head'
import ConditionList from '../components/ConditionList'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'

export const Home = props => {
  const { conditions, loadConditions } = props
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState(
    'There are currently no conditions to view.'
  )
  useEffect(() => {
    if (conditions.length === 0) {
      setLoading(true)
      setMessage('There are currently no conditions to view.')
      loadConditions()
        .then(() => setLoading(false))
        .catch(error => {
          setLoading(false)
          setMessage(`Loading conditions failed ${error}`)
        })
    }
  })
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='hero'>
        <h1 className='title'>Conditions</h1>
        {conditions.length === 0 && loading === true && <CircularProgress />}
        {conditions.length === 0 && loading === false && message}
      </div>
      <ConditionList conditions={conditions} />
      <style jsx>{`
        :global(body) {
          max-width: 1200px;
          margin: auto;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        .hero {
          text-align: center;
          margin-bottom: 40px;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
      `}</style>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    loadConditions: bindActionCreators(loadConditions, dispatch)
  }
}

const mapStateToProps = state => {
  return {
    conditions: state.conditionsReducer.conditions
  }
}

Home.propTypes = {
  conditions: PropTypes.array.isRequired,
  loadConditions: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
