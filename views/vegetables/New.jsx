const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Create a New Vegetable</h1>
                <form action="/vegetables" method="POST">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="color">Color:</label>
                        <input type="text" id="color" name="color" />
                    </div>
                    <div>
                        <label htmlFor="readyToEat">Ready to Eat:</label>
                        <input type="checkbox" id="readyToEat" name="readyToEat" />
                    </div>
                    <div>
                        <button type="submit">Create Vegetable</button>
                    </div>
                </form>
            </div>
        );
    }
}

module.exports = New;


// const React = require('react');
// const { Redirect } = require('react-router-dom');

// class New extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             redirectToVegetables: false,
//         };
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         // Code to handle form submission and create a new vegetable
//         // Once the vegetable is created, set the state to redirect the user to the '/vegetables' page
//         this.setState({ redirectToVegetables: true });
//     };

//     render() {
//         if (this.state.redirectToVegetables) {
//             return <Redirect to="/vegetables" />;
//         }

//         return (
//             <div>
//                 <h1>Create a New Vegetable</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" id="name" name="name" />
//                     </div>
//                     <div>
//                         <label htmlFor="color">Color:</label>
//                         <input type="text" id="color" name="color" />
//                     </div>
//                     <div>
//                         <label htmlFor="readyToEat">Ready to Eat:</label>
//                         <input type="checkbox" id="readyToEat" name="readyToEat" />
//                     </div>
//                     <div>
//                         <button type="submit">Create Vegetable</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

// module.exports = New;
