const React = require('react');

const Show = (props) => {
  return (
    <div>
      <h1>Show Vegetable Page</h1>
      <p>
        The {props.vegetable.name} is {props.vegetable.color}.
        {props.vegetable.readyToEat ? " It's ready to eat!" : " It's not ready to eat!"}
      </p>
      <a href="/vegetables">Back to Vegetables</a>
    </div>
  );
};

module.exports = Show;