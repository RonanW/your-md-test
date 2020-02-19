import React, { useState } from 'react'
import Link from 'next/link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Truncate from 'react-truncate'
import PropTypes from 'prop-types'

const Condition = ({
  label,
  snippet = '',
  image = 'https://via.placeholder.com/310'
}) => {
  const [imgSrc, setImgSrc] = useState(image)
  const [expanded, setExpanded] = useState(false)
  const [truncated, setTruncated] = useState(true)

  const onImgError = () => {
    setImgSrc('https://via.placeholder.com/310')
  }

  const handleTruncate = newTruncated => {
    if (truncated !== newTruncated) {
      setTruncated(newTruncated)
    }
  }

  const toggleLines = event => {
    event.preventDefault()
    setExpanded(!expanded)
  }

  return (
    <div className='item'>
      <Card>
        <CardMedia
          component='img'
          alt={label}
          height='310'
          image={imgSrc}
          title={label}
          onError={onImgError.bind(this)}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {label}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            <Truncate
              lines={!expanded && 1}
              ellipsis={
                <span>
                  ...{' '}
                  <a href='#' data-truncated='collapsed' onClick={toggleLines}>
                    show more
                  </a>
                </span>
              }
              onTruncate={handleTruncate}
            >
              {snippet}
            </Truncate>
            {!truncated && expanded && (
              <span>
                {' '}
                <a href='#' data-truncated='expanded' onClick={toggleLines}>
                  show less
                </a>
              </span>
            )}
          </Typography>
        </CardContent>
      </Card>
      <style jsx>{`
        .item {
          flex-basis: 30%;
          flex-grow: 0;
          min-width: 320px;
          padding: 10px;
        }
      `}</style>
    </div>
  )
}

Condition.propTypes = {
  label: PropTypes.string,
  snippet: PropTypes.string,
  image: PropTypes.string
}

export default Condition
