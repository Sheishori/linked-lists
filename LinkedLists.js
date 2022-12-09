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

	const toString = (node = _head) => {
		if (node === null) return 'null';
		return `( ${node.value} ) -> ${toString(node.nextNode)}`;
	};

	return { prepend, append, size, head, tail, toString };
};

const newList = LinkedList();
newList.append('cheese');
newList.append('bread');
newList.prepend('bread');
console.log('Size: ', newList.size());
console.log('Head: ', newList.head());
console.log('Tail: ', newList.tail());
console.log(newList.toString());
