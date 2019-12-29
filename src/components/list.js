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
        
    }

    toggleChange(event) {
        
    }

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
                        Todo List React - Ricardo
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
                // shape="roundedBottom"
                >
                   
                        <input type="text" value={this.state.inputValue} onChange={this.toggleChange}/>
                        <button type="button" onClick={this.addTask}>Add task</button>
                        {
                            this.state.tasks.map((task, index) => {
                                return (
                                    <p>{task}</p>
                                )
                            })
                        }
                   
                </Box>
            </Container>
        );
    }
}

export default List;
