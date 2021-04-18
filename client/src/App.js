import React, { Component } from 'react';
import styled from 'styled-components';

const FormPage = styled.div`
	display: list-item;
	list-style-type: none;
	margin-top: 20vh;
	height: 60vh;
	width: 50vh;
	font-size: 20px;
	margin-left: auto;
	margin-right: auto;
	/* border: 2px solid black; */
	/* border-radius: 10px; */
	text-align: center;
`;

const Heading = styled.div`
	font-family: 'nidus sans';
	font-size: 60px;
	color: #0095b7;
`;
const LinkBox = styled.div`
	font-family: 'nidus sans';
	font-size: 20px;
	margin-top: 4vh;
`;
const InputFields = styled.div`
	padding: 10px;
	margin-top: 2vh;
	color: #0095b7;
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			name: '',
		};
		this.SubmitForm = this.SubmitForm.bind(this);
	}
	SubmitForm() {
		fetch('/api/postdata', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: this.state.email,
				name: this.state.name,
			}),
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
				this.setState({
					email: '',
					name: '',
				});
			});
	}

	// const [email, setEmail] = useState('');
	// const [password,setPassword] =useState('');
	render() {
		return (
			<FormPage>
				<Heading>Form</Heading>

				<InputFields>
					Email:
					<br />
					<input
						type="text"
						placeholder="Input Email"
						onChange={(e) =>
							this.setState({ email: e.target.value })
						}
					/>
				</InputFields>

				<InputFields>
					Password:
					<br />
					<input
						type="text"
						placeholder="Input Name"
						onChange={(e) =>
							this.setState({ name: e.target.value })
						}
					/>
				</InputFields>

				<button onClick={this.SubmitForm}>Add</button>
			</FormPage>
		);
	}
}

export default App;
