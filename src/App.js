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
          title: 'ИНДИВИДУАЛЬНОЕ ИЗГОТОВЛЕНИЕ ШТОР',
          text: '8 видов систем, более 1000 видов тканей, и множество дополнительных возможностей позволяют создать реально уникальную и уютную атмосферу в вашем доме',
          subtitle: '',
          description: '',
          image: '',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 2,
          title: '',
          text: '',
          subtitle: 'римские шторы',
          description: 'Изготавливаем римские шторы с учётом всех ваших пожеланий',
          image: 'https://i.ibb.co/fNf4YQW/02image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 3,
          title: '',
          text: '',
          subtitle: 'австриийские шторы',
          description: 'Изготавливаем австриийские шторы с учётом всех ваших пожеланий',
          image: 'https://i.ibb.co/V2SrPZb/03image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 4,
          title: '',
          text: '',
          subtitle: 'французские шторы',
          description: 'Изготавливаем французские шторы с учётом всех ваших пожеланий',
          image: 'https://i.ibb.co/g6mfvyX/04image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 5,
          title: '',
          text: '',
          subtitle: 'лондонские шторы',
          description: 'Изготавливаем лондонские шторы с учётом всех ваших пожеланий',
          image: 'https://i.ibb.co/mGndGn7/05image.jpg',
          image1: '',
          image2: '',
          image3: '',
          image4: '',
        },
        {
          id: 6,
          title: '',
          text: '',
          subtitle: 'прямые шторы',
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
