import {Link} from "react-router-dom" 
import {FaQuestionCircle, FaTicketAlt} from "react-icons/fa"; 

function Home(){
    return(
        <>
            <section className="heading">
                <h1>How can we help you ?</h1>
                <p>Please choose from the options below</p>
            </section>
            <Link to="/new-ticket" className="btn btn-reverse btn-block">
                <FaQuestionCircle /> Create New Ticket
            </Link>
            <Link to="/new-ticket" className="btn btn-block">
                <FaTicketAlt /> My tickets
            </Link>
        </>
    )
}

export default Home; 