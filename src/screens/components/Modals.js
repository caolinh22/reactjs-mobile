import React, { useState } from "react";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input
} from "reactstrap";
import { useDispatch } from 'react-redux';
import { renameProduct } from '../../actions/cartAction'

const Modals = ({ isOpen, toggle, curProduct }) => {

	const [name, setName] = useState();
	const dispatch = useDispatch();

	const onChangeInput = (e) => setName(e.target.value)

	const onSubmit = () => {
		dispatch(renameProduct(curProduct, name))
		toggle()
	}

	return (
		<div>
			<Modal isOpen={isOpen} toggle={toggle}>
				<ModalHeader toggle={toggle}>Change Name The Product</ModalHeader>
				<ModalBody>
					<Input
						id="name"
						placeholder="Insert new name for the product"
						value={name}
						onChange={onChangeInput}
					/>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle}>
						Cancel
          </Button>
					<Button color="primary"
						onClick={onSubmit}
					>Submit
          </Button>
				</ModalFooter>
			</Modal>
		</div >
	);
};

export default Modals;
