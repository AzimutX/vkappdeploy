import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Group, Div, PanelHeader,HeaderButton, platform,IOS } from '@vkontakte/vkui';
import u1 from '../img/50.png';
import u2 from '../img/51.png';
import u3 from '../img/52.png';
import u4 from '../img/53.png';
import u5 from '../img/54.png';
import u6 from '../img/55.png';
import u7 from '../img/56.png';
import u8 from '../img/57.png';
import u9 from '../img/58.png';
import u10 from '../img/59.png';
import u11 from '../img/60.png';


import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Прогрессии

		</PanelHeader>
		<Div className ='cent'>
		<Div className ='nad'>

		<Div className ='nad2'><b>Арифметическая прогрессия</b></Div>
		

		</Div>
        </Div>

		<Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img'><img className="Persik1" src={u1} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u2} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u3} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u4} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u5} alt="Persik The Cat"/></Div>
	

		</Div>
        </Div>
        <Div className ='cent'>
		<Div className ='nad'>

		<Div className ='nad2'><b>Геометрическая прогрессия</b></Div>
		

		</Div>
        </Div>

        <Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img'><img className="Persik1" src={u6} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u7} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u8} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u9} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u10} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u11} alt="Persik The Cat"/></Div>

		</Div>
        </Div>

		<Group>
			<Div>
				<Button size="xl" level="2" onClick={props.go} data-to="home">
					Назад
				</Button>
			</Div>
		</Group>

	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;