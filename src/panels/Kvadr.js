import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Group, Div, PanelHeader,HeaderButton, platform,IOS } from '@vkontakte/vkui';
import u1 from '../img/10.png';
import u2 from '../img/11.png.bmp';
import u3 from '../img/12.png.bmp';
import u4 from '../img/13.png.bmp';
import u5 from '../img/14.png.bmp';
import u6 from '../img/15.png.bmp';
import u7 from '../img/16.png.bmp';
import u8 from '../img/17.png.bmp';


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
			Квадратное уравнение

		</PanelHeader>
		<Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img'><img className="Persik1" src={u1} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u4} alt="Persik The Cat"/></Div>

		</Div>
        </Div>
        <Div className ='cent'>
		<Div className ='nad'>

		<Div className ='nad2'><b>Если D > 0</b></Div>
		

		</Div>
        </Div>
        <Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img'><img className="Persik1" src={u5} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u2} alt="Persik The Cat"/></Div>

		</Div>
        </Div>

        <Div className ='cent'>
		<Div className ='st'>

        <Div className ='nad2'><b>Если D = 0</b></Div>

        </Div>
        </Div>
		
        <Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img'><img className="Persik1" src={u6} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u3} alt="Persik The Cat"/></Div>

		</Div>
        </Div>
        <Div className ='cent'>
		<Div className ='st'>

        <Div className ='nad2'><b>Если D &lt; 0 - Решений нет </b></Div>

        </Div>
        </Div>

        <Div className ='cent'>
		<Div className ='st'>

        <Div className ='nad2'><b>Теорема Виетта</b></Div>

        </Div>
        </Div>

        <Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img'><img className="Persik1" src={u7} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u8} alt="Persik The Cat"/></Div>

		</Div>
        </Div>



		<Group>
			<Div className='ct cent'>
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