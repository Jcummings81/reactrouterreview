import React from 'react'

class Form extends React.Component {
    initialState = { front: '', back: '' }
    state = {...this.initialState}

    handleChange = (e) => {
        const {name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        const { front, back } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="input-field col s6">
                    <input 
                    placeholder="Front of Card"
                    name="front"
                    value={front}
                    onChange={this.handleChange}
                    required
                    />
                      <input 
                    placeholder="Back of Card"
                    name="back"
                    value={back}
                    onChange={this.handleChange}
                    required
                    />
                </div>
                <button type="button" className="btn" onClick={this.cancel}>
                cancel
                </button>
                <button className="btn">
                submit
                </button>
            </form>

        )
    }
}

export default Form