import Node from './Node.js';

const LinkedList = () => {
	let _head = null;

	const prepend = (value) => {
		_head = Node(value, _head);
	};

	const append = (value) => {
		if (_head === null) prepend(value);
		else {
			let tmp = _head;
			while (tmp.nextNode !== null) tmp = tmp.nextNode;
			tmp.nextNode = Node(value);
		}
	};

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

	const head = () => {
		if (_head === null) return 'List is empty';
		return _head;
	};

	const tail = () => {
		if (_head === null) return 'List is empty';
		let tmp = _head;
		while (tmp.nextNode !== null) tmp = tmp.nextNode;
		return tmp;
	};

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

	const pop = () => {
		if (_head === null) return 'Cannot delete null';
		let tmp = _head;
		while (tmp.nextNode.nextNode !== null) tmp = tmp.nextNode;
		const popped = tmp.nextNode;
		tmp.nextNode = null;
		return popped;
	};

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

	const find = (value) => {
		if (_head === null) return null;
		if (_head.value === value) return 0;
		let tmp = _head.nextNode;
		let index = 1;
		while (tmp !== null) {
			if (tmp.value === value) return index;
			tmp = tmp.nextNode;
			index += 1;
		}
		return null;
	};

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
		toString,
	};
};

export default LinkedList;
