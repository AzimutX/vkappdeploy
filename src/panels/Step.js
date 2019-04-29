import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Group, Div, PanelHeader,HeaderButton, platform,IOS } from '@vkontakte/vkui';
import u1 from '../img/21.png.bmp';
import u2 from '../img/22.png.bmp';
import u3 from '../img/23.png.bmp';
import u4 from '../img/24.png.bmp';
import u5 from '../img/25.png.bmp';
import u6 from '../img/26.png.bmp';
import u7 from '../img/27.png.bmp';
import u8 from '../img/28.png.bmp';
import u9 from '../img/29.png.bmp';
import u10 from '../img/30.png.bmp';
import u11 from '../img/31.png.bmp';
import u12 from '../img/32.png.bmp';
import u13 from '../img/33.png.bmp';
import u14 from '../img/34.png.bmp';


import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Step = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Степени и корни

		</PanelHeader>
		<Div className ='cent'>
		<Div className ='nad'>

		<Div className ='nad2'><b>Степени</b></Div>
		

		</Div>
        </Div>

		<Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img'><img className="Persik1" src={u1} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="log" src={u2} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u3} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u4} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="step" src={u5} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u6} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u7} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="log" src={u8} alt="Persik The Cat"/></Div>

		</Div>
        </Div>

        <Div className ='cent'>
		<Div className ='nad'>

		<Div className ='nad2'><b>Корни</b></Div>
		

		</Div>
        </Div>

		<Div className ='cent'>
		<Div className ='st'>

		<Div className='div_img'><img className="Persik1" src={u9} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u10} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u11} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u12} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u13} alt="Persik The Cat"/></Div>
		<Div className='div_img'><img className="Persik1" src={u14} alt="Persik The Cat"/></Div>

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

Step.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Step;