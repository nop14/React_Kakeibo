import React, {PureComponent} from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, CartesianGrid, ResponsiveContainer} from 'recharts';
import './Graph.css'

class Graph extends PureComponent {
    constructor(props) {
        super(props);
        this.graph_id = Number(props.id);
        this.data = [
            {name:"key1", value:300},
            {name:"key2", value:200},
            {name:"key3", value:180},
            {name:"key4", value:300},
            {name:"key5", value:400},
            {name:"key6", value:400},
            {name:"key7", value:250}
        ]
    }
    render() {
        if(this.graph_id === 1){
            return(
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={600} height={300} data={this.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            )
        }else if(this.graph_id === 2){
            return(
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={this.data}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#5551d5"
                            label
                        />
                    </PieChart>
                </ResponsiveContainer>
            )
        }
        
    }
}

export default Graph;