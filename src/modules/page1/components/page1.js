import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import { LeftAside } from '../../helperModules/index';

import '../css/page1.css';
import {userIsLogined} from "../../../selectors/user";





const items = [
  {
    src: 'https://sun9-20.userapi.com/c635107/v635107263/750c/cGvrc02XxYI.jpg',
    header: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://sun9-17.userapi.com/c540100/v540100553/49908/8xu48Vl9TBY.jpg',
    header: 'На этой странице нет уникального для какой либо группы контента',
    caption: 'Прошу проследовать на Page2'
  },
  {
    src: 'https://sun9-3.userapi.com/c540100/v540100957/6ae9c/4QXusvvlulg.jpg',
    header: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://sun9-2.userapi.com/c540100/v540100230/af60e/XHGy_9uqnxM.jpg',
    header: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { userIsLogined } = this.props;
    const { activeIndex } = this.state;

    if( !userIsLogined )
      return <Redirect to="/login" />;

    return (
      <main className={'main-main'}>
        <LeftAside/>
        <content className={'main-content'}>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            { items.map( (item) => (
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
              >
                <img src={item.src} alt={item.src} />
                <CarouselCaption captionText={item.caption} captionHeader={item.header} />
              </CarouselItem>
            ) ) }
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </content>
      </main>
    );
  }
}


const mapStateToProps = state => ({
  //items: getSearchedVacancies(state),
  userIsLogined: userIsLogined(state)
});

const mapDispatchToProps = dispatch => ({
  //updateMapSelectedAddress: newAddress => dispatch(updateMapSelectedAddress(newAddress)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);