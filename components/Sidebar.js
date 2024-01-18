import styles from "../app/page.module.css"
import Profile from "./Profile";
import { FluidForm, TextInput } from "@carbon/react";
const Sidebar = () => {
    return ( 
        <div>
            <h1>Support</h1>
            <Profile />
            <FluidForm>
                <TextInput type="text" labelText="search..." id="text-input-1" />
            </FluidForm>
        </div>
     );
}
 
export default Sidebar;