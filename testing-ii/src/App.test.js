import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Dashboard from './components/Dashboard.js'



describe('App', () => {

  const app = render(<App />);
  const dashboardComponent = render(<Dashboard />);


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('ball button increments', () => {
      const ballButton = dashboardComponent.getByTitle(/ballbutton/i);
      fireEvent.click(ballButton);
      const ballCount = app.getByTitle('ballCount');
      expect(ballCount).toHaveTextContent('Balls: 1');
  })

  it('ball, and Strike buttons reset when ball reaches 4', () => {
      const ballButton = dashboardComponent.getByTitle(/ballbutton/i);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      const ballCount = app.getByTitle('ballCount');
      const strikeCount = app.getByTitle('strikeCount');
      expect(ballCount).toHaveTextContent('Balls: 0');
      expect(strikeCount).toHaveTextContent('Strikes: 0');
  })

  it('Strike button increments', () => {
      const strikeButton = dashboardComponent.getByTitle(/strikebutton/i);
      fireEvent.click(strikeButton);
      const strikeCount = app.getByTitle('strikeCount');
      expect(strikeCount).toHaveTextContent('Strikes: 1');
  })

  it('ball, and Strike buttons reset when Strike reaches 3', () => {
    const strikeButton = dashboardComponent.getByTitle(/strikebutton/i);
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    const ballCount = app.getByTitle('ballCount');
    const strikeCount = app.getByTitle('strikeCount');
    expect(ballCount).toHaveTextContent('Balls: 0');
    expect(strikeCount).toHaveTextContent('Strikes: 0');
  })

  it('Balls and Strikes reset when Hit is recorded', () => {
    const hitButton = dashboardComponent.getByTitle(/hitbutton/i)
    fireEvent.click(hitButton)

    const ballCount = app.getByTitle('ballCount');
    const strikeCount = app.getByTitle('strikeCount');
    expect(ballCount).toHaveTextContent('Balls: 0');
    expect(strikeCount).toHaveTextContent('Strikes: 0');
  })

  it('Foul increments the Strike number', () => {
    const foulButton = dashboardComponent.getByTitle(/foulbutton/i)
    fireEvent.click(foulButton)

    const strikeCount = app.getByTitle('strikeCount');
    expect(strikeCount).toHaveTextContent('Strikes: 1');
  })

  it('If Strike reaches 2, Foul can\'t increment it anymore', () => {
    const foulButton = dashboardComponent.getByTitle(/foulbutton/i)
    fireEvent.click(foulButton)
    fireEvent.click(foulButton)
    fireEvent.click(foulButton)
    fireEvent.click(foulButton)
    fireEvent.click(foulButton)

    const strikeCount = app.getByTitle('strikeCount');
    expect(strikeCount).toHaveTextContent('Strikes: 2');
  })
})

