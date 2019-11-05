import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: this.props.data,
      filterText: '',
      selectedBuilding: 0,
      addName: '', 
      addCode: '',
      addLat: '',
      addLong: '',
      addAddress: '',
      buildingID: 149, 
      remCode: ''
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  valuesUpdate(newCode, newName, newLat, newLong, newAddr) {
    this.setState({
      addCode: newCode,
      addName: newName,
      addLat: newLat,
      addLong: newLong,
      addAddress: newAddr
    })
    console.log(newCode, ' ', newName, ' ', newLat, ' ', newLong, ' ', newAddr)
  }

  addBuildingUpdate() {
    var arr = this.state.myData
    if(this.state.addLat === '' && this.state.addLong === '' && this.state.addAddress === '') {
      arr.push({
        id: this.state.buildingID,
        code: this.state.addCode,
        name: this.state.addName
      })
    } else {
      arr.push({
        id: this.state.buildingID,
        code: this.state.addCode,
        name: this.state.addName,
        coordinates: {
            latitude: this.state.addLat,
            longitude: this.state.addLong
        },
        address: this.state.addAddress
      })
    }

    this.setState({
      buildingID: (this.state.buildingID + 1),
      myData: arr
    })
  }

  updateRemove(value) {
    this.setState({
      remCode: value
    })
  }

  remBuilding() {
    var arr = this.state.myData
    var cod = this.state.remCode
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].code === cod) {
        arr.splice(i, 1)
      }
    }

    this.setState({
      myData: arr
    })
  }

  render() {

    return (
      <div>
      <header>
          <div className="titleText">UF Directory App</div>
          <Search 
            filterText = {this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />
      </header>
      <div className="bg">
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.myData}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.state.myData}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
            <fieldset>
              <legend>Add a Building</legend>
              <AddBuilding
                data={this.state.myData}
                addCode={this.state.addCode}
                addName={this.state.addName}
                addLat={this.state.addLat}
                addLong={this.state.addLong}
                addAddress={this.state.addAddress}
                valuesUpdate={this.valuesUpdate.bind(this)}
                addBuildingUpdate={this.addBuildingUpdate.bind(this)}
                />
            </fieldset>
            <br></br>
            <fieldset>
              <legend>Remove a Building</legend>
              <RemoveBuilding
                data={this.state.myData}
                remCode={this.state.remCode}
                updateRemove={this.updateRemove.bind(this)}
                remBuilding={this.remBuilding.bind(this)}
              />
            </fieldset>
          </div>
          <Credit />
        </main>
      </div>
      </div>
    );
  }
}

export default App;
