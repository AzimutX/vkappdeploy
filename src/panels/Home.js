import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';
import './Persik.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Математика. Все формулы.</PanelHeader>


		<Div className ='cent'>
		<Div className ='ct'>
		  <Button size="xl" level="2" onClick={go} data-to="umnoxenie">
				Формулы сокращенного умножения
					
		  </Button>
        </Div>
        </Div>

        <Div className ='cent'>
		<Div className ='ct'>
		  <Button size="xl" level="2" onClick={go} data-to="kvadr">
				Квадратное уравнение
					
		  </Button>
        </Div>
        </Div>

        <Div className ='cent'>
		<Div className ='ct'>
		  <Button size="xl" level="2" onClick={go} data-to="step">
				Степени и корни
					
		  </Button>

		  </Div>
        </Div>

        <Div className ='cent'>
		<Div className ='ct'>
		  <Button size="xl" level="2" onClick={go} data-to="progress">
					Прогрессии
					
		  </Button>
        </Div>
        </Div>

        <Div className ='cent'>
		<Div className ='ct'>
		  <Button size="xl" level="2" onClick={go} data-to="log">
				Логарифмы
					
		  </Button>
        </Div>
        </Div>


		<Div className ='cent'>
		<Div className ='ct'>
		  <Button size="xl" level="2" onClick={go} data-to="trig">
					Тригонометрия

		  </Button>
        </Div>
        </Div>

       {/* <Div className ='cent'>
		<Div className ='ct'>
		  <Button size="xl" level="2" onClick={go} data-to="trig">
					Планеметрия (Геометрия 2D)

		  </Button>
        </Div>
        </Div>

        <Div className ='cent'>
		<Div className ='ct'>
		  <Button size="xl" level="2" onClick={go} data-to="trig">
					Стереометрия (Геометрия 3D)

		  </Button>
        </Div>
        </Div>*/}

        <Div className ='cent'>
		<Div className ='ct'>
		  <Button size="xl" level="2" onClick={go} data-to="proiz">
					Производные
					
		  </Button>
        </Div>
        </Div>

        <Div className ='cent'>
		<Div className ='ct'>
		  <Button size="xl" level="2" onClick={go} data-to="inter">
					Интегралы
					
		  </Button>
        </Div>
        </Div>

		
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
