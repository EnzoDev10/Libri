import styled from 'styled-components';

import { CartBtn } from '../index';

const StyledHeader = styled.header`
	background-color: var(--dark-background);
`;

const StyledWrapper = styled.div`
	padding: 5px 25px;
	gap: 25px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledList = styled.ul`
	display: flex;
	list-style: none;
	gap: 40px;
	font-weight: 700;
`;

const Logo = styled.div`
	width: fit-content;
	padding: 10px;
	background-color: var(--dark-green);
	border-radius: 10px;
	color: #fff;
`;

const StyledLink = styled.a`
	text-decoration: none;
	color: #fff;
	display: inline-block;
`;

export const Header = () => {
	return (
		<StyledHeader>
			<StyledWrapper>
				<Logo>Logo</Logo>
				<nav>
					<StyledList>
						<li>
							<StyledLink href='#' className='hover'>
								Inicio
							</StyledLink>
						</li>
						<li>
							<StyledLink href='#' className='hover'>
								Productos
							</StyledLink>
						</li>
						<li>
							<StyledLink href='#' className='hover'>
								Contacto
							</StyledLink>
						</li>
					</StyledList>
				</nav>

				<CartBtn />
			</StyledWrapper>
		</StyledHeader>
	);
};
