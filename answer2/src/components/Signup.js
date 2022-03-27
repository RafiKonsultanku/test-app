import React, { Component } from 'react'

export default class Signup extends Component {
    state = {
        step: 1,
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        levelEducation: '',
    }

    //Previous Step
    prevStep = () => {
        const { step } = this.step;
        this.setState({ step: step - 1 });
    }

    //Next Step
    nextStep = () => {
        const { step } = this.step;
        this.setState({ step: step + 1 });
    }

    //Handle Field Change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

  render() {
    return (
      <div>Signup</div>
    )
  }
}
