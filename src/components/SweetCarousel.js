import React, {Component} from 'react'

import {Dimensions} from 'react-native'
//import SideSwipe from 'react-native-sideswipe';

import CarouselCard from './CarouselCard'

//import data from '...'

export default class SweetCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  render = () => {
    // center items on screen
    const {width} = Dimensions.get('window')
    const contentOffset = (width - CarouselCard.WIDTH) / 2

    const data = [
      {title: 'Wallet Value', text: '$ 12,345.33'},
      {title: 'N Total', text: '5537'},
      {title: 'N Available', text: '1200'},
    ]

    return null
    // <SideSwipe
    //   index={this.state.CarouselCard}
    //   itemWidth={CarouselCard.WIDTH}
    //   style={{ width }}
    //   data={data}
    //   contentOffset={contentOffset}
    //   onIndexChange={index =>
    //     this.setState(() => ({ currentIndex: index }))
    //   }
    //   renderItem={({ item }) => (
    //     <CarouselCard title={item.title}> {item.text} </CarouselCard>
    //   )}
    // />
  }
}
