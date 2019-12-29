"use-strict";

import React from 'react';
import {Container, Box, Heading} from 'gestalt';

class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            tasks: []
        };

        // vos bind etc...
        this.toggleChange = this.toggleChange.bind(this);
        this.addTask = this.addTask.bind(this);

    }
//Update du input au changement de sa valeur
    toggleChange(e) {
        this.setState({
            inputValue : e.target.value
        },() => console.log(this.state.inputValue))

    };
    addTask(e){
        e.preventDefault();
        this.setState({
            inputValue : '',
            tasks :[this.state.tasks, this.state.inputValue]
        }, ()=> console.log(this.state))
    };

    render() {
        return (
            <Container>
                 <Box
                 display="flex"

                 color="red"
                 height={70}
                 shape="rounded"
                 alignItems="center"
                 justifyContent="center"

                 >
                    <Heading color="white">
                        Todo List - Ricardo
                    </Heading>
                </Box>
                <Box
                display="flex"
                marginTop={12}
                height={70}
                shape="rounded"
                alignItems="center"
                justifyContent="center"
                color="blue"
                //shape="roundedBottom"
                >
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="0"
                        type="text"
                        value={this.state.inputValue} onChange={this.toggleChange}
                        />
                    <button
                        type="button"
                        onClick={this.addTask}
                        >
                        AJOUTER
                    </button>
                </form>
                        {
                            this.state.tasks.map((task, index) => {
                                return (
                                    <p key={index}>
                                        {task}| <button>x</button>
                                    </p>
                                )
                            })
                        }

                </Box>
            </Container>
        );
    }
}

export default List;
