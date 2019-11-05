import React from 'react';

class AddBuilding extends React.Component {


    valuesUpdate() {
        const newCode = this.codeValue.value
        const newName = this.nameValue.value
        const newLat = this.latValue.value
        const newLong = this.longValue.value
        const newAddr = this.addrValue.value
        this.props.valuesUpdate(newCode, newName, newLat, newLong, newAddr)
    }

    addBuildingUpdate() {
        this.props.addBuildingUpdate()
    }

    render() {
        return(
            <div>
                <form>
                    <fieldset>
                        <legend>Add a Building</legend>
                        Code: 
                        <input
                            type="addbuildingtext"
                            ref={ (value) => {this.codeValue = value} }
                            placeholder="Input code..."
                            onChange={this.valuesUpdate.bind(this)}
                        /> <br></br>
                        Name: 
                        <input
                            type="addbuildingtext"
                            ref={ (value) => {this.nameValue = value} }
                            placeholder="Input name..."
                            onChange={this.valuesUpdate.bind(this)}
                        /><br></br>
                        Latitude: 
                        <input
                            type="addbuildingtext"
                            ref={ (value) => {this.latValue = value} }
                            placeholder="Input latitude..."
                            onChange={this.valuesUpdate.bind(this)}
                        /><br></br>
                        Longitude: 
                        <input
                            type="addbuildingtext"
                            ref={ (value) => {this.longValue = value} }
                            placeholder="Input longitude..."
                            onChange={this.valuesUpdate.bind(this)}
                        /><br></br>
                        Address: 
                        <input
                            type="addbuildingtext"
                            ref={ (value) => {this.addrValue = value} }
                            placeholder="Input address..."
                            onChange={this.valuesUpdate.bind(this)}
                        /><br></br>
                        <input
                            type="button"
                            value="Submit"
                            onClick={this.addBuildingUpdate.bind(this)}
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
}


export default AddBuilding;