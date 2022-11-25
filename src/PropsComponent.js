import React,{Component} from "react";
import PropTypes from 'prop-types';

function PropsComponent(pro){
        return(
            <div className="message-container">
            {/* {this.props.str} */}
            {pro.str}
            </div>
        )
    }


// class PropsComponent extends Component{
//         render(){
//             return(
//                 <div className="message-container">
//                 {this.props.str}

//                 </div>
//             )
//         }

// }

PropsComponent.propTypes={
    str: PropTypes.string
};
export default PropsComponent;