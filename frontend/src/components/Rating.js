import React from 'react'

export default function Rating(props) {
  const { raitigs, numbReview } = props
  const source = './images/'
  return (
    <div>
      <div className='rating'>
        <span>
          <img
            src={
              raitigs >= 1
                ? source + '1.ico'
                : raitigs >= 0.5
                ? source + '0.5.ico'
                : source + '0.ico'
            }
            alt=''
          />
        </span>
        <span>
          <img
            src={
              raitigs >= 2
                ? source + '1.ico'
                : raitigs >= 1.5
                ? source + '0.5.ico'
                : source + '0.ico'
            }
            alt=''
          />
        </span>
        <span>
          <img
            src={
              raitigs >= 3
                ? source + '1.ico'
                : raitigs >= 2.5
                ? source + '0.5.ico'
                : source + '0.ico'
            }
            alt=''
          />
        </span>
        <span>
          <img
            src={
              raitigs >= 4
                ? source + '1.ico'
                : raitigs >= 3.5
                ? source + '0.5.ico'
                : source + '0.ico'
            }
            alt=''
          />
        </span>
        <span>
          <img
            src={
              raitigs === 5
                ? source + '1.ico'
                : raitigs >= 4.5
                ? source + '0.5.ico'
                : source + '0.ico'
            }
            alt=''
          />
        </span>
        <span>{numbReview} views </span>
      </div>
    </div>
  )
}
