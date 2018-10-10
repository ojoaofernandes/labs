import { connect } from "react-redux";
import SessionTime from "../components/SessionTime";

const mapStateToProps = ({ sessionTime }) => ({ sessionTime });

export default connect(mapStateToProps)(SessionTime);
