import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	width: 168px;
	height: 55px;
	color: white;

	img {
		position: absolute;
		width: 21px;
		top: 18px;
		left: 73px;
	}

	.map_name {
		width: 100%;
		text-align: center;
		font-size: 0.9em;
	}

	.map_tier {
		width: 100%;
		text-align: center;
		position: absolute;
		font-size: 0.9em;
		top: 39px;
	}

	.toggle-completed {
		position: absolute;
		border-radius: 50%;
		top: 18px;
		left: 73px;
		width: 21px;
		height: 21px;
		z-index: 2;

		&:hover {
			cursor: pointer;
		}
	}

	.completed-map {
		border-radius: 50%;
		box-shadow: 0 0 0 1px green;
	}
`;
