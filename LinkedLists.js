import Node from './Node';

const LinkedList = () => {
	let head = null;

	const prepend = (value) => {
		head = Node(value, head);
	};

	const append = (value) => {
		if (head === null) prepend(value);
		else {
			let tmp = head;
			while (tmp.nextNode !== null) tmp = tmp.nextNode;
			tmp.nextNode = Node(value);
		}
	};

	return { prepend, append };
};
