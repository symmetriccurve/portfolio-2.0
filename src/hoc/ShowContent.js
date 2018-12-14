import React from 'react';

const ShowContents = (BaseComponent,apiToGetData) => {

    class ShowContentsHOC extends React.Component {
        state = {
            data: []
        }

        componentDidMount() {
            fetch(apiToGetData)
                .then((res) => res.json())
                .then((resJSON) => {
                    this.setState({
                        data: resJSON
                    })
                })
        }

        render() {
            return (
	            <BaseComponent data={ this.state.data } />
            )
        }
    }

    return ShowContentsHOC
}

export default ShowContents
