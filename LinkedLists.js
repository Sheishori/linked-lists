import Node from './Node.js';

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

	const toString = (node = head) => {
		if (node === null) return 'null';
		return `( ${node.value} ) -> ${toString(node.nextNode)}`;
	};

	return { prepend, append, toString };
};

const newList = LinkedList();
newList.append('bread');
newList.append('cheese');
console.log(newList.toString());
