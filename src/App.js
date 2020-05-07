import React from 'react';
import Global from './comps/Global/Global';
import CountrySelect from './comps/CountrySelect/CountrySelect';
import Country from './comps/Country/Country';
import styles from './App.module.css';
import {fetchData} from './API';
import COVID from './gambar/COVID.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    data2: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

   this.setState({ data2: fetchedData, country: country });
  }
  render() {
    const { data, data2 } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.gambar} src={COVID} />
        <p>G L O B A L - C A S E S </p>
        <Global data={data}/>
        <CountrySelect handleCountryChange={this.handleCountryChange} />
        <Country data2={data2}/>
      </div>
    )
  }
}

export default App;