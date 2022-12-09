import Node from './Node.js';

const LinkedList = () => {
	let _head = null;

	// adds a new node containing value to the start of the list
	const prepend = (value) => {
		_head = Node(value, _head);
	};

	// adds a new node containing value to the end of the list
	const append = (value) => {
		if (_head === null) prepend(value);
		else {
			let tmp = _head;
			while (tmp.nextNode !== null) tmp = tmp.nextNode;
			tmp.nextNode = Node(value);
		}
	};

	// returns the total number of nodes in the list
	const size = () => {
		if (_head === null) return 0;
		let tmp = _head;
		let total = 1;
		while (tmp.nextNode !== null) {
			tmp = tmp.nextNode;
			total += 1;
		}
		return total;
	};

	// returns the first node in the list
	const head = () => {
		if (_head === null) return 'List is empty';
		return _head;
	};

	// returns the last node in the list
	const tail = () => {
		if (_head === null) return 'List is empty';
		let tmp = _head;
		while (tmp.nextNode !== null) tmp = tmp.nextNode;
		return tmp;
	};

	// returns the node at the given index
	const at = (index) => {
		if (_head === null) return 'No node at given index';
		if (index === 0) return _head;
		let tmp = _head.nextNode;
		let nodeIndex = 1;
		while (tmp !== null) {
			if (nodeIndex === index) return tmp;
			tmp = tmp.nextNode;
			nodeIndex += 1;
		}
		return 'No node at given index';
	};

	// returns the node at the given index
	const pop = () => {
		if (_head === null) return 'Cannot delete null';
		let tmp = _head;
		while (tmp.nextNode.nextNode !== null) tmp = tmp.nextNode;
		const popped = tmp.nextNode;
		tmp.nextNode = null;
		return popped;
	};

	// returns true if the passed in value is in the list, otherwise returns false
	const contains = (value) => {
		if (_head === null) return false;
		if (_head.value === value) return true;
		let tmp = _head.nextNode;
		while (tmp !== null) {
			if (tmp.value === value) return true;
			tmp = tmp.nextNode;
		}
		return false;
	};

	// returns the index of the node containing value, or null if not found
	const find = (value) => {
		if (_head === null) return null;
		if (_head.value === value) return 0;
		let tmp = _head.nextNode;
		let nodeIndex = 1;
		while (tmp !== null) {
			if (tmp.value === value) return nodeIndex;
			tmp = tmp.nextNode;
			nodeIndex += 1;
		}
		return null;
	};

	// inserts a new node with the provided value at the given index
	const insertAt = (value, index) => {
		if (index === 0) prepend(value);
		else {
			if (_head === null) return console.log('List is empty');
			let tmp = _head;
			let nodeIndex = 1;
			while (nodeIndex !== index && tmp.nextNode !== null) {
				tmp = tmp.nextNode;
				nodeIndex += 1;
			}
			if (nodeIndex !== index) return console.log('Index beyond lists length');
			tmp.nextNode = Node(value, tmp.nextNode);
		}
	};

	// removes the node at the given index
	const removeAt = (index) => {
		if (_head === null) return console.log('List is empty');
		if (index === 0) _head = _head.nextNode;
		else {
			let tmp = _head;
			let nodeIndex = 1;
			while (nodeIndex !== index && tmp.nextNode.nextNode !== null) {
				tmp = tmp.nextNode;
				nodeIndex += 1;
			}
			if (nodeIndex !== index) return console.log('No node at given index');
			tmp.nextNode = tmp.nextNode.nextNode;
		}
	};

	// represents all LinkedList nodes as a string
	const toString = (node = _head) => {
		if (node === null) return 'null';
		return `( ${node.value} ) -> ${toString(node.nextNode)}`;
	};

	return {
		prepend,
		append,
		size,
		head,
		tail,
		at,
		pop,
		contains,
		find,
		insertAt,
		removeAt,
		toString,
	};
};

export default LinkedList;
