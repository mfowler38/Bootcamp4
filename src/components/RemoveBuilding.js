import React from 'react';

class RemoveBuilding extends React.Component {

    updateRemove() {
        const val = this.remValue.value;
        this.props.updateRemove(val);
    }

    remBuilding() {
        this.props.remBuilding()
    }

    render() {
        return(
            <div>
                <br></br>
                Code: 
                <input
                    type="addbuildingtext"
                    ref={ (value) => {this.remValue = value} }
                    placeholder="Input code to remove..."
                    onChange={this.updateRemove.bind(this)}
                /> <br></br><br></br>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.remBuilding.bind(this)}
                />   
            </div>
        );
    }
}


export default RemoveBuilding;