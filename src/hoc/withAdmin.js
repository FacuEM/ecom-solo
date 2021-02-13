import { useAdmin } from "./../customHooks";

const WithAdminAuth = (props) => useAdmin(props) && props.children;

export default WithAdminAuth;
