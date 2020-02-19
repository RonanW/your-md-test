import React from 'react'
import Link from 'next/link'
import Condition from './Condition'
import GridList from '@material-ui/core/GridList'
import PropTypes from 'prop-types'

const ConditionList = ({ conditions }) => (
  <div className='container'>
    <GridList cols={3}>
      {conditions &&
        conditions.map(({ label, snippet, image }) => (
          <Condition
            key={label}
            label={label}
            snippet={snippet}
            image={image}
          />
        ))}
    </GridList>
    <style jsx>{`
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-end;
      }
    `}</style>
  </div>
)

ConditionList.propTypes = {
  conditions: PropTypes.array.isRequired
}

export default ConditionList
