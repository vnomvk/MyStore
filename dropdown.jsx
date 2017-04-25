import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup,
	Popover,
	Checkbox,ButtonToolbar,OverlayTrigger,Button} from 'react-bootstrap';


const popoverClickRootClose = (
  <Popover id="deliveryGroup" title="Popover bottom">
    <FormGroup>
        <Checkbox>Remember me</Checkbox>
        <Checkbox>Remember me</Checkbox>
    </FormGroup>
  </Popover>
);


class DropDown extends React.Component {
   render() {
      return (
        <div>

        	<ButtonToolbar>
	    
			    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
			      <Button>Click w/rootClose</Button>
			    </OverlayTrigger>
  			</ButtonToolbar>
        </div>
      )
   }
}

export default DropDown;
