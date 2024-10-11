import Header from './components/header';
import List from './components/list';
import styles from './app.module.css';
import React from 'react';
import Cooperation from './components/cooperation';
import Cards from './components/cards';
import Block from './components/block';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          title: '',
          text: '',
          subtitle: 'римские шторы',
          description: 'Изготавливаем римские шторы с учётом всех ваших пожеланий',
          image: '/images/02image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 2,
          title: '',
          text: '',
          subtitle: 'австриийские шторы',
          description: 'Изготавливаем австриийские шторы с учётом всех ваших пожеланий',
          image: '/images/03image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 3,
          title: '',
          text: '',
          subtitle: 'французские шторы',
          description: 'Изготавливаем французские шторы с учётом всех ваших пожеланий',
          image: '/images/04image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 4,
          title: '',
          text: '',
          subtitle: 'лондонские шторы',
          description: 'Изготавливаем лондонские шторы с учётом всех ваших пожеланий',
          image: '/images/05image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 5,
          title: '',
          text: '',
          subtitle: 'прямые шторы',
          description: 'Изготавливаем прямые шторы с учётом всех ваших пожеланий',
          image: '/images/06image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 6,
          title: '',
          text: '',
          subtitle: 'разные шторы',
          description: 'Изготавливаем разнообразные шторы с учётом всех ваших пожеланий',
          image: '/images/04image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 7,
          title: '',
          text: '',
          subtitle: 'фигурные шторы',
          description: 'Изготавливаем разнообразные шторы с учётом всех ваших пожеланий',
          image: '/images/05image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
      ],
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <Header />
          <List list={this.state.list} />
          <Cooperation />
          <Cards />
          <Block />
        </div>
      </div>
    );
  }
}

export default App;
