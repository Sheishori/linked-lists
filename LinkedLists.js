import Node from './Node';

const LinkedList = () => {
	let head = null;

	const prepend = (value) => {
		head = Node(value, head);
	};

	return { prepend };
};
