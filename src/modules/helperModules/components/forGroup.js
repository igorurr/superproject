import { checkUserGroup } from '../helpers/forGroup';
import { connect } from "react-redux";

const ForGroup = ({ children, group, userGroupId, inverse }) => {
  const checkRes = checkUserGroup(group, userGroupId);

  return ( (checkRes && !inverse) || (!checkRes && inverse) ) ? children : null;
}

const mapStateToProps = state => ({
  userGroupId: state.user.data.group.id
});

export default connect(
  mapStateToProps
)(ForGroup);