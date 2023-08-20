const React = require('react');

class Index extends React.Component {
    render() {
        const { vegetables } = this.props;
        return (
            <div>
                <div>
                    <h1>Vegetables Index Page</h1>
                    <ul>
                        {vegetables.map((vegetable, index) => (
                            <li key={index}>
                                The{' '}
                                <a href={`/vegetables/${index}`}>
                                    {vegetable.name}
                                </a>{' '}
                                is {vegetable.color}.<br />
                                {vegetable.readyToEat
                                    ? 'It is ready to eat.'
                                    : 'It is not ready to eat.'}
                                <br />
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <nav>
                        <a href="/vegetables/new">Create a new vegetable</a>
                    </nav>
                </div>
            </div>
        );
    }
}

module.exports = Index;