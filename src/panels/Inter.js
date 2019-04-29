import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Group, Div, PanelHeader,HeaderButton, platform,IOS } from '@vkontakte/vkui';
import u1 from '../img/1000.jpg';
import u2 from '../img/1001.jpg';
import u3 from '../img/1002.jpg';
import u4 from '../img/1003.jpg';
import u5 from '../img/1004.png';




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
			Интегралы

		</PanelHeader>
		<Div className ='cent'>
		<Div className ='nad'>

		<Div className ='nad2'><b>Табличные первообрзные</b></Div>
		

		</Div>
        </Div>

		<Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img_big'><img className="div_img_big" src={u1} alt="Persik The Cat"/></Div>

		</Div>
        </Div>

        <Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img_big'><img className="div_img_big" src={u2} alt="Persik The Cat"/></Div>

		</Div>
        </Div>

        <Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img_big'><img className="div_img_big" src={u3} alt="Persik The Cat"/></Div>

		</Div>
        </Div>

        <Div className ='cent'>
		<Div className ='nad'>

		<Div className ='nad2'><b>Формула Ньютона-Лейбница</b></Div>
		

		</Div>
        </Div>

        <Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img_big'><img className="div_img_big" src={u5} alt="Persik The Cat"/></Div>

		</Div>
        </Div>

        <Div className ='cent'>
		<Div className ='nad'>

		<Div className ='nad2'><b>Свойства интегралов</b></Div>
		

		</Div>
        </Div>

        <Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img_big'><img className="div_img_big" src={u4} alt="Persik The Cat"/></Div>

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