import Header from './components/header';
import List from './components/list';
import styles from './app.module.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          title: 'римские шторы',
          subtitle: '',
          description: 'Изготавливаем римские шторы с учётом всех ваших пожеланий',
          image: 'https://i.ibb.co/fNf4YQW/02image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 2,
          title: 'австриийские шторы',
          subtitle: '',
          description: 'Изготавливаем австриийские шторы с учётом всех ваших пожеланий',
          image: 'https://i.ibb.co/V2SrPZb/03image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 3,
          title: 'французские шторы',
          subtitle: '',
          description: 'Изготавливаем французские шторы с учётом всех ваших пожеланий',
          image: 'https://i.ibb.co/g6mfvyX/04image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 4,
          title: 'лондонские шторы',
          subtitle: '',
          description: 'Изготавливаем лондонские шторы с учётом всех ваших пожеланий',
          image: 'https://i.ibb.co/mGndGn7/05image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 5,
          title: 'прямые шторы',
          subtitle: '',
          description: 'Изготавливаем прямые шторы с учётом всех ваших пожеланий',
          image: 'https://i.ibb.co/1TjLPHG/06image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
      ]
    }
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <Header />
          <List list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
