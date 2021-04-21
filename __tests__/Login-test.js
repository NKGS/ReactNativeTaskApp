import React from 'react';
import renderer from 'react-test-renderer';
import Login from './../src/components/Login/Login';
import Register from '../src/components/Login/Register';

it('renders Registrer correctly', () => {
    beforeAll(() => { 
      jest.mock('@react-native-community/async-storage');
    })
    let register = renderer.create(<Register />).toJSON();
    expect(register).toMatchSnapshot();
  });

  it('renders Login correctly', () => {
    beforeAll(() => { 
      jest.mock('@react-native-community/async-storage');
    })
    let login = renderer.create(<Login />).toJSON();
    console.log(login)
    expect(login).toMatchSnapshot();
  });
  