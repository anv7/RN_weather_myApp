import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

class WeatherProject extends Component{
    constructor(props){
        super(props)
        this.state = {zip:''}
    }

    _handleTextChange = event => {
        this.setState({
            zip: event.nativeEvent.text
        })
    }

    render(){
        return (
            <view>
                <Text>
                    You input { this.state.zip }
                </Text>
                <TextInput onSubmitEditing={this._handleTextChange} />
            </view>
        )
    }
}


export default WeatherProject
