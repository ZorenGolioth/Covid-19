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
    a: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

   this.setState({ data2: fetchedData, country: country, });
  }

  
  render() {
    const { data, data2 } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.gambar} src={COVID} alt="COVID-19" />
        <h2>G &nbsp;&nbsp; L &nbsp;&nbsp; O &nbsp;&nbsp; B &nbsp;&nbsp; A &nbsp;&nbsp; L</h2>
        <Global data={data}/>
        <h3>C &nbsp; O &nbsp; U &nbsp; N &nbsp; T &nbsp; R &nbsp; Y  </h3>
        <CountrySelect handleCountryChange={this.handleCountryChange} />
        <h2>{this.state.country}</h2>
        <Country data2={data2}/>
      </div>
    )
  }
}

export default App;