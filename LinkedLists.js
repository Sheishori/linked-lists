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

	const size = () => {
		if (head === null) return 0;
		let tmp = head;
		let total = 1;
		while (tmp.nextNode !== null) {
			tmp = tmp.nextNode;
			total += 1;
		}
		return total;
	};

	const toString = (node = head) => {
		if (node === null) return 'null';
		return `( ${node.value} ) -> ${toString(node.nextNode)}`;
	};

	return { prepend, append, size, toString };
};

const newList = LinkedList();
newList.append('bread');
newList.append('cheese');
console.log(newList.size());
console.log(newList.toString());
