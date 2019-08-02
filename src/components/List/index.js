import React from 'react';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

export default function Board() {
	return (
		<Container>
			<h2>Tarefas</h2>
			<button type="button">
				<MdAdd size={24} color="#fff" />
			</button>
			<ul>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</ul>
			<ul>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</ul>
			<ul>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</ul>
			<ul>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</ul>
		</Container>
	);
}
