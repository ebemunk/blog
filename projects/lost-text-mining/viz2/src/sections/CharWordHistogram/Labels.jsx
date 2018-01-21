import React from 'react'

import CharWordHistogram from './CharWordHistogram'

import style from './Labels.css'

export default class Labels extends React.Component {
  componentWillMount() {
    this.props.getCharWordFrequencies()
  }

  render() {
    return (
      <React.Fragment>
        <div className={style.legend}>
          <div className={style.legendItem}>
            <div className={style.charLegend} />
            <span>
              <abbr title="Cumulative Percentage">Cum. %</abbr> of Characters
            </span>
          </div>
          <div className={style.legendItem}>
            <div className={style.wordLegend} />
            <span>
              <abbr title="Cumulative Percentage">Cum. %</abbr> of Words
            </span>
          </div>
        </div>
        <div className={style.labels}>
          <div className={style.yLabelWrap}>
            <span className={style.rotatedLabel}>Characters</span>
          </div>
          <CharWordHistogram data={this.props.data} />
          <div className={style.yLabelWrap}>
            <span className={style.rotatedLabel}>Percentage</span>
          </div>
        </div>
        <div className={style.xLabelWrap}>
          <span className={style.centeredLabel}>Words</span>
        </div>
      </React.Fragment>
    )
  }
}
