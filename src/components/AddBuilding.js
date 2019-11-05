import React from 'react';

class AddBuilding extends React.Component {

    addNameUpdate() {
        const val = this.myValue.value
        this.props.addNameUpdate(val)
    }

    render() {
        return(
            <div>
                <form>
                    <fieldset>
                        <legend>Add a Building</legend>
                        <label>Name: </label>
                        <input
                            type="addbuildingtext"
                            ref={ (value) => {this.myValue = value} }
                            placeholder="Type a name..."
                            onChange={this.addNameUpdate.bind(this)}
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
}


export default AddBuilding;