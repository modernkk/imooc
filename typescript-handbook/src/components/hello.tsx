import * as React from 'react'

export interface HelloProps {
    compiler: string;
    framework: string;
}

// 下面是无状态的功能组件
// export const Hello = (props: HelloProps) => {
//     <h1>Hello from {props.compiler} and {props.framework}!</h1>
// }

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    }
}